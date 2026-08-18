import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import users from './users'
import categories from './categories'
import courses from './courses'
import chapters from './chapters'
import quiz from './quiz'
import instructors from './instructors'
import promoCodes from './promo-codes'
import notices from './notices'
import reviews from './reviews'
import banners from './banners'
import panel from './panel'
import hero from './hero'
import categorySection from './category-section'
import popularCourseSection from './popular-course-section'
import instructorSection from './instructor-section'
import whyChooseUsSection from './why-choose-us-section'
import footerContent from './footer-content'
import reviewPageSection from './review-page-section'
import orders from './orders'
import subject from './subject'
import topic from './topic'
import question from './question'
/**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:11
 * @route '/admin/panel'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/panel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:11
 * @route '/admin/panel'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:11
 * @route '/admin/panel'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:11
 * @route '/admin/panel'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:11
 * @route '/admin/panel'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:11
 * @route '/admin/panel'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:11
 * @route '/admin/panel'
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
* @see \App\Http\Controllers\ContactController::contact
 * @see app/Http/Controllers/ContactController.php:10
 * @route '/admin/panel/contact'
 */
export const contact = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})

contact.definition = {
    methods: ["get","head"],
    url: '/admin/panel/contact',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContactController::contact
 * @see app/Http/Controllers/ContactController.php:10
 * @route '/admin/panel/contact'
 */
contact.url = (options?: RouteQueryOptions) => {
    return contact.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::contact
 * @see app/Http/Controllers/ContactController.php:10
 * @route '/admin/panel/contact'
 */
contact.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContactController::contact
 * @see app/Http/Controllers/ContactController.php:10
 * @route '/admin/panel/contact'
 */
contact.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contact.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContactController::contact
 * @see app/Http/Controllers/ContactController.php:10
 * @route '/admin/panel/contact'
 */
    const contactForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contact.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContactController::contact
 * @see app/Http/Controllers/ContactController.php:10
 * @route '/admin/panel/contact'
 */
        contactForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contact.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContactController::contact
 * @see app/Http/Controllers/ContactController.php:10
 * @route '/admin/panel/contact'
 */
        contactForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contact.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    contact.form = contactForm
const admin = {
    index: Object.assign(index, index),
users: Object.assign(users, users),
categories: Object.assign(categories, categories),
courses: Object.assign(courses, courses),
chapters: Object.assign(chapters, chapters),
quiz: Object.assign(quiz, quiz),
contact: Object.assign(contact, contact),
instructors: Object.assign(instructors, instructors),
promoCodes: Object.assign(promoCodes, promoCodes),
notices: Object.assign(notices, notices),
reviews: Object.assign(reviews, reviews),
banners: Object.assign(banners, banners),
panel: Object.assign(panel, panel),
hero: Object.assign(hero, hero),
categorySection: Object.assign(categorySection, categorySection),
popularCourseSection: Object.assign(popularCourseSection, popularCourseSection),
instructorSection: Object.assign(instructorSection, instructorSection),
whyChooseUsSection: Object.assign(whyChooseUsSection, whyChooseUsSection),
footerContent: Object.assign(footerContent, footerContent),
reviewPageSection: Object.assign(reviewPageSection, reviewPageSection),
orders: Object.assign(orders, orders),
subject: Object.assign(subject, subject),
topic: Object.assign(topic, topic),
question: Object.assign(question, question),
}

export default admin