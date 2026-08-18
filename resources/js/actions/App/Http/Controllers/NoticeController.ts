import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\NoticeController::index
 * @see app/Http/Controllers/NoticeController.php:12
 * @route '/admin/panel/notices'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/panel/notices',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NoticeController::index
 * @see app/Http/Controllers/NoticeController.php:12
 * @route '/admin/panel/notices'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoticeController::index
 * @see app/Http/Controllers/NoticeController.php:12
 * @route '/admin/panel/notices'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NoticeController::index
 * @see app/Http/Controllers/NoticeController.php:12
 * @route '/admin/panel/notices'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\NoticeController::index
 * @see app/Http/Controllers/NoticeController.php:12
 * @route '/admin/panel/notices'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\NoticeController::index
 * @see app/Http/Controllers/NoticeController.php:12
 * @route '/admin/panel/notices'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\NoticeController::index
 * @see app/Http/Controllers/NoticeController.php:12
 * @route '/admin/panel/notices'
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
* @see \App\Http\Controllers\NoticeController::create
 * @see app/Http/Controllers/NoticeController.php:18
 * @route '/admin/panel/notices/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/panel/notices/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NoticeController::create
 * @see app/Http/Controllers/NoticeController.php:18
 * @route '/admin/panel/notices/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoticeController::create
 * @see app/Http/Controllers/NoticeController.php:18
 * @route '/admin/panel/notices/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NoticeController::create
 * @see app/Http/Controllers/NoticeController.php:18
 * @route '/admin/panel/notices/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\NoticeController::create
 * @see app/Http/Controllers/NoticeController.php:18
 * @route '/admin/panel/notices/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\NoticeController::create
 * @see app/Http/Controllers/NoticeController.php:18
 * @route '/admin/panel/notices/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\NoticeController::create
 * @see app/Http/Controllers/NoticeController.php:18
 * @route '/admin/panel/notices/create'
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
* @see \App\Http\Controllers\NoticeController::store
 * @see app/Http/Controllers/NoticeController.php:23
 * @route '/admin/panel/notices'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/panel/notices',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NoticeController::store
 * @see app/Http/Controllers/NoticeController.php:23
 * @route '/admin/panel/notices'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoticeController::store
 * @see app/Http/Controllers/NoticeController.php:23
 * @route '/admin/panel/notices'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\NoticeController::store
 * @see app/Http/Controllers/NoticeController.php:23
 * @route '/admin/panel/notices'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NoticeController::store
 * @see app/Http/Controllers/NoticeController.php:23
 * @route '/admin/panel/notices'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\NoticeController::edit
 * @see app/Http/Controllers/NoticeController.php:58
 * @route '/admin/panel/notices/{notice}/edit'
 */
export const edit = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/panel/notices/{notice}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NoticeController::edit
 * @see app/Http/Controllers/NoticeController.php:58
 * @route '/admin/panel/notices/{notice}/edit'
 */
