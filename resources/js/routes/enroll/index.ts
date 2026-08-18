import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\EnrollController::validateCoupon
 * @see app/Http/Controllers/EnrollController.php:47
 * @route '/enroll/validate-coupon'
 */
export const validateCoupon = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: validateCoupon.url(options),
    method: 'post',
})

validateCoupon.definition = {
    methods: ["post"],
    url: '/enroll/validate-coupon',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EnrollController::validateCoupon
 * @see app/Http/Controllers/EnrollController.php:47
 * @route '/enroll/validate-coupon'
 */
validateCoupon.url = (options?: RouteQueryOptions) => {
    return validateCoupon.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EnrollController::validateCoupon
 * @see app/Http/Controllers/EnrollController.php:47
 * @route '/enroll/validate-coupon'
 */
validateCoupon.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: validateCoupon.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EnrollController::validateCoupon
 * @see app/Http/Controllers/EnrollController.php:47
 * @route '/enroll/validate-coupon'
 */
    const validateCouponForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: validateCoupon.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EnrollController::validateCoupon
 * @see app/Http/Controllers/EnrollController.php:47
 * @route '/enroll/validate-coupon'
 */
        validateCouponForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: validateCoupon.url(options),
            method: 'post',
        })
    
    validateCoupon.form = validateCouponForm
/**
* @see \App\Http\Controllers\EnrollController::process
 * @see app/Http/Controllers/EnrollController.php:116
 * @route '/enroll/process'
 */
export const process = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(options),
    method: 'post',
})

process.definition = {
    methods: ["post"],
    url: '/enroll/process',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EnrollController::process
 * @see app/Http/Controllers/EnrollController.php:116
 * @route '/enroll/process'
 */
process.url = (options?: RouteQueryOptions) => {
    return process.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EnrollController::process
 * @see app/Http/Controllers/EnrollController.php:116
 * @route '/enroll/process'
 */
process.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EnrollController::process
 * @see app/Http/Controllers/EnrollController.php:116
 * @route '/enroll/process'
 */
    const processForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: process.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EnrollController::process
 * @see app/Http/Controllers/EnrollController.php:116
 * @route '/enroll/process'
 */
        processForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: process.url(options),
            method: 'post',
        })
    
    process.form = processForm
/**
* @see \App\Http\Controllers\EnrollController::success
 * @see app/Http/Controllers/EnrollController.php:175
 * @route '/enroll/success/{orderId}'
 */
export const success = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: success.url(args, options),
    method: 'get',
})

success.definition = {
    methods: ["get","head"],
    url: '/enroll/success/{orderId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EnrollController::success
 * @see app/Http/Controllers/EnrollController.php:175
 * @route '/enroll/success/{orderId}'
 */
success.url = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return success.definition.url
            .replace('{orderId}', parsedArgs.orderId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EnrollController::success
 * @see app/Http/Controllers/EnrollController.php:175
 * @route '/enroll/success/{orderId}'
 */
success.get = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: success.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EnrollController::success
 * @see app/Http/Controllers/EnrollController.php:175
 * @route '/enroll/success/{orderId}'
 */
success.head = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: success.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EnrollController::success
 * @see app/Http/Controllers/EnrollController.php:175
 * @route '/enroll/success/{orderId}'
 */
    const successForm = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: success.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EnrollController::success
 * @see app/Http/Controllers/EnrollController.php:175
 * @route '/enroll/success/{orderId}'
 */
        successForm.get = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: success.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EnrollController::success
 * @see app/Http/Controllers/EnrollController.php:175
 * @route '/enroll/success/{orderId}'
 */
        successForm.head = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: success.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    success.form = successForm
/**
* @see \App\Http\Controllers\EnrollController::free
 * @see app/Http/Controllers/EnrollController.php:76
 * @route '/enroll/free'
 */
export const free = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: free.url(options),
    method: 'post',
})

free.definition = {
    methods: ["post"],
    url: '/enroll/free',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EnrollController::free
 * @see app/Http/Controllers/EnrollController.php:76
 * @route '/enroll/free'
 */
free.url = (options?: RouteQueryOptions) => {
    return free.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EnrollController::free
 * @see app/Http/Controllers/EnrollController.php:76
 * @route '/enroll/free'
 */
free.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: free.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EnrollController::free
 * @see app/Http/Controllers/EnrollController.php:76
 * @route '/enroll/free'
 */
    const freeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: free.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EnrollController::free
 * @see app/Http/Controllers/EnrollController.php:76
 * @route '/enroll/free'
 */
        freeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: free.url(options),
            method: 'post',
        })
    
    free.form = freeForm
const enroll = {
    validateCoupon: Object.assign(validateCoupon, validateCoupon),
process: Object.assign(process, process),
success: Object.assign(success, success),
free: Object.assign(free, free),
}

export default enroll