import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CourseFeaturesController::features
 * @see app/Http/Controllers/CourseFeaturesController.php:14
 * @route '/admin/courses/{course}/features'
 */
export const features = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: features.url(args, options),
    method: 'get',
})

features.definition = {
    methods: ["get","head"],
    url: '/admin/courses/{course}/features',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CourseFeaturesController::features
 * @see app/Http/Controllers/CourseFeaturesController.php:14
 * @route '/admin/courses/{course}/features'
 */
features.url = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return features.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseFeaturesController::features
 * @see app/Http/Controllers/CourseFeaturesController.php:14
 * @route '/admin/courses/{course}/features'
 */
features.get = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: features.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CourseFeaturesController::features
 * @see app/Http/Controllers/CourseFeaturesController.php:14
 * @route '/admin/courses/{course}/features'
 */
features.head = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: features.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CourseFeaturesController::features
 * @see app/Http/Controllers/CourseFeaturesController.php:14
 * @route '/admin/courses/{course}/features'
 */
    const featuresForm = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: features.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CourseFeaturesController::features
 * @see app/Http/Controllers/CourseFeaturesController.php:14
 * @route '/admin/courses/{course}/features'
 */
        featuresForm.get = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: features.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CourseFeaturesController::features
 * @see app/Http/Controllers/CourseFeaturesController.php:14
 * @route '/admin/courses/{course}/features'
 */
        featuresForm.head = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: features.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    features.form = featuresForm
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
* @see \App\Http\Controllers\CourseFeaturesController::updateOrder
 * @see app/Http/Controllers/CourseFeaturesController.php:101
 * @route '/admin/courses/{course}/features/order'
 */
export const updateOrder = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateOrder.url(args, options),
    method: 'post',
})

updateOrder.definition = {
    methods: ["post"],
    url: '/admin/courses/{course}/features/order',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseFeaturesController::updateOrder
 * @see app/Http/Controllers/CourseFeaturesController.php:101
 * @route '/admin/courses/{course}/features/order'
 */
updateOrder.url = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updateOrder.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseFeaturesController::updateOrder
 * @see app/Http/Controllers/CourseFeaturesController.php:101
 * @route '/admin/courses/{course}/features/order'
 */
updateOrder.post = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateOrder.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseFeaturesController::updateOrder
 * @see app/Http/Controllers/CourseFeaturesController.php:101
 * @route '/admin/courses/{course}/features/order'
 */
    const updateOrderForm = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateOrder.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseFeaturesController::updateOrder
 * @see app/Http/Controllers/CourseFeaturesController.php:101
 * @route '/admin/courses/{course}/features/order'
 */
        updateOrderForm.post = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateOrder.url(args, options),
            method: 'post',
        })
    
    updateOrder.form = updateOrderForm
/**
* @see \App\Http\Controllers\CourseFeaturesController::toggleStatus
 * @see app/Http/Controllers/CourseFeaturesController.php:124
 * @route '/admin/courses/{course}/features/{feature}/toggle'
 */
export const toggleStatus = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/admin/courses/{course}/features/{feature}/toggle',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseFeaturesController::toggleStatus
 * @see app/Http/Controllers/CourseFeaturesController.php:124
 * @route '/admin/courses/{course}/features/{feature}/toggle'
 */
toggleStatus.url = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions) => {
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

    return toggleStatus.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{feature}', parsedArgs.feature.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseFeaturesController::toggleStatus
 * @see app/Http/Controllers/CourseFeaturesController.php:124
 * @route '/admin/courses/{course}/features/{feature}/toggle'
 */
toggleStatus.post = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseFeaturesController::toggleStatus
 * @see app/Http/Controllers/CourseFeaturesController.php:124
 * @route '/admin/courses/{course}/features/{feature}/toggle'
 */
    const toggleStatusForm = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseFeaturesController::toggleStatus
 * @see app/Http/Controllers/CourseFeaturesController.php:124
 * @route '/admin/courses/{course}/features/{feature}/toggle'
 */
        toggleStatusForm.post = (args: { course: string | number, feature: string | number } | [course: string | number, feature: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleStatus.url(args, options),
            method: 'post',
        })
    
    toggleStatus.form = toggleStatusForm
const CourseFeaturesController = { features, store, update, destroy, updateOrder, toggleStatus }

export default CourseFeaturesController