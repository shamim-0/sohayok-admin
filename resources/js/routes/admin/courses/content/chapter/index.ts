import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\CourseContentController::edit
 * @see app/Http/Controllers/CourseContentController.php:48
 * @route '/admin/courses/content/chapter/edit/{course_id}/{chapter_id}'
 */
export const edit = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/courses/content/chapter/edit/{course_id}/{chapter_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CourseContentController::edit
 * @see app/Http/Controllers/CourseContentController.php:48
 * @route '/admin/courses/content/chapter/edit/{course_id}/{chapter_id}'
 */
edit.url = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    course_id: args[0],
                    chapter_id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course_id: args.course_id,
                                chapter_id: args.chapter_id,
                }

    return edit.definition.url
            .replace('{course_id}', parsedArgs.course_id.toString())
            .replace('{chapter_id}', parsedArgs.chapter_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseContentController::edit
 * @see app/Http/Controllers/CourseContentController.php:48
 * @route '/admin/courses/content/chapter/edit/{course_id}/{chapter_id}'
 */
edit.get = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CourseContentController::edit
 * @see app/Http/Controllers/CourseContentController.php:48
 * @route '/admin/courses/content/chapter/edit/{course_id}/{chapter_id}'
 */
edit.head = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CourseContentController::edit
 * @see app/Http/Controllers/CourseContentController.php:48
 * @route '/admin/courses/content/chapter/edit/{course_id}/{chapter_id}'
 */
    const editForm = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CourseContentController::edit
 * @see app/Http/Controllers/CourseContentController.php:48
 * @route '/admin/courses/content/chapter/edit/{course_id}/{chapter_id}'
 */
        editForm.get = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CourseContentController::edit
 * @see app/Http/Controllers/CourseContentController.php:48
 * @route '/admin/courses/content/chapter/edit/{course_id}/{chapter_id}'
 */
        editForm.head = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\CourseContentController::destroy
 * @see app/Http/Controllers/CourseContentController.php:71
 * @route '/admin/courses/content/chapter/destroy/{chapter_id}'
 */
export const destroy = (args: { chapter_id: string | number } | [chapter_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/courses/content/chapter/destroy/{chapter_id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CourseContentController::destroy
 * @see app/Http/Controllers/CourseContentController.php:71
 * @route '/admin/courses/content/chapter/destroy/{chapter_id}'
 */
destroy.url = (args: { chapter_id: string | number } | [chapter_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { chapter_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    chapter_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        chapter_id: args.chapter_id,
                }

    return destroy.definition.url
            .replace('{chapter_id}', parsedArgs.chapter_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseContentController::destroy
 * @see app/Http/Controllers/CourseContentController.php:71
 * @route '/admin/courses/content/chapter/destroy/{chapter_id}'
 */
destroy.delete = (args: { chapter_id: string | number } | [chapter_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CourseContentController::destroy
 * @see app/Http/Controllers/CourseContentController.php:71
 * @route '/admin/courses/content/chapter/destroy/{chapter_id}'
 */
    const destroyForm = (args: { chapter_id: string | number } | [chapter_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseContentController::destroy
 * @see app/Http/Controllers/CourseContentController.php:71
 * @route '/admin/courses/content/chapter/destroy/{chapter_id}'
 */
        destroyForm.delete = (args: { chapter_id: string | number } | [chapter_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const chapter = {
    edit: Object.assign(edit, edit),
destroy: Object.assign(destroy, destroy),
}

export default chapter