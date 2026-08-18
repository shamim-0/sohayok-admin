import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\CategorySectionController::index
 * @see app/Http/Controllers/CategorySectionController.php:10
 * @route '/admin/panel/category-section'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/panel/category-section',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CategorySectionController::index
 * @see app/Http/Controllers/CategorySectionController.php:10
 * @route '/admin/panel/category-section'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CategorySectionController::index
 * @see app/Http/Controllers/CategorySectionController.php:10
 * @route '/admin/panel/category-section'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CategorySectionController::index
 * @see app/Http/Controllers/CategorySectionController.php:10
 * @route '/admin/panel/category-section'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CategorySectionController::index
 * @see app/Http/Controllers/CategorySectionController.php:10
 * @route '/admin/panel/category-section'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CategorySectionController::index
 * @see app/Http/Controllers/CategorySectionController.php:10
 * @route '/admin/panel/category-section'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CategorySectionController::index
 * @see app/Http/Controllers/CategorySectionController.php:10
 * @route '/admin/panel/category-section'
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
* @see \App\Http\Controllers\CategorySectionController::store
 * @see app/Http/Controllers/CategorySectionController.php:16
 * @route '/admin/panel/category-section'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/panel/category-section',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CategorySectionController::store
 * @see app/Http/Controllers/CategorySectionController.php:16
 * @route '/admin/panel/category-section'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CategorySectionController::store
 * @see app/Http/Controllers/CategorySectionController.php:16
 * @route '/admin/panel/category-section'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CategorySectionController::store
 * @see app/Http/Controllers/CategorySectionController.php:16
 * @route '/admin/panel/category-section'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CategorySectionController::store
 * @see app/Http/Controllers/CategorySectionController.php:16
 * @route '/admin/panel/category-section'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const categorySection = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
}

export default categorySection