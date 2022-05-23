import React, { useState } from "react";

function CompletedLessonCheck({ lessonInst, lessonState, setLessonState }) {

    const [checked, setChecked] = useState(lessonInst.completed)


    function handleMessage() {
        if (checked === true) {
            return (<label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                Lesson Complete
            </label>)
        } else {
            return (<label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                Incomplete
            </label>)
        }
    }

    function handleCheckbox(e) {
        // e.stopPropagation()
        fetch(`/user_lessons/${lessonInst.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                completed: !lessonInst.completed
            })
        })
            .then(res => res.json())
            .then((lessonInst) => {
                console.log(lessonInst)
                setChecked(!checked)
                setLessonState(lessonState.map(lesson => {
                    if (lesson.id !== lessonInst.id) {
                        return lesson
                    } else {
                        return lessonInst
                    }
                })
                )
                console.log(`lesson state in patch`, lessonState)
            })

            .catch(error => console.log(error.message));
        console.log(`I've been clicked`)
    }



    return (
        <div className="flex justify-center">
            <div>
                <div className="form-check">
                    <input onChange={handleCheckbox} checked={checked} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                        {handleMessage()}
                    </label>
                </div>
            </div>
        </div>
    )

}

export default CompletedLessonCheck