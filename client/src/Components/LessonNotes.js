import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

function LessonNotes({ specificLesson, setSpecificLesson }) {
    let { id } = useParams();

    const [newNotes, setNewNotes] = useState({
        "notes" : specificLesson.notes ,
    });
    const { notes } = newNotes;

    function handleNotesFormChange(e) {
        setNewNotes({ ...newNotes, [e.target.name]: e.target.value })
    }


    async function handleSaveNotes(e) {
        e.preventDefault()
        // console.log(`saved it!`)

        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accepted": "application/json"
            },
            body: JSON.stringify(newNotes)
        }

        const res =  await fetch(`/lesson-sandbox/${id}`, configObj)
                if (res.ok) {
                    const newNoteRes = await res.json()
                        setSpecificLesson(newNoteRes)
                        console.log(specificLesson)
                        return setNewNotes(newNoteRes)
                } else {
                    console.log("Oops. Something went wrong.")
                }
            }


    return (
        <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSaveNotes}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div>
                            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                                Notes
                            </label>
                            <div className="mt-1">
                                <textarea
                                    onChange={handleNotesFormChange}
                                    id="notes"
                                    name="notes"
                                    rows={3}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                    placeholder={specificLesson.notes}
                                    value={notes}
                                ></textarea>
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