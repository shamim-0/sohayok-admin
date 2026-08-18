import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CourseController::index
 * @see app/Http/Controllers/CourseController.php:19
 * @route '/admin/courses'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/courses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CourseController::index
 * @see app/Http/Controllers/CourseController.php:19
 * @route '/admin/courses'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseController::index
 * @see app/Http/Controllers/CourseController.php:19
 * @route '/admin/courses'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CourseController::index
 * @see app/Http/Controllers/CourseController.php:19
 * @route '/admin/courses'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CourseController::index
 * @see app/Http/Controllers/CourseController.php:19
 * @route '/admin/courses'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CourseController::index
 * @see app/Http/Controllers/CourseController.php:19
 * @route '/admin/courses'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CourseController::index
 * @see app/Http/Controllers/CourseController.php:19
 * @route '/admin/courses'
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
* @see \App\Http\Controllers\CourseController::create
 * @see app/Http/Controllers/CourseController.php:25
 * @route '/admin/courses/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/courses/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CourseController::create
 * @see app/Http/Controllers/CourseController.php:25
 * @route '/admin/courses/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseController::create
 * @see app/Http/Controllers/CourseController.php:25
 * @route '/admin/courses/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CourseController::create
 * @see app/Http/Controllers/CourseController.php:25
 * @route '/admin/courses/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CourseController::create
 * @see app/Http/Controllers/CourseController.php:25
 * @route '/admin/courses/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CourseController::create
 * @see app/Http/Controllers/CourseController.php:25
 * @route '/admin/courses/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CourseController::create
 * @see app/Http/Controllers/CourseController.php:25
 * @route '/admin/courses/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\CourseController::store
 * @see app/Http/Controllers/CourseController.php:31
 * @route '/admin/courses'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/courses',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseController::store
 * @see app/Http/Controllers/CourseController.php:31
 * @route '/admin/courses'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseController::store
 * @see app/Http/Controllers/CourseController.php:31
 * @route '/admin/courses'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseController::store
 * @see app/Http/Controllers/CourseController.php:31
 * @route '/admin/courses'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseController::store
 * @see app/Http/Controllers/CourseController.php:31
 * @route '/admin/courses'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CourseController::show
 * @see app/Http/Controllers/CourseController.php:90
 * @route '/admin/courses/{course}'
 */
export const show = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/courses/{course}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CourseController::show
 * @see app/Http/Controllers/CourseController.php:90
 * @route '/admin/courses/{course}'
 */
show.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseController::show
 * @see app/Http/Controllers/CourseController.php:90
 * @route '/admin/courses/{course}'
 */
show.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CourseController::show
 * @see app/Http/Controllers/CourseController.php:90
 * @route '/admin/courses/{course}'
 */
show.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CourseController::show
 * @see app/Http/Controllers/CourseController.php:90
 * @route '/admin/courses/{course}'
 */
    const showForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CourseController::show
 * @see app/Http/Controllers/CourseController.php:90
 * @route '/admin/courses/{course}'
 */
        showForm.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CourseController::show
 * @see app/Http/Controllers/CourseController.php:90
 * @route '/admin/courses/{course}'
 */
        showForm.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\CourseController::update_Enrolled
 * @see app/Http/Controllers/CourseController.php:95
 * @route '/admin/courses/update/enrolled/{course}'
 */
export const update_Enrolled = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_Enrolled.url(args, options),
    method: 'post',
})

update_Enrolled.definition = {
    methods: ["post"],
    url: '/admin/courses/update/enrolled/{course}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseController::update_Enrolled
 * @see app/Http/Controllers/CourseController.php:95
 * @route '/admin/courses/update/enrolled/{course}'
 */
update_Enrolled.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update_Enrolled.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseController::update_Enrolled
 * @see app/Http/Controllers/CourseController.php:95
 * @route '/admin/courses/update/enrolled/{course}'
 */
update_Enrolled.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_Enrolled.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseController::update_Enrolled
 * @see app/Http/Controllers/CourseController.php:95
 * @route '/admin/courses/update/enrolled/{course}'
 */
    const update_EnrolledForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update_Enrolled.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseController::update_Enrolled
 * @see app/Http/Controllers/CourseController.php:95
 * @route '/admin/courses/update/enrolled/{course}'
 */
        update_EnrolledForm.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update_Enrolled.url(args, options),
            method: 'post',
        })
    
    update_Enrolled.form = update_EnrolledForm
