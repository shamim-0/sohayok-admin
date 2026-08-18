import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
import quiz from './quiz'
/**
* @see \App\Http\Controllers\LessonController::index
 * @see app/Http/Controllers/LessonController.php:13
 * @route '/admin/courses/content/lesson/{course_id}/{chapter_id}'
 */
export const index = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/courses/content/lesson/{course_id}/{chapter_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LessonController::index
 * @see app/Http/Controllers/LessonController.php:13
 * @route '/admin/courses/content/lesson/{course_id}/{chapter_id}'
 */
index.url = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{course_id}', parsedArgs.course_id.toString())
            .replace('{chapter_id}', parsedArgs.chapter_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LessonController::index
 * @see app/Http/Controllers/LessonController.php:13
 * @route '/admin/courses/content/lesson/{course_id}/{chapter_id}'
 */
index.get = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LessonController::index
 * @see app/Http/Controllers/LessonController.php:13
 * @route '/admin/courses/content/lesson/{course_id}/{chapter_id}'
 */
index.head = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LessonController::index
 * @see app/Http/Controllers/LessonController.php:13
 * @route '/admin/courses/content/lesson/{course_id}/{chapter_id}'
 */
    const indexForm = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LessonController::index
 * @see app/Http/Controllers/LessonController.php:13
 * @route '/admin/courses/content/lesson/{course_id}/{chapter_id}'
 */
        indexForm.get = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LessonController::index
 * @see app/Http/Controllers/LessonController.php:13
 * @route '/admin/courses/content/lesson/{course_id}/{chapter_id}'
 */
        indexForm.head = (args: { course_id: string | number, chapter_id: string | number } | [course_id: string | number, chapter_id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const lesson = {
    index: Object.assign(index, index),
quiz: Object.assign(quiz, quiz),
}

export default lesson