import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\QuizQuestionController::question
 * @see app/Http/Controllers/QuizQuestionController.php:16
 * @route '/admin/courses/content/lesson/quiz-question/{course_id}/{chapter_id}/{lesson_id}'
 */
export const question = (args: { course_id: string | number, chapter_id: string | number, lesson_id: string | number } | [course_id: string | number, chapter_id: string | number, lesson_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: question.url(args, options),
    method: 'get',
})

question.definition = {
    methods: ["get","head"],
    url: '/admin/courses/content/lesson/quiz-question/{course_id}/{chapter_id}/{lesson_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QuizQuestionController::question
 * @see app/Http/Controllers/QuizQuestionController.php:16
 * @route '/admin/courses/content/lesson/quiz-question/{course_id}/{chapter_id}/{lesson_id}'
 */
question.url = (args: { course_id: string | number, chapter_id: string | number, lesson_id: string | number } | [course_id: string | number, chapter_id: string | number, lesson_id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    course_id: args[0],
                    chapter_id: args[1],
                    lesson_id: args[2],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course_id: args.course_id,
                                chapter_id: args.chapter_id,
                                lesson_id: args.lesson_id,
                }

    return question.definition.url
            .replace('{course_id}', parsedArgs.course_id.toString())
            .replace('{chapter_id}', parsedArgs.chapter_id.toString())
            .replace('{lesson_id}', parsedArgs.lesson_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuizQuestionController::question
 * @see app/Http/Controllers/QuizQuestionController.php:16
 * @route '/admin/courses/content/lesson/quiz-question/{course_id}/{chapter_id}/{lesson_id}'
 */
question.get = (args: { course_id: string | number, chapter_id: string | number, lesson_id: string | number } | [course_id: string | number, chapter_id: string | number, lesson_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: question.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\QuizQuestionController::question
 * @see app/Http/Controllers/QuizQuestionController.php:16
 * @route '/admin/courses/content/lesson/quiz-question/{course_id}/{chapter_id}/{lesson_id}'
 */
question.head = (args: { course_id: string | number, chapter_id: string | number, lesson_id: string | number } | [course_id: string | number, chapter_id: string | number, lesson_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: question.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\QuizQuestionController::question
 * @see app/Http/Controllers/QuizQuestionController.php:16
 * @route '/admin/courses/content/lesson/quiz-question/{course_id}/{chapter_id}/{lesson_id}'
 */
    const questionForm = (args: { course_id: string | number, chapter_id: string | number, lesson_id: string | number } | [course_id: string | number, chapter_id: string | number, lesson_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: question.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\QuizQuestionController::question
 * @see app/Http/Controllers/QuizQuestionController.php:16
 * @route '/admin/courses/content/lesson/quiz-question/{course_id}/{chapter_id}/{lesson_id}'
 */
        questionForm.get = (args: { course_id: string | number, chapter_id: string | number, lesson_id: string | number } | [course_id: string | number, chapter_id: string | number, lesson_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: question.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\QuizQuestionController::question
 * @see app/Http/Controllers/QuizQuestionController.php:16
 * @route '/admin/courses/content/lesson/quiz-question/{course_id}/{chapter_id}/{lesson_id}'
 */
        questionForm.head = (args: { course_id: string | number, chapter_id: string | number, lesson_id: string | number } | [course_id: string | number, chapter_id: string | number, lesson_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: question.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    question.form = questionForm
const quiz = {
    question: Object.assign(question, question),
}

export default quiz