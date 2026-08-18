import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ClassessController::index
 * @see app/Http/Controllers/ClassessController.php:17
 * @route '/student/class/{id}'
 */
export const index = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/student/class/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClassessController::index
 * @see app/Http/Controllers/ClassessController.php:17
 * @route '/student/class/{id}'
 */
index.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return index.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClassessController::index
 * @see app/Http/Controllers/ClassessController.php:17
 * @route '/student/class/{id}'
 */
index.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ClassessController::index
 * @see app/Http/Controllers/ClassessController.php:17
 * @route '/student/class/{id}'
 */
index.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ClassessController::index
 * @see app/Http/Controllers/ClassessController.php:17
 * @route '/student/class/{id}'
 */
    const indexForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ClassessController::index
 * @see app/Http/Controllers/ClassessController.php:17
 * @route '/student/class/{id}'
 */
        indexForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ClassessController::index
 * @see app/Http/Controllers/ClassessController.php:17
 * @route '/student/class/{id}'
 */
        indexForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ClassessController::updateLessonProgress
 * @see app/Http/Controllers/ClassessController.php:50
 * @route '/student/progress/update'
 */
export const updateLessonProgress = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateLessonProgress.url(options),
    method: 'post',
})

updateLessonProgress.definition = {
    methods: ["post"],
    url: '/student/progress/update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ClassessController::updateLessonProgress
 * @see app/Http/Controllers/ClassessController.php:50
 * @route '/student/progress/update'
 */
updateLessonProgress.url = (options?: RouteQueryOptions) => {
    return updateLessonProgress.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClassessController::updateLessonProgress
 * @see app/Http/Controllers/ClassessController.php:50
 * @route '/student/progress/update'
 */
updateLessonProgress.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateLessonProgress.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ClassessController::updateLessonProgress
 * @see app/Http/Controllers/ClassessController.php:50
 * @route '/student/progress/update'
 */
    const updateLessonProgressForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateLessonProgress.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ClassessController::updateLessonProgress
 * @see app/Http/Controllers/ClassessController.php:50
 * @route '/student/progress/update'
 */
        updateLessonProgressForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateLessonProgress.url(options),
            method: 'post',
        })
    
    updateLessonProgress.form = updateLessonProgressForm
/**
* @see \App\Http\Controllers\ClassessController::getCourseProgress
 * @see app/Http/Controllers/ClassessController.php:142
 * @route '/student/progress/{courseId}'
 */
export const getCourseProgress = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCourseProgress.url(args, options),
    method: 'get',
})

getCourseProgress.definition = {
    methods: ["get","head"],
    url: '/student/progress/{courseId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClassessController::getCourseProgress
 * @see app/Http/Controllers/ClassessController.php:142
 * @route '/student/progress/{courseId}'
 */
getCourseProgress.url = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getCourseProgress.definition.url
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClassessController::getCourseProgress
 * @see app/Http/Controllers/ClassessController.php:142
 * @route '/student/progress/{courseId}'
 */
getCourseProgress.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCourseProgress.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ClassessController::getCourseProgress
 * @see app/Http/Controllers/ClassessController.php:142
 * @route '/student/progress/{courseId}'
 */
getCourseProgress.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCourseProgress.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ClassessController::getCourseProgress
 * @see app/Http/Controllers/ClassessController.php:142
 * @route '/student/progress/{courseId}'
 */
    const getCourseProgressForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getCourseProgress.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ClassessController::getCourseProgress
 * @see app/Http/Controllers/ClassessController.php:142
 * @route '/student/progress/{courseId}'
 */
        getCourseProgressForm.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCourseProgress.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ClassessController::getCourseProgress
 * @see app/Http/Controllers/ClassessController.php:142
 * @route '/student/progress/{courseId}'
 */
        getCourseProgressForm.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCourseProgress.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getCourseProgress.form = getCourseProgressForm
const ClassessController = { index, updateLessonProgress, getCourseProgress }

export default ClassessController