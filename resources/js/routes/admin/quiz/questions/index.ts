import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
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
const questions = {
    store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
import: Object.assign(importMethod, importMethod),
}

export default questions