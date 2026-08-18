import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\API\DashboardAPIController::index
 * @see app/Http/Controllers/API/DashboardAPIController.php:13
 * @route '/api/dashboard/student/dashboard/{user_id}'
 */
export const index = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/dashboard/student/dashboard/{user_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\DashboardAPIController::index
 * @see app/Http/Controllers/API/DashboardAPIController.php:13
 * @route '/api/dashboard/student/dashboard/{user_id}'
 */
index.url = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user_id: args.user_id,
                }

    return index.definition.url
            .replace('{user_id}', parsedArgs.user_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\DashboardAPIController::index
 * @see app/Http/Controllers/API/DashboardAPIController.php:13
 * @route '/api/dashboard/student/dashboard/{user_id}'
 */
index.get = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\DashboardAPIController::index
 * @see app/Http/Controllers/API/DashboardAPIController.php:13
 * @route '/api/dashboard/student/dashboard/{user_id}'
 */
index.head = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\DashboardAPIController::index
 * @see app/Http/Controllers/API/DashboardAPIController.php:13
 * @route '/api/dashboard/student/dashboard/{user_id}'
 */
    const indexForm = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\DashboardAPIController::index
 * @see app/Http/Controllers/API/DashboardAPIController.php:13
 * @route '/api/dashboard/student/dashboard/{user_id}'
 */
        indexForm.get = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\DashboardAPIController::index
 * @see app/Http/Controllers/API/DashboardAPIController.php:13
 * @route '/api/dashboard/student/dashboard/{user_id}'
 */
        indexForm.head = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\API\DashboardAPIController::courses
 * @see app/Http/Controllers/API/DashboardAPIController.php:21
 * @route '/api/dashboard/student/courses/{user_id}'
 */
export const courses = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courses.url(args, options),
    method: 'get',
})

courses.definition = {
    methods: ["get","head"],
    url: '/api/dashboard/student/courses/{user_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\DashboardAPIController::courses
 * @see app/Http/Controllers/API/DashboardAPIController.php:21
 * @route '/api/dashboard/student/courses/{user_id}'
 */
courses.url = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user_id: args.user_id,
                }

    return courses.definition.url
            .replace('{user_id}', parsedArgs.user_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\DashboardAPIController::courses
 * @see app/Http/Controllers/API/DashboardAPIController.php:21
 * @route '/api/dashboard/student/courses/{user_id}'
 */
courses.get = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courses.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\DashboardAPIController::courses
 * @see app/Http/Controllers/API/DashboardAPIController.php:21
 * @route '/api/dashboard/student/courses/{user_id}'
 */
courses.head = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: courses.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\DashboardAPIController::courses
 * @see app/Http/Controllers/API/DashboardAPIController.php:21
 * @route '/api/dashboard/student/courses/{user_id}'
 */
    const coursesForm = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: courses.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\DashboardAPIController::courses
 * @see app/Http/Controllers/API/DashboardAPIController.php:21
 * @route '/api/dashboard/student/courses/{user_id}'
 */
        coursesForm.get = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: courses.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\DashboardAPIController::courses
 * @see app/Http/Controllers/API/DashboardAPIController.php:21
 * @route '/api/dashboard/student/courses/{user_id}'
 */
        coursesForm.head = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: courses.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    courses.form = coursesForm
/**
* @see \App\Http\Controllers\API\DashboardAPIController::progress
 * @see app/Http/Controllers/API/DashboardAPIController.php:30
 * @route '/api/dashboard/student/progress/{user_id}'
 */
export const progress = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: progress.url(args, options),
    method: 'get',
})

