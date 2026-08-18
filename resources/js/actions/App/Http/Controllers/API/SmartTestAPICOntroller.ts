import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::index
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:15
 * @route '/api/smart-test'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/smart-test',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::index
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:15
 * @route '/api/smart-test'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::index
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:15
 * @route '/api/smart-test'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::index
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:15
 * @route '/api/smart-test'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::index
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:15
 * @route '/api/smart-test'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::index
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:15
 * @route '/api/smart-test'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::index
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:15
 * @route '/api/smart-test'
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
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::subject
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:24
 * @route '/api/smart-test/subject/{id}'
 */
export const subject = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: subject.url(args, options),
    method: 'get',
})

subject.definition = {
    methods: ["get","head"],
    url: '/api/smart-test/subject/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::subject
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:24
 * @route '/api/smart-test/subject/{id}'
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
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::subject
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:24
 * @route '/api/smart-test/subject/{id}'
 */
subject.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: subject.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::subject
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:24
 * @route '/api/smart-test/subject/{id}'
 */
subject.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: subject.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::subject
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:24
 * @route '/api/smart-test/subject/{id}'
 */
    const subjectForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: subject.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::subject
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:24
 * @route '/api/smart-test/subject/{id}'
 */
        subjectForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: subject.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::subject
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:24
 * @route '/api/smart-test/subject/{id}'
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
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::start_exam
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:34
 * @route '/api/self/start-exam'
 */
export const start_exam = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start_exam.url(options),
    method: 'get',
})

start_exam.definition = {
    methods: ["get","head"],
    url: '/api/self/start-exam',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::start_exam
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:34
 * @route '/api/self/start-exam'
 */
start_exam.url = (options?: RouteQueryOptions) => {
    return start_exam.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::start_exam
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:34
 * @route '/api/self/start-exam'
 */
start_exam.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start_exam.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::start_exam
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:34
 * @route '/api/self/start-exam'
 */
start_exam.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: start_exam.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::start_exam
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:34
 * @route '/api/self/start-exam'
 */
    const start_examForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: start_exam.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::start_exam
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:34
 * @route '/api/self/start-exam'
 */
        start_examForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: start_exam.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::start_exam
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:34
 * @route '/api/self/start-exam'
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
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::submit_exam
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:58
 * @route '/api/self/exam-submit'
 */
export const submit_exam = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit_exam.url(options),
    method: 'post',
})

submit_exam.definition = {
    methods: ["post"],
    url: '/api/self/exam-submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::submit_exam
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:58
 * @route '/api/self/exam-submit'
 */
submit_exam.url = (options?: RouteQueryOptions) => {
    return submit_exam.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::submit_exam
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:58
 * @route '/api/self/exam-submit'
 */
submit_exam.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit_exam.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::submit_exam
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:58
 * @route '/api/self/exam-submit'
 */
    const submit_examForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: submit_exam.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\API\SmartTestAPICOntroller::submit_exam
 * @see app/Http/Controllers/API/SmartTestAPICOntroller.php:58
 * @route '/api/self/exam-submit'
 */
        submit_examForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: submit_exam.url(options),
            method: 'post',
        })
    
    submit_exam.form = submit_examForm
const SmartTestAPICOntroller = { index, subject, start_exam, submit_exam }

export default SmartTestAPICOntroller