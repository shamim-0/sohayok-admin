import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\LessonController::index
 * @see app/Http/Controllers/LessonController.php:13
 * @route '/admin/courses/content/lesson/{course_id}/{chapter_id}'
 */
export const index = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/courses/content/lesson/{course_id}/{chapter_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LessonController::index
 * @see app/Http/Controllers/LessonController.php:13
 * @route '/admin/courses/content/lesson/{course_id}/{chapter_id}'
 */
index.url = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    course_id: args[0],
                    chapter_id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course_id: args.course_id,
                                chapter_id: args.chapter_id,
                }

    return index.definition.url
            .replace('{course_id}', parsedArgs.course_id.toString())
            .replace('{chapter_id}', parsedArgs.chapter_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LessonController::index
 * @see app/Http/Controllers/LessonController.php:13
 * @route '/admin/courses/content/lesson/{course_id}/{chapter_id}'
 */
index.get = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LessonController::index
 * @see app/Http/Controllers/LessonController.php:13
 * @route '/admin/courses/content/lesson/{course_id}/{chapter_id}'
 */
index.head = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LessonController::index
 * @see app/Http/Controllers/LessonController.php:13
 * @route '/admin/courses/content/lesson/{course_id}/{chapter_id}'
 */
    const indexForm = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LessonController::index
 * @see app/Http/Controllers/LessonController.php:13
 * @route '/admin/courses/content/lesson/{course_id}/{chapter_id}'
 */
        indexForm.get = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LessonController::index
 * @see app/Http/Controllers/LessonController.php:13
 * @route '/admin/courses/content/lesson/{course_id}/{chapter_id}'
 */
        indexForm.head = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\LessonController::store
 * @see app/Http/Controllers/LessonController.php:24
 * @route '/admin/courses/courses/lessons'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/courses/courses/lessons',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LessonController::store
 * @see app/Http/Controllers/LessonController.php:24
 * @route '/admin/courses/courses/lessons'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LessonController::store
 * @see app/Http/Controllers/LessonController.php:24
 * @route '/admin/courses/courses/lessons'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\LessonController::store
 * @see app/Http/Controllers/LessonController.php:24
 * @route '/admin/courses/courses/lessons'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LessonController::store
 * @see app/Http/Controllers/LessonController.php:24
 * @route '/admin/courses/courses/lessons'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\LessonController::update
 * @see app/Http/Controllers/LessonController.php:93
 * @route '/admin/courses/lessons/{id}'
 */
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/courses/lessons/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\LessonController::update
 * @see app/Http/Controllers/LessonController.php:93
 * @route '/admin/courses/lessons/{id}'
 */
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LessonController::update
 * @see app/Http/Controllers/LessonController.php:93
 * @route '/admin/courses/lessons/{id}'
 */
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\LessonController::update
 * @see app/Http/Controllers/LessonController.php:93
 * @route '/admin/courses/lessons/{id}'
 */
    const updateForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LessonController::update
 * @see app/Http/Controllers/LessonController.php:93
 * @route '/admin/courses/lessons/{id}'
 */
        updateForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\LessonController::destroy
 * @see app/Http/Controllers/LessonController.php:161
 * @route '/admin/courses/lessons/{id}'
 */
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/courses/lessons/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\LessonController::destroy
 * @see app/Http/Controllers/LessonController.php:161
 * @route '/admin/courses/lessons/{id}'
 */
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LessonController::destroy
 * @see app/Http/Controllers/LessonController.php:161
 * @route '/admin/courses/lessons/{id}'
 */
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\LessonController::destroy
 * @see app/Http/Controllers/LessonController.php:161
 * @route '/admin/courses/lessons/{id}'
 */
    const destroyForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LessonController::destroy
 * @see app/Http/Controllers/LessonController.php:161
 * @route '/admin/courses/lessons/{id}'
 */
        destroyForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\LessonController::reorder
 * @see app/Http/Controllers/LessonController.php:175
 * @route '/admin/courses/courses/lessons/reorder'
 */
export const reorder = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/admin/courses/courses/lessons/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LessonController::reorder
 * @see app/Http/Controllers/LessonController.php:175
 * @route '/admin/courses/courses/lessons/reorder'
 */
reorder.url = (options?: RouteQueryOptions) => {
    return reorder.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LessonController::reorder
 * @see app/Http/Controllers/LessonController.php:175
 * @route '/admin/courses/courses/lessons/reorder'
 */
reorder.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\LessonController::reorder
 * @see app/Http/Controllers/LessonController.php:175
 * @route '/admin/courses/courses/lessons/reorder'
 */
    const reorderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reorder.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LessonController::reorder
 * @see app/Http/Controllers/LessonController.php:175
 * @route '/admin/courses/courses/lessons/reorder'
 */
        reorderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reorder.url(options),
            method: 'post',
        })
    
    reorder.form = reorderForm
const LessonController = { index, store, update, destroy, reorder }

export default LessonController