edit.url = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notice: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { notice: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notice: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notice: typeof args.notice === 'object'
                ? args.notice.id
                : args.notice,
                }

    return edit.definition.url
            .replace('{notice}', parsedArgs.notice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoticeController::edit
 * @see app/Http/Controllers/NoticeController.php:58
 * @route '/admin/panel/notices/{notice}/edit'
 */
edit.get = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NoticeController::edit
 * @see app/Http/Controllers/NoticeController.php:58
 * @route '/admin/panel/notices/{notice}/edit'
 */
edit.head = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\NoticeController::edit
 * @see app/Http/Controllers/NoticeController.php:58
 * @route '/admin/panel/notices/{notice}/edit'
 */
    const editForm = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\NoticeController::edit
 * @see app/Http/Controllers/NoticeController.php:58
 * @route '/admin/panel/notices/{notice}/edit'
 */
        editForm.get = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\NoticeController::edit
 * @see app/Http/Controllers/NoticeController.php:58
 * @route '/admin/panel/notices/{notice}/edit'
 */
        editForm.head = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\NoticeController::update
 * @see app/Http/Controllers/NoticeController.php:63
 * @route '/admin/panel/notices/{notice}'
 */
export const update = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/panel/notices/{notice}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\NoticeController::update
 * @see app/Http/Controllers/NoticeController.php:63
 * @route '/admin/panel/notices/{notice}'
 */
update.url = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notice: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { notice: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notice: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notice: typeof args.notice === 'object'
                ? args.notice.id
                : args.notice,
                }

    return update.definition.url
            .replace('{notice}', parsedArgs.notice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoticeController::update
 * @see app/Http/Controllers/NoticeController.php:63
 * @route '/admin/panel/notices/{notice}'
 */
update.put = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\NoticeController::update
 * @see app/Http/Controllers/NoticeController.php:63
 * @route '/admin/panel/notices/{notice}'
 */
    const updateForm = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NoticeController::update
 * @see app/Http/Controllers/NoticeController.php:63
 * @route '/admin/panel/notices/{notice}'
 */
        updateForm.put = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\NoticeController::destroy
 * @see app/Http/Controllers/NoticeController.php:103
 * @route '/admin/panel/notices/{notice}'
 */
export const destroy = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/panel/notices/{notice}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\NoticeController::destroy
 * @see app/Http/Controllers/NoticeController.php:103
 * @route '/admin/panel/notices/{notice}'
 */
destroy.url = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notice: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { notice: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notice: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notice: typeof args.notice === 'object'
                ? args.notice.id
                : args.notice,
                }

    return destroy.definition.url
            .replace('{notice}', parsedArgs.notice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoticeController::destroy
 * @see app/Http/Controllers/NoticeController.php:103
 * @route '/admin/panel/notices/{notice}'
 */
destroy.delete = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\NoticeController::destroy
 * @see app/Http/Controllers/NoticeController.php:103
 * @route '/admin/panel/notices/{notice}'
 */
    const destroyForm = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NoticeController::destroy
 * @see app/Http/Controllers/NoticeController.php:103
 * @route '/admin/panel/notices/{notice}'
 */
        destroyForm.delete = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\NoticeController::toggleStatus
 * @see app/Http/Controllers/NoticeController.php:116
 * @route '/admin/panel/notices/{notice}/toggle-status'
 */
export const toggleStatus = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/admin/panel/notices/{notice}/toggle-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NoticeController::toggleStatus
 * @see app/Http/Controllers/NoticeController.php:116
 * @route '/admin/panel/notices/{notice}/toggle-status'
 */
toggleStatus.url = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notice: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { notice: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notice: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notice: typeof args.notice === 'object'
                ? args.notice.id
                : args.notice,
                }

    return toggleStatus.definition.url
            .replace('{notice}', parsedArgs.notice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoticeController::toggleStatus
 * @see app/Http/Controllers/NoticeController.php:116
 * @route '/admin/panel/notices/{notice}/toggle-status'
 */
toggleStatus.post = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\NoticeController::toggleStatus
 * @see app/Http/Controllers/NoticeController.php:116
 * @route '/admin/panel/notices/{notice}/toggle-status'
 */
    const toggleStatusForm = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NoticeController::toggleStatus
 * @see app/Http/Controllers/NoticeController.php:116
 * @route '/admin/panel/notices/{notice}/toggle-status'
 */
        toggleStatusForm.post = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleStatus.url(args, options),
            method: 'post',
        })
    
    toggleStatus.form = toggleStatusForm
/**
* @see \App\Http\Controllers\NoticeController::updateOrder
 * @see app/Http/Controllers/NoticeController.php:128
 * @route '/admin/panel/notices/update-order'
 */
export const updateOrder = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateOrder.url(options),
    method: 'post',
})

