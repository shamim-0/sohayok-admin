<?php

namespace App\Imports;

use App\Models\Question;
use App\Models\Subject;
use App\Models\Topic;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class QuestionImport implements ToModel, WithHeadingRow
{
    public function model(array $row)
    {

        $subject = Subject::where('name', $row['subject'])->first();
        $topic = Topic::where('name', $row['topic'])
                      ->where('subject_id', $subject?->id)
                      ->first();

        if (!$subject || !$topic) return null;

        return new Question([
            'subject_id' => $subject->id,
            'topic_id' => $topic->id,
            'question' => $row['question'],
            'option_a' => $row['option_a'],
            'option_b' => $row['option_b'],
            'option_c' => $row['option_c'],
            'option_d' => $row['option_d'],
            'correct_answer' => strtoupper($row['correct_answer']),
            'explain' => $row['explain'] ?? null,
        ]);
    }
}
