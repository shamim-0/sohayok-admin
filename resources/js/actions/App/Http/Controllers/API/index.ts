import GoogleLoginController from './GoogleLoginController'
import BannerApiController from './BannerApiController'
import CategoryApiController from './CategoryApiController'
import SmartTestAPICOntroller from './SmartTestAPICOntroller'
import EnrollController from './EnrollController'
import SslcommerzController from './SslcommerzController'
import DashboardAPIController from './DashboardAPIController'
import ClassessController from './ClassessController'
import QuizExamController from './QuizExamController'
import CommentController from './CommentController'
import ContactController from './ContactController'
const API = {
    GoogleLoginController: Object.assign(GoogleLoginController, GoogleLoginController),
BannerApiController: Object.assign(BannerApiController, BannerApiController),
CategoryApiController: Object.assign(CategoryApiController, CategoryApiController),
SmartTestAPICOntroller: Object.assign(SmartTestAPICOntroller, SmartTestAPICOntroller),
EnrollController: Object.assign(EnrollController, EnrollController),
SslcommerzController: Object.assign(SslcommerzController, SslcommerzController),
DashboardAPIController: Object.assign(DashboardAPIController, DashboardAPIController),
ClassessController: Object.assign(ClassessController, ClassessController),
QuizExamController: Object.assign(QuizExamController, QuizExamController),
CommentController: Object.assign(CommentController, CommentController),
ContactController: Object.assign(ContactController, ContactController),
}

export default API