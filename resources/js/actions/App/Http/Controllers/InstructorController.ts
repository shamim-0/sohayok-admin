import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\InstructorController::index
 * @see app/Http/Controllers/InstructorController.php:11
 * @route '/admin/instructor'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/instructor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InstructorController::index
 * @see app/Http/Controllers/InstructorController.php:11
 * @route '/admin/instructor'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstructorController::index
 * @see app/Http/Controllers/InstructorController.php:11
 * @route '/admin/instructor'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InstructorController::index
 * @see app/Http/Controllers/InstructorController.php:11
 * @route '/admin/instructor'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InstructorController::index
 * @see app/Http/Controllers/InstructorController.php:11
 * @route '/admin/instructor'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InstructorController::index
 * @see app/Http/Controllers/InstructorController.php:11
 * @route '/admin/instructor'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InstructorController::index
 * @see app/Http/Controllers/InstructorController.php:11
 * @route '/admin/instructor'
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
* @see \App\Http\Controllers\InstructorController::create
 * @see app/Http/Controllers/InstructorController.php:18
 * @route '/admin/instructor/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/instructor/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InstructorController::create
 * @see app/Http/Controllers/InstructorController.php:18
 * @route '/admin/instructor/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstructorController::create
 * @see app/Http/Controllers/InstructorController.php:18
 * @route '/admin/instructor/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InstructorController::create
 * @see app/Http/Controllers/InstructorController.php:18
 * @route '/admin/instructor/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InstructorController::create
 * @see app/Http/Controllers/InstructorController.php:18
 * @route '/admin/instructor/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InstructorController::create
 * @see app/Http/Controllers/InstructorController.php:18
 * @route '/admin/instructor/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InstructorController::create
 * @see app/Http/Controllers/InstructorController.php:18
 * @route '/admin/instructor/create'
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
* @see \App\Http\Controllers\InstructorController::store
 * @see app/Http/Controllers/InstructorController.php:23
 * @route '/admin/instructor'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/instructor',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\InstructorController::store
 * @see app/Http/Controllers/InstructorController.php:23
 * @route '/admin/instructor'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstructorController::store
 * @see app/Http/Controllers/InstructorController.php:23
 * @route '/admin/instructor'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\InstructorController::store
 * @see app/Http/Controllers/InstructorController.php:23
 * @route '/admin/instructor'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\InstructorController::store
 * @see app/Http/Controllers/InstructorController.php:23
 * @route '/admin/instructor'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\InstructorController::show
 * @see app/Http/Controllers/InstructorController.php:52
 * @route '/admin/instructor/{instructor}'
 */
export const show = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/instructor/{instructor}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InstructorController::show
 * @see app/Http/Controllers/InstructorController.php:52
 * @route '/admin/instructor/{instructor}'
 */
