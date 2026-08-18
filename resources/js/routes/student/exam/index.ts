import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
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
const exam = {
    show: Object.assign(show, show),
}

export default exam