<?php

namespace App\Imports;

use App\Models\QuizQuestion;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class QuizQuestionsImport implements ToModel, WithHeadingRow
{
    protected $chapterId;
    protected $lessonId;

    public function __construct($chapterId, $lessonId)
    {
        $this->chapterId = $chapterId;
        $this->lessonId = $lessonId;
    }

    public function model(array $row)
    {
        return new QuizQuestion([
            'question' => $row['A'],
            'option_a' => $row['B'],
            'option_b' => $row['C'],
            'option_c' => $row['D'],
            'option_d' => $row['E'],
            'correct_answer' => $row['F'],
            'explain' => $row['G'] ?? null,
            'chapter_id' => $this->chapterId,
            'lesson_id' => $this->lessonId,
        ]);
    }


}