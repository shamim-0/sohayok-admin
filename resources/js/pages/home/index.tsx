import AppLayout from "../frontend/layout";
import Banner from "./banner";
import Category from "./category";
import Course from "./course";
import Instructor from "./instructor";
import Review from "./review";
import WhyChoseUs from "./whywe";

export default function home({banner, hero, categorysection, categories, courses, coursecontent, instructors, instructorcontent, whywe, review, reviewcontent}) {
    return (
        <AppLayout>
            <main>
                <Banner banner={banner} hero={hero}/>
                <Category categorysection={categorysection} categories={categories}/>
                <Course courses={courses}  coursecontent={coursecontent}/>
                <Instructor instructorcontent={instructorcontent} instructors={instructors}/>
                {/* <WhyChoseUs whywe={whywe} /> */}
                <Review reviews={review}  reviewcontent={reviewcontent}/>
            </main>
        </AppLayout>
    )
}