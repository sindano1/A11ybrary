import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import useLoginState from "./CustomHooks/useLoginState";
import CompletedLessonCheck from "./CompletedLessonCheck";
import useUserLessons from "./CustomHooks/useUserLessons";

function AllLessonsPage({lessons, setLessons}) {

    useLoginState()
    const [userLessons, setUserLessons] = useUserLessons();

    const { user, setUser, isLoggedIn, setIsLoggedIn} = useContext(UserContext);
  
    const  navigate = useNavigate();

    useLoginState()


    function renderLessons() {
        const mappedLessons = userLessons.map(lessonInst => {
            return (
                <div className="border-t border-gray-200" key={lessonInst.id}>
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:auto-cols-max sm:grid-cols-6 sm:gap-4 sm:px-6">
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">{lessonInst.lesson.title}</dd>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">{lessonInst.codes.map(code => code.language)}</dd>
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
            <p>Welcome to your lessons!</p>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Title</dt>
                                <dt className="text-sm font-medium text-gray-500">Languages</dt>
                                <dt className="text-sm font-medium text-gray-500">Accessiblity Features</dt>
                                <dt className="text-sm font-medium text-gray-500">Notes</dt>
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