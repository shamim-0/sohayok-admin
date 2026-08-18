<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\QuizQuestion;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\QuizQuestionsImport;
use PhpOffice\PhpSpreadsheet\IOFactory;

class QuizQuestionController extends Controller
{
    public function index($course_id, $chapter_id, $lesson_id)
    {
        $course = Course::findOrFail($course_id);
        $chapter = Chapter::findOrFail($chapter_id);
        $lesson = Lesson::findOrFail($lesson_id);
        $questions = QuizQuestion::where('lesson_id', $lesson_id)
            ->orderBy('created_at', 'desc')
            ->get();

        return view('admin.courses.content.lesson.quiz', compact('course', 'chapter', 'lesson', 'questions'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'question' => 'required|string|max:1000',
            'option_a' => 'required|string|max:255',
            'option_b' => 'required|string|max:255',
            'option_c' => 'required|string|max:255',
            'option_d' => 'required|string|max:255',
            'correct_answer' => 'required|in:a,b,c,d',
            'explain' => 'nullable|string|max:1000',
            'chapter_id' => 'required|exists:chapters,id',
            'lesson_id' => 'required|exists:lessons,id',
        ]);

        QuizQuestion::create($request->all());

        return response()->json(['success' => true, 'message' => 'প্রশ্ন সফলভাবে যোগ করা হয়েছে']);
    }

    public function update(Request $request, $id)
    {
        $question = QuizQuestion::findOrFail($id);

        $request->validate([
            'question' => 'required|string|max:1000',
            'option_a' => 'required|string|max:255',
            'option_b' => 'required|string|max:255',
            'option_c' => 'required|string|max:255',
            'option_d' => 'required|string|max:255',
            'correct_answer' => 'required|in:a,b,c,d',
            'explain' => 'nullable|string|max:1000',
        ]);

        $question->update($request->all());

        return response()->json(['success' => true, 'message' => 'প্রশ্ন সফলভাবে আপডেট করা হয়েছে']);
    }

    public function destroy($id)
    {
        $question = QuizQuestion::findOrFail($id);
        $question->delete();

        return response()->json(['success' => true, 'message' => 'প্রশ্ন সফলভাবে ডিলিট করা হয়েছে']);
    }



    public function import(Request $request)
    {
        $request->validate([
            'excel_file' => 'required|file|mimes:csv,txt,xlsx|max:10240',
            'chapter_id' => 'required|exists:chapters,id',
            'lesson_id' => 'required|exists:lessons,id',
        ]);

        try {
            $path = $request->file('excel_file')->getRealPath();

            $spreadsheet = IOFactory::load($path);
            $data = $spreadsheet->getActiveSheet()->toArray(null, true, true, true);


            if (empty($data) || count($data) <= 1) {
                dd('Excel file seems empty or missing data.', $data);
            }

         
            foreach (array_slice($data, 1) as $row) {
                $question = QuizQuestion::create([
                    'chapter_id' => $request->chapter_id,
                    'lesson_id' => $request->lesson_id,
                    'question' => $row['A'],
                    'option_a' => $row['B'],
                    'option_b' => $row['C'],
                    'option_c' => $row['D'],
                    'option_d' => $row['E'],
                    'correct_answer' => $row['F'],
                    'explain' => $row['G'] ?? null,
                ]);

                if (!$question) {
                    dd('Failed to save row:', $row);
                }
            }

            return response()->json([
                'success' => true,
                'message' => 'প্রশ্ন সফলভাবে ইমপোর্ট করা হয়েছে'
            ]);
        } catch (\Exception $e) {
            dd('Error:', $e->getMessage(), $e->getTraceAsString());
        }
    }


    private function processCSVFromContent($file, $chapterId, $lessonId)
    {
        // Get file content as string
        $content = file_get_contents($file->getPathname());

        if (empty($content)) {
            throw new \Exception('ফাইলটি খালি');
        }

        // Convert content to array of lines
        $lines = explode("\n", trim($content));

        if (count($lines) < 2) {
            throw new \Exception('ফাইলে পর্যাপ্ত ডাটা নেই');
        }

        $imported = 0;

        // Skip header row
        for ($i = 1; $i < count($lines); $i++) {
            $line = trim($lines[$i]);
            if (empty($line))
                continue;

            // Parse CSV line
            $row = str_getcsv($line);

            if (count($row) >= 6) {
                $questionData = [
                    'question' => $this->cleanString($row[0]),
                    'option_a' => $this->cleanString($row[1] ?? ''),
                    'option_b' => $this->cleanString($row[2] ?? ''),
                    'option_c' => $this->cleanString($row[3] ?? ''),
                    'option_d' => $this->cleanString($row[4] ?? ''),
                    'correct_answer' => $this->normalizeAnswer($row[5] ?? ''),
                    'explain' => isset($row[6]) ? $this->cleanString($row[6]) : null,
                    'chapter_id' => $chapterId,
                    'lesson_id' => $lessonId,
                ];

                if ($this->isValidQuestion($questionData)) {
                    QuizQuestion::create($questionData);
                    $imported++;
                }
            }
        }

        return $imported;
    }

    private function cleanString($string)
    {
        return trim($string);
    }

    private function isValidQuestion($questionData)
    {
        return !empty($questionData['question']) &&
            !empty($questionData['option_a']) &&
            in_array($questionData['correct_answer'], ['a', 'b', 'c', 'd']);
    }

    private function normalizeAnswer($answer)
    {
        $answer = strtolower(trim($answer));

        $bengaliMap = [
            'ক' => 'a',
            'খ' => 'b',
            'গ' => 'c',
            'ঘ' => 'd',
            '1' => 'a',
            '2' => 'b',
            '3' => 'c',
            '4' => 'd'
        ];

        return $bengaliMap[$answer] ?? $answer;
    }

}