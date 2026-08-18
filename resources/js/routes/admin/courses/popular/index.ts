import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PopularCourseController::add
 * @see app/Http/Controllers/PopularCourseController.php:21
 * @route '/admin/panel/courses/popular/add'
 */
export const add = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: add.url(options),
    method: 'post',
})

add.definition = {
    methods: ["post"],
    url: '/admin/panel/courses/popular/add',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PopularCourseController::add
 * @see app/Http/Controllers/PopularCourseController.php:21
 * @route '/admin/panel/courses/popular/add'
 */
add.url = (options?: RouteQueryOptions) => {
    return add.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PopularCourseController::add
 * @see app/Http/Controllers/PopularCourseController.php:21
 * @route '/admin/panel/courses/popular/add'
 */
add.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: add.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PopularCourseController::add
 * @see app/Http/Controllers/PopularCourseController.php:21
 * @route '/admin/panel/courses/popular/add'
 */
    const addForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: add.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PopularCourseController::add
 * @see app/Http/Controllers/PopularCourseController.php:21
 * @route '/admin/panel/courses/popular/add'
 */
        addForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: add.url(options),
            method: 'post',
        })
    
    add.form = addForm
/**
* @see \App\Http\Controllers\PopularCourseController::remove
 * @see app/Http/Controllers/PopularCourseController.php:45
 * @route '/admin/panel/courses/popular/remove/{popularCourse}'
 */
export const remove = (args: { popularCourse: number | { id: number } } | [popularCourse: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: remove.url(args, options),
    method: 'delete',
})

remove.definition = {
    methods: ["delete"],
    url: '/admin/panel/courses/popular/remove/{popularCourse}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PopularCourseController::remove
 * @see app/Http/Controllers/PopularCourseController.php:45
 * @route '/admin/panel/courses/popular/remove/{popularCourse}'
 */
remove.url = (args: { popularCourse: number | { id: number } } | [popularCourse: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { popularCourse: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { popularCourse: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    popularCourse: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        popularCourse: typeof args.popularCourse === 'object'
                ? args.popularCourse.id
                : args.popularCourse,
                }

    return remove.definition.url
            .replace('{popularCourse}', parsedArgs.popularCourse.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PopularCourseController::remove
 * @see app/Http/Controllers/PopularCourseController.php:45
 * @route '/admin/panel/courses/popular/remove/{popularCourse}'
 */
remove.delete = (args: { popularCourse: number | { id: number } } | [popularCourse: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: remove.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PopularCourseController::remove
 * @see app/Http/Controllers/PopularCourseController.php:45
 * @route '/admin/panel/courses/popular/remove/{popularCourse}'
 */
    const removeForm = (args: { popularCourse: number | { id: number } } | [popularCourse: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: remove.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PopularCourseController::remove
 * @see app/Http/Controllers/PopularCourseController.php:45
 * @route '/admin/panel/courses/popular/remove/{popularCourse}'
 */
        removeForm.delete = (args: { popularCourse: number | { id: number } } | [popularCourse: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\PopularCourseController::updateOrder
 * @see app/Http/Controllers/PopularCourseController.php:56
 * @route '/admin/panel/courses/popular/update-order'
 */
export const updateOrder = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateOrder.url(options),
    method: 'post',
})

updateOrder.definition = {
    methods: ["post"],
    url: '/admin/panel/courses/popular/update-order',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PopularCourseController::updateOrder
 * @see app/Http/Controllers/PopularCourseController.php:56
 * @route '/admin/panel/courses/popular/update-order'
 */
updateOrder.url = (options?: RouteQueryOptions) => {
    return updateOrder.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PopularCourseController::updateOrder
 * @see app/Http/Controllers/PopularCourseController.php:56
 * @route '/admin/panel/courses/popular/update-order'
 */
updateOrder.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateOrder.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PopularCourseController::updateOrder
 * @see app/Http/Controllers/PopularCourseController.php:56
 * @route '/admin/panel/courses/popular/update-order'
 */
    const updateOrderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateOrder.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PopularCourseController::updateOrder
 * @see app/Http/Controllers/PopularCourseController.php:56
 * @route '/admin/panel/courses/popular/update-order'
 */
        updateOrderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateOrder.url(options),
            method: 'post',
        })
    
    updateOrder.form = updateOrderForm
const popular = {
    add: Object.assign(add, add),
remove: Object.assign(remove, remove),
updateOrder: Object.assign(updateOrder, updateOrder),
}

export default popular