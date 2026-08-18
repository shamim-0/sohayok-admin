import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\API\QuizExamController::start_quiz
 * @see app/Http/Controllers/API/QuizExamController.php:13
 * @route '/api/student/class/start-quiz/{lessonId}/{courseId}'
 */
export const start_quiz = (args: { lessonId: string | number, courseId: string | number } | [lessonId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start_quiz.url(args, options),
    method: 'get',
})

start_quiz.definition = {
    methods: ["get","head"],
    url: '/api/student/class/start-quiz/{lessonId}/{courseId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\QuizExamController::start_quiz
 * @see app/Http/Controllers/API/QuizExamController.php:13
 * @route '/api/student/class/start-quiz/{lessonId}/{courseId}'
 */
start_quiz.url = (args: { lessonId: string | number, courseId: string | number } | [lessonId: string | number, courseId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    lessonId: args[0],
                    courseId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        lessonId: args.lessonId,
                                courseId: args.courseId,
                }

    return start_quiz.definition.url
            .replace('{lessonId}', parsedArgs.lessonId.toString())
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\QuizExamController::start_quiz
 * @see app/Http/Controllers/API/QuizExamController.php:13
 * @route '/api/student/class/start-quiz/{lessonId}/{courseId}'
 */
start_quiz.get = (args: { lessonId: string | number, courseId: string | number } | [lessonId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start_quiz.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\QuizExamController::start_quiz
 * @see app/Http/Controllers/API/QuizExamController.php:13
 * @route '/api/student/class/start-quiz/{lessonId}/{courseId}'
 */
start_quiz.head = (args: { lessonId: string | number, courseId: string | number } | [lessonId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: start_quiz.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\QuizExamController::start_quiz
 * @see app/Http/Controllers/API/QuizExamController.php:13
 * @route '/api/student/class/start-quiz/{lessonId}/{courseId}'
 */
    const start_quizForm = (args: { lessonId: string | number, courseId: string | number } | [lessonId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: start_quiz.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\QuizExamController::start_quiz
 * @see app/Http/Controllers/API/QuizExamController.php:13
 * @route '/api/student/class/start-quiz/{lessonId}/{courseId}'
 */
        start_quizForm.get = (args: { lessonId: string | number, courseId: string | number } | [lessonId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: start_quiz.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\QuizExamController::start_quiz
 * @see app/Http/Controllers/API/QuizExamController.php:13
 * @route '/api/student/class/start-quiz/{lessonId}/{courseId}'
 */
        start_quizForm.head = (args: { lessonId: string | number, courseId: string | number } | [lessonId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: start_quiz.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    start_quiz.form = start_quizForm
/**
* @see \App\Http\Controllers\API\QuizExamController::submit_quiz
 * @see app/Http/Controllers/API/QuizExamController.php:26
 * @route '/api/student/class/submit-quiz'
 */
export const submit_quiz = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit_quiz.url(options),
    method: 'post',
})

submit_quiz.definition = {
    methods: ["post"],
    url: '/api/student/class/submit-quiz',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\API\QuizExamController::submit_quiz
 * @see app/Http/Controllers/API/QuizExamController.php:26
 * @route '/api/student/class/submit-quiz'
 */
submit_quiz.url = (options?: RouteQueryOptions) => {
    return submit_quiz.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\QuizExamController::submit_quiz
 * @see app/Http/Controllers/API/QuizExamController.php:26
 * @route '/api/student/class/submit-quiz'
 */
submit_quiz.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit_quiz.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\API\QuizExamController::submit_quiz
 * @see app/Http/Controllers/API/QuizExamController.php:26
 * @route '/api/student/class/submit-quiz'
 */
    const submit_quizForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: submit_quiz.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\API\QuizExamController::submit_quiz
 * @see app/Http/Controllers/API/QuizExamController.php:26
 * @route '/api/student/class/submit-quiz'
 */
        submit_quizForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: submit_quiz.url(options),
            method: 'post',
        })
    
    submit_quiz.form = submit_quizForm
/**
* @see \App\Http\Controllers\API\QuizExamController::get_user_results
 * @see app/Http/Controllers/API/QuizExamController.php:78
 * @route '/student/quiz/results/{lesson_id}/{user_id}'
 */
export const get_user_results = (args: { lesson_id: string | number, user_id: string | number } | [lesson_id: string | number, user_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: get_user_results.url(args, options),
    method: 'get',
})

get_user_results.definition = {
    methods: ["get","head"],
    url: '/student/quiz/results/{lesson_id}/{user_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\QuizExamController::get_user_results
 * @see app/Http/Controllers/API/QuizExamController.php:78
 * @route '/student/quiz/results/{lesson_id}/{user_id}'
 */
get_user_results.url = (args: { lesson_id: string | number, user_id: string | number } | [lesson_id: string | number, user_id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    lesson_id: args[0],
                    user_id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        lesson_id: args.lesson_id,
                                user_id: args.user_id,
                }

    return get_user_results.definition.url
            .replace('{lesson_id}', parsedArgs.lesson_id.toString())
            .replace('{user_id}', parsedArgs.user_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\QuizExamController::get_user_results
 * @see app/Http/Controllers/API/QuizExamController.php:78
 * @route '/student/quiz/results/{lesson_id}/{user_id}'
 */
get_user_results.get = (args: { lesson_id: string | number, user_id: string | number } | [lesson_id: string | number, user_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: get_user_results.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\QuizExamController::get_user_results
 * @see app/Http/Controllers/API/QuizExamController.php:78
 * @route '/student/quiz/results/{lesson_id}/{user_id}'
 */
get_user_results.head = (args: { lesson_id: string | number, user_id: string | number } | [lesson_id: string | number, user_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: get_user_results.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\QuizExamController::get_user_results
 * @see app/Http/Controllers/API/QuizExamController.php:78
 * @route '/student/quiz/results/{lesson_id}/{user_id}'
 */
    const get_user_resultsForm = (args: { lesson_id: string | number, user_id: string | number } | [lesson_id: string | number, user_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: get_user_results.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\QuizExamController::get_user_results
 * @see app/Http/Controllers/API/QuizExamController.php:78
 * @route '/student/quiz/results/{lesson_id}/{user_id}'
 */
        get_user_resultsForm.get = (args: { lesson_id: string | number, user_id: string | number } | [lesson_id: string | number, user_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: get_user_results.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\QuizExamController::get_user_results
 * @see app/Http/Controllers/API/QuizExamController.php:78
 * @route '/student/quiz/results/{lesson_id}/{user_id}'
 */
        get_user_resultsForm.head = (args: { lesson_id: string | number, user_id: string | number } | [lesson_id: string | number, user_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: get_user_results.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    get_user_results.form = get_user_resultsForm
const QuizExamController = { start_quiz, submit_quiz, get_user_results }

export default QuizExamController