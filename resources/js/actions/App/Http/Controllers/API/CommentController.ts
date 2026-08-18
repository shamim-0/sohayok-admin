import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\API\CommentController::index
 * @see app/Http/Controllers/API/CommentController.php:11
 * @route '/api/comments'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/comments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\CommentController::index
 * @see app/Http/Controllers/API/CommentController.php:11
 * @route '/api/comments'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\CommentController::index
 * @see app/Http/Controllers/API/CommentController.php:11
 * @route '/api/comments'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\CommentController::index
 * @see app/Http/Controllers/API/CommentController.php:11
 * @route '/api/comments'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\CommentController::index
 * @see app/Http/Controllers/API/CommentController.php:11
 * @route '/api/comments'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\CommentController::index
 * @see app/Http/Controllers/API/CommentController.php:11
 * @route '/api/comments'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\CommentController::index
 * @see app/Http/Controllers/API/CommentController.php:11
 * @route '/api/comments'
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
* @see \App\Http\Controllers\API\CommentController::store
 * @see app/Http/Controllers/API/CommentController.php:55
 * @route '/api/student/class/store-comment'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/student/class/store-comment',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\API\CommentController::store
 * @see app/Http/Controllers/API/CommentController.php:55
 * @route '/api/student/class/store-comment'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\CommentController::store
 * @see app/Http/Controllers/API/CommentController.php:55
 * @route '/api/student/class/store-comment'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\API\CommentController::store
 * @see app/Http/Controllers/API/CommentController.php:55
 * @route '/api/student/class/store-comment'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\API\CommentController::store
 * @see app/Http/Controllers/API/CommentController.php:55
 * @route '/api/student/class/store-comment'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const CommentController = { index, store }

export default CommentController