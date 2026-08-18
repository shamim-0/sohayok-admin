import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CourseContentController::content
 * @see app/Http/Controllers/CourseContentController.php:12
 * @route '/admin/courses/content/{course}'
 */
export const content = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: content.url(args, options),
    method: 'get',
})

content.definition = {
    methods: ["get","head"],
    url: '/admin/courses/content/{course}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CourseContentController::content
 * @see app/Http/Controllers/CourseContentController.php:12
 * @route '/admin/courses/content/{course}'
 */
content.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { course: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: typeof args.course === 'object'
                ? args.course.id
                : args.course,
                }

    return content.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseContentController::content
 * @see app/Http/Controllers/CourseContentController.php:12
 * @route '/admin/courses/content/{course}'
 */
content.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: content.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CourseContentController::content
 * @see app/Http/Controllers/CourseContentController.php:12
 * @route '/admin/courses/content/{course}'
 */
content.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: content.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CourseContentController::content
 * @see app/Http/Controllers/CourseContentController.php:12
 * @route '/admin/courses/content/{course}'
 */
    const contentForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: content.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CourseContentController::content
 * @see app/Http/Controllers/CourseContentController.php:12
 * @route '/admin/courses/content/{course}'
 */
        contentForm.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: content.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CourseContentController::content
 * @see app/Http/Controllers/CourseContentController.php:12
 * @route '/admin/courses/content/{course}'
 */
        contentForm.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: content.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    content.form = contentForm
/**
* @see \App\Http\Controllers\CourseContentController::chapter
 * @see app/Http/Controllers/CourseContentController.php:21
 * @route '/admin/courses/content/chapter/{course}'
 */
export const chapter = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chapter.url(args, options),
    method: 'get',
})

chapter.definition = {
    methods: ["get","head"],
    url: '/admin/courses/content/chapter/{course}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CourseContentController::chapter
 * @see app/Http/Controllers/CourseContentController.php:21
 * @route '/admin/courses/content/chapter/{course}'
 */
chapter.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { course: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: typeof args.course === 'object'
                ? args.course.id
                : args.course,
                }

    return chapter.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseContentController::chapter
 * @see app/Http/Controllers/CourseContentController.php:21
 * @route '/admin/courses/content/chapter/{course}'
 */
chapter.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chapter.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CourseContentController::chapter
 * @see app/Http/Controllers/CourseContentController.php:21
 * @route '/admin/courses/content/chapter/{course}'
 */
chapter.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: chapter.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CourseContentController::chapter
 * @see app/Http/Controllers/CourseContentController.php:21
 * @route '/admin/courses/content/chapter/{course}'
 */
    const chapterForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: chapter.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CourseContentController::chapter
 * @see app/Http/Controllers/CourseContentController.php:21
 * @route '/admin/courses/content/chapter/{course}'
 */
        chapterForm.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: chapter.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CourseContentController::chapter
 * @see app/Http/Controllers/CourseContentController.php:21
 * @route '/admin/courses/content/chapter/{course}'
 */
        chapterForm.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: chapter.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    chapter.form = chapterForm
/**
* @see \App\Http\Controllers\CourseContentController::chapter_edit
 * @see app/Http/Controllers/CourseContentController.php:48
 * @route '/admin/courses/content/chapter/edit/{course_id}/{chapter_id}'
 */
export const chapter_edit = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chapter_edit.url(args, options),
    method: 'get',
})

chapter_edit.definition = {
    methods: ["get","head"],
    url: '/admin/courses/content/chapter/edit/{course_id}/{chapter_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CourseContentController::chapter_edit
 * @see app/Http/Controllers/CourseContentController.php:48
 * @route '/admin/courses/content/chapter/edit/{course_id}/{chapter_id}'
 */
chapter_edit.url = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions) => {
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

    return chapter_edit.definition.url
            .replace('{course_id}', parsedArgs.course_id.toString())
            .replace('{chapter_id}', parsedArgs.chapter_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseContentController::chapter_edit
 * @see app/Http/Controllers/CourseContentController.php:48
 * @route '/admin/courses/content/chapter/edit/{course_id}/{chapter_id}'
 */
chapter_edit.get = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chapter_edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CourseContentController::chapter_edit
 * @see app/Http/Controllers/CourseContentController.php:48
 * @route '/admin/courses/content/chapter/edit/{course_id}/{chapter_id}'
 */
chapter_edit.head = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: chapter_edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CourseContentController::chapter_edit
 * @see app/Http/Controllers/CourseContentController.php:48
 * @route '/admin/courses/content/chapter/edit/{course_id}/{chapter_id}'
 */
    const chapter_editForm = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: chapter_edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CourseContentController::chapter_edit
 * @see app/Http/Controllers/CourseContentController.php:48
 * @route '/admin/courses/content/chapter/edit/{course_id}/{chapter_id}'
 */
        chapter_editForm.get = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: chapter_edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CourseContentController::chapter_edit
 * @see app/Http/Controllers/CourseContentController.php:48
 * @route '/admin/courses/content/chapter/edit/{course_id}/{chapter_id}'
 */
        chapter_editForm.head = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: chapter_edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    chapter_edit.form = chapter_editForm
/**
* @see \App\Http\Controllers\CourseContentController::chapter_store
 * @see app/Http/Controllers/CourseContentController.php:29
 * @route '/admin/courses/content/chapter/{course}'
 */
export const chapter_store = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: chapter_store.url(args, options),
    method: 'post',
})

