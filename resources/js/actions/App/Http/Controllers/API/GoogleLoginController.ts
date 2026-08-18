import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\API\GoogleLoginController::handleGoogleCallback
 * @see app/Http/Controllers/API/GoogleLoginController.php:14
 * @route '/api/auth/google'
 */
export const handleGoogleCallback = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleGoogleCallback.url(options),
    method: 'post',
})

handleGoogleCallback.definition = {
    methods: ["post"],
    url: '/api/auth/google',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\API\GoogleLoginController::handleGoogleCallback
 * @see app/Http/Controllers/API/GoogleLoginController.php:14
 * @route '/api/auth/google'
 */
handleGoogleCallback.url = (options?: RouteQueryOptions) => {
    return handleGoogleCallback.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\GoogleLoginController::handleGoogleCallback
 * @see app/Http/Controllers/API/GoogleLoginController.php:14
 * @route '/api/auth/google'
 */
handleGoogleCallback.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleGoogleCallback.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\API\GoogleLoginController::handleGoogleCallback
 * @see app/Http/Controllers/API/GoogleLoginController.php:14
 * @route '/api/auth/google'
 */
    const handleGoogleCallbackForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: handleGoogleCallback.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\API\GoogleLoginController::handleGoogleCallback
 * @see app/Http/Controllers/API/GoogleLoginController.php:14
 * @route '/api/auth/google'
 */
        handleGoogleCallbackForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: handleGoogleCallback.url(options),
            method: 'post',
        })
    
    handleGoogleCallback.form = handleGoogleCallbackForm
const GoogleLoginController = { handleGoogleCallback }

export default GoogleLoginController