/**
* @see \App\Http\Controllers\CourseController::show_students
 * @see app/Http/Controllers/CourseController.php:117
 * @route '/admin/courses/students/{course}'
 */
export const show_students = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show_students.url(args, options),
    method: 'get',
})

show_students.definition = {
    methods: ["get","head"],
    url: '/admin/courses/students/{course}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CourseController::show_students
 * @see app/Http/Controllers/CourseController.php:117
 * @route '/admin/courses/students/{course}'
 */
show_students.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show_students.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseController::show_students
 * @see app/Http/Controllers/CourseController.php:117
 * @route '/admin/courses/students/{course}'
 */
show_students.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show_students.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CourseController::show_students
 * @see app/Http/Controllers/CourseController.php:117
 * @route '/admin/courses/students/{course}'
 */
show_students.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show_students.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CourseController::show_students
 * @see app/Http/Controllers/CourseController.php:117
 * @route '/admin/courses/students/{course}'
 */
    const show_studentsForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show_students.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CourseController::show_students
 * @see app/Http/Controllers/CourseController.php:117
 * @route '/admin/courses/students/{course}'
 */
        show_studentsForm.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show_students.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CourseController::show_students
 * @see app/Http/Controllers/CourseController.php:117
 * @route '/admin/courses/students/{course}'
 */
        show_studentsForm.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show_students.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show_students.form = show_studentsForm
/**
* @see \App\Http\Controllers\CourseController::edit
 * @see app/Http/Controllers/CourseController.php:197
 * @route '/admin/courses/{course}/edit'
 */
export const edit = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/courses/{course}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CourseController::edit
 * @see app/Http/Controllers/CourseController.php:197
 * @route '/admin/courses/{course}/edit'
 */
edit.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseController::edit
 * @see app/Http/Controllers/CourseController.php:197
 * @route '/admin/courses/{course}/edit'
 */
edit.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CourseController::edit
 * @see app/Http/Controllers/CourseController.php:197
 * @route '/admin/courses/{course}/edit'
 */
edit.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CourseController::edit
 * @see app/Http/Controllers/CourseController.php:197
 * @route '/admin/courses/{course}/edit'
 */
    const editForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CourseController::edit
 * @see app/Http/Controllers/CourseController.php:197
 * @route '/admin/courses/{course}/edit'
 */
        editForm.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CourseController::edit
 * @see app/Http/Controllers/CourseController.php:197
 * @route '/admin/courses/{course}/edit'
 */
        editForm.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\CourseController::update
 * @see app/Http/Controllers/CourseController.php:203
 * @route '/admin/courses/{course}'
 */
export const update = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/courses/{course}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\CourseController::update
 * @see app/Http/Controllers/CourseController.php:203
 * @route '/admin/courses/{course}'
 */
update.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseController::update
 * @see app/Http/Controllers/CourseController.php:203
 * @route '/admin/courses/{course}'
 */
update.put = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\CourseController::update
 * @see app/Http/Controllers/CourseController.php:203
 * @route '/admin/courses/{course}'
 */
    const updateForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseController::update
 * @see app/Http/Controllers/CourseController.php:203
 * @route '/admin/courses/{course}'
 */
        updateForm.put = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CourseController::destroy
 * @see app/Http/Controllers/CourseController.php:274
 * @route '/admin/courses/{course}'
 */
export const destroy = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/courses/{course}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CourseController::destroy
 * @see app/Http/Controllers/CourseController.php:274
 * @route '/admin/courses/{course}'
 */
destroy.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseController::destroy
 * @see app/Http/Controllers/CourseController.php:274
 * @route '/admin/courses/{course}'
 */
destroy.delete = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CourseController::destroy
 * @see app/Http/Controllers/CourseController.php:274
 * @route '/admin/courses/{course}'
 */
    const destroyForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseController::destroy
 * @see app/Http/Controllers/CourseController.php:274
 * @route '/admin/courses/{course}'
 */
        destroyForm.delete = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CourseController::routine
 * @see app/Http/Controllers/CourseController.php:289
 * @route '/admin/courses/{course}/routine'
 */
export const routine = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: routine.url(args, options),
    method: 'get',
})

