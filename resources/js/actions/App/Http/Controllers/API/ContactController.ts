import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\API\ContactController::contact_store
 * @see app/Http/Controllers/API/ContactController.php:12
 * @route '/api/student/contact/store'
 */
export const contact_store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contact_store.url(options),
    method: 'post',
})

contact_store.definition = {
    methods: ["post"],
    url: '/api/student/contact/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\API\ContactController::contact_store
 * @see app/Http/Controllers/API/ContactController.php:12
 * @route '/api/student/contact/store'
 */
contact_store.url = (options?: RouteQueryOptions) => {
    return contact_store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\ContactController::contact_store
 * @see app/Http/Controllers/API/ContactController.php:12
 * @route '/api/student/contact/store'
 */
contact_store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contact_store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\API\ContactController::contact_store
 * @see app/Http/Controllers/API/ContactController.php:12
 * @route '/api/student/contact/store'
 */
    const contact_storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: contact_store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\API\ContactController::contact_store
 * @see app/Http/Controllers/API/ContactController.php:12
 * @route '/api/student/contact/store'
 */
        contact_storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: contact_store.url(options),
            method: 'post',
        })
    
    contact_store.form = contact_storeForm
/**
* @see \App\Http\Controllers\API\ContactController::instructor
 * @see app/Http/Controllers/API/ContactController.php:34
 * @route '/api/instructor'
 */
export const instructor = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: instructor.url(options),
    method: 'get',
})

instructor.definition = {
    methods: ["get","head"],
    url: '/api/instructor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\ContactController::instructor
 * @see app/Http/Controllers/API/ContactController.php:34
 * @route '/api/instructor'
 */
instructor.url = (options?: RouteQueryOptions) => {
    return instructor.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\ContactController::instructor
 * @see app/Http/Controllers/API/ContactController.php:34
 * @route '/api/instructor'
 */
instructor.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: instructor.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\ContactController::instructor
 * @see app/Http/Controllers/API/ContactController.php:34
 * @route '/api/instructor'
 */
instructor.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: instructor.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\ContactController::instructor
 * @see app/Http/Controllers/API/ContactController.php:34
 * @route '/api/instructor'
 */
    const instructorForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: instructor.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\ContactController::instructor
 * @see app/Http/Controllers/API/ContactController.php:34
 * @route '/api/instructor'
 */
        instructorForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: instructor.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\ContactController::instructor
 * @see app/Http/Controllers/API/ContactController.php:34
 * @route '/api/instructor'
 */
        instructorForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: instructor.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    instructor.form = instructorForm
const ContactController = { contact_store, instructor }

export default ContactController