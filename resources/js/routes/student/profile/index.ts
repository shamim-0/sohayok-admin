import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Models\StudentController::update
 * @see app/Models/StudentController.php:46
 * @route '/student/profile'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/student/profile',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Models\StudentController::update
 * @see app/Models/StudentController.php:46
 * @route '/student/profile'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Models\StudentController::update
 * @see app/Models/StudentController.php:46
 * @route '/student/profile'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \App\Models\StudentController::update
 * @see app/Models/StudentController.php:46
 * @route '/student/profile'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \App\Models\StudentController::update
 * @see app/Models/StudentController.php:46
 * @route '/student/profile'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const profile = {
    update: Object.assign(update, update),
}

export default profile