routine.definition = {
    methods: ["get","head"],
    url: '/admin/courses/{course}/routine',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CourseController::routine
 * @see app/Http/Controllers/CourseController.php:289
 * @route '/admin/courses/{course}/routine'
 */
routine.url = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: args.course,
                }

    return routine.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseController::routine
 * @see app/Http/Controllers/CourseController.php:289
 * @route '/admin/courses/{course}/routine'
 */
routine.get = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: routine.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CourseController::routine
 * @see app/Http/Controllers/CourseController.php:289
 * @route '/admin/courses/{course}/routine'
 */
routine.head = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: routine.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CourseController::routine
 * @see app/Http/Controllers/CourseController.php:289
 * @route '/admin/courses/{course}/routine'
 */
    const routineForm = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: routine.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CourseController::routine
 * @see app/Http/Controllers/CourseController.php:289
 * @route '/admin/courses/{course}/routine'
 */
        routineForm.get = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: routine.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CourseController::routine
 * @see app/Http/Controllers/CourseController.php:289
 * @route '/admin/courses/{course}/routine'
 */
        routineForm.head = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: routine.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    routine.form = routineForm
/**
* @see \App\Http\Controllers\CourseController::routineStore
 * @see app/Http/Controllers/CourseController.php:296
 * @route '/admin/courses/{course}/routine'
 */
export const routineStore = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: routineStore.url(args, options),
    method: 'post',
})

routineStore.definition = {
    methods: ["post"],
    url: '/admin/courses/{course}/routine',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseController::routineStore
 * @see app/Http/Controllers/CourseController.php:296
 * @route '/admin/courses/{course}/routine'
 */
routineStore.url = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: args.course,
                }

    return routineStore.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseController::routineStore
 * @see app/Http/Controllers/CourseController.php:296
 * @route '/admin/courses/{course}/routine'
 */
routineStore.post = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: routineStore.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseController::routineStore
 * @see app/Http/Controllers/CourseController.php:296
 * @route '/admin/courses/{course}/routine'
 */
    const routineStoreForm = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: routineStore.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseController::routineStore
 * @see app/Http/Controllers/CourseController.php:296
 * @route '/admin/courses/{course}/routine'
 */
        routineStoreForm.post = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: routineStore.url(args, options),
            method: 'post',
        })
    
    routineStore.form = routineStoreForm
/**
* @see \App\Http\Controllers\CourseController::routineDestroy
 * @see app/Http/Controllers/CourseController.php:328
 * @route '/admin/courses/{course}/routine'
 */
export const routineDestroy = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: routineDestroy.url(args, options),
    method: 'delete',
})

routineDestroy.definition = {
    methods: ["delete"],
    url: '/admin/courses/{course}/routine',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CourseController::routineDestroy
 * @see app/Http/Controllers/CourseController.php:328
 * @route '/admin/courses/{course}/routine'
 */
routineDestroy.url = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    course: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        course: args.course,
                }

    return routineDestroy.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseController::routineDestroy
 * @see app/Http/Controllers/CourseController.php:328
 * @route '/admin/courses/{course}/routine'
 */
routineDestroy.delete = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: routineDestroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CourseController::routineDestroy
 * @see app/Http/Controllers/CourseController.php:328
 * @route '/admin/courses/{course}/routine'
 */
    const routineDestroyForm = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: routineDestroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseController::routineDestroy
 * @see app/Http/Controllers/CourseController.php:328
 * @route '/admin/courses/{course}/routine'
 */
        routineDestroyForm.delete = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: routineDestroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    routineDestroy.form = routineDestroyForm
const CourseController = { index, create, store, show, update_Enrolled, show_students, edit, update, destroy, routine, routineStore, routineDestroy }

export default CourseController