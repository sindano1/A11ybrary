import React, { useState } from "react";
// import { getParameters } from 'codesandbox/lib/api/define';


function LessonSandbox() {

    const [toggleSandbox, setToggleSandbox] = useState(true)


    // const parameters = getParameters({
    //   files: {
    //     'index.js': {
    //       content: "console.log('hello')",
    //     },
    //     'package.json': {
    //       content: { dependencies: {} },
    //     },
    //   },
    // });

    // const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;

    //     useEffect(() => {
    //     fetch(url)
    //     .then(resp => resp.json())
    //     .then(datum => console.log(datum))
    //     }, [])

    // const newSandbox =
    //     <iframe src="https://codesandbox.io/embed/unruffled-allen-r0ybio"
    //         style={{ width: "100%", height: "500px", border: "0", borderRadius: "4px", overflow: "hidden" }}
    //         title="unruffled-allen-r0ybio"
    //         allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    //         sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    //     ></iframe>

    // const oldSandbox =
    //     <iframe
    //         src="https://codesandbox.io/embed/new?codemirror=1"
    //         style={{ width: "100%", height: "500px", border: "0", borderRadius: "4px", overflow: "hidden" }}
    //         allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    //         sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    //     ></iframe>


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