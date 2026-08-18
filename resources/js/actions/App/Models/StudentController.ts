import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Models\StudentController::index
 * @see app/Models/StudentController.php:13
 * @route '/student/dashboard'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/student/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Models\StudentController::index
 * @see app/Models/StudentController.php:13
 * @route '/student/dashboard'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Models\StudentController::index
 * @see app/Models/StudentController.php:13
 * @route '/student/dashboard'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Models\StudentController::index
 * @see app/Models/StudentController.php:13
 * @route '/student/dashboard'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Models\StudentController::index
 * @see app/Models/StudentController.php:13
 * @route '/student/dashboard'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Models\StudentController::index
 * @see app/Models/StudentController.php:13
 * @route '/student/dashboard'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Models\StudentController::index
 * @see app/Models/StudentController.php:13
 * @route '/student/dashboard'
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
* @see \App\Models\StudentController::courses
 * @see app/Models/StudentController.php:19
 * @route '/student/courses'
 */
export const courses = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courses.url(options),
    method: 'get',
})

courses.definition = {
    methods: ["get","head"],
    url: '/student/courses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Models\StudentController::courses
 * @see app/Models/StudentController.php:19
 * @route '/student/courses'
 */
courses.url = (options?: RouteQueryOptions) => {
    return courses.definition.url + queryParams(options)
}

/**
* @see \App\Models\StudentController::courses
 * @see app/Models/StudentController.php:19
 * @route '/student/courses'
 */
courses.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courses.url(options),
    method: 'get',
})
/**
* @see \App\Models\StudentController::courses
 * @see app/Models/StudentController.php:19
 * @route '/student/courses'
 */
courses.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: courses.url(options),
    method: 'head',
})

    /**
* @see \App\Models\StudentController::courses
 * @see app/Models/StudentController.php:19
 * @route '/student/courses'
 */
    const coursesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: courses.url(options),
        method: 'get',
    })

            /**
* @see \App\Models\StudentController::courses
 * @see app/Models/StudentController.php:19
 * @route '/student/courses'
 */
        coursesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: courses.url(options),
            method: 'get',
        })
            /**
* @see \App\Models\StudentController::courses
 * @see app/Models/StudentController.php:19
 * @route '/student/courses'
 */
        coursesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: courses.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    courses.form = coursesForm
/**
* @see \App\Models\StudentController::profile
 * @see app/Models/StudentController.php:27
 * @route '/student/profile'
 */
export const profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/student/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Models\StudentController::profile
 * @see app/Models/StudentController.php:27
 * @route '/student/profile'
 */
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \App\Models\StudentController::profile
 * @see app/Models/StudentController.php:27
 * @route '/student/profile'
 */
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})
/**
* @see \App\Models\StudentController::profile
 * @see app/Models/StudentController.php:27
 * @route '/student/profile'
 */
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

    /**
* @see \App\Models\StudentController::profile
 * @see app/Models/StudentController.php:27
 * @route '/student/profile'
 */
    const profileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: profile.url(options),
        method: 'get',
    })

            /**
* @see \App\Models\StudentController::profile
 * @see app/Models/StudentController.php:27
 * @route '/student/profile'
 */
        profileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profile.url(options),
            method: 'get',
        })
            /**
* @see \App\Models\StudentController::profile
 * @see app/Models/StudentController.php:27
 * @route '/student/profile'
 */
        profileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profile.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    profile.form = profileForm
/**
* @see \App\Models\StudentController::updateProfile
 * @see app/Models/StudentController.php:46
 * @route '/student/profile'
 */
export const updateProfile = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateProfile.url(options),
    method: 'post',
})

updateProfile.definition = {
    methods: ["post"],
    url: '/student/profile',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Models\StudentController::updateProfile
 * @see app/Models/StudentController.php:46
 * @route '/student/profile'
 */
updateProfile.url = (options?: RouteQueryOptions) => {
    return updateProfile.definition.url + queryParams(options)
}

/**
* @see \App\Models\StudentController::updateProfile
 * @see app/Models/StudentController.php:46
 * @route '/student/profile'
 */
updateProfile.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateProfile.url(options),
    method: 'post',
})

    /**
* @see \App\Models\StudentController::updateProfile
 * @see app/Models/StudentController.php:46
 * @route '/student/profile'
 */
    const updateProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateProfile.url(options),
        method: 'post',
    })

            /**
* @see \App\Models\StudentController::updateProfile
 * @see app/Models/StudentController.php:46
 * @route '/student/profile'
 */
        updateProfileForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateProfile.url(options),
            method: 'post',
        })
    
    updateProfile.form = updateProfileForm
/**
* @see \App\Models\StudentController::progress
 * @see app/Models/StudentController.php:33
 * @route '/student/progress'
 */
export const progress = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: progress.url(options),
    method: 'get',
})

progress.definition = {
    methods: ["get","head"],
    url: '/student/progress',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Models\StudentController::progress
 * @see app/Models/StudentController.php:33
 * @route '/student/progress'
 */
progress.url = (options?: RouteQueryOptions) => {
    return progress.definition.url + queryParams(options)
}

/**
* @see \App\Models\StudentController::progress
 * @see app/Models/StudentController.php:33
 * @route '/student/progress'
 */
progress.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: progress.url(options),
    method: 'get',
})
/**
* @see \App\Models\StudentController::progress
 * @see app/Models/StudentController.php:33
 * @route '/student/progress'
 */
progress.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: progress.url(options),
    method: 'head',
})

    /**
* @see \App\Models\StudentController::progress
 * @see app/Models/StudentController.php:33
 * @route '/student/progress'
 */
    const progressForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: progress.url(options),
        method: 'get',
    })

            /**
* @see \App\Models\StudentController::progress
 * @see app/Models/StudentController.php:33
 * @route '/student/progress'
 */
        progressForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: progress.url(options),
            method: 'get',
        })
            /**
* @see \App\Models\StudentController::progress
 * @see app/Models/StudentController.php:33
 * @route '/student/progress'
 */
        progressForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: progress.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    progress.form = progressForm
const StudentController = { index, courses, profile, updateProfile, progress }

export default StudentController