import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'


function LessonSandbox({specificLesson, setSpecificLesson}) {

    const [toggleSandbox, setToggleSandbox] = useState(true)


    let { id } = useParams();

    function handleToggleSandbox() {
        setToggleSandbox((toggleSandbox) => !toggleSandbox);
    }

    console.log(`lesson in sandbox`, specificLesson)
    console.log(`codes in sandbox`, specificLesson.codes)
    console.log(`access code`, specificLesson.codes.map(code => code.accessible_code))


    return (
        <>
            <h1>Hello world</h1>
            <p>These are notes: {specificLesson.notes}</p>
            {toggleSandbox ? (
            <>
                <iframe title="accessible code sandbox"
                    src={specificLesson.codes.map(code => code.accessible_code)}
                    // "https://codesandbox.io/s/headerslesson1-accessible-o8z2fh"
                    // {specificLesson.codes.map(code => code.accessible_code)}
                    style={{ width: "100%", height: "500px", border: "0", borderRadius: "4px", overflow: "hidden" }}
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
                <p> Viewing Accessible Code</p>
                <button onClick={handleToggleSandbox}>Switch to inaccessible code</button>
            </>
            ) : (
            <>
                <iframe title="inaccessible code sandbox"
                    src={specificLesson.codes.map(code => code.inaccessible_code)}
                    // "https://codesandbox.io/s/headerslesson1-inaccessible-5t7j5b"
                    // {specificLesson.codes.map(code => code.inaccessible_code)}
                    style={{ width: "100%", height: "500px", border: "0", borderRadius: "4px", overflow: "hidden" }}
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
                <p>Viewing Inaccessible Code</p>
                <button onClick={handleToggleSandbox}>Switch to accessible code</button>
            </>
            )}
        </>
    )
}
export default LessonSandbox;