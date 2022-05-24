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
            <h1>{singleLesson.title}</h1>
            <p>Available access features: {singleLesson.accessiblity_features}</p>
            <p>{singleLesson.content}</p>
        </div>
    )
}

export default LessonContent