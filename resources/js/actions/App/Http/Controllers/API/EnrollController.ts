import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\API\EnrollController::enroll
 * @see app/Http/Controllers/API/EnrollController.php:13
 * @route '/api/enroll/{slug}'
 */
export const enroll = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: enroll.url(args, options),
    method: 'get',
})

enroll.definition = {
    methods: ["get","head"],
    url: '/api/enroll/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\EnrollController::enroll
 * @see app/Http/Controllers/API/EnrollController.php:13
 * @route '/api/enroll/{slug}'
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
* @see \App\Http\Controllers\API\EnrollController::enroll
 * @see app/Http/Controllers/API/EnrollController.php:13
 * @route '/api/enroll/{slug}'
 */
enroll.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: enroll.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\EnrollController::enroll
 * @see app/Http/Controllers/API/EnrollController.php:13
 * @route '/api/enroll/{slug}'
 */
enroll.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: enroll.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\EnrollController::enroll
 * @see app/Http/Controllers/API/EnrollController.php:13
 * @route '/api/enroll/{slug}'
 */
    const enrollForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: enroll.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\EnrollController::enroll
 * @see app/Http/Controllers/API/EnrollController.php:13
 * @route '/api/enroll/{slug}'
 */
        enrollForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: enroll.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\EnrollController::enroll
 * @see app/Http/Controllers/API/EnrollController.php:13
 * @route '/api/enroll/{slug}'
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
* @see \App\Http\Controllers\API\EnrollController::processEnrollment
 * @see app/Http/Controllers/API/EnrollController.php:21
 * @route '/api/enroll/process'
 */
export const processEnrollment = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processEnrollment.url(options),
    method: 'post',
})

processEnrollment.definition = {
    methods: ["post"],
    url: '/api/enroll/process',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\API\EnrollController::processEnrollment
 * @see app/Http/Controllers/API/EnrollController.php:21
 * @route '/api/enroll/process'
 */
processEnrollment.url = (options?: RouteQueryOptions) => {
    return processEnrollment.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\EnrollController::processEnrollment
 * @see app/Http/Controllers/API/EnrollController.php:21
 * @route '/api/enroll/process'
 */
processEnrollment.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processEnrollment.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\API\EnrollController::processEnrollment
 * @see app/Http/Controllers/API/EnrollController.php:21
 * @route '/api/enroll/process'
 */
    const processEnrollmentForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: processEnrollment.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\API\EnrollController::processEnrollment
 * @see app/Http/Controllers/API/EnrollController.php:21
 * @route '/api/enroll/process'
 */
        processEnrollmentForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: processEnrollment.url(options),
            method: 'post',
        })
    
    processEnrollment.form = processEnrollmentForm
/**
* @see \App\Http\Controllers\API\EnrollController::freeEnrollment
 * @see app/Http/Controllers/API/EnrollController.php:74
 * @route '/api/enroll/free'
 */
export const freeEnrollment = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: freeEnrollment.url(options),
    method: 'post',
})

freeEnrollment.definition = {
    methods: ["post"],
    url: '/api/enroll/free',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\API\EnrollController::freeEnrollment
 * @see app/Http/Controllers/API/EnrollController.php:74
 * @route '/api/enroll/free'
 */
freeEnrollment.url = (options?: RouteQueryOptions) => {
    return freeEnrollment.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\EnrollController::freeEnrollment
 * @see app/Http/Controllers/API/EnrollController.php:74
 * @route '/api/enroll/free'
 */
freeEnrollment.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: freeEnrollment.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\API\EnrollController::freeEnrollment
 * @see app/Http/Controllers/API/EnrollController.php:74
 * @route '/api/enroll/free'
 */
    const freeEnrollmentForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: freeEnrollment.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\API\EnrollController::freeEnrollment
 * @see app/Http/Controllers/API/EnrollController.php:74
 * @route '/api/enroll/free'
 */
        freeEnrollmentForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: freeEnrollment.url(options),
            method: 'post',
        })
    
    freeEnrollment.form = freeEnrollmentForm
/**
* @see \App\Http\Controllers\API\EnrollController::check_enroll
 * @see app/Http/Controllers/API/EnrollController.php:116
 * @route '/api/check/enroll/{user_id}/{course_id}'
 */
export const check_enroll = (args: { user_id: string | number, course_id: string | number } | [user_id: string | number, course_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check_enroll.url(args, options),
    method: 'get',
})

check_enroll.definition = {
    methods: ["get","head"],
    url: '/api/check/enroll/{user_id}/{course_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\EnrollController::check_enroll
 * @see app/Http/Controllers/API/EnrollController.php:116
 * @route '/api/check/enroll/{user_id}/{course_id}'
 */
check_enroll.url = (args: { user_id: string | number, course_id: string | number } | [user_id: string | number, course_id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    user_id: args[0],
                    course_id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user_id: args.user_id,
                                course_id: args.course_id,
                }

    return check_enroll.definition.url
            .replace('{user_id}', parsedArgs.user_id.toString())
            .replace('{course_id}', parsedArgs.course_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\EnrollController::check_enroll
 * @see app/Http/Controllers/API/EnrollController.php:116
 * @route '/api/check/enroll/{user_id}/{course_id}'
 */
check_enroll.get = (args: { user_id: string | number, course_id: string | number } | [user_id: string | number, course_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check_enroll.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\EnrollController::check_enroll
 * @see app/Http/Controllers/API/EnrollController.php:116
 * @route '/api/check/enroll/{user_id}/{course_id}'
 */
check_enroll.head = (args: { user_id: string | number, course_id: string | number } | [user_id: string | number, course_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: check_enroll.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\EnrollController::check_enroll
 * @see app/Http/Controllers/API/EnrollController.php:116
 * @route '/api/check/enroll/{user_id}/{course_id}'
 */
    const check_enrollForm = (args: { user_id: string | number, course_id: string | number } | [user_id: string | number, course_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: check_enroll.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\EnrollController::check_enroll
 * @see app/Http/Controllers/API/EnrollController.php:116
 * @route '/api/check/enroll/{user_id}/{course_id}'
 */
        check_enrollForm.get = (args: { user_id: string | number, course_id: string | number } | [user_id: string | number, course_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: check_enroll.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\EnrollController::check_enroll
 * @see app/Http/Controllers/API/EnrollController.php:116
 * @route '/api/check/enroll/{user_id}/{course_id}'
 */
        check_enrollForm.head = (args: { user_id: string | number, course_id: string | number } | [user_id: string | number, course_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: check_enroll.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    check_enroll.form = check_enrollForm
const EnrollController = { enroll, processEnrollment, freeEnrollment, check_enroll }

export default EnrollController