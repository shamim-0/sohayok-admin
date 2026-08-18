import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ContactController::index
 * @see app/Http/Controllers/ContactController.php:10
 * @route '/admin/panel/contact'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/panel/contact',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContactController::index
 * @see app/Http/Controllers/ContactController.php:10
 * @route '/admin/panel/contact'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::index
 * @see app/Http/Controllers/ContactController.php:10
 * @route '/admin/panel/contact'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContactController::index
 * @see app/Http/Controllers/ContactController.php:10
 * @route '/admin/panel/contact'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContactController::index
 * @see app/Http/Controllers/ContactController.php:10
 * @route '/admin/panel/contact'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContactController::index
 * @see app/Http/Controllers/ContactController.php:10
 * @route '/admin/panel/contact'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContactController::index
 * @see app/Http/Controllers/ContactController.php:10
 * @route '/admin/panel/contact'
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
* @see \App\Http\Controllers\ContactController::show
 * @see app/Http/Controllers/ContactController.php:19
 * @route '/admin/panel/contact/{id}'
 */
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/panel/contact/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContactController::show
 * @see app/Http/Controllers/ContactController.php:19
 * @route '/admin/panel/contact/{id}'
 */
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::show
 * @see app/Http/Controllers/ContactController.php:19
 * @route '/admin/panel/contact/{id}'
 */
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContactController::show
 * @see app/Http/Controllers/ContactController.php:19
 * @route '/admin/panel/contact/{id}'
 */
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContactController::show
 * @see app/Http/Controllers/ContactController.php:19
 * @route '/admin/panel/contact/{id}'
 */
    const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContactController::show
 * @see app/Http/Controllers/ContactController.php:19
 * @route '/admin/panel/contact/{id}'
 */
        showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContactController::show
 * @see app/Http/Controllers/ContactController.php:19
 * @route '/admin/panel/contact/{id}'
 */
        showForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\ContactController::mark_as_read
 * @see app/Http/Controllers/ContactController.php:28
 * @route '/admin/panel/contact/contact/{id}/mark-read'
 */
export const mark_as_read = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: mark_as_read.url(args, options),
    method: 'post',
})

mark_as_read.definition = {
    methods: ["post"],
    url: '/admin/panel/contact/contact/{id}/mark-read',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContactController::mark_as_read
 * @see app/Http/Controllers/ContactController.php:28
 * @route '/admin/panel/contact/contact/{id}/mark-read'
 */
mark_as_read.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return mark_as_read.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::mark_as_read
 * @see app/Http/Controllers/ContactController.php:28
 * @route '/admin/panel/contact/contact/{id}/mark-read'
 */
mark_as_read.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: mark_as_read.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ContactController::mark_as_read
 * @see app/Http/Controllers/ContactController.php:28
 * @route '/admin/panel/contact/contact/{id}/mark-read'
 */
    const mark_as_readForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: mark_as_read.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContactController::mark_as_read
 * @see app/Http/Controllers/ContactController.php:28
 * @route '/admin/panel/contact/contact/{id}/mark-read'
 */
        mark_as_readForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: mark_as_read.url(args, options),
            method: 'post',
        })
    
    mark_as_read.form = mark_as_readForm
/**
* @see \App\Http\Controllers\ContactController::destroy_contact
 * @see app/Http/Controllers/ContactController.php:39
 * @route '/admin/panel/contact/contact/{id}'
 */
export const destroy_contact = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy_contact.url(args, options),
    method: 'delete',
})

destroy_contact.definition = {
    methods: ["delete"],
    url: '/admin/panel/contact/contact/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ContactController::destroy_contact
 * @see app/Http/Controllers/ContactController.php:39
 * @route '/admin/panel/contact/contact/{id}'
 */
destroy_contact.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy_contact.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::destroy_contact
 * @see app/Http/Controllers/ContactController.php:39
 * @route '/admin/panel/contact/contact/{id}'
 */
destroy_contact.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy_contact.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ContactController::destroy_contact
 * @see app/Http/Controllers/ContactController.php:39
 * @route '/admin/panel/contact/contact/{id}'
 */
    const destroy_contactForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy_contact.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ContactController::destroy_contact
 * @see app/Http/Controllers/ContactController.php:39
 * @route '/admin/panel/contact/contact/{id}'
 */
        destroy_contactForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy_contact.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy_contact.form = destroy_contactForm
const ContactController = { index, show, mark_as_read, destroy_contact }

export default ContactController