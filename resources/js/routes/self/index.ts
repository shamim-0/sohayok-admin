import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\SelfTestController::index
 * @see app/Http/Controllers/SelfTestController.php:15
 * @route '/smart-test'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/smart-test',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SelfTestController::index
 * @see app/Http/Controllers/SelfTestController.php:15
 * @route '/smart-test'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SelfTestController::index
 * @see app/Http/Controllers/SelfTestController.php:15
 * @route '/smart-test'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SelfTestController::index
 * @see app/Http/Controllers/SelfTestController.php:15
 * @route '/smart-test'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SelfTestController::index
 * @see app/Http/Controllers/SelfTestController.php:15
 * @route '/smart-test'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SelfTestController::index
 * @see app/Http/Controllers/SelfTestController.php:15
 * @route '/smart-test'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SelfTestController::index
 * @see app/Http/Controllers/SelfTestController.php:15
 * @route '/smart-test'
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
* @see \App\Http\Controllers\SelfTestController::subject
 * @see app/Http/Controllers/SelfTestController.php:23
 * @route '/self-test/{id}'
 */
export const subject = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: subject.url(args, options),
    method: 'get',
})

subject.definition = {
    methods: ["get","head"],
    url: '/self-test/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SelfTestController::subject
 * @see app/Http/Controllers/SelfTestController.php:23
 * @route '/self-test/{id}'
 */
subject.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return subject.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SelfTestController::subject
 * @see app/Http/Controllers/SelfTestController.php:23
 * @route '/self-test/{id}'
 */
subject.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: subject.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SelfTestController::subject
 * @see app/Http/Controllers/SelfTestController.php:23
 * @route '/self-test/{id}'
 */
subject.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: subject.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SelfTestController::subject
 * @see app/Http/Controllers/SelfTestController.php:23
 * @route '/self-test/{id}'
 */
    const subjectForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: subject.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SelfTestController::subject
 * @see app/Http/Controllers/SelfTestController.php:23
 * @route '/self-test/{id}'
 */
        subjectForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: subject.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SelfTestController::subject
 * @see app/Http/Controllers/SelfTestController.php:23
 * @route '/self-test/{id}'
 */
        subjectForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: subject.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    subject.form = subjectForm
/**
* @see \App\Http\Controllers\SelfTestController::start_exam
 * @see app/Http/Controllers/SelfTestController.php:29
 * @route '/self/start-exam'
 */
export const start_exam = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start_exam.url(options),
    method: 'get',
})

start_exam.definition = {
    methods: ["get","head"],
    url: '/self/start-exam',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SelfTestController::start_exam
 * @see app/Http/Controllers/SelfTestController.php:29
 * @route '/self/start-exam'
 */
start_exam.url = (options?: RouteQueryOptions) => {
    return start_exam.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SelfTestController::start_exam
 * @see app/Http/Controllers/SelfTestController.php:29
 * @route '/self/start-exam'
 */
start_exam.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start_exam.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SelfTestController::start_exam
 * @see app/Http/Controllers/SelfTestController.php:29
 * @route '/self/start-exam'
 */
start_exam.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: start_exam.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SelfTestController::start_exam
 * @see app/Http/Controllers/SelfTestController.php:29
 * @route '/self/start-exam'
 */
    const start_examForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: start_exam.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SelfTestController::start_exam
 * @see app/Http/Controllers/SelfTestController.php:29
 * @route '/self/start-exam'
 */
        start_examForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: start_exam.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SelfTestController::start_exam
 * @see app/Http/Controllers/SelfTestController.php:29
 * @route '/self/start-exam'
 */
        start_examForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: start_exam.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    start_exam.form = start_examForm
/**
* @see \App\Http\Controllers\SelfTestController::exam_submit
 * @see app/Http/Controllers/SelfTestController.php:52
 * @route '/self/exam-submit'
 */
export const exam_submit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: exam_submit.url(options),
    method: 'post',
})

exam_submit.definition = {
    methods: ["post"],
    url: '/self/exam-submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SelfTestController::exam_submit
 * @see app/Http/Controllers/SelfTestController.php:52
 * @route '/self/exam-submit'
 */
exam_submit.url = (options?: RouteQueryOptions) => {
    return exam_submit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SelfTestController::exam_submit
 * @see app/Http/Controllers/SelfTestController.php:52
 * @route '/self/exam-submit'
 */
exam_submit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: exam_submit.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SelfTestController::exam_submit
 * @see app/Http/Controllers/SelfTestController.php:52
 * @route '/self/exam-submit'
 */
    const exam_submitForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: exam_submit.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SelfTestController::exam_submit
 * @see app/Http/Controllers/SelfTestController.php:52
 * @route '/self/exam-submit'
 */
        exam_submitForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: exam_submit.url(options),
            method: 'post',
        })
    
    exam_submit.form = exam_submitForm
/**
* @see \App\Http\Controllers\SelfTestController::result
 * @see app/Http/Controllers/SelfTestController.php:80
 * @route '/self/result/{id}'
 */
export const result = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: result.url(args, options),
    method: 'get',
})

result.definition = {
    methods: ["get","head"],
    url: '/self/result/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SelfTestController::result
 * @see app/Http/Controllers/SelfTestController.php:80
 * @route '/self/result/{id}'
 */
result.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return result.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SelfTestController::result
 * @see app/Http/Controllers/SelfTestController.php:80
 * @route '/self/result/{id}'
 */
result.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: result.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SelfTestController::result
 * @see app/Http/Controllers/SelfTestController.php:80
 * @route '/self/result/{id}'
 */
result.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: result.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SelfTestController::result
 * @see app/Http/Controllers/SelfTestController.php:80
 * @route '/self/result/{id}'
 */
    const resultForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: result.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SelfTestController::result
 * @see app/Http/Controllers/SelfTestController.php:80
 * @route '/self/result/{id}'
 */
        resultForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: result.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SelfTestController::result
 * @see app/Http/Controllers/SelfTestController.php:80
 * @route '/self/result/{id}'
 */
        resultForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: result.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    result.form = resultForm
const self = {
    index: Object.assign(index, index),
subject: Object.assign(subject, subject),
start_exam: Object.assign(start_exam, start_exam),
exam_submit: Object.assign(exam_submit, exam_submit),
result: Object.assign(result, result),
}

export default self