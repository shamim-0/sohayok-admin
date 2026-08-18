import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\API\CategoryApiController::index
 * @see app/Http/Controllers/API/CategoryApiController.php:18
 * @route '/api/categories'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\CategoryApiController::index
 * @see app/Http/Controllers/API/CategoryApiController.php:18
 * @route '/api/categories'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\CategoryApiController::index
 * @see app/Http/Controllers/API/CategoryApiController.php:18
 * @route '/api/categories'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\CategoryApiController::index
 * @see app/Http/Controllers/API/CategoryApiController.php:18
 * @route '/api/categories'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\CategoryApiController::index
 * @see app/Http/Controllers/API/CategoryApiController.php:18
 * @route '/api/categories'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\CategoryApiController::index
 * @see app/Http/Controllers/API/CategoryApiController.php:18
 * @route '/api/categories'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\CategoryApiController::index
 * @see app/Http/Controllers/API/CategoryApiController.php:18
 * @route '/api/categories'
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
* @see \App\Http\Controllers\API\CategoryApiController::popularCourses
 * @see app/Http/Controllers/API/CategoryApiController.php:25
 * @route '/api/popular-courses'
 */
export const popularCourses = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: popularCourses.url(options),
    method: 'get',
})

popularCourses.definition = {
    methods: ["get","head"],
    url: '/api/popular-courses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\CategoryApiController::popularCourses
 * @see app/Http/Controllers/API/CategoryApiController.php:25
 * @route '/api/popular-courses'
 */
popularCourses.url = (options?: RouteQueryOptions) => {
    return popularCourses.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\CategoryApiController::popularCourses
 * @see app/Http/Controllers/API/CategoryApiController.php:25
 * @route '/api/popular-courses'
 */
popularCourses.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: popularCourses.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\CategoryApiController::popularCourses
 * @see app/Http/Controllers/API/CategoryApiController.php:25
 * @route '/api/popular-courses'
 */
popularCourses.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: popularCourses.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\CategoryApiController::popularCourses
 * @see app/Http/Controllers/API/CategoryApiController.php:25
 * @route '/api/popular-courses'
 */
    const popularCoursesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: popularCourses.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\CategoryApiController::popularCourses
 * @see app/Http/Controllers/API/CategoryApiController.php:25
 * @route '/api/popular-courses'
 */
        popularCoursesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: popularCourses.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\CategoryApiController::popularCourses
 * @see app/Http/Controllers/API/CategoryApiController.php:25
 * @route '/api/popular-courses'
 */
        popularCoursesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: popularCourses.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    popularCourses.form = popularCoursesForm
/**
* @see \App\Http\Controllers\API\CategoryApiController::allCourses
 * @see app/Http/Controllers/API/CategoryApiController.php:31
 * @route '/api/courses'
 */
export const allCourses = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: allCourses.url(options),
    method: 'get',
})

allCourses.definition = {
    methods: ["get","head"],
    url: '/api/courses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\CategoryApiController::allCourses
 * @see app/Http/Controllers/API/CategoryApiController.php:31
 * @route '/api/courses'
 */
allCourses.url = (options?: RouteQueryOptions) => {
    return allCourses.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\CategoryApiController::allCourses
 * @see app/Http/Controllers/API/CategoryApiController.php:31
 * @route '/api/courses'
 */
allCourses.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: allCourses.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\CategoryApiController::allCourses
 * @see app/Http/Controllers/API/CategoryApiController.php:31
 * @route '/api/courses'
 */
allCourses.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: allCourses.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\CategoryApiController::allCourses
 * @see app/Http/Controllers/API/CategoryApiController.php:31
 * @route '/api/courses'
 */
    const allCoursesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: allCourses.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\CategoryApiController::allCourses
 * @see app/Http/Controllers/API/CategoryApiController.php:31
 * @route '/api/courses'
 */
        allCoursesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: allCourses.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\CategoryApiController::allCourses
 * @see app/Http/Controllers/API/CategoryApiController.php:31
 * @route '/api/courses'
 */
        allCoursesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: allCourses.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    allCourses.form = allCoursesForm
/**
* @see \App\Http\Controllers\API\CategoryApiController::courses_details
 * @see app/Http/Controllers/API/CategoryApiController.php:53
 * @route '/course/details/{slug}'
 */
export const courses_details = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courses_details.url(args, options),
    method: 'get',
})

courses_details.definition = {
    methods: ["get","head"],
    url: '/course/details/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\CategoryApiController::courses_details
 * @see app/Http/Controllers/API/CategoryApiController.php:53
 * @route '/course/details/{slug}'
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
* @see \App\Http\Controllers\API\CategoryApiController::courses_details
 * @see app/Http/Controllers/API/CategoryApiController.php:53
 * @route '/course/details/{slug}'
 */
courses_details.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courses_details.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\CategoryApiController::courses_details
 * @see app/Http/Controllers/API/CategoryApiController.php:53
 * @route '/course/details/{slug}'
 */
courses_details.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: courses_details.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\CategoryApiController::courses_details
 * @see app/Http/Controllers/API/CategoryApiController.php:53
 * @route '/course/details/{slug}'
 */
    const courses_detailsForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: courses_details.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\CategoryApiController::courses_details
 * @see app/Http/Controllers/API/CategoryApiController.php:53
 * @route '/course/details/{slug}'
 */
        courses_detailsForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: courses_details.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\CategoryApiController::courses_details
 * @see app/Http/Controllers/API/CategoryApiController.php:53
 * @route '/course/details/{slug}'
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
const CategoryApiController = { index, popularCourses, allCourses, courses_details }

export default CategoryApiController