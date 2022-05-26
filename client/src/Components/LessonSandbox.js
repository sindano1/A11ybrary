import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import 'react-daisyui'


function LessonSandbox({specificLesson, setSpecificLesson, hasLoaded, setHasLoaded}) {
    const [toggleSandbox, setToggleSandbox] = useState(true)
    let { id } = useParams();

    function handleToggleSandbox() {
        setToggleSandbox((toggleSandbox) => !toggleSandbox);
    }

    // console.log(`lesson in sandbox`, specificLesson)
    // console.log(`codes in sandbox`, specificLesson.codes)
    // console.log(`access code`, specificLesson.codes.map(code => code.accessible_code))

    function retrieveSandboxUrl(){
        if (!hasLoaded) {
            console.log(`url false`)
            return <p>Loading...</p>
        } else {
            if (specificLesson.length === 0) {
                return ( <p> lesson NOT loaded </p>)
            } else {
                console.log(`lesson true`)
               return  (
                  `${specificLesson.codes.map(code => code.accessible_code)}`
            )
          
               }
        }
    }


    return (
        <>
            {toggleSandbox ? (
            <>
                <iframe title="accessible code sandbox"
                    src={specificLesson.codes.map(code => code.accessible_code)}
                    // "https://codesandbox.io/s/headerslesson1-accessible-o8z2fh"
                    // {specificLesson.codes.map(code => code.accessible_code)}
                    style={{ width: "100%", height: "700px", border: "0", borderRadius: "4px", overflow: "hidden" }}
                    className="pb-3.5 px 5"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
                <p> Viewing Accessible Code</p>
                <button className="btn btn-primary" onClick={handleToggleSandbox}>Switch to inaccessible code</button>
            </>
            ) : (
            <>
                <iframe title="inaccessible code sandbox"
                    src={specificLesson.codes.map(code => code.inaccessible_code)}
                    // "https://codesandbox.io/s/headerslesson1-inaccessible-5t7j5b"
                    // {specificLesson.codes.map(code => code.inaccessible_code)}
                    style={{ width: "100%", height: "700px", border: "0", borderRadius: "4px", overflow: "hidden" }}
                    className="pb-3.5 px-5"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
                <p>Viewing Inaccessible Code</p>
                <button className="btn btn-primary" onClick={handleToggleSandbox}>Switch to accessible code</button>
            </>
            )}
        </>
    )
}
export default LessonSandbox;