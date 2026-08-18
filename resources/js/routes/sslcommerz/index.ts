import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\SSLsslcommerzController::process
 * @see app/Http/Controllers/SSLsslcommerzController.php:20
 * @route '/enroll/sslcommerz-init'
 */
export const process = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(options),
    method: 'post',
})

process.definition = {
    methods: ["post"],
    url: '/enroll/sslcommerz-init',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SSLsslcommerzController::process
 * @see app/Http/Controllers/SSLsslcommerzController.php:20
 * @route '/enroll/sslcommerz-init'
 */
process.url = (options?: RouteQueryOptions) => {
    return process.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SSLsslcommerzController::process
 * @see app/Http/Controllers/SSLsslcommerzController.php:20
 * @route '/enroll/sslcommerz-init'
 */
process.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SSLsslcommerzController::process
 * @see app/Http/Controllers/SSLsslcommerzController.php:20
 * @route '/enroll/sslcommerz-init'
 */
    const processForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: process.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SSLsslcommerzController::process
 * @see app/Http/Controllers/SSLsslcommerzController.php:20
 * @route '/enroll/sslcommerz-init'
 */
        processForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: process.url(options),
            method: 'post',
        })
    
    process.form = processForm
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
export const cancel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cancel.url(options),
    method: 'get',
})

cancel.definition = {
    methods: ["get","post","head"],
    url: '/payment/cancel',
} satisfies RouteDefinition<["get","post","head"]>

/**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/cancel'
 */
cancel.url = (options?: RouteQueryOptions) => {
    return cancel.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/cancel'
 */
cancel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cancel.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/cancel'
 */
cancel.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(options),
    method: 'post',
})
/**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/cancel'
 */
cancel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cancel.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/cancel'
 */
    const cancelForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: cancel.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/cancel'
 */
        cancelForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cancel.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/cancel'
 */
        cancelForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: cancel.url(options),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\SSLsslcommerzController::cancel
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/cancel'
 */
        cancelForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cancel.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    cancel.form = cancelForm
/**
* @see \App\Http\Controllers\SSLsslcommerzController::fail
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/fail'
 */
export const fail = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: fail.url(options),
    method: 'post',
})

fail.definition = {
    methods: ["post"],
    url: '/payment/fail',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SSLsslcommerzController::fail
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/fail'
 */
fail.url = (options?: RouteQueryOptions) => {
    return fail.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SSLsslcommerzController::fail
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/fail'
 */
fail.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: fail.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SSLsslcommerzController::fail
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/fail'
 */
    const failForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: fail.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SSLsslcommerzController::fail
 * @see app/Http/Controllers/SSLsslcommerzController.php:80
 * @route '/payment/fail'
 */
        failForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: fail.url(options),
            method: 'post',
        })
    
    fail.form = failForm
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
const sslcommerz = {
    process: Object.assign(process, process),
success: Object.assign(success, success),
cancel: Object.assign(cancel, cancel),
fail: Object.assign(fail, fail),
ipn: Object.assign(ipn, ipn),
}

export default sslcommerz