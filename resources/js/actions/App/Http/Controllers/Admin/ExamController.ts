import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ExamController::index
 * @see app/Http/Controllers/Admin/ExamController.php:14
 * @route '/admin/courses/{course}/exams'
 */
export const index = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/courses/{course}/exams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ExamController::index
 * @see app/Http/Controllers/Admin/ExamController.php:14
 * @route '/admin/courses/{course}/exams'
 */
index.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExamController::index
 * @see app/Http/Controllers/Admin/ExamController.php:14
 * @route '/admin/courses/{course}/exams'
 */
index.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ExamController::index
 * @see app/Http/Controllers/Admin/ExamController.php:14
 * @route '/admin/courses/{course}/exams'
 */
index.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ExamController::index
 * @see app/Http/Controllers/Admin/ExamController.php:14
 * @route '/admin/courses/{course}/exams'
 */
    const indexForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ExamController::index
 * @see app/Http/Controllers/Admin/ExamController.php:14
 * @route '/admin/courses/{course}/exams'
 */
        indexForm.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ExamController::index
 * @see app/Http/Controllers/Admin/ExamController.php:14
 * @route '/admin/courses/{course}/exams'
 */
        indexForm.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Admin\ExamController::create
 * @see app/Http/Controllers/Admin/ExamController.php:23
 * @route '/admin/courses/{course}/exams/create'
 */
export const create = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/courses/{course}/exams/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ExamController::create
 * @see app/Http/Controllers/Admin/ExamController.php:23
 * @route '/admin/courses/{course}/exams/create'
 */
create.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return create.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExamController::create
 * @see app/Http/Controllers/Admin/ExamController.php:23
 * @route '/admin/courses/{course}/exams/create'
 */
create.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ExamController::create
 * @see app/Http/Controllers/Admin/ExamController.php:23
 * @route '/admin/courses/{course}/exams/create'
 */
create.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ExamController::create
 * @see app/Http/Controllers/Admin/ExamController.php:23
 * @route '/admin/courses/{course}/exams/create'
 */
    const createForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ExamController::create
 * @see app/Http/Controllers/Admin/ExamController.php:23
 * @route '/admin/courses/{course}/exams/create'
 */
        createForm.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ExamController::create
 * @see app/Http/Controllers/Admin/ExamController.php:23
 * @route '/admin/courses/{course}/exams/create'
 */
        createForm.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Admin\ExamController::store
 * @see app/Http/Controllers/Admin/ExamController.php:28
 * @route '/admin/courses/{course}/exams'
 */
export const store = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/courses/{course}/exams',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ExamController::store
 * @see app/Http/Controllers/Admin/ExamController.php:28
 * @route '/admin/courses/{course}/exams'
 */
store.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExamController::store
 * @see app/Http/Controllers/Admin/ExamController.php:28
 * @route '/admin/courses/{course}/exams'
 */
store.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\ExamController::store
 * @see app/Http/Controllers/Admin/ExamController.php:28
 * @route '/admin/courses/{course}/exams'
 */
    const storeForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ExamController::store
 * @see app/Http/Controllers/Admin/ExamController.php:28
 * @route '/admin/courses/{course}/exams'
 */
        storeForm.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\ExamController::show
 * @see app/Http/Controllers/Admin/ExamController.php:58
 * @route '/admin/courses/{course}/exams/{exam}'
 */
export const show = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/courses/{course}/exams/{exam}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ExamController::show
 * @see app/Http/Controllers/Admin/ExamController.php:58
 * @route '/admin/courses/{course}/exams/{exam}'
 */
show.url = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                    exam: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: typeof args.course === 'object'
                ? args.course.id
                : args.course,
                                exam: typeof args.exam === 'object'
                ? args.exam.id
                : args.exam,
                }

    return show.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExamController::show
 * @see app/Http/Controllers/Admin/ExamController.php:58
 * @route '/admin/courses/{course}/exams/{exam}'
 */
show.get = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ExamController::show
 * @see app/Http/Controllers/Admin/ExamController.php:58
 * @route '/admin/courses/{course}/exams/{exam}'
 */
