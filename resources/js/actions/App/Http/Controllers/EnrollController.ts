import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\EnrollController::enroll
 * @see app/Http/Controllers/EnrollController.php:17
 * @route '/enroll/{slug}'
 */
export const enroll = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: enroll.url(args, options),
    method: 'get',
})

enroll.definition = {
    methods: ["get","head"],
    url: '/enroll/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EnrollController::enroll
 * @see app/Http/Controllers/EnrollController.php:17
 * @route '/enroll/{slug}'
 */
enroll.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    slug: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        slug: args.slug,
                }

    return enroll.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EnrollController::enroll
 * @see app/Http/Controllers/EnrollController.php:17
 * @route '/enroll/{slug}'
 */
enroll.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: enroll.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EnrollController::enroll
 * @see app/Http/Controllers/EnrollController.php:17
 * @route '/enroll/{slug}'
 */
enroll.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: enroll.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EnrollController::enroll
 * @see app/Http/Controllers/EnrollController.php:17
 * @route '/enroll/{slug}'
 */
    const enrollForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: enroll.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EnrollController::enroll
 * @see app/Http/Controllers/EnrollController.php:17
 * @route '/enroll/{slug}'
 */
        enrollForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: enroll.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EnrollController::enroll
 * @see app/Http/Controllers/EnrollController.php:17
 * @route '/enroll/{slug}'
 */
        enrollForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: enroll.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    enroll.form = enrollForm
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
* @see \App\Http\Controllers\EnrollController::processEnrollment
 * @see app/Http/Controllers/EnrollController.php:116
 * @route '/enroll/process'
 */
export const processEnrollment = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processEnrollment.url(options),
    method: 'post',
})

processEnrollment.definition = {
    methods: ["post"],
    url: '/enroll/process',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EnrollController::processEnrollment
 * @see app/Http/Controllers/EnrollController.php:116
 * @route '/enroll/process'
 */
processEnrollment.url = (options?: RouteQueryOptions) => {
    return processEnrollment.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EnrollController::processEnrollment
 * @see app/Http/Controllers/EnrollController.php:116
 * @route '/enroll/process'
 */
processEnrollment.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processEnrollment.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EnrollController::processEnrollment
 * @see app/Http/Controllers/EnrollController.php:116
 * @route '/enroll/process'
 */
    const processEnrollmentForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: processEnrollment.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EnrollController::processEnrollment
 * @see app/Http/Controllers/EnrollController.php:116
 * @route '/enroll/process'
 */
        processEnrollmentForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: processEnrollment.url(options),
            method: 'post',
        })
    
    processEnrollment.form = processEnrollmentForm
/**
* @see \App\Http\Controllers\EnrollController::enrollmentSuccess
 * @see app/Http/Controllers/EnrollController.php:175
 * @route '/enroll/success/{orderId}'
 */
export const enrollmentSuccess = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: enrollmentSuccess.url(args, options),
    method: 'get',
})

enrollmentSuccess.definition = {
    methods: ["get","head"],
    url: '/enroll/success/{orderId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EnrollController::enrollmentSuccess
 * @see app/Http/Controllers/EnrollController.php:175
 * @route '/enroll/success/{orderId}'
 */
enrollmentSuccess.url = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return enrollmentSuccess.definition.url
            .replace('{orderId}', parsedArgs.orderId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EnrollController::enrollmentSuccess
 * @see app/Http/Controllers/EnrollController.php:175
 * @route '/enroll/success/{orderId}'
 */
enrollmentSuccess.get = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: enrollmentSuccess.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EnrollController::enrollmentSuccess
 * @see app/Http/Controllers/EnrollController.php:175
 * @route '/enroll/success/{orderId}'
 */
enrollmentSuccess.head = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: enrollmentSuccess.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EnrollController::enrollmentSuccess
 * @see app/Http/Controllers/EnrollController.php:175
 * @route '/enroll/success/{orderId}'
 */
    const enrollmentSuccessForm = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: enrollmentSuccess.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EnrollController::enrollmentSuccess
 * @see app/Http/Controllers/EnrollController.php:175
 * @route '/enroll/success/{orderId}'
 */
        enrollmentSuccessForm.get = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: enrollmentSuccess.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EnrollController::enrollmentSuccess
 * @see app/Http/Controllers/EnrollController.php:175
 * @route '/enroll/success/{orderId}'
 */
        enrollmentSuccessForm.head = (args: { orderId: string | number } | [orderId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: enrollmentSuccess.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    enrollmentSuccess.form = enrollmentSuccessForm
/**
* @see \App\Http\Controllers\EnrollController::enrollFree
 * @see app/Http/Controllers/EnrollController.php:76
 * @route '/enroll/free'
 */
export const enrollFree = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enrollFree.url(options),
    method: 'post',
})

enrollFree.definition = {
    methods: ["post"],
    url: '/enroll/free',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EnrollController::enrollFree
 * @see app/Http/Controllers/EnrollController.php:76
 * @route '/enroll/free'
 */
enrollFree.url = (options?: RouteQueryOptions) => {
    return enrollFree.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EnrollController::enrollFree
 * @see app/Http/Controllers/EnrollController.php:76
 * @route '/enroll/free'
 */
enrollFree.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enrollFree.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EnrollController::enrollFree
 * @see app/Http/Controllers/EnrollController.php:76
 * @route '/enroll/free'
 */
    const enrollFreeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: enrollFree.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EnrollController::enrollFree
 * @see app/Http/Controllers/EnrollController.php:76
 * @route '/enroll/free'
 */
        enrollFreeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: enrollFree.url(options),
            method: 'post',
        })
    
    enrollFree.form = enrollFreeForm
const EnrollController = { enroll, validateCoupon, processEnrollment, enrollmentSuccess, enrollFree }

export default EnrollController