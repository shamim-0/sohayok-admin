import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:29
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:29
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:29
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:29
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:29
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:29
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:29
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
* @see \App\Http\Controllers\HomeController::about
 * @see app/Http/Controllers/HomeController.php:80
 * @route '/about-us'
 */
export const about = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})

about.definition = {
    methods: ["get","head"],
    url: '/about-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::about
 * @see app/Http/Controllers/HomeController.php:80
 * @route '/about-us'
 */
about.url = (options?: RouteQueryOptions) => {
    return about.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::about
 * @see app/Http/Controllers/HomeController.php:80
 * @route '/about-us'
 */
about.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::about
 * @see app/Http/Controllers/HomeController.php:80
 * @route '/about-us'
 */
about.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: about.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::about
 * @see app/Http/Controllers/HomeController.php:80
 * @route '/about-us'
 */
    const aboutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: about.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::about
 * @see app/Http/Controllers/HomeController.php:80
 * @route '/about-us'
 */
        aboutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: about.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::about
 * @see app/Http/Controllers/HomeController.php:80
 * @route '/about-us'
 */
        aboutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: about.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    about.form = aboutForm
/**
* @see \App\Http\Controllers\HomeController::notice
 * @see app/Http/Controllers/HomeController.php:107
 * @route '/notice'
 */
export const notice = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notice.url(options),
    method: 'get',
})

notice.definition = {
    methods: ["get","head"],
    url: '/notice',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::notice
 * @see app/Http/Controllers/HomeController.php:107
 * @route '/notice'
 */
notice.url = (options?: RouteQueryOptions) => {
    return notice.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::notice
 * @see app/Http/Controllers/HomeController.php:107
 * @route '/notice'
 */
notice.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notice.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::notice
 * @see app/Http/Controllers/HomeController.php:107
 * @route '/notice'
 */
notice.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notice.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::notice
 * @see app/Http/Controllers/HomeController.php:107
 * @route '/notice'
 */
    const noticeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: notice.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::notice
 * @see app/Http/Controllers/HomeController.php:107
 * @route '/notice'
 */
        noticeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: notice.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::notice
 * @see app/Http/Controllers/HomeController.php:107
 * @route '/notice'
 */
        noticeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: notice.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    notice.form = noticeForm
/**
* @see \App\Http\Controllers\HomeController::instructors
 * @see app/Http/Controllers/HomeController.php:115
 * @route '/instructors'
 */
export const instructors = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: instructors.url(options),
    method: 'get',
})

instructors.definition = {
    methods: ["get","head"],
    url: '/instructors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::instructors
 * @see app/Http/Controllers/HomeController.php:115
 * @route '/instructors'
 */
instructors.url = (options?: RouteQueryOptions) => {
    return instructors.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::instructors
 * @see app/Http/Controllers/HomeController.php:115
 * @route '/instructors'
 */
instructors.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: instructors.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::instructors
 * @see app/Http/Controllers/HomeController.php:115
 * @route '/instructors'
 */
instructors.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: instructors.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::instructors
 * @see app/Http/Controllers/HomeController.php:115
 * @route '/instructors'
 */
    const instructorsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: instructors.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::instructors
 * @see app/Http/Controllers/HomeController.php:115
 * @route '/instructors'
 */
        instructorsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: instructors.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::instructors
 * @see app/Http/Controllers/HomeController.php:115
 * @route '/instructors'
 */
        instructorsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: instructors.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    instructors.form = instructorsForm
/**
* @see \App\Http\Controllers\HomeController::courses
 * @see app/Http/Controllers/HomeController.php:194
 * @route '/courses'
 */
export const courses = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courses.url(options),
    method: 'get',
})

courses.definition = {
    methods: ["get","head"],
    url: '/courses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::courses
 * @see app/Http/Controllers/HomeController.php:194
 * @route '/courses'
 */
courses.url = (options?: RouteQueryOptions) => {
    return courses.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::courses
 * @see app/Http/Controllers/HomeController.php:194
 * @route '/courses'
 */
courses.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courses.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::courses
 * @see app/Http/Controllers/HomeController.php:194
 * @route '/courses'
 */
courses.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: courses.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::courses
 * @see app/Http/Controllers/HomeController.php:194
 * @route '/courses'
 */
    const coursesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: courses.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::courses
 * @see app/Http/Controllers/HomeController.php:194
 * @route '/courses'
 */
        coursesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: courses.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::courses
 * @see app/Http/Controllers/HomeController.php:194
 * @route '/courses'
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
* @see \App\Http\Controllers\HomeController::courses_details
 * @see app/Http/Controllers/HomeController.php:219
 * @route '/course/{slug}'
 */
export const courses_details = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courses_details.url(args, options),
    method: 'get',
})

courses_details.definition = {
    methods: ["get","head"],
    url: '/course/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::courses_details
 * @see app/Http/Controllers/HomeController.php:219
 * @route '/course/{slug}'
 */
courses_details.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return courses_details.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::courses_details
 * @see app/Http/Controllers/HomeController.php:219
 * @route '/course/{slug}'
 */
courses_details.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courses_details.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::courses_details
 * @see app/Http/Controllers/HomeController.php:219
 * @route '/course/{slug}'
 */
courses_details.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: courses_details.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::courses_details
 * @see app/Http/Controllers/HomeController.php:219
 * @route '/course/{slug}'
 */
    const courses_detailsForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: courses_details.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::courses_details
 * @see app/Http/Controllers/HomeController.php:219
 * @route '/course/{slug}'
 */
        courses_detailsForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: courses_details.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::courses_details
 * @see app/Http/Controllers/HomeController.php:219
 * @route '/course/{slug}'
 */
        courses_detailsForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: courses_details.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    courses_details.form = courses_detailsForm
/**
* @see \App\Http\Controllers\HomeController::contact
 * @see app/Http/Controllers/HomeController.php:132
 * @route '/contact'
 */
export const contact = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})

