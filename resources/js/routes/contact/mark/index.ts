import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\ContactController::read
 * @see app/Http/Controllers/ContactController.php:28
 * @route '/admin/panel/contact/contact/{id}/mark-read'
 */
export const read = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: read.url(args, options),
    method: 'post',
})

read.definition = {
    methods: ["post"],
    url: '/admin/panel/contact/contact/{id}/mark-read',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContactController::read
 * @see app/Http/Controllers/ContactController.php:28
 * @route '/admin/panel/contact/contact/{id}/mark-read'
 */
read.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return read.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::read
 * @see app/Http/Controllers/ContactController.php:28
 * @route '/admin/panel/contact/contact/{id}/mark-read'
 */
read.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: read.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContactController::read
 * @see app/Http/Controllers/ContactController.php:28
 * @route '/admin/panel/contact/contact/{id}/mark-read'
 */
    const readForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: read.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContactController::read
 * @see app/Http/Controllers/ContactController.php:28
 * @route '/admin/panel/contact/contact/{id}/mark-read'
 */
        readForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: read.url(args, options),
            method: 'post',
        })
    
    read.form = readForm
const mark = {
    read: Object.assign(read, read),
}

export default mark