import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
import chapter3230f6 from './chapter'
import chapters from './chapters'
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
const content = {
    chapter: Object.assign(chapter, chapter3230f6),
chapters: Object.assign(chapters, chapters),
}

export default content