import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CourseFeaturesController::store
 * @see app/Http/Controllers/CourseFeaturesController.php:21
 * @route '/admin/courses/{course}/features'
 */
export const store = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/courses/{course}/features',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseFeaturesController::store
 * @see app/Http/Controllers/CourseFeaturesController.php:21
 * @route '/admin/courses/{course}/features'
 */
store.url = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: args.course,
                }

    return store.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseFeaturesController::store
 * @see app/Http/Controllers/CourseFeaturesController.php:21
 * @route '/admin/courses/{course}/features'
 */
store.post = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseFeaturesController::store
 * @see app/Http/Controllers/CourseFeaturesController.php:21
 * @route '/admin/courses/{course}/features'
 */
    const storeForm = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseFeaturesController::store
 * @see app/Http/Controllers/CourseFeaturesController.php:21
 * @route '/admin/courses/{course}/features'
 */
        storeForm.post = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CourseFeaturesController::update
 * @see app/Http/Controllers/CourseFeaturesController.php:54
 * @route '/admin/courses/{course}/features/{feature}'
 */
export const update = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/courses/{course}/features/{feature}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\CourseFeaturesController::update
 * @see app/Http/Controllers/CourseFeaturesController.php:54
 * @route '/admin/courses/{course}/features/{feature}'
 */
update.url = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                    feature: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: args.course,
                                feature: args.feature,
                }

    return update.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{feature}', parsedArgs.feature.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseFeaturesController::update
 * @see app/Http/Controllers/CourseFeaturesController.php:54
 * @route '/admin/courses/{course}/features/{feature}'
 */
update.put = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\CourseFeaturesController::update
 * @see app/Http/Controllers/CourseFeaturesController.php:54
 * @route '/admin/courses/{course}/features/{feature}'
 */
    const updateForm = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseFeaturesController::update
 * @see app/Http/Controllers/CourseFeaturesController.php:54
 * @route '/admin/courses/{course}/features/{feature}'
 */
        updateForm.put = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\CourseFeaturesController::destroy
 * @see app/Http/Controllers/CourseFeaturesController.php:81
 * @route '/admin/courses/{course}/features/{feature}'
 */
export const destroy = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/courses/{course}/features/{feature}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CourseFeaturesController::destroy
 * @see app/Http/Controllers/CourseFeaturesController.php:81
 * @route '/admin/courses/{course}/features/{feature}'
 */
destroy.url = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                    feature: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: args.course,
                                feature: args.feature,
                }

    return destroy.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{feature}', parsedArgs.feature.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseFeaturesController::destroy
 * @see app/Http/Controllers/CourseFeaturesController.php:81
 * @route '/admin/courses/{course}/features/{feature}'
 */
destroy.delete = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CourseFeaturesController::destroy
 * @see app/Http/Controllers/CourseFeaturesController.php:81
 * @route '/admin/courses/{course}/features/{feature}'
 */
    const destroyForm = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseFeaturesController::destroy
 * @see app/Http/Controllers/CourseFeaturesController.php:81
 * @route '/admin/courses/{course}/features/{feature}'
 */
        destroyForm.delete = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\CourseFeaturesController::order
 * @see app/Http/Controllers/CourseFeaturesController.php:101
 * @route '/admin/courses/{course}/features/order'
 */
export const order = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: order.url(args, options),
    method: 'post',
})

order.definition = {
    methods: ["post"],
    url: '/admin/courses/{course}/features/order',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseFeaturesController::order
 * @see app/Http/Controllers/CourseFeaturesController.php:101
 * @route '/admin/courses/{course}/features/order'
 */
order.url = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: args.course,
                }

    return order.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseFeaturesController::order
 * @see app/Http/Controllers/CourseFeaturesController.php:101
 * @route '/admin/courses/{course}/features/order'
 */
order.post = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: order.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseFeaturesController::order
 * @see app/Http/Controllers/CourseFeaturesController.php:101
 * @route '/admin/courses/{course}/features/order'
 */
    const orderForm = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: order.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseFeaturesController::order
 * @see app/Http/Controllers/CourseFeaturesController.php:101
 * @route '/admin/courses/{course}/features/order'
 */
        orderForm.post = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: order.url(args, options),
            method: 'post',
        })
    
    order.form = orderForm
/**
* @see \App\Http\Controllers\CourseFeaturesController::toggle
 * @see app/Http/Controllers/CourseFeaturesController.php:124
 * @route '/admin/courses/{course}/features/{feature}/toggle'
 */
export const toggle = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggle.url(args, options),
    method: 'post',
})

toggle.definition = {
    methods: ["post"],
    url: '/admin/courses/{course}/features/{feature}/toggle',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseFeaturesController::toggle
 * @see app/Http/Controllers/CourseFeaturesController.php:124
 * @route '/admin/courses/{course}/features/{feature}/toggle'
 */
toggle.url = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                    feature: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: args.course,
                                feature: args.feature,
                }

    return toggle.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{feature}', parsedArgs.feature.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseFeaturesController::toggle
 * @see app/Http/Controllers/CourseFeaturesController.php:124
 * @route '/admin/courses/{course}/features/{feature}/toggle'
 */
toggle.post = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggle.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseFeaturesController::toggle
 * @see app/Http/Controllers/CourseFeaturesController.php:124
 * @route '/admin/courses/{course}/features/{feature}/toggle'
 */
    const toggleForm = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggle.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseFeaturesController::toggle
 * @see app/Http/Controllers/CourseFeaturesController.php:124
 * @route '/admin/courses/{course}/features/{feature}/toggle'
 */
        toggleForm.post = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggle.url(args, options),
            method: 'post',
        })
    
    toggle.form = toggleForm
const features = {
    store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
order: Object.assign(order, order),
toggle: Object.assign(toggle, toggle),
}

export default features