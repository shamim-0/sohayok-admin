import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\HomeController::request
 * @see app/Http/Controllers/HomeController.php:87
 * @route '/account-delete-request'
 */
export const request = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: request.url(options),
    method: 'get',
})

request.definition = {
    methods: ["get","head"],
    url: '/account-delete-request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::request
 * @see app/Http/Controllers/HomeController.php:87
 * @route '/account-delete-request'
 */
request.url = (options?: RouteQueryOptions) => {
    return request.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::request
 * @see app/Http/Controllers/HomeController.php:87
 * @route '/account-delete-request'
 */
request.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: request.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::request
 * @see app/Http/Controllers/HomeController.php:87
 * @route '/account-delete-request'
 */
request.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: request.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::request
 * @see app/Http/Controllers/HomeController.php:87
 * @route '/account-delete-request'
 */
    const requestForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: request.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::request
 * @see app/Http/Controllers/HomeController.php:87
 * @route '/account-delete-request'
 */
        requestForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: request.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::request
 * @see app/Http/Controllers/HomeController.php:87
 * @route '/account-delete-request'
 */
        requestForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: request.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    request.form = requestForm
const deleteMethod = {
    request: Object.assign(request, request),
}

export default deleteMethod