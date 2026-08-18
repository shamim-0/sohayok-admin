import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CommentController::store
 * @see app/Http/Controllers/CommentController.php:59
 * @route '/student/class/store-comment'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/student/class/store-comment',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CommentController::store
 * @see app/Http/Controllers/CommentController.php:59
 * @route '/student/class/store-comment'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CommentController::store
 * @see app/Http/Controllers/CommentController.php:59
 * @route '/student/class/store-comment'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CommentController::store
 * @see app/Http/Controllers/CommentController.php:59
 * @route '/student/class/store-comment'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CommentController::store
 * @see app/Http/Controllers/CommentController.php:59
 * @route '/student/class/store-comment'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CommentController::store_reply
 * @see app/Http/Controllers/CommentController.php:115
 * @route '/student/class/store-comment-reply'
 */
export const store_reply = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store_reply.url(options),
    method: 'post',
})

store_reply.definition = {
    methods: ["post"],
    url: '/student/class/store-comment-reply',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CommentController::store_reply
 * @see app/Http/Controllers/CommentController.php:115
 * @route '/student/class/store-comment-reply'
 */
store_reply.url = (options?: RouteQueryOptions) => {
    return store_reply.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CommentController::store_reply
 * @see app/Http/Controllers/CommentController.php:115
 * @route '/student/class/store-comment-reply'
 */
store_reply.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store_reply.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CommentController::store_reply
 * @see app/Http/Controllers/CommentController.php:115
 * @route '/student/class/store-comment-reply'
 */
    const store_replyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store_reply.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CommentController::store_reply
 * @see app/Http/Controllers/CommentController.php:115
 * @route '/student/class/store-comment-reply'
 */
        store_replyForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store_reply.url(options),
            method: 'post',
        })
    
    store_reply.form = store_replyForm
/**
* @see \App\Http\Controllers\CommentController::index
 * @see app/Http/Controllers/CommentController.php:14
 * @route '/comments'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/comments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CommentController::index
 * @see app/Http/Controllers/CommentController.php:14
 * @route '/comments'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CommentController::index
 * @see app/Http/Controllers/CommentController.php:14
 * @route '/comments'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CommentController::index
 * @see app/Http/Controllers/CommentController.php:14
 * @route '/comments'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CommentController::index
 * @see app/Http/Controllers/CommentController.php:14
 * @route '/comments'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CommentController::index
 * @see app/Http/Controllers/CommentController.php:14
 * @route '/comments'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CommentController::index
 * @see app/Http/Controllers/CommentController.php:14
 * @route '/comments'
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
* @see \App\Http\Controllers\CommentController::destroy
 * @see app/Http/Controllers/CommentController.php:80
 * @route '/comment/{id}'
 */
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/comment/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CommentController::destroy
 * @see app/Http/Controllers/CommentController.php:80
 * @route '/comment/{id}'
 */
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CommentController::destroy
 * @see app/Http/Controllers/CommentController.php:80
 * @route '/comment/{id}'
 */
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CommentController::destroy
 * @see app/Http/Controllers/CommentController.php:80
 * @route '/comment/{id}'
 */
    const destroyForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CommentController::destroy
 * @see app/Http/Controllers/CommentController.php:80
 * @route '/comment/{id}'
 */
        destroyForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CommentController::destroy_reply
 * @see app/Http/Controllers/CommentController.php:99
 * @route '/reply/{id}'
 */
export const destroy_reply = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy_reply.url(args, options),
    method: 'delete',
})

destroy_reply.definition = {
    methods: ["delete"],
    url: '/reply/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CommentController::destroy_reply
 * @see app/Http/Controllers/CommentController.php:99
 * @route '/reply/{id}'
 */
destroy_reply.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return destroy_reply.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CommentController::destroy_reply
 * @see app/Http/Controllers/CommentController.php:99
 * @route '/reply/{id}'
 */
destroy_reply.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy_reply.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CommentController::destroy_reply
 * @see app/Http/Controllers/CommentController.php:99
 * @route '/reply/{id}'
 */
    const destroy_replyForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy_reply.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CommentController::destroy_reply
 * @see app/Http/Controllers/CommentController.php:99
 * @route '/reply/{id}'
 */
        destroy_replyForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy_reply.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy_reply.form = destroy_replyForm
const CommentController = { store, store_reply, index, destroy, destroy_reply }

export default CommentController