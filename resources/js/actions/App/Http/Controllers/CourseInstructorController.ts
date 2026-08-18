import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CourseInstructorController::instructor
 * @see app/Http/Controllers/CourseInstructorController.php:12
 * @route '/admin/courses/instructor/{course}'
 */
export const instructor = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: instructor.url(args, options),
    method: 'get',
})

instructor.definition = {
    methods: ["get","head"],
    url: '/admin/courses/instructor/{course}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CourseInstructorController::instructor
 * @see app/Http/Controllers/CourseInstructorController.php:12
 * @route '/admin/courses/instructor/{course}'
 */
instructor.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return instructor.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseInstructorController::instructor
 * @see app/Http/Controllers/CourseInstructorController.php:12
 * @route '/admin/courses/instructor/{course}'
 */
instructor.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: instructor.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CourseInstructorController::instructor
 * @see app/Http/Controllers/CourseInstructorController.php:12
 * @route '/admin/courses/instructor/{course}'
 */
instructor.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: instructor.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CourseInstructorController::instructor
 * @see app/Http/Controllers/CourseInstructorController.php:12
 * @route '/admin/courses/instructor/{course}'
 */
    const instructorForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: instructor.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CourseInstructorController::instructor
 * @see app/Http/Controllers/CourseInstructorController.php:12
 * @route '/admin/courses/instructor/{course}'
 */
        instructorForm.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: instructor.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CourseInstructorController::instructor
 * @see app/Http/Controllers/CourseInstructorController.php:12
 * @route '/admin/courses/instructor/{course}'
 */
        instructorForm.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: instructor.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    instructor.form = instructorForm
/**
* @see \App\Http\Controllers\CourseInstructorController::addInstructor
 * @see app/Http/Controllers/CourseInstructorController.php:28
 * @route '/admin/courses/instructor/{course}/add'
 */
export const addInstructor = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addInstructor.url(args, options),
    method: 'post',
})

addInstructor.definition = {
    methods: ["post"],
    url: '/admin/courses/instructor/{course}/add',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseInstructorController::addInstructor
 * @see app/Http/Controllers/CourseInstructorController.php:28
 * @route '/admin/courses/instructor/{course}/add'
 */
addInstructor.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return addInstructor.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseInstructorController::addInstructor
 * @see app/Http/Controllers/CourseInstructorController.php:28
 * @route '/admin/courses/instructor/{course}/add'
 */
addInstructor.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addInstructor.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseInstructorController::addInstructor
 * @see app/Http/Controllers/CourseInstructorController.php:28
 * @route '/admin/courses/instructor/{course}/add'
 */
    const addInstructorForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: addInstructor.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseInstructorController::addInstructor
 * @see app/Http/Controllers/CourseInstructorController.php:28
 * @route '/admin/courses/instructor/{course}/add'
 */
        addInstructorForm.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: addInstructor.url(args, options),
            method: 'post',
        })
    
    addInstructor.form = addInstructorForm
/**
* @see \App\Http\Controllers\CourseInstructorController::removeInstructor
 * @see app/Http/Controllers/CourseInstructorController.php:56
 * @route '/admin/courses/instructor/{course}/remove/{instructor}'
 */
export const removeInstructor = (args: { course: string | number, instructor: string | number } | [course: string | number, instructor: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: removeInstructor.url(args, options),
    method: 'delete',
})

removeInstructor.definition = {
    methods: ["delete"],
    url: '/admin/courses/instructor/{course}/remove/{instructor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CourseInstructorController::removeInstructor
 * @see app/Http/Controllers/CourseInstructorController.php:56
 * @route '/admin/courses/instructor/{course}/remove/{instructor}'
 */
removeInstructor.url = (args: { course: string | number, instructor: string | number } | [course: string | number, instructor: string | number ], options?: RouteQueryOptions) => {
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

    return removeInstructor.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{instructor}', parsedArgs.instructor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseInstructorController::removeInstructor
 * @see app/Http/Controllers/CourseInstructorController.php:56
 * @route '/admin/courses/instructor/{course}/remove/{instructor}'
 */
removeInstructor.delete = (args: { course: string | number, instructor: string | number } | [course: string | number, instructor: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: removeInstructor.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CourseInstructorController::removeInstructor
 * @see app/Http/Controllers/CourseInstructorController.php:56
 * @route '/admin/courses/instructor/{course}/remove/{instructor}'
 */
    const removeInstructorForm = (args: { course: string | number, instructor: string | number } | [course: string | number, instructor: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: removeInstructor.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseInstructorController::removeInstructor
 * @see app/Http/Controllers/CourseInstructorController.php:56
 * @route '/admin/courses/instructor/{course}/remove/{instructor}'
 */
        removeInstructorForm.delete = (args: { course: string | number, instructor: string | number } | [course: string | number, instructor: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: removeInstructor.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    removeInstructor.form = removeInstructorForm
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
const CourseInstructorController = { instructor, addInstructor, removeInstructor, updateOrder }

export default CourseInstructorController