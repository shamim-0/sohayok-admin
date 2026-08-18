import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\FooterContentController::index
 * @see app/Http/Controllers/FooterContentController.php:11
 * @route '/admin/panel/footer-content'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/panel/footer-content',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FooterContentController::index
 * @see app/Http/Controllers/FooterContentController.php:11
 * @route '/admin/panel/footer-content'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FooterContentController::index
 * @see app/Http/Controllers/FooterContentController.php:11
 * @route '/admin/panel/footer-content'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FooterContentController::index
 * @see app/Http/Controllers/FooterContentController.php:11
 * @route '/admin/panel/footer-content'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\FooterContentController::index
 * @see app/Http/Controllers/FooterContentController.php:11
 * @route '/admin/panel/footer-content'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\FooterContentController::index
 * @see app/Http/Controllers/FooterContentController.php:11
 * @route '/admin/panel/footer-content'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\FooterContentController::index
 * @see app/Http/Controllers/FooterContentController.php:11
 * @route '/admin/panel/footer-content'
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
* @see \App\Http\Controllers\FooterContentController::store
 * @see app/Http/Controllers/FooterContentController.php:17
 * @route '/admin/panel/footer-content'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/panel/footer-content',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FooterContentController::store
 * @see app/Http/Controllers/FooterContentController.php:17
 * @route '/admin/panel/footer-content'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FooterContentController::store
 * @see app/Http/Controllers/FooterContentController.php:17
 * @route '/admin/panel/footer-content'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\FooterContentController::store
 * @see app/Http/Controllers/FooterContentController.php:17
 * @route '/admin/panel/footer-content'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\FooterContentController::store
 * @see app/Http/Controllers/FooterContentController.php:17
 * @route '/admin/panel/footer-content'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const FooterContentController = { index, store }

export default FooterContentController