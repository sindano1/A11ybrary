import React, { useState, useEffect, useContext } from "react";
import LessonSandbox from "./LessonSandbox";
import { useParams } from 'react-router-dom'
import CompletedLessonCheck from "./CompletedLessonCheck";
import LessonContent from "./LessonContent";
import LessonNotes from "./LessonNotes";
import { UserContext } from "./UserContext";


function LessonPage({ lessons, setLessons }) {
    const [specificLesson, setSpecificLesson] = useState({})
    const [hasLoaded, setHasLoaded] = useState(false)
    const { user, setUser, isLoggedIn, setIsLoggedIn, userLessons, setUserLessons } = useContext(UserContext)
    let { id } = useParams();

    useEffect(() => {
        fetch(`/lesson-sandbox/${id}`)
            .then(resp => resp.json())
            .then(lesson => {
                setSpecificLesson(lesson)
                setHasLoaded(true)
            })
    }, [setHasLoaded])


    function retrieveLesson() {
        if (!hasLoaded) {
            // console.log(`lesson false`)
            return <p>Loading...</p>
        } else {
            if (specificLesson.length === 0) {
                return (<p> lesson NOT loaded </p>)
            } else {

                // console.log(`lesson true`)
                return (
                    <>
                        <LessonSandbox hasLoaded={hasLoaded} setHasLoaded={setHasLoaded} specificLesson={specificLesson} setSpecificLesson={setSpecificLesson} />
                        <LessonNotes specificLesson={specificLesson} setSpecificLesson={setSpecificLesson} />
                    </>
                )

            }
        }
    }



    return (
        <>
            <LessonContent />
            {retrieveLesson()}
        </>
    )
}

export default LessonPage