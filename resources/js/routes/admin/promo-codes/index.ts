import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\PromoCodeController::index
 * @see app/Http/Controllers/PromoCodeController.php:12
 * @route '/admin/panel/promo-codes'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/panel/promo-codes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PromoCodeController::index
 * @see app/Http/Controllers/PromoCodeController.php:12
 * @route '/admin/panel/promo-codes'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PromoCodeController::index
 * @see app/Http/Controllers/PromoCodeController.php:12
 * @route '/admin/panel/promo-codes'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PromoCodeController::index
 * @see app/Http/Controllers/PromoCodeController.php:12
 * @route '/admin/panel/promo-codes'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PromoCodeController::index
 * @see app/Http/Controllers/PromoCodeController.php:12
 * @route '/admin/panel/promo-codes'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PromoCodeController::index
 * @see app/Http/Controllers/PromoCodeController.php:12
 * @route '/admin/panel/promo-codes'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PromoCodeController::index
 * @see app/Http/Controllers/PromoCodeController.php:12
 * @route '/admin/panel/promo-codes'
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
* @see \App\Http\Controllers\PromoCodeController::create
 * @see app/Http/Controllers/PromoCodeController.php:22
 * @route '/admin/panel/promo-codes/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/panel/promo-codes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PromoCodeController::create
 * @see app/Http/Controllers/PromoCodeController.php:22
 * @route '/admin/panel/promo-codes/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PromoCodeController::create
 * @see app/Http/Controllers/PromoCodeController.php:22
 * @route '/admin/panel/promo-codes/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PromoCodeController::create
 * @see app/Http/Controllers/PromoCodeController.php:22
 * @route '/admin/panel/promo-codes/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PromoCodeController::create
 * @see app/Http/Controllers/PromoCodeController.php:22
 * @route '/admin/panel/promo-codes/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PromoCodeController::create
 * @see app/Http/Controllers/PromoCodeController.php:22
 * @route '/admin/panel/promo-codes/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PromoCodeController::create
 * @see app/Http/Controllers/PromoCodeController.php:22
 * @route '/admin/panel/promo-codes/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\PromoCodeController::store
 * @see app/Http/Controllers/PromoCodeController.php:28
 * @route '/admin/panel/promo-codes'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/panel/promo-codes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PromoCodeController::store
 * @see app/Http/Controllers/PromoCodeController.php:28
 * @route '/admin/panel/promo-codes'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PromoCodeController::store
 * @see app/Http/Controllers/PromoCodeController.php:28
 * @route '/admin/panel/promo-codes'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PromoCodeController::store
 * @see app/Http/Controllers/PromoCodeController.php:28
 * @route '/admin/panel/promo-codes'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PromoCodeController::store
 * @see app/Http/Controllers/PromoCodeController.php:28
 * @route '/admin/panel/promo-codes'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\PromoCodeController::edit
 * @see app/Http/Controllers/PromoCodeController.php:57
 * @route '/admin/panel/promo-codes/{promoCode}/edit'
 */
export const edit = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/panel/promo-codes/{promoCode}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PromoCodeController::edit
 * @see app/Http/Controllers/PromoCodeController.php:57
 * @route '/admin/panel/promo-codes/{promoCode}/edit'
 */
