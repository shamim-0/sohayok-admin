import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CourseInstructorController::add
 * @see app/Http/Controllers/CourseInstructorController.php:28
 * @route '/admin/courses/instructor/{course}/add'
 */
export const add = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: add.url(args, options),
    method: 'post',
})

add.definition = {
    methods: ["post"],
    url: '/admin/courses/instructor/{course}/add',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseInstructorController::add
 * @see app/Http/Controllers/CourseInstructorController.php:28
 * @route '/admin/courses/instructor/{course}/add'
 */
add.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return add.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseInstructorController::add
 * @see app/Http/Controllers/CourseInstructorController.php:28
 * @route '/admin/courses/instructor/{course}/add'
 */
add.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: add.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseInstructorController::add
 * @see app/Http/Controllers/CourseInstructorController.php:28
 * @route '/admin/courses/instructor/{course}/add'
 */
    const addForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: add.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseInstructorController::add
 * @see app/Http/Controllers/CourseInstructorController.php:28
 * @route '/admin/courses/instructor/{course}/add'
 */
        addForm.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: add.url(args, options),
            method: 'post',
        })
    
    add.form = addForm
/**
* @see \App\Http\Controllers\CourseInstructorController::remove
 * @see app/Http/Controllers/CourseInstructorController.php:56
 * @route '/admin/courses/instructor/{course}/remove/{instructor}'
 */
export const remove = (args: { course: string | number, instructor: string | number } | [course: string | number, instructor: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: remove.url(args, options),
    method: 'delete',
})

remove.definition = {
    methods: ["delete"],
    url: '/admin/courses/instructor/{course}/remove/{instructor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CourseInstructorController::remove
 * @see app/Http/Controllers/CourseInstructorController.php:56
 * @route '/admin/courses/instructor/{course}/remove/{instructor}'
 */
remove.url = (args: { course: string | number, instructor: string | number } | [course: string | number, instructor: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                    instructor: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: args.course,
                                instructor: args.instructor,
                }

    return remove.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{instructor}', parsedArgs.instructor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseInstructorController::remove
 * @see app/Http/Controllers/CourseInstructorController.php:56
 * @route '/admin/courses/instructor/{course}/remove/{instructor}'
 */
remove.delete = (args: { course: string | number, instructor: string | number } | [course: string | number, instructor: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: remove.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CourseInstructorController::remove
 * @see app/Http/Controllers/CourseInstructorController.php:56
 * @route '/admin/courses/instructor/{course}/remove/{instructor}'
 */
    const removeForm = (args: { course: string | number, instructor: string | number } | [course: string | number, instructor: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: remove.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseInstructorController::remove
 * @see app/Http/Controllers/CourseInstructorController.php:56
 * @route '/admin/courses/instructor/{course}/remove/{instructor}'
 */
        removeForm.delete = (args: { course: string | number, instructor: string | number } | [course: string | number, instructor: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: remove.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    remove.form = removeForm
/**
* @see \App\Http\Controllers\CourseInstructorController::updateOrder
 * @see app/Http/Controllers/CourseInstructorController.php:72
 * @route '/admin/courses/instructor/{course}/update-order'
 */
export const updateOrder = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateOrder.url(args, options),
    method: 'post',
})

updateOrder.definition = {
    methods: ["post"],
    url: '/admin/courses/instructor/{course}/update-order',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseInstructorController::updateOrder
 * @see app/Http/Controllers/CourseInstructorController.php:72
 * @route '/admin/courses/instructor/{course}/update-order'
 */
updateOrder.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return updateOrder.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseInstructorController::updateOrder
 * @see app/Http/Controllers/CourseInstructorController.php:72
 * @route '/admin/courses/instructor/{course}/update-order'
 */
updateOrder.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateOrder.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseInstructorController::updateOrder
 * @see app/Http/Controllers/CourseInstructorController.php:72
 * @route '/admin/courses/instructor/{course}/update-order'
 */
    const updateOrderForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateOrder.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseInstructorController::updateOrder
 * @see app/Http/Controllers/CourseInstructorController.php:72
 * @route '/admin/courses/instructor/{course}/update-order'
 */
        updateOrderForm.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateOrder.url(args, options),
            method: 'post',
        })
    
    updateOrder.form = updateOrderForm
const instructor = {
    add: Object.assign(add, add),
remove: Object.assign(remove, remove),
updateOrder: Object.assign(updateOrder, updateOrder),
}

export default instructor