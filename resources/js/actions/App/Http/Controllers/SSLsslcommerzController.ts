import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SSLsslcommerzController::proccess
 * @see app/Http/Controllers/SSLsslcommerzController.php:20
 * @route '/enroll/sslcommerz-init'
 */
export const proccess = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: proccess.url(options),
    method: 'post',
})

proccess.definition = {
    methods: ["post"],
    url: '/enroll/sslcommerz-init',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SSLsslcommerzController::proccess
 * @see app/Http/Controllers/SSLsslcommerzController.php:20
 * @route '/enroll/sslcommerz-init'
 */
proccess.url = (options?: RouteQueryOptions) => {
    return proccess.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SSLsslcommerzController::proccess
 * @see app/Http/Controllers/SSLsslcommerzController.php:20
 * @route '/enroll/sslcommerz-init'
 */
proccess.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: proccess.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SSLsslcommerzController::proccess
 * @see app/Http/Controllers/SSLsslcommerzController.php:20
 * @route '/enroll/sslcommerz-init'
 */
    const proccessForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: proccess.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SSLsslcommerzController::proccess
 * @see app/Http/Controllers/SSLsslcommerzController.php:20
 * @route '/enroll/sslcommerz-init'
 */
        proccessForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: proccess.url(options),
            method: 'post',
        })
    
    proccess.form = proccessForm
/**
* @see \App\Http\Controllers\SSLsslcommerzController::success
 * @see app/Http/Controllers/SSLsslcommerzController.php:71
 * @route '/payment/success'
 */
export const success = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: success.url(options),
    method: 'get',
})

success.definition = {
    methods: ["get","post","head"],
    url: '/payment/success',
} satisfies RouteDefinition<["get","post","head"]>

/**
* @see \App\Http\Controllers\SSLsslcommerzController::success
 * @see app/Http/Controllers/SSLsslcommerzController.php:71
 * @route '/payment/success'
 */
success.url = (options?: RouteQueryOptions) => {
    return success.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SSLsslcommerzController::success
 * @see app/Http/Controllers/SSLsslcommerzController.php:71
 * @route '/payment/success'
 */
success.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: success.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SSLsslcommerzController::success
 * @see app/Http/Controllers/SSLsslcommerzController.php:71
 * @route '/payment/success'
 */
success.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: success.url(options),
    method: 'post',
})
/**
* @see \App\Http\Controllers\SSLsslcommerzController::success
 * @see app/Http/Controllers/SSLsslcommerzController.php:71
 * @route '/payment/success'
 */
success.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: success.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SSLsslcommerzController::success
 * @see app/Http/Controllers/SSLsslcommerzController.php:71
 * @route '/payment/success'
 */
    const successForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: success.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SSLsslcommerzController::success
 * @see app/Http/Controllers/SSLsslcommerzController.php:71
 * @route '/payment/success'
 */
        successForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: success.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SSLsslcommerzController::success
 * @see app/Http/Controllers/SSLsslcommerzController.php:71
 * @route '/payment/success'
 */
        successForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: success.url(options),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\SSLsslcommerzController::success
 * @see app/Http/Controllers/SSLsslcommerzController.php:71
 * @route '/payment/success'
 */
        successForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: success.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    success.form = successForm
/**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/cancel'
 */
const cancelb6c551d83ab3e64a003b3cad90ea9002 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cancelb6c551d83ab3e64a003b3cad90ea9002.url(options),
    method: 'get',
})

cancelb6c551d83ab3e64a003b3cad90ea9002.definition = {
    methods: ["get","post","head"],
    url: '/payment/cancel',
} satisfies RouteDefinition<["get","post","head"]>

/**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/cancel'
 */
