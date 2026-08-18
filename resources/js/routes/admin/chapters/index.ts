import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\CourseContentController::store
 * @see app/Http/Controllers/CourseContentController.php:29
 * @route '/admin/courses/content/chapter/{course}'
 */
export const store = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/courses/content/chapter/{course}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseContentController::store
 * @see app/Http/Controllers/CourseContentController.php:29
 * @route '/admin/courses/content/chapter/{course}'
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
* @see \App\Http\Controllers\CourseContentController::store
 * @see app/Http/Controllers/CourseContentController.php:29
 * @route '/admin/courses/content/chapter/{course}'
 */
store.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseContentController::store
 * @see app/Http/Controllers/CourseContentController.php:29
 * @route '/admin/courses/content/chapter/{course}'
 */
    const storeForm = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseContentController::store
 * @see app/Http/Controllers/CourseContentController.php:29
 * @route '/admin/courses/content/chapter/{course}'
 */
        storeForm.post = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CourseContentController::update
 * @see app/Http/Controllers/CourseContentController.php:59
 * @route '/admin/courses/content/chapter/store/{course_id}/{chapter_id}'
 */
export const update = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/courses/content/chapter/store/{course_id}/{chapter_id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourseContentController::update
 * @see app/Http/Controllers/CourseContentController.php:59
 * @route '/admin/courses/content/chapter/store/{course_id}/{chapter_id}'
 */
update.url = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{course_id}', parsedArgs.course_id.toString())
            .replace('{chapter_id}', parsedArgs.chapter_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourseContentController::update
 * @see app/Http/Controllers/CourseContentController.php:59
 * @route '/admin/courses/content/chapter/store/{course_id}/{chapter_id}'
 */
update.post = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CourseContentController::update
 * @see app/Http/Controllers/CourseContentController.php:59
 * @route '/admin/courses/content/chapter/store/{course_id}/{chapter_id}'
 */
    const updateForm = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CourseContentController::update
 * @see app/Http/Controllers/CourseContentController.php:59
 * @route '/admin/courses/content/chapter/store/{course_id}/{chapter_id}'
 */
        updateForm.post = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, options),
            method: 'post',
        })
    
    update.form = updateForm
const chapters = {
    store: Object.assign(store, store),
update: Object.assign(update, update),
}

export default chapters