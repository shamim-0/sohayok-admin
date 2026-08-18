import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\QuestionController::page
 * @see app/Http/Controllers/QuestionController.php:105
 * @route '/admin/panel/question/import'
 */
export const page = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(options),
    method: 'get',
})

page.definition = {
    methods: ["get","head"],
    url: '/admin/panel/question/import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QuestionController::page
 * @see app/Http/Controllers/QuestionController.php:105
 * @route '/admin/panel/question/import'
 */
page.url = (options?: RouteQueryOptions) => {
    return page.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuestionController::page
 * @see app/Http/Controllers/QuestionController.php:105
 * @route '/admin/panel/question/import'
 */
page.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\QuestionController::page
 * @see app/Http/Controllers/QuestionController.php:105
 * @route '/admin/panel/question/import'
 */
page.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: page.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\QuestionController::page
 * @see app/Http/Controllers/QuestionController.php:105
 * @route '/admin/panel/question/import'
 */
    const pageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: page.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\QuestionController::page
 * @see app/Http/Controllers/QuestionController.php:105
 * @route '/admin/panel/question/import'
 */
        pageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: page.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\QuestionController::page
 * @see app/Http/Controllers/QuestionController.php:105
 * @route '/admin/panel/question/import'
 */
        pageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: page.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    page.form = pageForm