// This is the page that holds the content of the lesson. 
// Lesson Sandbox is contained within this page
// Lesson Content is contained within this page
// Notes are housed in this page
import React, { useState, useEffect } from "react";
import LessonSandbox from "./LessonSandbox";
import {useParams} from 'react-router-dom'
import CompletedLessonCheck from "./CompletedLessonCheck";
import LessonContent from "./LessonContent";

function LessonPage ({lessons, setLessons}) {
    const [specificLesson, setSpecificLesson] = useState({})
    const [isLessonTriggered, setIsLessonTriggered] = useState(false)
    let { id } = useParams();


    // useEffect(() => {
    //     let isLessonTriggered = true;
      
    //     // declare the async data fetching function
    //     const fetchData = async () => {
    //       // get the data from the api
    //       const res = await fetch(`/lesson-sandbox/${id}`);
    //       // convert the data to json
    //       const lesson = await res.json();
      
    //       // set state with the result if `isLessonTriggered` is true
    //       if (isLessonTriggered) {
    //         setSpecificLesson(lesson);
    //       }
    //     }
    //     // call the function
    //     fetchData()
    //       // make sure to catch any error
    //       .catch(console.error);;
      
    //     // cancel any future `setData`
    //     return () => isLessonTriggered = false;
    //   }, [])

// console.log(`lesson trigger: `, specificLesson)
console.log(`mapped lesson`, lessons.map(lesson => lesson))
console.log(`params from url: `, {id})


//     const filterLesson = lessons.filter(lesson => {
        
//         return lesson.lesson.title === {id}
//     })
//    const matchingLesson = filterLesson.map(lesson => <p>{lesson.lesson.title}</p>)

//     console.log(`matching lesson: `, matchingLesson)

    // const filteredLessonCheck = lessons.filter(lessonInst => {
    //     if (lessonInst.id === {id}) {
    //         console.log( lessonInst) 
    //         return <p>this is where the check goes</p>
    //     }
    // })
    //     return filteredLessonCheck


    return (
        <>
        <p>This is the lessons page</p>
        <LessonContent />
        {/* <LessonSandbox lessons={lessons} setLessons={setLessons} specificLesson={specificLesson} setSpecificLesson={setSpecificLesson}/> */}
        </>
    )
}

export default LessonPage