import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\QuestionController::index
 * @see app/Http/Controllers/QuestionController.php:14
 * @route '/admin/panel/question'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/panel/question',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QuestionController::index
 * @see app/Http/Controllers/QuestionController.php:14
 * @route '/admin/panel/question'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuestionController::index
 * @see app/Http/Controllers/QuestionController.php:14
 * @route '/admin/panel/question'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\QuestionController::index
 * @see app/Http/Controllers/QuestionController.php:14
 * @route '/admin/panel/question'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\QuestionController::index
 * @see app/Http/Controllers/QuestionController.php:14
 * @route '/admin/panel/question'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\QuestionController::index
 * @see app/Http/Controllers/QuestionController.php:14
 * @route '/admin/panel/question'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\QuestionController::index
 * @see app/Http/Controllers/QuestionController.php:14
 * @route '/admin/panel/question'
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
* @see \App\Http\Controllers\QuestionController::add
 * @see app/Http/Controllers/QuestionController.php:99
 * @route '/admin/panel/question/add'
 */
export const add = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: add.url(options),
    method: 'get',
})

add.definition = {
    methods: ["get","head"],
    url: '/admin/panel/question/add',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QuestionController::add
 * @see app/Http/Controllers/QuestionController.php:99
 * @route '/admin/panel/question/add'
 */
add.url = (options?: RouteQueryOptions) => {
    return add.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuestionController::add
 * @see app/Http/Controllers/QuestionController.php:99
 * @route '/admin/panel/question/add'
 */
add.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: add.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\QuestionController::add
 * @see app/Http/Controllers/QuestionController.php:99
 * @route '/admin/panel/question/add'
 */
add.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: add.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\QuestionController::add
 * @see app/Http/Controllers/QuestionController.php:99
 * @route '/admin/panel/question/add'
 */
    const addForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: add.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\QuestionController::add
 * @see app/Http/Controllers/QuestionController.php:99
 * @route '/admin/panel/question/add'
 */
        addForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: add.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\QuestionController::add
 * @see app/Http/Controllers/QuestionController.php:99
 * @route '/admin/panel/question/add'
 */
        addForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: add.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    add.form = addForm
/**
* @see \App\Http\Controllers\QuestionController::store
 * @see app/Http/Controllers/QuestionController.php:38
 * @route '/admin/panel/question/store'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/panel/question/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\QuestionController::store
 * @see app/Http/Controllers/QuestionController.php:38
 * @route '/admin/panel/question/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuestionController::store
 * @see app/Http/Controllers/QuestionController.php:38
 * @route '/admin/panel/question/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\QuestionController::store
 * @see app/Http/Controllers/QuestionController.php:38
 * @route '/admin/panel/question/store'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\QuestionController::store
 * @see app/Http/Controllers/QuestionController.php:38
 * @route '/admin/panel/question/store'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\QuestionController::importMethod
 * @see app/Http/Controllers/QuestionController.php:55
 * @route '/admin/panel/question/import'
 */
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

importMethod.definition = {
    methods: ["post"],
    url: '/admin/panel/question/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\QuestionController::importMethod
 * @see app/Http/Controllers/QuestionController.php:55
 * @route '/admin/panel/question/import'
 */
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuestionController::importMethod
 * @see app/Http/Controllers/QuestionController.php:55
 * @route '/admin/panel/question/import'
 */
importMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\QuestionController::importMethod
 * @see app/Http/Controllers/QuestionController.php:55
 * @route '/admin/panel/question/import'
 */
    const importMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: importMethod.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\QuestionController::importMethod
 * @see app/Http/Controllers/QuestionController.php:55
 * @route '/admin/panel/question/import'
 */
        importMethodForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: importMethod.url(options),
            method: 'post',
        })
    
    importMethod.form = importMethodForm
/**
* @see \App\Http\Controllers\QuestionController::update
 * @see app/Http/Controllers/QuestionController.php:84
 * @route '/admin/panel/question/{id}'
 */
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/panel/question/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\QuestionController::update
 * @see app/Http/Controllers/QuestionController.php:84
 * @route '/admin/panel/question/{id}'
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
* @see \App\Http\Controllers\QuestionController::update
 * @see app/Http/Controllers/QuestionController.php:84
 * @route '/admin/panel/question/{id}'
 */
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\QuestionController::update
 * @see app/Http/Controllers/QuestionController.php:84
 * @route '/admin/panel/question/{id}'
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
* @see \App\Http\Controllers\QuestionController::update
 * @see app/Http/Controllers/QuestionController.php:84
 * @route '/admin/panel/question/{id}'
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
* @see \App\Http\Controllers\QuestionController::destroy
 * @see app/Http/Controllers/QuestionController.php:92
 * @route '/admin/panel/question/{id}'
 */
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/panel/question/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\QuestionController::destroy
 * @see app/Http/Controllers/QuestionController.php:92
 * @route '/admin/panel/question/{id}'
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
* @see \App\Http\Controllers\QuestionController::destroy
 * @see app/Http/Controllers/QuestionController.php:92
 * @route '/admin/panel/question/{id}'
 */
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\QuestionController::destroy
 * @see app/Http/Controllers/QuestionController.php:92
 * @route '/admin/panel/question/{id}'
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
* @see \App\Http\Controllers\QuestionController::destroy
 * @see app/Http/Controllers/QuestionController.php:92
 * @route '/admin/panel/question/{id}'
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
const question = {
    index: Object.assign(index, index),
add: Object.assign(add, add),
import: Object.assign(importMethod, importMethod),
store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default question