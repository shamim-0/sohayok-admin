import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\TopicController::index
 * @see app/Http/Controllers/TopicController.php:11
 * @route '/admin/panel/topic'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/panel/topic',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TopicController::index
 * @see app/Http/Controllers/TopicController.php:11
 * @route '/admin/panel/topic'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TopicController::index
 * @see app/Http/Controllers/TopicController.php:11
 * @route '/admin/panel/topic'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TopicController::index
 * @see app/Http/Controllers/TopicController.php:11
 * @route '/admin/panel/topic'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TopicController::index
 * @see app/Http/Controllers/TopicController.php:11
 * @route '/admin/panel/topic'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TopicController::index
 * @see app/Http/Controllers/TopicController.php:11
 * @route '/admin/panel/topic'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TopicController::index
 * @see app/Http/Controllers/TopicController.php:11
 * @route '/admin/panel/topic'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\TopicController::store
 * @see app/Http/Controllers/TopicController.php:23
 * @route '/admin/panel/topic'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/panel/topic',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TopicController::store
 * @see app/Http/Controllers/TopicController.php:23
 * @route '/admin/panel/topic'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TopicController::store
 * @see app/Http/Controllers/TopicController.php:23
 * @route '/admin/panel/topic'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TopicController::store
 * @see app/Http/Controllers/TopicController.php:23
 * @route '/admin/panel/topic'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TopicController::store
 * @see app/Http/Controllers/TopicController.php:23
 * @route '/admin/panel/topic'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\TopicController::update
 * @see app/Http/Controllers/TopicController.php:41
 * @route '/admin/panel/topic/{topic}'
 */
export const update = (args: { topic: number | { id: number } } | [topic: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/panel/topic/{topic}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\TopicController::update
 * @see app/Http/Controllers/TopicController.php:41
 * @route '/admin/panel/topic/{topic}'
 */
update.url = (args: { topic: number | { id: number } } | [topic: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { topic: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { topic: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    topic: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        topic: typeof args.topic === 'object'
                ? args.topic.id
                : args.topic,
                }

    return update.definition.url
            .replace('{topic}', parsedArgs.topic.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TopicController::update
 * @see app/Http/Controllers/TopicController.php:41
 * @route '/admin/panel/topic/{topic}'
 */
update.put = (args: { topic: number | { id: number } } | [topic: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\TopicController::update
 * @see app/Http/Controllers/TopicController.php:41
 * @route '/admin/panel/topic/{topic}'
 */
    const updateForm = (args: { topic: number | { id: number } } | [topic: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TopicController::update
 * @see app/Http/Controllers/TopicController.php:41
 * @route '/admin/panel/topic/{topic}'
 */
        updateForm.put = (args: { topic: number | { id: number } } | [topic: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\TopicController::destroy
 * @see app/Http/Controllers/TopicController.php:48
 * @route '/admin/panel/topic/{topic}'
 */
export const destroy = (args: { topic: number | { id: number } } | [topic: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/panel/topic/{topic}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TopicController::destroy
 * @see app/Http/Controllers/TopicController.php:48
 * @route '/admin/panel/topic/{topic}'
 */
destroy.url = (args: { topic: number | { id: number } } | [topic: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { topic: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { topic: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    topic: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        topic: typeof args.topic === 'object'
                ? args.topic.id
                : args.topic,
                }

    return destroy.definition.url
            .replace('{topic}', parsedArgs.topic.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TopicController::destroy
 * @see app/Http/Controllers/TopicController.php:48
 * @route '/admin/panel/topic/{topic}'
 */
destroy.delete = (args: { topic: number | { id: number } } | [topic: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\TopicController::destroy
 * @see app/Http/Controllers/TopicController.php:48
 * @route '/admin/panel/topic/{topic}'
 */
    const destroyForm = (args: { topic: number | { id: number } } | [topic: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TopicController::destroy
 * @see app/Http/Controllers/TopicController.php:48
 * @route '/admin/panel/topic/{topic}'
 */
        destroyForm.delete = (args: { topic: number | { id: number } } | [topic: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\TopicController::reorder
 * @see app/Http/Controllers/TopicController.php:54
 * @route '/admin/panel/topic/reorder'
 */
export const reorder = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/admin/panel/topic/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TopicController::reorder
 * @see app/Http/Controllers/TopicController.php:54
 * @route '/admin/panel/topic/reorder'
 */
reorder.url = (options?: RouteQueryOptions) => {
    return reorder.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TopicController::reorder
 * @see app/Http/Controllers/TopicController.php:54
 * @route '/admin/panel/topic/reorder'
 */
reorder.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TopicController::reorder
 * @see app/Http/Controllers/TopicController.php:54
 * @route '/admin/panel/topic/reorder'
 */
    const reorderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reorder.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TopicController::reorder
 * @see app/Http/Controllers/TopicController.php:54
 * @route '/admin/panel/topic/reorder'
 */
        reorderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reorder.url(options),
            method: 'post',
        })
    
    reorder.form = reorderForm
const topic = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
reorder: Object.assign(reorder, reorder),
}

export default topic