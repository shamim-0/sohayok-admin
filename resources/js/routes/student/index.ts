import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import exam4193ac from './exam'
import profile937a89 from './profile'
import progressFb9fab from './progress'
import comment24ac10F276b9 from './comment'
/**
* @see \App\Models\StudentController::courses
 * @see app/Models/StudentController.php:19
 * @route '/student/courses'
 */
export const courses = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courses.url(options),
    method: 'get',
})

courses.definition = {
    methods: ["get","head"],
    url: '/student/courses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Models\StudentController::courses
 * @see app/Models/StudentController.php:19
 * @route '/student/courses'
 */
courses.url = (options?: RouteQueryOptions) => {
    return courses.definition.url + queryParams(options)
}

/**
* @see \App\Models\StudentController::courses
 * @see app/Models/StudentController.php:19
 * @route '/student/courses'
 */
courses.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: courses.url(options),
    method: 'get',
})
/**
* @see \App\Models\StudentController::courses
 * @see app/Models/StudentController.php:19
 * @route '/student/courses'
 */
courses.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: courses.url(options),
    method: 'head',
})

    /**
* @see \App\Models\StudentController::courses
 * @see app/Models/StudentController.php:19
 * @route '/student/courses'
 */
    const coursesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: courses.url(options),
        method: 'get',
    })

            /**
* @see \App\Models\StudentController::courses
 * @see app/Models/StudentController.php:19
 * @route '/student/courses'
 */
        coursesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: courses.url(options),
            method: 'get',
        })
            /**
* @see \App\Models\StudentController::courses
 * @see app/Models/StudentController.php:19
 * @route '/student/courses'
 */
        coursesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: courses.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    courses.form = coursesForm
/**
* @see \App\Http\Controllers\StudentWrittenExamController::exam
 * @see app/Http/Controllers/StudentWrittenExamController.php:12
 * @route '/student/exam/{id}'
 */
export const exam = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exam.url(args, options),
    method: 'get',
})

exam.definition = {
    methods: ["get","head"],
    url: '/student/exam/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentWrittenExamController::exam
 * @see app/Http/Controllers/StudentWrittenExamController.php:12
 * @route '/student/exam/{id}'
 */
exam.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return exam.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentWrittenExamController::exam
 * @see app/Http/Controllers/StudentWrittenExamController.php:12
 * @route '/student/exam/{id}'
 */
exam.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exam.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StudentWrittenExamController::exam
 * @see app/Http/Controllers/StudentWrittenExamController.php:12
 * @route '/student/exam/{id}'
 */
exam.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exam.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StudentWrittenExamController::exam
 * @see app/Http/Controllers/StudentWrittenExamController.php:12
 * @route '/student/exam/{id}'
 */
    const examForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exam.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StudentWrittenExamController::exam
 * @see app/Http/Controllers/StudentWrittenExamController.php:12
 * @route '/student/exam/{id}'
 */
        examForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exam.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StudentWrittenExamController::exam
 * @see app/Http/Controllers/StudentWrittenExamController.php:12
 * @route '/student/exam/{id}'
 */
        examForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exam.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    exam.form = examForm
/**
* @see \App\Models\StudentController::profile
 * @see app/Models/StudentController.php:27
 * @route '/student/profile'
 */
export const profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/student/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Models\StudentController::profile
 * @see app/Models/StudentController.php:27
 * @route '/student/profile'
 */
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \App\Models\StudentController::profile
 * @see app/Models/StudentController.php:27
 * @route '/student/profile'
 */
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})
/**
* @see \App\Models\StudentController::profile
 * @see app/Models/StudentController.php:27
 * @route '/student/profile'
 */
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

    /**
* @see \App\Models\StudentController::profile
 * @see app/Models/StudentController.php:27
 * @route '/student/profile'
 */
    const profileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: profile.url(options),
        method: 'get',
    })

            /**
* @see \App\Models\StudentController::profile
 * @see app/Models/StudentController.php:27
 * @route '/student/profile'
 */
        profileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profile.url(options),
            method: 'get',
        })
            /**
* @see \App\Models\StudentController::profile
 * @see app/Models/StudentController.php:27
 * @route '/student/profile'
 */
        profileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profile.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    profile.form = profileForm
/**
* @see \App\Models\StudentController::progress
 * @see app/Models/StudentController.php:33
 * @route '/student/progress'
 */
export const progress = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: progress.url(options),
    method: 'get',
})

