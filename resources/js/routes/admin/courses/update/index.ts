import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CourseController::enrolled
 * @see app/Http/Controllers/CourseController.php:95
 * @route '/admin/courses/update/enrolled/{course}'
 */
export const enrolled = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enrolled.url(args, options),
    method: 'post',
})

enrolled.definition = {
    methods: ["post"],
    url: '/admin/courses/update/enrolled/{course}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseController::enrolled
 * @see app/Http/Controllers/CourseController.php:95
 * @route '/admin/courses/update/enrolled/{course}'
 */
enrolled.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { course: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: typeof args.course === 'object'
                ? args.course.id
                : args.course,
                }

    return enrolled.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseController::enrolled
 * @see app/Http/Controllers/CourseController.php:95
 * @route '/admin/courses/update/enrolled/{course}'
 */
enrolled.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enrolled.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseController::enrolled
 * @see app/Http/Controllers/CourseController.php:95
 * @route '/admin/courses/update/enrolled/{course}'
 */
    const enrolledForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: enrolled.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseController::enrolled
 * @see app/Http/Controllers/CourseController.php:95
 * @route '/admin/courses/update/enrolled/{course}'
 */
        enrolledForm.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: enrolled.url(args, options),
            method: 'post',
        })
    
    enrolled.form = enrolledForm