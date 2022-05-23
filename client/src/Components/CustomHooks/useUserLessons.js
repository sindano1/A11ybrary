import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";



// current error: export 'useUserLessons' (imported as 'useUserLessons') was not found in './CustomHooks/useUserLessons' (possible exports: default)
function useUserLessons(){
    const { setUserLessons} = useContext(UserContext);

    useEffect(()=>{
        fetch("http://localhost:3000/lessons")
        .then(res => res.json())
        .then(lessons => setUserLessons(lessons))
        .catch(error => console.log(error.message));
    }, [setUserLessons])


}

export default useUserLessons;