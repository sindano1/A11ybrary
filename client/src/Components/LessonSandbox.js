import React, { useState } from "react";


function LessonSandbox() {

    const [toggleSandbox, setToggleSandbox] = useState(true)

    function handleToggleSandbox() {
        setToggleSandbox((toggleSandbox) => !toggleSandbox);
    }

    return (
        <>
            <h1>Hello world</h1>

            {toggleSandbox ? (
                <>
        <iframe src="https://codesandbox.io/embed/unruffled-allen-r0ybio"
            style={{ width: "100%", height: "500px", border: "0", borderRadius: "4px", overflow: "hidden" }}
            title="unruffled-allen-r0ybio"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
                    <button onClick={handleToggleSandbox}>Switch Sandbox</button>
                </>
            ) : (
                <>
                     <iframe title="old sandbox"
            src="https://codesandbox.io/embed/new?codemirror=1"
            style={{ width: "100%", height: "500px", border: "0", borderRadius: "4px", overflow: "hidden" }}
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
                    <button onClick={handleToggleSandbox}>Switch Sandbox</button>
                </>
            )}

        </>
    )
}
export default LessonSandbox;