contact.definition = {
    methods: ["get","head"],
    url: '/contact',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::contact
 * @see app/Http/Controllers/HomeController.php:132
 * @route '/contact'
 */
contact.url = (options?: RouteQueryOptions) => {
    return contact.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::contact
 * @see app/Http/Controllers/HomeController.php:132
 * @route '/contact'
 */
contact.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::contact
 * @see app/Http/Controllers/HomeController.php:132
 * @route '/contact'
 */
contact.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contact.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::contact
 * @see app/Http/Controllers/HomeController.php:132
 * @route '/contact'
 */
    const contactForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contact.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::contact
 * @see app/Http/Controllers/HomeController.php:132
 * @route '/contact'
 */
        contactForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contact.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::contact
 * @see app/Http/Controllers/HomeController.php:132
 * @route '/contact'
 */
        contactForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contact.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    contact.form = contactForm
/**
* @see \App\Http\Controllers\HomeController::privacy
 * @see app/Http/Controllers/HomeController.php:93
 * @route '/privacy-policy'
 */
export const privacy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacy.url(options),
    method: 'get',
})

privacy.definition = {
    methods: ["get","head"],
    url: '/privacy-policy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::privacy
 * @see app/Http/Controllers/HomeController.php:93
 * @route '/privacy-policy'
 */
privacy.url = (options?: RouteQueryOptions) => {
    return privacy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::privacy
 * @see app/Http/Controllers/HomeController.php:93
 * @route '/privacy-policy'
 */
privacy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacy.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::privacy
 * @see app/Http/Controllers/HomeController.php:93
 * @route '/privacy-policy'
 */
privacy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: privacy.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::privacy
 * @see app/Http/Controllers/HomeController.php:93
 * @route '/privacy-policy'
 */
    const privacyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: privacy.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::privacy
 * @see app/Http/Controllers/HomeController.php:93
 * @route '/privacy-policy'
 */
        privacyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: privacy.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::privacy
 * @see app/Http/Controllers/HomeController.php:93
 * @route '/privacy-policy'
 */
        privacyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: privacy.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    privacy.form = privacyForm
/**
* @see \App\Http\Controllers\HomeController::terms
 * @see app/Http/Controllers/HomeController.php:97
 * @route '/terms-conditions'
 */
export const terms = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: terms.url(options),
    method: 'get',
})

terms.definition = {
    methods: ["get","head"],
    url: '/terms-conditions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::terms
 * @see app/Http/Controllers/HomeController.php:97
 * @route '/terms-conditions'
 */
terms.url = (options?: RouteQueryOptions) => {
    return terms.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::terms
 * @see app/Http/Controllers/HomeController.php:97
 * @route '/terms-conditions'
 */
terms.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: terms.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::terms
 * @see app/Http/Controllers/HomeController.php:97
 * @route '/terms-conditions'
 */
terms.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: terms.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::terms
 * @see app/Http/Controllers/HomeController.php:97
 * @route '/terms-conditions'
 */
    const termsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: terms.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::terms
 * @see app/Http/Controllers/HomeController.php:97
 * @route '/terms-conditions'
 */
        termsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: terms.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::terms
 * @see app/Http/Controllers/HomeController.php:97
 * @route '/terms-conditions'
 */
        termsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: terms.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    terms.form = termsForm
/**
* @see \App\Http\Controllers\HomeController::refund
 * @see app/Http/Controllers/HomeController.php:101
 * @route '/refund-policy'
 */
export const refund = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: refund.url(options),
    method: 'get',
})

refund.definition = {
    methods: ["get","head"],
    url: '/refund-policy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::refund
 * @see app/Http/Controllers/HomeController.php:101
 * @route '/refund-policy'
 */
refund.url = (options?: RouteQueryOptions) => {
    return refund.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::refund
 * @see app/Http/Controllers/HomeController.php:101
 * @route '/refund-policy'
 */
refund.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: refund.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::refund
 * @see app/Http/Controllers/HomeController.php:101
 * @route '/refund-policy'
 */
refund.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: refund.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::refund
 * @see app/Http/Controllers/HomeController.php:101
 * @route '/refund-policy'
 */
    const refundForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: refund.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::refund
 * @see app/Http/Controllers/HomeController.php:101
 * @route '/refund-policy'
 */
        refundForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: refund.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::refund
 * @see app/Http/Controllers/HomeController.php:101
 * @route '/refund-policy'
 */
        refundForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: refund.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    refund.form = refundForm
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
* @see \App\Models\StudentController::dashboard
 * @see app/Models/StudentController.php:13
 * @route '/student/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/student/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Models\StudentController::dashboard
 * @see app/Models/StudentController.php:13
 * @route '/student/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Models\StudentController::dashboard
 * @see app/Models/StudentController.php:13
 * @route '/student/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Models\StudentController::dashboard
 * @see app/Models/StudentController.php:13
 * @route '/student/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Models\StudentController::dashboard
 * @see app/Models/StudentController.php:13
 * @route '/student/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Models\StudentController::dashboard
 * @see app/Models/StudentController.php:13
 * @route '/student/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Models\StudentController::dashboard
 * @see app/Models/StudentController.php:13
 * @route '/student/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm