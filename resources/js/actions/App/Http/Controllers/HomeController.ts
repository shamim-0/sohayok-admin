import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\HomeController::index
 * @see app/Http/Controllers/HomeController.php:29
 * @route '/'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::index
 * @see app/Http/Controllers/HomeController.php:29
 * @route '/'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::index
 * @see app/Http/Controllers/HomeController.php:29
 * @route '/'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::index
 * @see app/Http/Controllers/HomeController.php:29
 * @route '/'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::index
 * @see app/Http/Controllers/HomeController.php:29
 * @route '/'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::index
 * @see app/Http/Controllers/HomeController.php:29
 * @route '/'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::index
 * @see app/Http/Controllers/HomeController.php:29
 * @route '/'
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
* @see \App\Http\Controllers\HomeController::accountDeleteRequest
 * @see app/Http/Controllers/HomeController.php:87
 * @route '/account-delete-request'
 */
export const accountDeleteRequest = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: accountDeleteRequest.url(options),
    method: 'get',
})

accountDeleteRequest.definition = {
    methods: ["get","head"],
    url: '/account-delete-request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::accountDeleteRequest
 * @see app/Http/Controllers/HomeController.php:87
 * @route '/account-delete-request'
 */
accountDeleteRequest.url = (options?: RouteQueryOptions) => {
    return accountDeleteRequest.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::accountDeleteRequest
 * @see app/Http/Controllers/HomeController.php:87
 * @route '/account-delete-request'
 */
accountDeleteRequest.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: accountDeleteRequest.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::accountDeleteRequest
 * @see app/Http/Controllers/HomeController.php:87
 * @route '/account-delete-request'
 */
accountDeleteRequest.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: accountDeleteRequest.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::accountDeleteRequest
 * @see app/Http/Controllers/HomeController.php:87
 * @route '/account-delete-request'
 */
    const accountDeleteRequestForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: accountDeleteRequest.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::accountDeleteRequest
 * @see app/Http/Controllers/HomeController.php:87
 * @route '/account-delete-request'
 */
        accountDeleteRequestForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: accountDeleteRequest.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::accountDeleteRequest
 * @see app/Http/Controllers/HomeController.php:87
 * @route '/account-delete-request'
 */
        accountDeleteRequestForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: accountDeleteRequest.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    accountDeleteRequest.form = accountDeleteRequestForm
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
* @see \App\Http\Controllers\HomeController::contact_store
 * @see app/Http/Controllers/HomeController.php:140
 * @route '/contact'
 */
export const contact_store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contact_store.url(options),
    method: 'post',
})

contact_store.definition = {
    methods: ["post"],
    url: '/contact',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HomeController::contact_store
 * @see app/Http/Controllers/HomeController.php:140
 * @route '/contact'
 */
contact_store.url = (options?: RouteQueryOptions) => {
    return contact_store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::contact_store
 * @see app/Http/Controllers/HomeController.php:140
 * @route '/contact'
 */
contact_store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contact_store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\HomeController::contact_store
 * @see app/Http/Controllers/HomeController.php:140
 * @route '/contact'
 */
    const contact_storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: contact_store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\HomeController::contact_store
 * @see app/Http/Controllers/HomeController.php:140
 * @route '/contact'
 */
        contact_storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: contact_store.url(options),
            method: 'post',
        })
    
    contact_store.form = contact_storeForm
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
const HomeController = { index, accountDeleteRequest, about, notice, instructors, courses, courses_details, contact, contact_store, privacy, terms, refund }

export default HomeController