import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";



// current error: export 'useUserLessons' (imported as 'useUserLessons') was not found in './CustomHooks/useUserLessons' (possible exports: default)
function useUserLessons(){
    const { userLessons, setUserLessons} = useContext(UserContext);

    useEffect(()=>{
        fetch('/your-lessons')
        .then(res => res.json())
        .then(lessons => setUserLessons(lessons))
        .catch(error => console.log(error.message));
    }, [setUserLessons])

return [userLessons, setUserLessons]
}

export default useUserLessons;