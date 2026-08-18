import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\SettingController::setting
 * @see app/Http/Controllers/SettingController.php:9
 * @route '/admin/panel/setting'
 */
export const setting = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setting.url(options),
    method: 'get',
})

setting.definition = {
    methods: ["get","head"],
    url: '/admin/panel/setting',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SettingController::setting
 * @see app/Http/Controllers/SettingController.php:9
 * @route '/admin/panel/setting'
 */
setting.url = (options?: RouteQueryOptions) => {
    return setting.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingController::setting
 * @see app/Http/Controllers/SettingController.php:9
 * @route '/admin/panel/setting'
 */
setting.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setting.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SettingController::setting
 * @see app/Http/Controllers/SettingController.php:9
 * @route '/admin/panel/setting'
 */
setting.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: setting.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SettingController::setting
 * @see app/Http/Controllers/SettingController.php:9
 * @route '/admin/panel/setting'
 */
    const settingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: setting.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SettingController::setting
 * @see app/Http/Controllers/SettingController.php:9
 * @route '/admin/panel/setting'
 */
        settingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: setting.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SettingController::setting
 * @see app/Http/Controllers/SettingController.php:9
 * @route '/admin/panel/setting'
 */
        settingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: setting.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    setting.form = settingForm
const panel = {
    setting: Object.assign(setting, setting),
}

export default panel