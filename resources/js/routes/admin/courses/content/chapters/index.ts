import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\CourseContentController::reorder
 * @see app/Http/Controllers/CourseContentController.php:79
 * @route '/admin/courses/admin/courses/{course}/chapters/reorder'
 */
export const reorder = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/admin/courses/admin/courses/{course}/chapters/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseContentController::reorder
 * @see app/Http/Controllers/CourseContentController.php:79
 * @route '/admin/courses/admin/courses/{course}/chapters/reorder'
 */
reorder.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return reorder.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseContentController::reorder
 * @see app/Http/Controllers/CourseContentController.php:79
 * @route '/admin/courses/admin/courses/{course}/chapters/reorder'
 */
reorder.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseContentController::reorder
 * @see app/Http/Controllers/CourseContentController.php:79
 * @route '/admin/courses/admin/courses/{course}/chapters/reorder'
 */
    const reorderForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reorder.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseContentController::reorder
 * @see app/Http/Controllers/CourseContentController.php:79
 * @route '/admin/courses/admin/courses/{course}/chapters/reorder'
 */
        reorderForm.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reorder.url(args, options),
            method: 'post',
        })
    
    reorder.form = reorderForm
const chapters = {
    reorder: Object.assign(reorder, reorder),
}

export default chapters