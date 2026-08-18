import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\ClassessController::update
 * @see app/Http/Controllers/ClassessController.php:50
 * @route '/student/progress/update'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/student/progress/update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ClassessController::update
 * @see app/Http/Controllers/ClassessController.php:50
 * @route '/student/progress/update'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClassessController::update
 * @see app/Http/Controllers/ClassessController.php:50
 * @route '/student/progress/update'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ClassessController::update
 * @see app/Http/Controllers/ClassessController.php:50
 * @route '/student/progress/update'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ClassessController::update
 * @see app/Http/Controllers/ClassessController.php:50
 * @route '/student/progress/update'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\ClassessController::get
 * @see app/Http/Controllers/ClassessController.php:142
 * @route '/student/progress/{courseId}'
 */
export const get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: get.url(args, options),
    method: 'get',
})

get.definition = {
    methods: ["get","head"],
    url: '/student/progress/{courseId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClassessController::get
 * @see app/Http/Controllers/ClassessController.php:142
 * @route '/student/progress/{courseId}'
 */
get.url = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { courseId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    courseId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        courseId: args.courseId,
                }

    return get.definition.url
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClassessController::get
 * @see app/Http/Controllers/ClassessController.php:142
 * @route '/student/progress/{courseId}'
 */
get.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: get.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ClassessController::get
 * @see app/Http/Controllers/ClassessController.php:142
 * @route '/student/progress/{courseId}'
 */
get.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: get.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ClassessController::get
 * @see app/Http/Controllers/ClassessController.php:142
 * @route '/student/progress/{courseId}'
 */
    const getForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: get.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ClassessController::get
 * @see app/Http/Controllers/ClassessController.php:142
 * @route '/student/progress/{courseId}'
 */
        getForm.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: get.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ClassessController::get
 * @see app/Http/Controllers/ClassessController.php:142
 * @route '/student/progress/{courseId}'
 */
        getForm.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: get.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    get.form = getForm
const progress = {
    update: Object.assign(update, update),
get: Object.assign(get, get),
}

export default progress