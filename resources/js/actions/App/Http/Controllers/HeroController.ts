import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\HeroController::index
 * @see app/Http/Controllers/HeroController.php:10
 * @route '/admin/panel/hero'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/panel/hero',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HeroController::index
 * @see app/Http/Controllers/HeroController.php:10
 * @route '/admin/panel/hero'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroController::index
 * @see app/Http/Controllers/HeroController.php:10
 * @route '/admin/panel/hero'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HeroController::index
 * @see app/Http/Controllers/HeroController.php:10
 * @route '/admin/panel/hero'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HeroController::index
 * @see app/Http/Controllers/HeroController.php:10
 * @route '/admin/panel/hero'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HeroController::index
 * @see app/Http/Controllers/HeroController.php:10
 * @route '/admin/panel/hero'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HeroController::index
 * @see app/Http/Controllers/HeroController.php:10
 * @route '/admin/panel/hero'
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
* @see \App\Http\Controllers\HeroController::store
 * @see app/Http/Controllers/HeroController.php:16
 * @route '/admin/panel/hero'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/panel/hero',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HeroController::store
 * @see app/Http/Controllers/HeroController.php:16
 * @route '/admin/panel/hero'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroController::store
 * @see app/Http/Controllers/HeroController.php:16
 * @route '/admin/panel/hero'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\HeroController::store
 * @see app/Http/Controllers/HeroController.php:16
 * @route '/admin/panel/hero'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HeroController::store
 * @see app/Http/Controllers/HeroController.php:16
 * @route '/admin/panel/hero'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const HeroController = { index, store }

export default HeroController