progress.definition = {
    methods: ["get","head"],
    url: '/student/progress',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Models\StudentController::progress
 * @see app/Models/StudentController.php:33
 * @route '/student/progress'
 */
progress.url = (options?: RouteQueryOptions) => {
    return progress.definition.url + queryParams(options)
}

/**
* @see \App\Models\StudentController::progress
 * @see app/Models/StudentController.php:33
 * @route '/student/progress'
 */
progress.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: progress.url(options),
    method: 'get',
})
/**
* @see \App\Models\StudentController::progress
 * @see app/Models/StudentController.php:33
 * @route '/student/progress'
 */
progress.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: progress.url(options),
    method: 'head',
})

    /**
* @see \App\Models\StudentController::progress
 * @see app/Models/StudentController.php:33
 * @route '/student/progress'
 */
    const progressForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: progress.url(options),
        method: 'get',
    })

            /**
* @see \App\Models\StudentController::progress
 * @see app/Models/StudentController.php:33
 * @route '/student/progress'
 */
        progressForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: progress.url(options),
            method: 'get',
        })
            /**
* @see \App\Models\StudentController::progress
 * @see app/Models/StudentController.php:33
 * @route '/student/progress'
 */
        progressForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: progress.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    progress.form = progressForm
/**
* @see \App\Http\Controllers\ClassessController::classes
 * @see app/Http/Controllers/ClassessController.php:17
 * @route '/student/class/{id}'
 */
export const classes = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: classes.url(args, options),
    method: 'get',
})

classes.definition = {
    methods: ["get","head"],
    url: '/student/class/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClassessController::classes
 * @see app/Http/Controllers/ClassessController.php:17
 * @route '/student/class/{id}'
 */
classes.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return classes.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClassessController::classes
 * @see app/Http/Controllers/ClassessController.php:17
 * @route '/student/class/{id}'
 */
classes.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: classes.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ClassessController::classes
 * @see app/Http/Controllers/ClassessController.php:17
 * @route '/student/class/{id}'
 */
classes.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: classes.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ClassessController::classes
 * @see app/Http/Controllers/ClassessController.php:17
 * @route '/student/class/{id}'
 */
    const classesForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: classes.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ClassessController::classes
 * @see app/Http/Controllers/ClassessController.php:17
 * @route '/student/class/{id}'
 */
        classesForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: classes.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ClassessController::classes
 * @see app/Http/Controllers/ClassessController.php:17
 * @route '/student/class/{id}'
 */
        classesForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: classes.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    classes.form = classesForm
/**
* @see \App\Http\Controllers\CommentController::comment
 * @see app/Http/Controllers/CommentController.php:59
 * @route '/student/class/store-comment'
 */
export const comment = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: comment.url(options),
    method: 'post',
})

comment.definition = {
    methods: ["post"],
    url: '/student/class/store-comment',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CommentController::comment
 * @see app/Http/Controllers/CommentController.php:59
 * @route '/student/class/store-comment'
 */
comment.url = (options?: RouteQueryOptions) => {
    return comment.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CommentController::comment
 * @see app/Http/Controllers/CommentController.php:59
 * @route '/student/class/store-comment'
 */
comment.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: comment.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CommentController::comment
 * @see app/Http/Controllers/CommentController.php:59
 * @route '/student/class/store-comment'
 */
    const commentForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: comment.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CommentController::comment
 * @see app/Http/Controllers/CommentController.php:59
 * @route '/student/class/store-comment'
 */
        commentForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: comment.url(options),
            method: 'post',
        })
    
    comment.form = commentForm
/**
* @see \App\Http\Controllers\CommentController::comment
 * @see app/Http/Controllers/CommentController.php:115
 * @route '/student/class/store-comment-reply'
 */
export const comment = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: comment.url(options),
    method: 'post',
})

comment.definition = {
    methods: ["post"],
    url: '/student/class/store-comment-reply',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CommentController::comment
 * @see app/Http/Controllers/CommentController.php:115
 * @route '/student/class/store-comment-reply'
 */
comment.url = (options?: RouteQueryOptions) => {
    return comment.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CommentController::comment
 * @see app/Http/Controllers/CommentController.php:115
 * @route '/student/class/store-comment-reply'
 */
comment.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: comment.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CommentController::comment
 * @see app/Http/Controllers/CommentController.php:115
 * @route '/student/class/store-comment-reply'
 */
    const commentForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: comment.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CommentController::comment
 * @see app/Http/Controllers/CommentController.php:115
 * @route '/student/class/store-comment-reply'
 */
        commentForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: comment.url(options),
            method: 'post',
        })
    
    comment.form = commentForm
