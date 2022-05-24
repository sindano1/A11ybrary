import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'

function LessonNotes({specificLesson, setSpecificLesson}) {

//     const [manualBookForm, setManualBookForm] = useState({
//         "title" : "",
//         "author" : "",
//         "genre" : "",
//         "image": ""
//     });
//     const { title, author, genre, image } = manualBookForm;

// function handleManualFormChange(e){
//     console.log(e.target.name)
//     setManualBookForm({...manualBookForm, [e.target.name] : e.target.value})
// }

// function handleSaveNotes(e){
//     e.preventDefault()
//     console.log(`saved it!`)

//     const configObj = {
//         method: "PATCH", 
//         headers : {
//             "Content-Type" : "application/json",
//             "Accepted" : "application/json"
//         },
//         body : JSON.stringify(manualBookForm)
//     }

//     fetch("/store-books", configObj)
//     .then(res => {
//         if (res.ok){
//             //Currently the data that is being returned is not serialized the way I want it to. CHANGE THIS!
//             res.json().then( addedBook => setUserLibrary([...userLibrary, addedBook]))
//         }else{
//             console.log("Oops. Something went wrong.")
//         }
//     })

//     setManualBookForm({
//         "title" : "",
//         "author" : "",
//         "genre" : "",
//         "image": ""
//     })
//     setShowManualModal(false);
// }


return (
    <div className="mt-5 md:mt-0 md:col-span-2">
                {/* I think this is where i can set the post route   action="update#user_lessons" method="PATCH" */}
                <form >
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div>
                                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                                    Notes
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        rows={3}
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        placeholder={specificLesson.notes}
                                        defaultValue={specificLesson.notes}
                                    />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    Take your notes on this lesson here.
                                </p>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

)
}

export default LessonNotes