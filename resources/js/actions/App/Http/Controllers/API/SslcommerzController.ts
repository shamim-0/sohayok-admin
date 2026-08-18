import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\API\SslcommerzController::init
 * @see app/Http/Controllers/API/SslcommerzController.php:21
 * @route '/api/enroll/sslcommerz-init'
 */
export const init = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: init.url(options),
    method: 'post',
})

init.definition = {
    methods: ["post"],
    url: '/api/enroll/sslcommerz-init',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\API\SslcommerzController::init
 * @see app/Http/Controllers/API/SslcommerzController.php:21
 * @route '/api/enroll/sslcommerz-init'
 */
init.url = (options?: RouteQueryOptions) => {
    return init.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\SslcommerzController::init
 * @see app/Http/Controllers/API/SslcommerzController.php:21
 * @route '/api/enroll/sslcommerz-init'
 */
init.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: init.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\API\SslcommerzController::init
 * @see app/Http/Controllers/API/SslcommerzController.php:21
 * @route '/api/enroll/sslcommerz-init'
 */
    const initForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: init.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\API\SslcommerzController::init
 * @see app/Http/Controllers/API/SslcommerzController.php:21
 * @route '/api/enroll/sslcommerz-init'
 */
        initForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: init.url(options),
            method: 'post',
        })
    
    init.form = initForm
/**
* @see \App\Http\Controllers\API\SslcommerzController::status
 * @see app/Http/Controllers/API/SslcommerzController.php:90
 * @route '/api/enroll/sslcommerz-status/{orderId}'
 */
export const status = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(args, options),
    method: 'get',
})

status.definition = {
    methods: ["get","head"],
    url: '/api/enroll/sslcommerz-status/{orderId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\SslcommerzController::status
 * @see app/Http/Controllers/API/SslcommerzController.php:90
 * @route '/api/enroll/sslcommerz-status/{orderId}'
 */
status.url = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { orderId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    orderId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        orderId: args.orderId,
                }

    return status.definition.url
            .replace('{orderId}', parsedArgs.orderId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\SslcommerzController::status
 * @see app/Http/Controllers/API/SslcommerzController.php:90
 * @route '/api/enroll/sslcommerz-status/{orderId}'
 */
status.get = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\SslcommerzController::status
 * @see app/Http/Controllers/API/SslcommerzController.php:90
 * @route '/api/enroll/sslcommerz-status/{orderId}'
 */
status.head = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: status.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\SslcommerzController::status
 * @see app/Http/Controllers/API/SslcommerzController.php:90
 * @route '/api/enroll/sslcommerz-status/{orderId}'
 */
    const statusForm = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: status.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\SslcommerzController::status
 * @see app/Http/Controllers/API/SslcommerzController.php:90
 * @route '/api/enroll/sslcommerz-status/{orderId}'
 */
        statusForm.get = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: status.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\SslcommerzController::status
 * @see app/Http/Controllers/API/SslcommerzController.php:90
 * @route '/api/enroll/sslcommerz-status/{orderId}'
 */
        statusForm.head = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: status.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    status.form = statusForm
const SslcommerzController = { init, status }

export default SslcommerzController