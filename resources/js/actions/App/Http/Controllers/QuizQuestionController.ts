import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\QuizQuestionController::index
 * @see app/Http/Controllers/QuizQuestionController.php:16
 * @route '/admin/courses/content/lesson/quiz-question/{course_id}/{chapter_id}/{lesson_id}'
 */
export const index = (args: { course_id: string | number, chapter_id: string | number, lesson_id: string | number } | [course_id: string | number, chapter_id: string | number, lesson_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/courses/content/lesson/quiz-question/{course_id}/{chapter_id}/{lesson_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QuizQuestionController::index
 * @see app/Http/Controllers/QuizQuestionController.php:16
 * @route '/admin/courses/content/lesson/quiz-question/{course_id}/{chapter_id}/{lesson_id}'
 */
index.url = (args: { course_id: string | number, chapter_id: string | number, lesson_id: string | number } | [course_id: string | number, chapter_id: string | number, lesson_id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    course_id: args[0],
                    chapter_id: args[1],
                    lesson_id: args[2],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course_id: args.course_id,
                                chapter_id: args.chapter_id,
                                lesson_id: args.lesson_id,
                }

    return index.definition.url
            .replace('{course_id}', parsedArgs.course_id.toString())
            .replace('{chapter_id}', parsedArgs.chapter_id.toString())
            .replace('{lesson_id}', parsedArgs.lesson_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuizQuestionController::index
 * @see app/Http/Controllers/QuizQuestionController.php:16
 * @route '/admin/courses/content/lesson/quiz-question/{course_id}/{chapter_id}/{lesson_id}'
 */
index.get = (args: { course_id: string | number, chapter_id: string | number, lesson_id: string | number } | [course_id: string | number, chapter_id: string | number, lesson_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\QuizQuestionController::index
 * @see app/Http/Controllers/QuizQuestionController.php:16
 * @route '/admin/courses/content/lesson/quiz-question/{course_id}/{chapter_id}/{lesson_id}'
 */
index.head = (args: { course_id: string | number, chapter_id: string | number, lesson_id: string | number } | [course_id: string | number, chapter_id: string | number, lesson_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\QuizQuestionController::index
 * @see app/Http/Controllers/QuizQuestionController.php:16
 * @route '/admin/courses/content/lesson/quiz-question/{course_id}/{chapter_id}/{lesson_id}'
 */
    const indexForm = (args: { course_id: string | number, chapter_id: string | number, lesson_id: string | number } | [course_id: string | number, chapter_id: string | number, lesson_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\QuizQuestionController::index
 * @see app/Http/Controllers/QuizQuestionController.php:16
 * @route '/admin/courses/content/lesson/quiz-question/{course_id}/{chapter_id}/{lesson_id}'
 */
        indexForm.get = (args: { course_id: string | number, chapter_id: string | number, lesson_id: string | number } | [course_id: string | number, chapter_id: string | number, lesson_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\QuizQuestionController::index
 * @see app/Http/Controllers/QuizQuestionController.php:16
 * @route '/admin/courses/content/lesson/quiz-question/{course_id}/{chapter_id}/{lesson_id}'
 */
        indexForm.head = (args: { course_id: string | number, chapter_id: string | number, lesson_id: string | number } | [course_id: string | number, chapter_id: string | number, lesson_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\QuizQuestionController::store
 * @see app/Http/Controllers/QuizQuestionController.php:28
 * @route '/admin/courses/quiz-questions'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/courses/quiz-questions',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\QuizQuestionController::store
 * @see app/Http/Controllers/QuizQuestionController.php:28
 * @route '/admin/courses/quiz-questions'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuizQuestionController::store
 * @see app/Http/Controllers/QuizQuestionController.php:28
 * @route '/admin/courses/quiz-questions'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\QuizQuestionController::store
 * @see app/Http/Controllers/QuizQuestionController.php:28
 * @route '/admin/courses/quiz-questions'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\QuizQuestionController::store
 * @see app/Http/Controllers/QuizQuestionController.php:28
 * @route '/admin/courses/quiz-questions'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\QuizQuestionController::update
 * @see app/Http/Controllers/QuizQuestionController.php:47
 * @route '/admin/courses/quiz-questions/{id}'
 */
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/courses/quiz-questions/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\QuizQuestionController::update
 * @see app/Http/Controllers/QuizQuestionController.php:47
 * @route '/admin/courses/quiz-questions/{id}'
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
* @see \App\Http\Controllers\QuizQuestionController::update
 * @see app/Http/Controllers/QuizQuestionController.php:47
 * @route '/admin/courses/quiz-questions/{id}'
 */
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\QuizQuestionController::update
 * @see app/Http/Controllers/QuizQuestionController.php:47
 * @route '/admin/courses/quiz-questions/{id}'
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
* @see \App\Http\Controllers\QuizQuestionController::update
 * @see app/Http/Controllers/QuizQuestionController.php:47
 * @route '/admin/courses/quiz-questions/{id}'
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
* @see \App\Http\Controllers\QuizQuestionController::destroy
 * @see app/Http/Controllers/QuizQuestionController.php:66
 * @route '/admin/courses/quiz-questions/{id}'
 */
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/courses/quiz-questions/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\QuizQuestionController::destroy
 * @see app/Http/Controllers/QuizQuestionController.php:66
 * @route '/admin/courses/quiz-questions/{id}'
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
* @see \App\Http\Controllers\QuizQuestionController::destroy
 * @see app/Http/Controllers/QuizQuestionController.php:66
 * @route '/admin/courses/quiz-questions/{id}'
 */
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\QuizQuestionController::destroy
 * @see app/Http/Controllers/QuizQuestionController.php:66
 * @route '/admin/courses/quiz-questions/{id}'
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
* @see \App\Http\Controllers\QuizQuestionController::destroy
 * @see app/Http/Controllers/QuizQuestionController.php:66
 * @route '/admin/courses/quiz-questions/{id}'
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
* @see \App\Http\Controllers\QuizQuestionController::importMethod
 * @see app/Http/Controllers/QuizQuestionController.php:76
 * @route '/admin/courses/quiz-questions/import'
 */
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

importMethod.definition = {
    methods: ["post"],
    url: '/admin/courses/quiz-questions/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\QuizQuestionController::importMethod
 * @see app/Http/Controllers/QuizQuestionController.php:76
 * @route '/admin/courses/quiz-questions/import'
 */
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuizQuestionController::importMethod
 * @see app/Http/Controllers/QuizQuestionController.php:76
 * @route '/admin/courses/quiz-questions/import'
 */
importMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\QuizQuestionController::importMethod
 * @see app/Http/Controllers/QuizQuestionController.php:76
 * @route '/admin/courses/quiz-questions/import'
 */
    const importMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: importMethod.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\QuizQuestionController::importMethod
 * @see app/Http/Controllers/QuizQuestionController.php:76
 * @route '/admin/courses/quiz-questions/import'
 */
        importMethodForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: importMethod.url(options),
            method: 'post',
        })
    
    importMethod.form = importMethodForm
const QuizQuestionController = { index, store, update, destroy, importMethod, import: importMethod }

export default QuizQuestionController