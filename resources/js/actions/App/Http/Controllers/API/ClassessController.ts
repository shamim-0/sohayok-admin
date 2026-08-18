import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\API\ClassessController::index
 * @see app/Http/Controllers/API/ClassessController.php:33
 * @route '/api/student/class/{id}/{user_id}'
 */
export const index = (args: { id: string | number, user_id: string | number } | [id: string | number, user_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/student/class/{id}/{user_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\ClassessController::index
 * @see app/Http/Controllers/API/ClassessController.php:33
 * @route '/api/student/class/{id}/{user_id}'
 */
index.url = (args: { id: string | number, user_id: string | number } | [id: string | number, user_id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    user_id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                user_id: args.user_id,
                }

    return index.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{user_id}', parsedArgs.user_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\ClassessController::index
 * @see app/Http/Controllers/API/ClassessController.php:33
 * @route '/api/student/class/{id}/{user_id}'
 */
index.get = (args: { id: string | number, user_id: string | number } | [id: string | number, user_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\ClassessController::index
 * @see app/Http/Controllers/API/ClassessController.php:33
 * @route '/api/student/class/{id}/{user_id}'
 */
index.head = (args: { id: string | number, user_id: string | number } | [id: string | number, user_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\ClassessController::index
 * @see app/Http/Controllers/API/ClassessController.php:33
 * @route '/api/student/class/{id}/{user_id}'
 */
    const indexForm = (args: { id: string | number, user_id: string | number } | [id: string | number, user_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\ClassessController::index
 * @see app/Http/Controllers/API/ClassessController.php:33
 * @route '/api/student/class/{id}/{user_id}'
 */
        indexForm.get = (args: { id: string | number, user_id: string | number } | [id: string | number, user_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\ClassessController::index
 * @see app/Http/Controllers/API/ClassessController.php:33
 * @route '/api/student/class/{id}/{user_id}'
 */
        indexForm.head = (args: { id: string | number, user_id: string | number } | [id: string | number, user_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const ClassessController = { index }

export default ClassessController