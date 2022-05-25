import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import useLoginState from "./CustomHooks/useLoginState";
// import 'flowbite';
import { Collapse } from 'react-daisyui'
import CompletedLessonCheck from "./CompletedLessonCheck";
import useUserLessons from "./CustomHooks/useUserLessons";

function AllLessonsPage({lessons, setLessons}) {

    useLoginState()
    const [userLessons, setUserLessons] = useUserLessons();

    const { user, setUser, isLoggedIn, setIsLoggedIn} = useContext(UserContext);
  
    const  navigate = useNavigate();

    useLoginState()

    // const [lessons, setLessons] = useState([])
    // // const { user, userLibrary, setUserLibrary, userLessons, setUserLessons } = useContext(UserContext);
    // // console.log(`User lessons from context:`, userLessons)
    // // This is where a users lessons will live

    // // useUserLessons()
    // // LessonType lives on this page
    // // LessonSummary nested within LessonType
    // // Notes can drop down from LessonSummary
    // useEffect(() => {
    //     fetch('/your-lessons')
    //         .then(resp => resp.json())
    //         .then(lessons => {
    //             setLessons(lessons)
    //         })
    // }, [setLessons])


    function renderLessons() {
        const mappedLessons = userLessons.map(lessonInst => {
            return (
                <div className="border-t border-gray-200" key={lessonInst.id}>
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">{lessonInst.lesson.title}</dd>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">languages - in codes</dd>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">{lessonInst.lesson.accessibility_features}</dd>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">{lessonInst.notes}</dd>
                            <Link to={`/lesson/${lessonInst.lesson.id}`}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                {`Go to ${lessonInst.lesson.title}`}
                            </button>
                            </Link>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                                <CompletedLessonCheck lessonInst={lessonInst} lessonState={lessons} setLessonState={setLessons} />
                            </dd>
                        </div>
                    </dl>
                </div>
            )
        })
        return mappedLessons
    }




    return (
        <>
            <p>Hello world!</p>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Lesson Title</dt>
                                <dt className="text-sm font-medium text-gray-500">languages - in codes</dt>
                                <dt className="text-sm font-medium text-gray-500">Accessiblity Features</dt>
                                <dt className="text-sm font-medium text-gray-500">Notes- needs button</dt>
                                <dt className="text-sm font-medium text-gray-500">Go To Lesson</dt>
                                <dt className="text-sm font-medium text-gray-500">Completed</dt>
                            </div>
                        </dl>
                    </div>
                    {renderLessons()}
                </dl>
            </div>




        </>)


}

export default AllLessonsPage;