show.head = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ExamController::show
 * @see app/Http/Controllers/Admin/ExamController.php:58
 * @route '/admin/courses/{course}/exams/{exam}'
 */
    const showForm = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ExamController::show
 * @see app/Http/Controllers/Admin/ExamController.php:58
 * @route '/admin/courses/{course}/exams/{exam}'
 */
        showForm.get = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ExamController::show
 * @see app/Http/Controllers/Admin/ExamController.php:58
 * @route '/admin/courses/{course}/exams/{exam}'
 */
        showForm.head = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\ExamController::edit
 * @see app/Http/Controllers/Admin/ExamController.php:64
 * @route '/admin/courses/{course}/exams/{exam}/edit'
 */
export const edit = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/courses/{course}/exams/{exam}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ExamController::edit
 * @see app/Http/Controllers/Admin/ExamController.php:64
 * @route '/admin/courses/{course}/exams/{exam}/edit'
 */
edit.url = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                    exam: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: typeof args.course === 'object'
                ? args.course.id
                : args.course,
                                exam: typeof args.exam === 'object'
                ? args.exam.id
                : args.exam,
                }

    return edit.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExamController::edit
 * @see app/Http/Controllers/Admin/ExamController.php:64
 * @route '/admin/courses/{course}/exams/{exam}/edit'
 */
edit.get = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ExamController::edit
 * @see app/Http/Controllers/Admin/ExamController.php:64
 * @route '/admin/courses/{course}/exams/{exam}/edit'
 */
edit.head = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ExamController::edit
 * @see app/Http/Controllers/Admin/ExamController.php:64
 * @route '/admin/courses/{course}/exams/{exam}/edit'
 */
    const editForm = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ExamController::edit
 * @see app/Http/Controllers/Admin/ExamController.php:64
 * @route '/admin/courses/{course}/exams/{exam}/edit'
 */
        editForm.get = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ExamController::edit
 * @see app/Http/Controllers/Admin/ExamController.php:64
 * @route '/admin/courses/{course}/exams/{exam}/edit'
 */
        editForm.head = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\ExamController::update
 * @see app/Http/Controllers/Admin/ExamController.php:69
 * @route '/admin/courses/{course}/exams/{exam}'
 */
export const update = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/courses/{course}/exams/{exam}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\ExamController::update
 * @see app/Http/Controllers/Admin/ExamController.php:69
 * @route '/admin/courses/{course}/exams/{exam}'
 */
update.url = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                    exam: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: typeof args.course === 'object'
                ? args.course.id
                : args.course,
                                exam: typeof args.exam === 'object'
                ? args.exam.id
                : args.exam,
                }

    return update.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExamController::update
 * @see app/Http/Controllers/Admin/ExamController.php:69
 * @route '/admin/courses/{course}/exams/{exam}'
 */
update.put = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\ExamController::update
 * @see app/Http/Controllers/Admin/ExamController.php:69
 * @route '/admin/courses/{course}/exams/{exam}'
 */
    const updateForm = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ExamController::update
 * @see app/Http/Controllers/Admin/ExamController.php:69
 * @route '/admin/courses/{course}/exams/{exam}'
 */
        updateForm.put = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\ExamController::destroy
 * @see app/Http/Controllers/Admin/ExamController.php:102
 * @route '/admin/courses/{course}/exams/{exam}'
 */
export const destroy = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/courses/{course}/exams/{exam}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ExamController::destroy
 * @see app/Http/Controllers/Admin/ExamController.php:102
 * @route '/admin/courses/{course}/exams/{exam}'
 */
destroy.url = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                    exam: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: typeof args.course === 'object'
                ? args.course.id
                : args.course,
                                exam: typeof args.exam === 'object'
                ? args.exam.id
                : args.exam,
                }

    return destroy.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExamController::destroy
 * @see app/Http/Controllers/Admin/ExamController.php:102
 * @route '/admin/courses/{course}/exams/{exam}'
 */
destroy.delete = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\ExamController::destroy
 * @see app/Http/Controllers/Admin/ExamController.php:102
 * @route '/admin/courses/{course}/exams/{exam}'
 */
    const destroyForm = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ExamController::destroy
 * @see app/Http/Controllers/Admin/ExamController.php:102
 * @route '/admin/courses/{course}/exams/{exam}'
 */
        destroyForm.delete = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Admin\ExamController::submissions
 * @see app/Http/Controllers/Admin/ExamController.php:115
 * @route '/admin/courses/{course}/exams/{exam}/submissions'
 */
export const submissions = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: submissions.url(args, options),
    method: 'get',
})

