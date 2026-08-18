import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\StudentWrittenExamController::exam
 * @see app/Http/Controllers/StudentWrittenExamController.php:12
 * @route '/student/exam/{id}'
 */
export const exam = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exam.url(args, options),
    method: 'get',
})

exam.definition = {
    methods: ["get","head"],
    url: '/student/exam/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentWrittenExamController::exam
 * @see app/Http/Controllers/StudentWrittenExamController.php:12
 * @route '/student/exam/{id}'
 */
exam.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return exam.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentWrittenExamController::exam
 * @see app/Http/Controllers/StudentWrittenExamController.php:12
 * @route '/student/exam/{id}'
 */
exam.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exam.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StudentWrittenExamController::exam
 * @see app/Http/Controllers/StudentWrittenExamController.php:12
 * @route '/student/exam/{id}'
 */
exam.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exam.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StudentWrittenExamController::exam
 * @see app/Http/Controllers/StudentWrittenExamController.php:12
 * @route '/student/exam/{id}'
 */
    const examForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exam.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StudentWrittenExamController::exam
 * @see app/Http/Controllers/StudentWrittenExamController.php:12
 * @route '/student/exam/{id}'
 */
        examForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exam.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StudentWrittenExamController::exam
 * @see app/Http/Controllers/StudentWrittenExamController.php:12
 * @route '/student/exam/{id}'
 */
        examForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exam.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    exam.form = examForm
/**
* @see \App\Http\Controllers\StudentWrittenExamController::show
 * @see app/Http/Controllers/StudentWrittenExamController.php:49
 * @route '/student/exam/show/{course_id}/{exam_id}'
 */
export const show = (args: { course_id: string | number, exam_id: string | number } | [course_id: string | number, exam_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/student/exam/show/{course_id}/{exam_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentWrittenExamController::show
 * @see app/Http/Controllers/StudentWrittenExamController.php:49
 * @route '/student/exam/show/{course_id}/{exam_id}'
 */
show.url = (args: { course_id: string | number, exam_id: string | number } | [course_id: string | number, exam_id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    course_id: args[0],
                    exam_id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course_id: args.course_id,
                                exam_id: args.exam_id,
                }

    return show.definition.url
            .replace('{course_id}', parsedArgs.course_id.toString())
            .replace('{exam_id}', parsedArgs.exam_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentWrittenExamController::show
 * @see app/Http/Controllers/StudentWrittenExamController.php:49
 * @route '/student/exam/show/{course_id}/{exam_id}'
 */
show.get = (args: { course_id: string | number, exam_id: string | number } | [course_id: string | number, exam_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StudentWrittenExamController::show
 * @see app/Http/Controllers/StudentWrittenExamController.php:49
 * @route '/student/exam/show/{course_id}/{exam_id}'
 */
show.head = (args: { course_id: string | number, exam_id: string | number } | [course_id: string | number, exam_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StudentWrittenExamController::show
 * @see app/Http/Controllers/StudentWrittenExamController.php:49
 * @route '/student/exam/show/{course_id}/{exam_id}'
 */
    const showForm = (args: { course_id: string | number, exam_id: string | number } | [course_id: string | number, exam_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StudentWrittenExamController::show
 * @see app/Http/Controllers/StudentWrittenExamController.php:49
 * @route '/student/exam/show/{course_id}/{exam_id}'
 */
        showForm.get = (args: { course_id: string | number, exam_id: string | number } | [course_id: string | number, exam_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StudentWrittenExamController::show
 * @see app/Http/Controllers/StudentWrittenExamController.php:49
 * @route '/student/exam/show/{course_id}/{exam_id}'
 */
        showForm.head = (args: { course_id: string | number, exam_id: string | number } | [course_id: string | number, exam_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\StudentWrittenExamController::submit
 * @see app/Http/Controllers/StudentWrittenExamController.php:73
 * @route '/student/written-exam/{course_id}/exam/{exam_id}/submit'
 */
export const submit = (args: { course_id: string | number, exam_id: string | number } | [course_id: string | number, exam_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/student/written-exam/{course_id}/exam/{exam_id}/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StudentWrittenExamController::submit
 * @see app/Http/Controllers/StudentWrittenExamController.php:73
 * @route '/student/written-exam/{course_id}/exam/{exam_id}/submit'
 */
submit.url = (args: { course_id: string | number, exam_id: string | number } | [course_id: string | number, exam_id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    course_id: args[0],
                    exam_id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course_id: args.course_id,
                                exam_id: args.exam_id,
                }

    return submit.definition.url
            .replace('{course_id}', parsedArgs.course_id.toString())
            .replace('{exam_id}', parsedArgs.exam_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentWrittenExamController::submit
 * @see app/Http/Controllers/StudentWrittenExamController.php:73
 * @route '/student/written-exam/{course_id}/exam/{exam_id}/submit'
 */
submit.post = (args: { course_id: string | number, exam_id: string | number } | [course_id: string | number, exam_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\StudentWrittenExamController::submit
 * @see app/Http/Controllers/StudentWrittenExamController.php:73
 * @route '/student/written-exam/{course_id}/exam/{exam_id}/submit'
 */
    const submitForm = (args: { course_id: string | number, exam_id: string | number } | [course_id: string | number, exam_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: submit.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StudentWrittenExamController::submit
 * @see app/Http/Controllers/StudentWrittenExamController.php:73
 * @route '/student/written-exam/{course_id}/exam/{exam_id}/submit'
 */
        submitForm.post = (args: { course_id: string | number, exam_id: string | number } | [course_id: string | number, exam_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: submit.url(args, options),
            method: 'post',
        })
    
    submit.form = submitForm
const StudentWrittenExamController = { exam, show, submit }

export default StudentWrittenExamController