edit.url = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { promoCode: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { promoCode: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    promoCode: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        promoCode: typeof args.promoCode === 'object'
                ? args.promoCode.id
                : args.promoCode,
                }

    return edit.definition.url
            .replace('{promoCode}', parsedArgs.promoCode.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PromoCodeController::edit
 * @see app/Http/Controllers/PromoCodeController.php:57
 * @route '/admin/panel/promo-codes/{promoCode}/edit'
 */
edit.get = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PromoCodeController::edit
 * @see app/Http/Controllers/PromoCodeController.php:57
 * @route '/admin/panel/promo-codes/{promoCode}/edit'
 */
edit.head = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PromoCodeController::edit
 * @see app/Http/Controllers/PromoCodeController.php:57
 * @route '/admin/panel/promo-codes/{promoCode}/edit'
 */
    const editForm = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PromoCodeController::edit
 * @see app/Http/Controllers/PromoCodeController.php:57
 * @route '/admin/panel/promo-codes/{promoCode}/edit'
 */
        editForm.get = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PromoCodeController::edit
 * @see app/Http/Controllers/PromoCodeController.php:57
 * @route '/admin/panel/promo-codes/{promoCode}/edit'
 */
        editForm.head = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\PromoCodeController::update
 * @see app/Http/Controllers/PromoCodeController.php:63
 * @route '/admin/panel/promo-codes/{promoCode}'
 */
export const update = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/panel/promo-codes/{promoCode}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PromoCodeController::update
 * @see app/Http/Controllers/PromoCodeController.php:63
 * @route '/admin/panel/promo-codes/{promoCode}'
 */
update.url = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { promoCode: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { promoCode: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    promoCode: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        promoCode: typeof args.promoCode === 'object'
                ? args.promoCode.id
                : args.promoCode,
                }

    return update.definition.url
            .replace('{promoCode}', parsedArgs.promoCode.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PromoCodeController::update
 * @see app/Http/Controllers/PromoCodeController.php:63
 * @route '/admin/panel/promo-codes/{promoCode}'
 */
update.put = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\PromoCodeController::update
 * @see app/Http/Controllers/PromoCodeController.php:63
 * @route '/admin/panel/promo-codes/{promoCode}'
 */
    const updateForm = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PromoCodeController::update
 * @see app/Http/Controllers/PromoCodeController.php:63
 * @route '/admin/panel/promo-codes/{promoCode}'
 */
        updateForm.put = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\PromoCodeController::destroy
 * @see app/Http/Controllers/PromoCodeController.php:97
 * @route '/admin/panel/promo-codes/{promoCode}'
 */
export const destroy = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/panel/promo-codes/{promoCode}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PromoCodeController::destroy
 * @see app/Http/Controllers/PromoCodeController.php:97
 * @route '/admin/panel/promo-codes/{promoCode}'
 */
destroy.url = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { promoCode: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { promoCode: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    promoCode: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        promoCode: typeof args.promoCode === 'object'
                ? args.promoCode.id
                : args.promoCode,
                }

    return destroy.definition.url
            .replace('{promoCode}', parsedArgs.promoCode.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PromoCodeController::destroy
 * @see app/Http/Controllers/PromoCodeController.php:97
 * @route '/admin/panel/promo-codes/{promoCode}'
 */
destroy.delete = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PromoCodeController::destroy
 * @see app/Http/Controllers/PromoCodeController.php:97
 * @route '/admin/panel/promo-codes/{promoCode}'
 */
    const destroyForm = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PromoCodeController::destroy
 * @see app/Http/Controllers/PromoCodeController.php:97
 * @route '/admin/panel/promo-codes/{promoCode}'
 */
        destroyForm.delete = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\PromoCodeController::toggleStatus
 * @see app/Http/Controllers/PromoCodeController.php:105
 * @route '/admin/panel/promo-codes/{promoCode}/toggle-status'
 */
export const toggleStatus = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/admin/panel/promo-codes/{promoCode}/toggle-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PromoCodeController::toggleStatus
 * @see app/Http/Controllers/PromoCodeController.php:105
 * @route '/admin/panel/promo-codes/{promoCode}/toggle-status'
 */
toggleStatus.url = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { promoCode: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { promoCode: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    promoCode: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        promoCode: typeof args.promoCode === 'object'
                ? args.promoCode.id
                : args.promoCode,
                }

    return toggleStatus.definition.url
            .replace('{promoCode}', parsedArgs.promoCode.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PromoCodeController::toggleStatus
 * @see app/Http/Controllers/PromoCodeController.php:105
 * @route '/admin/panel/promo-codes/{promoCode}/toggle-status'
 */
toggleStatus.post = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PromoCodeController::toggleStatus
 * @see app/Http/Controllers/PromoCodeController.php:105
 * @route '/admin/panel/promo-codes/{promoCode}/toggle-status'
 */
    const toggleStatusForm = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PromoCodeController::toggleStatus
 * @see app/Http/Controllers/PromoCodeController.php:105
 * @route '/admin/panel/promo-codes/{promoCode}/toggle-status'
 */
        toggleStatusForm.post = (args: { promoCode: number | { id: number } } | [promoCode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleStatus.url(args, options),
            method: 'post',
        })
    
    toggleStatus.form = toggleStatusForm
/**
* @see \App\Http\Controllers\PromoCodeController::bulkDelete
 * @see app/Http/Controllers/PromoCodeController.php:117
 * @route '/admin/panel/promo-codes/bulk-delete'
 */
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkDelete.url(options),
    method: 'post',
})

bulkDelete.definition = {
    methods: ["post"],
    url: '/admin/panel/promo-codes/bulk-delete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PromoCodeController::bulkDelete
 * @see app/Http/Controllers/PromoCodeController.php:117
 * @route '/admin/panel/promo-codes/bulk-delete'
 */
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PromoCodeController::bulkDelete
 * @see app/Http/Controllers/PromoCodeController.php:117
 * @route '/admin/panel/promo-codes/bulk-delete'
 */
bulkDelete.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkDelete.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PromoCodeController::bulkDelete
 * @see app/Http/Controllers/PromoCodeController.php:117
 * @route '/admin/panel/promo-codes/bulk-delete'
 */
    const bulkDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkDelete.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PromoCodeController::bulkDelete
 * @see app/Http/Controllers/PromoCodeController.php:117
 * @route '/admin/panel/promo-codes/bulk-delete'
 */
        bulkDeleteForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkDelete.url(options),
            method: 'post',
        })
    
    bulkDelete.form = bulkDeleteForm
const promoCodes = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
toggleStatus: Object.assign(toggleStatus, toggleStatus),
bulkDelete: Object.assign(bulkDelete, bulkDelete),
}

export default promoCodes