updateOrder.definition = {
    methods: ["post"],
    url: '/admin/panel/notices/update-order',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NoticeController::updateOrder
 * @see app/Http/Controllers/NoticeController.php:128
 * @route '/admin/panel/notices/update-order'
 */
updateOrder.url = (options?: RouteQueryOptions) => {
    return updateOrder.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoticeController::updateOrder
 * @see app/Http/Controllers/NoticeController.php:128
 * @route '/admin/panel/notices/update-order'
 */
updateOrder.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateOrder.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\NoticeController::updateOrder
 * @see app/Http/Controllers/NoticeController.php:128
 * @route '/admin/panel/notices/update-order'
 */
    const updateOrderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateOrder.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NoticeController::updateOrder
 * @see app/Http/Controllers/NoticeController.php:128
 * @route '/admin/panel/notices/update-order'
 */
        updateOrderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateOrder.url(options),
            method: 'post',
        })
    
    updateOrder.form = updateOrderForm
/**
* @see \App\Http\Controllers\NoticeController::downloadPdf
 * @see app/Http/Controllers/NoticeController.php:152
 * @route '/admin/panel/notices/{notice}/download-pdf'
 */
export const downloadPdf = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadPdf.url(args, options),
    method: 'get',
})

downloadPdf.definition = {
    methods: ["get","head"],
    url: '/admin/panel/notices/{notice}/download-pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NoticeController::downloadPdf
 * @see app/Http/Controllers/NoticeController.php:152
 * @route '/admin/panel/notices/{notice}/download-pdf'
 */
downloadPdf.url = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notice: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { notice: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notice: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notice: typeof args.notice === 'object'
                ? args.notice.id
                : args.notice,
                }

    return downloadPdf.definition.url
            .replace('{notice}', parsedArgs.notice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoticeController::downloadPdf
 * @see app/Http/Controllers/NoticeController.php:152
 * @route '/admin/panel/notices/{notice}/download-pdf'
 */
downloadPdf.get = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadPdf.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NoticeController::downloadPdf
 * @see app/Http/Controllers/NoticeController.php:152
 * @route '/admin/panel/notices/{notice}/download-pdf'
 */
downloadPdf.head = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadPdf.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\NoticeController::downloadPdf
 * @see app/Http/Controllers/NoticeController.php:152
 * @route '/admin/panel/notices/{notice}/download-pdf'
 */
    const downloadPdfForm = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: downloadPdf.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\NoticeController::downloadPdf
 * @see app/Http/Controllers/NoticeController.php:152
 * @route '/admin/panel/notices/{notice}/download-pdf'
 */
        downloadPdfForm.get = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadPdf.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\NoticeController::downloadPdf
 * @see app/Http/Controllers/NoticeController.php:152
 * @route '/admin/panel/notices/{notice}/download-pdf'
 */
        downloadPdfForm.head = (args: { notice: number | { id: number } } | [notice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadPdf.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    downloadPdf.form = downloadPdfForm
/**
* @see \App\Http\Controllers\NoticeController::bulkDelete
 * @see app/Http/Controllers/NoticeController.php:161
 * @route '/admin/panel/notices/bulk-delete'
 */
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkDelete.url(options),
    method: 'post',
})

bulkDelete.definition = {
    methods: ["post"],
    url: '/admin/panel/notices/bulk-delete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NoticeController::bulkDelete
 * @see app/Http/Controllers/NoticeController.php:161
 * @route '/admin/panel/notices/bulk-delete'
 */
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoticeController::bulkDelete
 * @see app/Http/Controllers/NoticeController.php:161
 * @route '/admin/panel/notices/bulk-delete'
 */
bulkDelete.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkDelete.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\NoticeController::bulkDelete
 * @see app/Http/Controllers/NoticeController.php:161
 * @route '/admin/panel/notices/bulk-delete'
 */
    const bulkDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkDelete.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NoticeController::bulkDelete
 * @see app/Http/Controllers/NoticeController.php:161
 * @route '/admin/panel/notices/bulk-delete'
 */
        bulkDeleteForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkDelete.url(options),
            method: 'post',
        })
    
    bulkDelete.form = bulkDeleteForm
const NoticeController = { index, create, store, edit, update, destroy, toggleStatus, updateOrder, downloadPdf, bulkDelete }

export default NoticeController