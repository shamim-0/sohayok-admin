import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import exams from './exams'
import instructor944daf from './instructor'
import routineFf37ce from './routine'
import content917e12 from './content'
import lesson from './lesson'
import lessons from './lessons'
import featuresB52034 from './features'
import popular from './popular'
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
* @see \App\Http\Controllers\CourseController::student
 * @see app/Http/Controllers/CourseController.php:117
 * @route '/admin/courses/students/{course}'
 */
export const student = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: student.url(args, options),
    method: 'get',
})

student.definition = {
    methods: ["get","head"],
    url: '/admin/courses/students/{course}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CourseController::student
 * @see app/Http/Controllers/CourseController.php:117
 * @route '/admin/courses/students/{course}'
 */
student.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return student.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseController::student
 * @see app/Http/Controllers/CourseController.php:117
 * @route '/admin/courses/students/{course}'
 */
student.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: student.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CourseController::student
 * @see app/Http/Controllers/CourseController.php:117
 * @route '/admin/courses/students/{course}'
 */
student.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: student.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CourseController::student
 * @see app/Http/Controllers/CourseController.php:117
 * @route '/admin/courses/students/{course}'
 */
    const studentForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: student.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CourseController::student
 * @see app/Http/Controllers/CourseController.php:117
 * @route '/admin/courses/students/{course}'
 */
        studentForm.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: student.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CourseController::student
 * @see app/Http/Controllers/CourseController.php:117
 * @route '/admin/courses/students/{course}'
 */
        studentForm.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: student.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    student.form = studentForm
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
* @see \App\Http\Controllers\CourseInstructorController::instructor
 * @see app/Http/Controllers/CourseInstructorController.php:12
 * @route '/admin/courses/instructor/{course}'
 */
export const instructor = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: instructor.url(args, options),
    method: 'get',
})

instructor.definition = {
    methods: ["get","head"],
    url: '/admin/courses/instructor/{course}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CourseInstructorController::instructor
 * @see app/Http/Controllers/CourseInstructorController.php:12
 * @route '/admin/courses/instructor/{course}'
 */
instructor.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return instructor.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseInstructorController::instructor
 * @see app/Http/Controllers/CourseInstructorController.php:12
 * @route '/admin/courses/instructor/{course}'
 */
instructor.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: instructor.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CourseInstructorController::instructor
 * @see app/Http/Controllers/CourseInstructorController.php:12
 * @route '/admin/courses/instructor/{course}'
 */
instructor.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: instructor.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CourseInstructorController::instructor
 * @see app/Http/Controllers/CourseInstructorController.php:12
 * @route '/admin/courses/instructor/{course}'
 */
    const instructorForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: instructor.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CourseInstructorController::instructor
 * @see app/Http/Controllers/CourseInstructorController.php:12
 * @route '/admin/courses/instructor/{course}'
 */
        instructorForm.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: instructor.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CourseInstructorController::instructor
 * @see app/Http/Controllers/CourseInstructorController.php:12
 * @route '/admin/courses/instructor/{course}'
 */
        instructorForm.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: instructor.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    instructor.form = instructorForm
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
* @see \App\Http\Controllers\CourseFeaturesController::features
 * @see app/Http/Controllers/CourseFeaturesController.php:14
 * @route '/admin/courses/{course}/features'
 */
export const features = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: features.url(args, options),
    method: 'get',
})

features.definition = {
    methods: ["get","head"],
    url: '/admin/courses/{course}/features',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CourseFeaturesController::features
 * @see app/Http/Controllers/CourseFeaturesController.php:14
 * @route '/admin/courses/{course}/features'
 */
features.url = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return features.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseFeaturesController::features
 * @see app/Http/Controllers/CourseFeaturesController.php:14
 * @route '/admin/courses/{course}/features'
 */
features.get = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: features.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CourseFeaturesController::features
 * @see app/Http/Controllers/CourseFeaturesController.php:14
 * @route '/admin/courses/{course}/features'
 */
features.head = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: features.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CourseFeaturesController::features
 * @see app/Http/Controllers/CourseFeaturesController.php:14
 * @route '/admin/courses/{course}/features'
 */
    const featuresForm = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: features.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CourseFeaturesController::features
 * @see app/Http/Controllers/CourseFeaturesController.php:14
 * @route '/admin/courses/{course}/features'
 */
        featuresForm.get = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: features.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CourseFeaturesController::features
 * @see app/Http/Controllers/CourseFeaturesController.php:14
 * @route '/admin/courses/{course}/features'
 */
        featuresForm.head = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: features.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    features.form = featuresForm
/**
* @see \App\Http\Controllers\PopularCourseController::popularcourse
 * @see app/Http/Controllers/PopularCourseController.php:11
 * @route '/admin/panel/courses/popular'
 */
export const popularcourse = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: popularcourse.url(options),
    method: 'get',
})

popularcourse.definition = {
    methods: ["get","head"],
    url: '/admin/panel/courses/popular',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PopularCourseController::popularcourse
 * @see app/Http/Controllers/PopularCourseController.php:11
 * @route '/admin/panel/courses/popular'
 */
popularcourse.url = (options?: RouteQueryOptions) => {
    return popularcourse.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PopularCourseController::popularcourse
 * @see app/Http/Controllers/PopularCourseController.php:11
 * @route '/admin/panel/courses/popular'
 */
popularcourse.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: popularcourse.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PopularCourseController::popularcourse
 * @see app/Http/Controllers/PopularCourseController.php:11
 * @route '/admin/panel/courses/popular'
 */
popularcourse.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: popularcourse.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PopularCourseController::popularcourse
 * @see app/Http/Controllers/PopularCourseController.php:11
 * @route '/admin/panel/courses/popular'
 */
    const popularcourseForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: popularcourse.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PopularCourseController::popularcourse
 * @see app/Http/Controllers/PopularCourseController.php:11
 * @route '/admin/panel/courses/popular'
 */
        popularcourseForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: popularcourse.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PopularCourseController::popularcourse
 * @see app/Http/Controllers/PopularCourseController.php:11
 * @route '/admin/panel/courses/popular'
 */
        popularcourseForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: popularcourse.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    popularcourse.form = popularcourseForm
const courses = {
    exams: Object.assign(exams, exams),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
student: Object.assign(student, student),
edit: Object.assign(edit, edit),
destroy: Object.assign(destroy, destroy),
instructor: Object.assign(instructor, instructor944daf),
routine: Object.assign(routine, routineFf37ce),
content: Object.assign(content, content917e12),
lesson: Object.assign(lesson, lesson),
lessons: Object.assign(lessons, lessons),
features: Object.assign(features, featuresB52034),
popularcourse: Object.assign(popularcourse, popularcourse),
popular: Object.assign(popular, popular),
}

export default courses