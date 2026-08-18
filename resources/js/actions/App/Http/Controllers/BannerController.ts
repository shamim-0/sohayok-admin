import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BannerController::index
 * @see app/Http/Controllers/BannerController.php:11
 * @route '/admin/panel/banners'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/panel/banners',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BannerController::index
 * @see app/Http/Controllers/BannerController.php:11
 * @route '/admin/panel/banners'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::index
 * @see app/Http/Controllers/BannerController.php:11
 * @route '/admin/panel/banners'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BannerController::index
 * @see app/Http/Controllers/BannerController.php:11
 * @route '/admin/panel/banners'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BannerController::index
 * @see app/Http/Controllers/BannerController.php:11
 * @route '/admin/panel/banners'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BannerController::index
 * @see app/Http/Controllers/BannerController.php:11
 * @route '/admin/panel/banners'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BannerController::index
 * @see app/Http/Controllers/BannerController.php:11
 * @route '/admin/panel/banners'
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
* @see \App\Http\Controllers\BannerController::add
 * @see app/Http/Controllers/BannerController.php:22
 * @route '/admin/panel/banners/add'
 */
export const add = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: add.url(options),
    method: 'post',
})

add.definition = {
    methods: ["post"],
    url: '/admin/panel/banners/add',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BannerController::add
 * @see app/Http/Controllers/BannerController.php:22
 * @route '/admin/panel/banners/add'
 */
add.url = (options?: RouteQueryOptions) => {
    return add.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::add
 * @see app/Http/Controllers/BannerController.php:22
 * @route '/admin/panel/banners/add'
 */
add.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: add.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BannerController::add
 * @see app/Http/Controllers/BannerController.php:22
 * @route '/admin/panel/banners/add'
 */
    const addForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: add.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BannerController::add
 * @see app/Http/Controllers/BannerController.php:22
 * @route '/admin/panel/banners/add'
 */
        addForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: add.url(options),
            method: 'post',
        })
    
    add.form = addForm
/**
* @see \App\Http\Controllers\BannerController::remove
 * @see app/Http/Controllers/BannerController.php:46
 * @route '/admin/panel/banners/remove/{banner}'
 */
export const remove = (args: { banner: number | { id: number } } | [banner: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: remove.url(args, options),
    method: 'delete',
})

remove.definition = {
    methods: ["delete"],
    url: '/admin/panel/banners/remove/{banner}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BannerController::remove
 * @see app/Http/Controllers/BannerController.php:46
 * @route '/admin/panel/banners/remove/{banner}'
 */
remove.url = (args: { banner: number | { id: number } } | [banner: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { banner: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    banner: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        banner: typeof args.banner === 'object'
                ? args.banner.id
                : args.banner,
                }

    return remove.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::remove
 * @see app/Http/Controllers/BannerController.php:46
 * @route '/admin/panel/banners/remove/{banner}'
 */
remove.delete = (args: { banner: number | { id: number } } | [banner: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: remove.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\BannerController::remove
 * @see app/Http/Controllers/BannerController.php:46
 * @route '/admin/panel/banners/remove/{banner}'
 */
    const removeForm = (args: { banner: number | { id: number } } | [banner: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: remove.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BannerController::remove
 * @see app/Http/Controllers/BannerController.php:46
 * @route '/admin/panel/banners/remove/{banner}'
 */
        removeForm.delete = (args: { banner: number | { id: number } } | [banner: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: remove.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    remove.form = removeForm
/**
* @see \App\Http\Controllers\BannerController::updateOrder
 * @see app/Http/Controllers/BannerController.php:57
 * @route '/admin/panel/banners/update-order'
 */
export const updateOrder = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateOrder.url(options),
    method: 'post',
})

updateOrder.definition = {
    methods: ["post"],
    url: '/admin/panel/banners/update-order',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BannerController::updateOrder
 * @see app/Http/Controllers/BannerController.php:57
 * @route '/admin/panel/banners/update-order'
 */
updateOrder.url = (options?: RouteQueryOptions) => {
    return updateOrder.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::updateOrder
 * @see app/Http/Controllers/BannerController.php:57
 * @route '/admin/panel/banners/update-order'
 */
updateOrder.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateOrder.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BannerController::updateOrder
 * @see app/Http/Controllers/BannerController.php:57
 * @route '/admin/panel/banners/update-order'
 */
    const updateOrderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateOrder.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BannerController::updateOrder
 * @see app/Http/Controllers/BannerController.php:57
 * @route '/admin/panel/banners/update-order'
 */
        updateOrderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateOrder.url(options),
            method: 'post',
        })
    
    updateOrder.form = updateOrderForm
/**
* @see \App\Http\Controllers\BannerController::toggleStatus
 * @see app/Http/Controllers/BannerController.php:88
 * @route '/admin/panel/banners/{banner}/toggle-status'
 */
export const toggleStatus = (args: { banner: number | { id: number } } | [banner: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/admin/panel/banners/{banner}/toggle-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BannerController::toggleStatus
 * @see app/Http/Controllers/BannerController.php:88
 * @route '/admin/panel/banners/{banner}/toggle-status'
 */
toggleStatus.url = (args: { banner: number | { id: number } } | [banner: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { banner: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    banner: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        banner: typeof args.banner === 'object'
                ? args.banner.id
                : args.banner,
                }

    return toggleStatus.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::toggleStatus
 * @see app/Http/Controllers/BannerController.php:88
 * @route '/admin/panel/banners/{banner}/toggle-status'
 */
toggleStatus.post = (args: { banner: number | { id: number } } | [banner: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BannerController::toggleStatus
 * @see app/Http/Controllers/BannerController.php:88
 * @route '/admin/panel/banners/{banner}/toggle-status'
 */
    const toggleStatusForm = (args: { banner: number | { id: number } } | [banner: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BannerController::toggleStatus
 * @see app/Http/Controllers/BannerController.php:88
 * @route '/admin/panel/banners/{banner}/toggle-status'
 */
        toggleStatusForm.post = (args: { banner: number | { id: number } } | [banner: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleStatus.url(args, options),
            method: 'post',
        })
    
    toggleStatus.form = toggleStatusForm
const BannerController = { index, add, remove, updateOrder, toggleStatus }

export default BannerController