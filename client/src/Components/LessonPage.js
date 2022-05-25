// This is the page that holds the content of the lesson. 
// Lesson Sandbox is contained within this page
// Lesson Content is contained within this page
// Notes are housed in this page
import React, { useState, useEffect, useContext } from "react";
import LessonSandbox from "./LessonSandbox";
import {useParams} from 'react-router-dom'
import CompletedLessonCheck from "./CompletedLessonCheck";
import LessonContent from "./LessonContent";
import LessonNotes from "./LessonNotes";
import { UserContext } from "./UserContext";
// import useSingleLesson from "./CustomHooks/useSingleLesson";


function LessonPage ({lessons, setLessons}) {
    const [specificLesson, setSpecificLesson] = useState({})
    const [isLessonTriggered, setIsLessonTriggered] = useState(false)
    const [hasLoaded, setHasLoaded] = useState(false)
    // const [codeUrl, setCodeUrl] = useState([])
    const { user, setUser, isLoggedIn, setIsLoggedIn, userLessons, setUserLessons } = useContext(UserContext)

    // const [singleLesson, setSingleLesson] = useSingleLesson();
    let { id } = useParams();

    useEffect(() => {
        fetch(`/lesson-sandbox/${id}`)
        .then(resp => resp.json())
        .then(lesson => {
            setSpecificLesson(lesson)
            setHasLoaded(true)
        })
        }, [setHasLoaded])


       function retrieveLesson(){
            if (!hasLoaded) {
                console.log(`lesson false`)
                return <p>Loading...</p>
            } else {
                if (specificLesson.length === 0) {
                    return ( <p> lesson NOT loaded </p>)
                } else {

                    console.log(`lesson true`)
                   return  (
                       <>
                       <p>Lesson loaded</p>
                    <LessonSandbox hasLoaded={hasLoaded} setHasLoaded={setHasLoaded} specificLesson={specificLesson} setSpecificLesson={setSpecificLesson}/>
                    <LessonNotes specificLesson={specificLesson} setSpecificLesson={setSpecificLesson}/>
                       </>
                //    <>
                //     <iframe title="accessible code sandbox"
                //         src={specificLesson.codes.map(code => code.accessible_code)}
                //         // {specificLesson.codes.map(code => code.accessible_code)}
                //         style={{ width: "100%", height: "500px", border: "0", borderRadius: "4px", overflow: "hidden" }}
                //         allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                //         sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                //     ></iframe>
                //     <p> Viewing Accessible Code</p>
                //     <button onClick={handleToggleSandbox}>Switch to inaccessible code</button>
                // </>
                )
                // } else if (specificLesson === true && toggleSandbox === false){
                //     console.log(`lesson true toggle false`)
                //     return(
                //         <p> lesson loaded and sandbox false </p>
                //     // <>
                    //     <iframe title="inaccessible code sandbox"
                    //         src= {specificLesson.codes.map(code => code.inaccessible_code)}
                    //         style={{ width: "100%", height: "500px", border: "0", borderRadius: "4px", overflow: "hidden" }}
                    //         allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    //         sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    //     ></iframe>
                    //     <p>Viewing Inaccessible Code</p>
                    //     <button onClick={handleToggleSandbox}>Switch to accessible code</button>
                    // </>
                    
                   }
            }
        }
    
        
        // function retrieveCodes(){
        //      specificLesson.codes.map(code =>{
        //         //  console.log(code.accessible_code)
        //         setCodeUrl(code.accessible_code)
        //     })
        //     retrieveCodes()
        // }
        // console.log(codeUrl)

    // useEffect(() => {
    //     setIsLessonTriggered(true)
      
    //     // declare the async data fetching function
    //     const fetchData = async () => {
    //       // get the data from the api
    //       const res = await fetch(`/lesson-sandbox/${id}`);
    //       // convert the data to json
    //       const lesson = await res.json();
      
    //       // set state with the result if `isLessonTriggered` is true
    //       if (isLessonTriggered) {
    //         setSpecificLesson(lesson);
    //         console.log(`useEffect lesson: `, lesson)
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
        {retrieveLesson()}
        {/* <LessonSandbox specificLesson={specificLesson} setSpecificLesson={setSpecificLesson}/> */}
        {/* <LessonNotes specificLesson={specificLesson} setSpecificLesson={setSpecificLesson}/> */}
        {/* {specificLesson.notes ? <LessonNotes specificLesson={specificLesson} setSpecificLesson={setSpecificLesson}/> : <p>Loading...</p>} */}
        </>
    )
}

export default LessonPage