/**
* @see \App\Http\Controllers\CommentController::comments
 * @see app/Http/Controllers/CommentController.php:14
 * @route '/comments'
 */
export const comments = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: comments.url(options),
    method: 'get',
})

comments.definition = {
    methods: ["get","head"],
    url: '/comments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CommentController::comments
 * @see app/Http/Controllers/CommentController.php:14
 * @route '/comments'
 */
comments.url = (options?: RouteQueryOptions) => {
    return comments.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CommentController::comments
 * @see app/Http/Controllers/CommentController.php:14
 * @route '/comments'
 */
comments.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: comments.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CommentController::comments
 * @see app/Http/Controllers/CommentController.php:14
 * @route '/comments'
 */
comments.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: comments.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CommentController::comments
 * @see app/Http/Controllers/CommentController.php:14
 * @route '/comments'
 */
    const commentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: comments.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CommentController::comments
 * @see app/Http/Controllers/CommentController.php:14
 * @route '/comments'
 */
        commentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: comments.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CommentController::comments
 * @see app/Http/Controllers/CommentController.php:14
 * @route '/comments'
 */
        commentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: comments.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    comments.form = commentsForm
/**
* @see \App\Http\Controllers\QuizExamController::start_quiz
 * @see app/Http/Controllers/QuizExamController.php:14
 * @route '/student/class/start-quiz/{lessonId}/{courseId}'
 */
export const start_quiz = (args: { lessonId: string | number, courseId: string | number } | [lessonId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start_quiz.url(args, options),
    method: 'get',
})

start_quiz.definition = {
    methods: ["get","head"],
    url: '/student/class/start-quiz/{lessonId}/{courseId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QuizExamController::start_quiz
 * @see app/Http/Controllers/QuizExamController.php:14
 * @route '/student/class/start-quiz/{lessonId}/{courseId}'
 */
start_quiz.url = (args: { lessonId: string | number, courseId: string | number } | [lessonId: string | number, courseId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    lessonId: args[0],
                    courseId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        lessonId: args.lessonId,
                                courseId: args.courseId,
                }

    return start_quiz.definition.url
            .replace('{lessonId}', parsedArgs.lessonId.toString())
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuizExamController::start_quiz
 * @see app/Http/Controllers/QuizExamController.php:14
 * @route '/student/class/start-quiz/{lessonId}/{courseId}'
 */
start_quiz.get = (args: { lessonId: string | number, courseId: string | number } | [lessonId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: start_quiz.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\QuizExamController::start_quiz
 * @see app/Http/Controllers/QuizExamController.php:14
 * @route '/student/class/start-quiz/{lessonId}/{courseId}'
 */
start_quiz.head = (args: { lessonId: string | number, courseId: string | number } | [lessonId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: start_quiz.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\QuizExamController::start_quiz
 * @see app/Http/Controllers/QuizExamController.php:14
 * @route '/student/class/start-quiz/{lessonId}/{courseId}'
 */
    const start_quizForm = (args: { lessonId: string | number, courseId: string | number } | [lessonId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: start_quiz.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\QuizExamController::start_quiz
 * @see app/Http/Controllers/QuizExamController.php:14
 * @route '/student/class/start-quiz/{lessonId}/{courseId}'
 */
        start_quizForm.get = (args: { lessonId: string | number, courseId: string | number } | [lessonId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: start_quiz.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\QuizExamController::start_quiz
 * @see app/Http/Controllers/QuizExamController.php:14
 * @route '/student/class/start-quiz/{lessonId}/{courseId}'
 */
        start_quizForm.head = (args: { lessonId: string | number, courseId: string | number } | [lessonId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: start_quiz.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    start_quiz.form = start_quizForm
const student = {
    courses: Object.assign(courses, courses),
exam: Object.assign(exam, exam4193ac),
profile: Object.assign(profile, profile937a89),
progress: Object.assign(progress, progressFb9fab),
classes: Object.assign(classes, classes),
comment: Object.assign(comment, comment24ac10F276b9),
comments: Object.assign(comments, comments),
start_quiz: Object.assign(start_quiz, start_quiz),
}

export default student