show.url = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { instructor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { instructor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    instructor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        instructor: typeof args.instructor === 'object'
                ? args.instructor.id
                : args.instructor,
                }

    return show.definition.url
            .replace('{instructor}', parsedArgs.instructor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstructorController::show
 * @see app/Http/Controllers/InstructorController.php:52
 * @route '/admin/instructor/{instructor}'
 */
show.get = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InstructorController::show
 * @see app/Http/Controllers/InstructorController.php:52
 * @route '/admin/instructor/{instructor}'
 */
show.head = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InstructorController::show
 * @see app/Http/Controllers/InstructorController.php:52
 * @route '/admin/instructor/{instructor}'
 */
    const showForm = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InstructorController::show
 * @see app/Http/Controllers/InstructorController.php:52
 * @route '/admin/instructor/{instructor}'
 */
        showForm.get = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InstructorController::show
 * @see app/Http/Controllers/InstructorController.php:52
 * @route '/admin/instructor/{instructor}'
 */
        showForm.head = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\InstructorController::edit
 * @see app/Http/Controllers/InstructorController.php:57
 * @route '/admin/instructor/{instructor}/edit'
 */
export const edit = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/instructor/{instructor}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InstructorController::edit
 * @see app/Http/Controllers/InstructorController.php:57
 * @route '/admin/instructor/{instructor}/edit'
 */
edit.url = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { instructor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { instructor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    instructor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        instructor: typeof args.instructor === 'object'
                ? args.instructor.id
                : args.instructor,
                }

    return edit.definition.url
            .replace('{instructor}', parsedArgs.instructor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstructorController::edit
 * @see app/Http/Controllers/InstructorController.php:57
 * @route '/admin/instructor/{instructor}/edit'
 */
edit.get = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InstructorController::edit
 * @see app/Http/Controllers/InstructorController.php:57
 * @route '/admin/instructor/{instructor}/edit'
 */
edit.head = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InstructorController::edit
 * @see app/Http/Controllers/InstructorController.php:57
 * @route '/admin/instructor/{instructor}/edit'
 */
    const editForm = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InstructorController::edit
 * @see app/Http/Controllers/InstructorController.php:57
 * @route '/admin/instructor/{instructor}/edit'
 */
        editForm.get = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InstructorController::edit
 * @see app/Http/Controllers/InstructorController.php:57
 * @route '/admin/instructor/{instructor}/edit'
 */
        editForm.head = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\InstructorController::update
 * @see app/Http/Controllers/InstructorController.php:62
 * @route '/admin/instructor/{instructor}'
 */
export const update = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/instructor/{instructor}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\InstructorController::update
 * @see app/Http/Controllers/InstructorController.php:62
 * @route '/admin/instructor/{instructor}'
 */
update.url = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { instructor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { instructor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    instructor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        instructor: typeof args.instructor === 'object'
                ? args.instructor.id
                : args.instructor,
                }

    return update.definition.url
            .replace('{instructor}', parsedArgs.instructor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstructorController::update
 * @see app/Http/Controllers/InstructorController.php:62
 * @route '/admin/instructor/{instructor}'
 */
update.put = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\InstructorController::update
 * @see app/Http/Controllers/InstructorController.php:62
 * @route '/admin/instructor/{instructor}'
 */
    const updateForm = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\InstructorController::update
 * @see app/Http/Controllers/InstructorController.php:62
 * @route '/admin/instructor/{instructor}'
 */
        updateForm.put = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\InstructorController::destroy
 * @see app/Http/Controllers/InstructorController.php:102
 * @route '/admin/instructor/{instructor}'
 */
export const destroy = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/instructor/{instructor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\InstructorController::destroy
 * @see app/Http/Controllers/InstructorController.php:102
 * @route '/admin/instructor/{instructor}'
 */
destroy.url = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { instructor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { instructor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    instructor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        instructor: typeof args.instructor === 'object'
                ? args.instructor.id
                : args.instructor,
                }

    return destroy.definition.url
            .replace('{instructor}', parsedArgs.instructor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstructorController::destroy
 * @see app/Http/Controllers/InstructorController.php:102
 * @route '/admin/instructor/{instructor}'
 */
destroy.delete = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\InstructorController::destroy
 * @see app/Http/Controllers/InstructorController.php:102
 * @route '/admin/instructor/{instructor}'
 */
    const destroyForm = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\InstructorController::destroy
 * @see app/Http/Controllers/InstructorController.php:102
 * @route '/admin/instructor/{instructor}'
 */
        destroyForm.delete = (args: { instructor: number | { id: number } } | [instructor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\InstructorController::updateOrder
 * @see app/Http/Controllers/InstructorController.php:115
 * @route '/admin/instructor/update-order'
 */
export const updateOrder = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateOrder.url(options),
    method: 'post',
})

updateOrder.definition = {
    methods: ["post"],
    url: '/admin/instructor/update-order',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\InstructorController::updateOrder
 * @see app/Http/Controllers/InstructorController.php:115
 * @route '/admin/instructor/update-order'
 */
updateOrder.url = (options?: RouteQueryOptions) => {
    return updateOrder.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstructorController::updateOrder
 * @see app/Http/Controllers/InstructorController.php:115
 * @route '/admin/instructor/update-order'
 */
updateOrder.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateOrder.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\InstructorController::updateOrder
 * @see app/Http/Controllers/InstructorController.php:115
 * @route '/admin/instructor/update-order'
 */
    const updateOrderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateOrder.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\InstructorController::updateOrder
 * @see app/Http/Controllers/InstructorController.php:115
 * @route '/admin/instructor/update-order'
 */
        updateOrderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateOrder.url(options),
            method: 'post',
        })
    
    updateOrder.form = updateOrderForm
const InstructorController = { index, create, store, show, edit, update, destroy, updateOrder }

export default InstructorController