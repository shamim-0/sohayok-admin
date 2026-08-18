<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Subject;
use App\Models\Topic;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\QuestionImport;

class QuestionController extends Controller
{
    public function index(Request $request)
    {
        $subjects = Subject::with('topics')->get();

        $questions = collect(); // empty collection initially

        if ($request->subject_id || $request->topic_id) {
            $query = Question::with(['subject', 'topic'])->latest();

            if ($request->subject_id) {
                $query->where('subject_id', $request->subject_id);
            }

            if ($request->topic_id) {
                $query->where('topic_id', $request->topic_id);
            }

            $questions = $query->paginate(10)->withQueryString(); // paginate
        }

        return view('admin.question-bank.view', compact('subjects', 'questions'));
    }


    public function store(Request $request)
    {
        $request->validate([
            'subject_id' => 'required',
            'topic_id' => 'required',
            'question' => 'required',
            'option_a' => 'required',
            'option_b' => 'required',
            'option_c' => 'required',
            'option_d' => 'required',
            'correct_answer' => 'required',
        ]);

        Question::create($request->all());
        return back()->with('success', 'প্রশ্ন সংরক্ষণ করা হয়েছে।');
    }

    public function import(Request $request)
    {
        $request->validate([
            'subject_id' => 'required',
            'topic_id' => 'required',
            'file' => 'required|mimes:xlsx,csv'
        ]);

        $path = $request->file('file')->getRealPath();
        $data = \PhpOffice\PhpSpreadsheet\IOFactory::load($path)->getActiveSheet()->toArray(null, true, true, true);

        // skip header row
        foreach (array_slice($data, 1) as $row) {
            Question::create([
                'subject_id' => $request->subject_id,
                'topic_id' => $request->topic_id,
                'question' => $row['A'],
                'option_a' => $row['B'],
                'option_b' => $row['C'],
                'option_c' => $row['D'],
                'option_d' => $row['E'],
                'correct_answer' => $row['F'],
                'explain' => $row['G'] ?? null,
            ]);
        }

        return back()->with('success', 'Excel থেকে প্রশ্ন ইমপোর্ট সম্পন্ন হয়েছে!');
    }

    public function update(Request $request, $id)
    {
        $question = Question::findOrFail($id);
        $question->update($request->all());

        return back()->with('success', 'প্রশ্ন আপডেট সম্পন্ন!');
    }

    public function destroy($id)
    {
        Question::findOrFail($id)->delete();
        return back()->with('success', 'প্রশ্ন মুছে ফেলা হয়েছে।');
    }


    public function add()
    {
        $subjects = Subject::with('topics')->get();
        return view('admin.question-bank.add', compact('subjects'));
    }

    public function importPage()
    {
        $subjects = Subject::with('topics')->get();
        return view('admin.question-bank.import', compact('subjects'));
    }

}
