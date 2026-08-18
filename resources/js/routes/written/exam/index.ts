import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
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
const exam = {
    submit: Object.assign(submit, submit),
}

export default exam