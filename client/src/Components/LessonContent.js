import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'

function LessonContent() {
    
    const [singleLesson, setSingleLesson] = useState({})

    let { id } = useParams();

    useEffect(() => {
    fetch(`/lessons/${id}`)
    .then(resp => resp.json())
    .then(lesson => setSingleLesson(lesson))
    }, [])

    return (
        <div>
            <h1 className="text-4xl">{singleLesson.title}</h1>
            <p>Available access features: {singleLesson.accessiblity_features}</p>
            <div dangerouslySetInnerHTML={{__html: singleLesson?.content?.body}} />
            {/* <p className="whitespace-pre-wrap">{__html: singleLesson?.content?.body}</p> */}
        </div>
    )
}

export default LessonContent