cancelb6c551d83ab3e64a003b3cad90ea9002.url = (options?: RouteQueryOptions) => {
    return cancelb6c551d83ab3e64a003b3cad90ea9002.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/cancel'
 */
cancelb6c551d83ab3e64a003b3cad90ea9002.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cancelb6c551d83ab3e64a003b3cad90ea9002.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/cancel'
 */
cancelb6c551d83ab3e64a003b3cad90ea9002.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancelb6c551d83ab3e64a003b3cad90ea9002.url(options),
    method: 'post',
})
/**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/cancel'
 */
cancelb6c551d83ab3e64a003b3cad90ea9002.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cancelb6c551d83ab3e64a003b3cad90ea9002.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/cancel'
 */
    const cancelb6c551d83ab3e64a003b3cad90ea9002Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: cancelb6c551d83ab3e64a003b3cad90ea9002.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/cancel'
 */
        cancelb6c551d83ab3e64a003b3cad90ea9002Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cancelb6c551d83ab3e64a003b3cad90ea9002.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/cancel'
 */
        cancelb6c551d83ab3e64a003b3cad90ea9002Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: cancelb6c551d83ab3e64a003b3cad90ea9002.url(options),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/cancel'
 */
        cancelb6c551d83ab3e64a003b3cad90ea9002Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cancelb6c551d83ab3e64a003b3cad90ea9002.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    cancelb6c551d83ab3e64a003b3cad90ea9002.form = cancelb6c551d83ab3e64a003b3cad90ea9002Form
    /**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/fail'
 */
const cancel9fb8db7706336fe75be6a81a8a0fcc65 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel9fb8db7706336fe75be6a81a8a0fcc65.url(options),
    method: 'post',
})

cancel9fb8db7706336fe75be6a81a8a0fcc65.definition = {
    methods: ["post"],
    url: '/payment/fail',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/fail'
 */
cancel9fb8db7706336fe75be6a81a8a0fcc65.url = (options?: RouteQueryOptions) => {
    return cancel9fb8db7706336fe75be6a81a8a0fcc65.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/fail'
 */
cancel9fb8db7706336fe75be6a81a8a0fcc65.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel9fb8db7706336fe75be6a81a8a0fcc65.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/fail'
 */
    const cancel9fb8db7706336fe75be6a81a8a0fcc65Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: cancel9fb8db7706336fe75be6a81a8a0fcc65.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/fail'
 */
        cancel9fb8db7706336fe75be6a81a8a0fcc65Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: cancel9fb8db7706336fe75be6a81a8a0fcc65.url(options),
            method: 'post',
        })
    
    cancel9fb8db7706336fe75be6a81a8a0fcc65.form = cancel9fb8db7706336fe75be6a81a8a0fcc65Form

export const cancel = {
    '/payment/cancel': cancelb6c551d83ab3e64a003b3cad90ea9002,
    '/payment/fail': cancel9fb8db7706336fe75be6a81a8a0fcc65,
}

/**
* @see \App\Http\Controllers\SSLsslcommerzController::ipn
 * @see app/Http/Controllers/SSLsslcommerzController.php:90
 * @route '/payment/ipn'
 */
export const ipn = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ipn.url(options),
    method: 'post',
})

ipn.definition = {
    methods: ["post"],
    url: '/payment/ipn',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SSLsslcommerzController::ipn
 * @see app/Http/Controllers/SSLsslcommerzController.php:90
 * @route '/payment/ipn'
 */
ipn.url = (options?: RouteQueryOptions) => {
    return ipn.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SSLsslcommerzController::ipn
 * @see app/Http/Controllers/SSLsslcommerzController.php:90
 * @route '/payment/ipn'
 */
ipn.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ipn.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SSLsslcommerzController::ipn
 * @see app/Http/Controllers/SSLsslcommerzController.php:90
 * @route '/payment/ipn'
 */
    const ipnForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: ipn.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SSLsslcommerzController::ipn
 * @see app/Http/Controllers/SSLsslcommerzController.php:90
 * @route '/payment/ipn'
 */
        ipnForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: ipn.url(options),
            method: 'post',
        })
    
    ipn.form = ipnForm
const SSLsslcommerzController = { proccess, success, cancel, ipn }

export default SSLsslcommerzController