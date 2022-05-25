// import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../UserContext";
// import {useParams} from 'react-router-dom'



// function useSingleLesson(){
//     const [ singleLesson, setSingleLesson] = useContext(UserContext);
//     const [hasLoaded, setHasLoaded] = useState(false)
//     let { id } = useParams();

//     useEffect(() => {
//         fetch(`/lesson-sandbox/${id}`)
//         .then(resp => resp.json())
//         .then(lesson => {
//             setSingleLesson(lesson)
//             setHasLoaded(true)
//         })
//         }, [setHasLoaded])

// return [singleLesson, setSingleLesson]
// }

// export default useSingleLesson;