submissions.definition = {
    methods: ["get","head"],
    url: '/admin/courses/{course}/exams/{exam}/submissions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ExamController::submissions
 * @see app/Http/Controllers/Admin/ExamController.php:115
 * @route '/admin/courses/{course}/exams/{exam}/submissions'
 */
submissions.url = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                    exam: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: typeof args.course === 'object'
                ? args.course.id
                : args.course,
                                exam: typeof args.exam === 'object'
                ? args.exam.id
                : args.exam,
                }

    return submissions.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{exam}', parsedArgs.exam.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExamController::submissions
 * @see app/Http/Controllers/Admin/ExamController.php:115
 * @route '/admin/courses/{course}/exams/{exam}/submissions'
 */
submissions.get = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: submissions.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ExamController::submissions
 * @see app/Http/Controllers/Admin/ExamController.php:115
 * @route '/admin/courses/{course}/exams/{exam}/submissions'
 */
submissions.head = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: submissions.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ExamController::submissions
 * @see app/Http/Controllers/Admin/ExamController.php:115
 * @route '/admin/courses/{course}/exams/{exam}/submissions'
 */
    const submissionsForm = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: submissions.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ExamController::submissions
 * @see app/Http/Controllers/Admin/ExamController.php:115
 * @route '/admin/courses/{course}/exams/{exam}/submissions'
 */
        submissionsForm.get = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: submissions.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ExamController::submissions
 * @see app/Http/Controllers/Admin/ExamController.php:115
 * @route '/admin/courses/{course}/exams/{exam}/submissions'
 */
        submissionsForm.head = (args: { course: number | { id: number }, exam: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: submissions.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    submissions.form = submissionsForm
/**
* @see \App\Http\Controllers\Admin\ExamController::gradeSubmission
 * @see app/Http/Controllers/Admin/ExamController.php:121
 * @route '/admin/courses/{course}/exams/{exam}/submissions/{submission}/grade'
 */
export const gradeSubmission = (args: { course: number | { id: number }, exam: number | { id: number }, submission: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number }, submission: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: gradeSubmission.url(args, options),
    method: 'post',
})

gradeSubmission.definition = {
    methods: ["post"],
    url: '/admin/courses/{course}/exams/{exam}/submissions/{submission}/grade',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ExamController::gradeSubmission
 * @see app/Http/Controllers/Admin/ExamController.php:121
 * @route '/admin/courses/{course}/exams/{exam}/submissions/{submission}/grade'
 */
gradeSubmission.url = (args: { course: number | { id: number }, exam: number | { id: number }, submission: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number }, submission: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                    exam: args[1],
                    submission: args[2],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: typeof args.course === 'object'
                ? args.course.id
                : args.course,
                                exam: typeof args.exam === 'object'
                ? args.exam.id
                : args.exam,
                                submission: typeof args.submission === 'object'
                ? args.submission.id
                : args.submission,
                }

    return gradeSubmission.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace('{exam}', parsedArgs.exam.toString())
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ExamController::gradeSubmission
 * @see app/Http/Controllers/Admin/ExamController.php:121
 * @route '/admin/courses/{course}/exams/{exam}/submissions/{submission}/grade'
 */
gradeSubmission.post = (args: { course: number | { id: number }, exam: number | { id: number }, submission: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number }, submission: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: gradeSubmission.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\ExamController::gradeSubmission
 * @see app/Http/Controllers/Admin/ExamController.php:121
 * @route '/admin/courses/{course}/exams/{exam}/submissions/{submission}/grade'
 */
    const gradeSubmissionForm = (args: { course: number | { id: number }, exam: number | { id: number }, submission: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number }, submission: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: gradeSubmission.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ExamController::gradeSubmission
 * @see app/Http/Controllers/Admin/ExamController.php:121
 * @route '/admin/courses/{course}/exams/{exam}/submissions/{submission}/grade'
 */
        gradeSubmissionForm.post = (args: { course: number | { id: number }, exam: number | { id: number }, submission: number | { id: number } } | [course: number | { id: number }, exam: number | { id: number }, submission: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: gradeSubmission.url(args, options),
            method: 'post',
        })
    
    gradeSubmission.form = gradeSubmissionForm
const ExamController = { index, create, store, show, edit, update, destroy, submissions, gradeSubmission }

export default ExamController