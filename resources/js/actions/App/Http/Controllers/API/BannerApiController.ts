import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\API\BannerApiController::index
 * @see app/Http/Controllers/API/BannerApiController.php:12
 * @route '/api/banner'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/banner',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\BannerApiController::index
 * @see app/Http/Controllers/API/BannerApiController.php:12
 * @route '/api/banner'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\BannerApiController::index
 * @see app/Http/Controllers/API/BannerApiController.php:12
 * @route '/api/banner'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\BannerApiController::index
 * @see app/Http/Controllers/API/BannerApiController.php:12
 * @route '/api/banner'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\BannerApiController::index
 * @see app/Http/Controllers/API/BannerApiController.php:12
 * @route '/api/banner'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\BannerApiController::index
 * @see app/Http/Controllers/API/BannerApiController.php:12
 * @route '/api/banner'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\BannerApiController::index
 * @see app/Http/Controllers/API/BannerApiController.php:12
 * @route '/api/banner'
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
const BannerApiController = { index }

export default BannerApiController