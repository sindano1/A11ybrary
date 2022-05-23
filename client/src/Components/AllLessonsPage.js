import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import useLoginState from "./CustomHooks/useLoginState";
import LessonType from "./LessonType"
// import 'flowbite';
import { Collapse } from 'react-daisyui'
import CompletedLessonCheck from "./CompletedLessonCheck";
// import {useUserLessons} from './CustomHooks/useUserLessons'

function AllLessonsPage() {

    useLoginState()

    const [lessons, setLessons] = useState([])
    // const { user, userLibrary, setUserLibrary, userLessons, setUserLessons } = useContext(UserContext);
    // console.log(`User lessons from context:`, userLessons)
    // This is where a users lessons will live

    // useUserLessons()
    // LessonType lives on this page
    // LessonSummary nested within LessonType
    // Notes can drop down from LessonSummary
    useEffect(() => {
        fetch('/your-lessons')
            .then(resp => resp.json())
            .then(lessons => {
                setLessons(lessons)
            })
    }, [setLessons])


    function renderLessons() {
        const mappedLessons = lessons.map(lessonInst => {
            return (
                <div className="border-t border-gray-200" key={lessonInst.id}>
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">{lessonInst.lesson.title}</dd>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">languages - in codes</dd>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">{lessonInst.lesson.accessibility_features}</dd>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">{lessonInst.notes}</dd>
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
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Lesson Title</dt>
                                <dt className="text-sm font-medium text-gray-500">languages - in codes</dt>
                                <dt className="text-sm font-medium text-gray-500">Accessiblity Features</dt>
                                <dt className="text-sm font-medium text-gray-500">Notes- needs button</dt>
                                <dt className="text-sm font-medium text-gray-500">Completed</dt>
                            </div>
                        </dl>
                    </div>
                    {renderLessons()}

                    {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
/                                        {/* <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                                        </svg>
                                        <span className="ml-2 flex-1 w-0 truncate"> resume_back_end_developer.pdf </span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
                                    </div>
                                </li>
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
/                                        {/* <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                                        </svg>
                                        <span className="ml-2 flex-1 w-0 truncate"> coverletter_back_end_developer.pdf </span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div> */}
                </dl>
            </div>




        </>)


}

export default AllLessonsPage;