chapter_store.definition = {
    methods: ["post"],
    url: '/admin/courses/content/chapter/{course}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseContentController::chapter_store
 * @see app/Http/Controllers/CourseContentController.php:29
 * @route '/admin/courses/content/chapter/{course}'
 */
chapter_store.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { course: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: typeof args.course === 'object'
                ? args.course.id
                : args.course,
                }

    return chapter_store.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseContentController::chapter_store
 * @see app/Http/Controllers/CourseContentController.php:29
 * @route '/admin/courses/content/chapter/{course}'
 */
chapter_store.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: chapter_store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseContentController::chapter_store
 * @see app/Http/Controllers/CourseContentController.php:29
 * @route '/admin/courses/content/chapter/{course}'
 */
    const chapter_storeForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: chapter_store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseContentController::chapter_store
 * @see app/Http/Controllers/CourseContentController.php:29
 * @route '/admin/courses/content/chapter/{course}'
 */
        chapter_storeForm.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: chapter_store.url(args, options),
            method: 'post',
        })
    
    chapter_store.form = chapter_storeForm
/**
* @see \App\Http\Controllers\CourseContentController::chapter_update
 * @see app/Http/Controllers/CourseContentController.php:59
 * @route '/admin/courses/content/chapter/store/{course_id}/{chapter_id}'
 */
export const chapter_update = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: chapter_update.url(args, options),
    method: 'post',
})

chapter_update.definition = {
    methods: ["post"],
    url: '/admin/courses/content/chapter/store/{course_id}/{chapter_id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseContentController::chapter_update
 * @see app/Http/Controllers/CourseContentController.php:59
 * @route '/admin/courses/content/chapter/store/{course_id}/{chapter_id}'
 */
chapter_update.url = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions) => {
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

    return chapter_update.definition.url
            .replace('{course_id}', parsedArgs.course_id.toString())
            .replace('{chapter_id}', parsedArgs.chapter_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseContentController::chapter_update
 * @see app/Http/Controllers/CourseContentController.php:59
 * @route '/admin/courses/content/chapter/store/{course_id}/{chapter_id}'
 */
chapter_update.post = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: chapter_update.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseContentController::chapter_update
 * @see app/Http/Controllers/CourseContentController.php:59
 * @route '/admin/courses/content/chapter/store/{course_id}/{chapter_id}'
 */
    const chapter_updateForm = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: chapter_update.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseContentController::chapter_update
 * @see app/Http/Controllers/CourseContentController.php:59
 * @route '/admin/courses/content/chapter/store/{course_id}/{chapter_id}'
 */
        chapter_updateForm.post = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: chapter_update.url(args, options),
            method: 'post',
        })
    
    chapter_update.form = chapter_updateForm
/**
* @see \App\Http\Controllers\CourseContentController::chapter_destroy
 * @see app/Http/Controllers/CourseContentController.php:71
 * @route '/admin/courses/content/chapter/destroy/{chapter_id}'
 */
export const chapter_destroy = (args: { chapter_id: string | number } | [chapter_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: chapter_destroy.url(args, options),
    method: 'delete',
})

chapter_destroy.definition = {
    methods: ["delete"],
    url: '/admin/courses/content/chapter/destroy/{chapter_id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CourseContentController::chapter_destroy
 * @see app/Http/Controllers/CourseContentController.php:71
 * @route '/admin/courses/content/chapter/destroy/{chapter_id}'
 */
chapter_destroy.url = (args: { chapter_id: string | number } | [chapter_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return chapter_destroy.definition.url
            .replace('{chapter_id}', parsedArgs.chapter_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseContentController::chapter_destroy
 * @see app/Http/Controllers/CourseContentController.php:71
 * @route '/admin/courses/content/chapter/destroy/{chapter_id}'
 */
chapter_destroy.delete = (args: { chapter_id: string | number } | [chapter_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: chapter_destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CourseContentController::chapter_destroy
 * @see app/Http/Controllers/CourseContentController.php:71
 * @route '/admin/courses/content/chapter/destroy/{chapter_id}'
 */
    const chapter_destroyForm = (args: { chapter_id: string | number } | [chapter_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: chapter_destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseContentController::chapter_destroy
 * @see app/Http/Controllers/CourseContentController.php:71
 * @route '/admin/courses/content/chapter/destroy/{chapter_id}'
 */
        chapter_destroyForm.delete = (args: { chapter_id: string | number } | [chapter_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: chapter_destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    chapter_destroy.form = chapter_destroyForm
/**
* @see \App\Http\Controllers\CourseContentController::reorder
 * @see app/Http/Controllers/CourseContentController.php:79
 * @route '/admin/courses/admin/courses/{course}/chapters/reorder'
 */
export const reorder = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/admin/courses/admin/courses/{course}/chapters/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseContentController::reorder
 * @see app/Http/Controllers/CourseContentController.php:79
 * @route '/admin/courses/admin/courses/{course}/chapters/reorder'
 */
reorder.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { course: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: typeof args.course === 'object'
                ? args.course.id
                : args.course,
                }

    return reorder.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseContentController::reorder
 * @see app/Http/Controllers/CourseContentController.php:79
 * @route '/admin/courses/admin/courses/{course}/chapters/reorder'
 */
reorder.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseContentController::reorder
 * @see app/Http/Controllers/CourseContentController.php:79
 * @route '/admin/courses/admin/courses/{course}/chapters/reorder'
 */
    const reorderForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reorder.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseContentController::reorder
 * @see app/Http/Controllers/CourseContentController.php:79
 * @route '/admin/courses/admin/courses/{course}/chapters/reorder'
 */
        reorderForm.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reorder.url(args, options),
            method: 'post',
        })
    
    reorder.form = reorderForm
const CourseContentController = { content, chapter, chapter_edit, chapter_store, chapter_update, chapter_destroy, reorder }

export default CourseContentController