progress.definition = {
    methods: ["get","head"],
    url: '/api/dashboard/student/progress/{user_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\DashboardAPIController::progress
 * @see app/Http/Controllers/API/DashboardAPIController.php:30
 * @route '/api/dashboard/student/progress/{user_id}'
 */
progress.url = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user_id: args.user_id,
                }

    return progress.definition.url
            .replace('{user_id}', parsedArgs.user_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\DashboardAPIController::progress
 * @see app/Http/Controllers/API/DashboardAPIController.php:30
 * @route '/api/dashboard/student/progress/{user_id}'
 */
progress.get = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: progress.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\DashboardAPIController::progress
 * @see app/Http/Controllers/API/DashboardAPIController.php:30
 * @route '/api/dashboard/student/progress/{user_id}'
 */
progress.head = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: progress.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\DashboardAPIController::progress
 * @see app/Http/Controllers/API/DashboardAPIController.php:30
 * @route '/api/dashboard/student/progress/{user_id}'
 */
    const progressForm = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: progress.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\DashboardAPIController::progress
 * @see app/Http/Controllers/API/DashboardAPIController.php:30
 * @route '/api/dashboard/student/progress/{user_id}'
 */
        progressForm.get = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: progress.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\DashboardAPIController::progress
 * @see app/Http/Controllers/API/DashboardAPIController.php:30
 * @route '/api/dashboard/student/progress/{user_id}'
 */
        progressForm.head = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: progress.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    progress.form = progressForm
/**
* @see \App\Http\Controllers\API\DashboardAPIController::profile
 * @see app/Http/Controllers/API/DashboardAPIController.php:41
 * @route '/api/student/profile/{user_id}'
 */
export const profile = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(args, options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/api/student/profile/{user_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\DashboardAPIController::profile
 * @see app/Http/Controllers/API/DashboardAPIController.php:41
 * @route '/api/student/profile/{user_id}'
 */
profile.url = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user_id: args.user_id,
                }

    return profile.definition.url
            .replace('{user_id}', parsedArgs.user_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\DashboardAPIController::profile
 * @see app/Http/Controllers/API/DashboardAPIController.php:41
 * @route '/api/student/profile/{user_id}'
 */
profile.get = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\DashboardAPIController::profile
 * @see app/Http/Controllers/API/DashboardAPIController.php:41
 * @route '/api/student/profile/{user_id}'
 */
profile.head = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\DashboardAPIController::profile
 * @see app/Http/Controllers/API/DashboardAPIController.php:41
 * @route '/api/student/profile/{user_id}'
 */
    const profileForm = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: profile.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\DashboardAPIController::profile
 * @see app/Http/Controllers/API/DashboardAPIController.php:41
 * @route '/api/student/profile/{user_id}'
 */
        profileForm.get = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profile.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\DashboardAPIController::profile
 * @see app/Http/Controllers/API/DashboardAPIController.php:41
 * @route '/api/student/profile/{user_id}'
 */
        profileForm.head = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profile.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    profile.form = profileForm
/**
* @see \App\Http\Controllers\API\DashboardAPIController::updateProfile
 * @see app/Http/Controllers/API/DashboardAPIController.php:48
 * @route '/api/student/profile/update/{user_id}'
 */
export const updateProfile = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateProfile.url(args, options),
    method: 'post',
})

updateProfile.definition = {
    methods: ["post"],
    url: '/api/student/profile/update/{user_id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\API\DashboardAPIController::updateProfile
 * @see app/Http/Controllers/API/DashboardAPIController.php:48
 * @route '/api/student/profile/update/{user_id}'
 */
updateProfile.url = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user_id: args.user_id,
                }

    return updateProfile.definition.url
            .replace('{user_id}', parsedArgs.user_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\DashboardAPIController::updateProfile
 * @see app/Http/Controllers/API/DashboardAPIController.php:48
 * @route '/api/student/profile/update/{user_id}'
 */
updateProfile.post = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateProfile.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\API\DashboardAPIController::updateProfile
 * @see app/Http/Controllers/API/DashboardAPIController.php:48
 * @route '/api/student/profile/update/{user_id}'
 */
    const updateProfileForm = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateProfile.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\API\DashboardAPIController::updateProfile
 * @see app/Http/Controllers/API/DashboardAPIController.php:48
 * @route '/api/student/profile/update/{user_id}'
 */
        updateProfileForm.post = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateProfile.url(args, options),
            method: 'post',
        })
    
    updateProfile.form = updateProfileForm
const DashboardAPIController = { index, courses, progress, profile, updateProfile }

export default DashboardAPIController