import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import useLoginState from "./CustomHooks/useLoginState";
import 'react-daisyui'

function NavBar() {

    useLoginState()

    const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    const  navigate = useNavigate();

    function handleLogout(){
        const configObj = {
            method: "DELETE"
        }
        fetch("/logout", configObj)
        .then(res => {
            if (res.ok){
                console.log("logged out");
                setIsLoggedIn(false) ;
                navigate("login");
            }
        })
    }


    return (
        <nav className="bg-white border-gray-100 px-2 sm:px-4 py-2.5 rounded dark:bg-violet-700">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/login" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"><p>A11ybrary</p></span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li><span className="sblock py-2 pr-4 pl-3 text-white bg-blue-100 rounded md:bg-transparent md: text-white md:p-0 md:dark:hover:text-sky-300 dark:text-white"><p>Hello {user.username}</p></span></li>
                        <li>
                            <a href="/your-lessons" className="block py-2 pr-4 pl-3 text-white bg-blue-100 rounded md:bg-transparent md: text-white md:p-0 md:dark:hover:text-sky-300 dark:text-white" aria-current="page">Your Lessons</a>
                        </li>
                        <li>
                            { isLoggedIn ? <a onClick={handleLogout} className="block py-2 pr-4 pl-3 text-white bg-blue-100 rounded md:bg-transparent md: text-white md:p-0 md:dark:hover:text-sky-300 dark:text-white">Logout</a> : <a href="/login" className="block py-2 pr-4 pl-3 text-white bg-blue-100 rounded md:bg-transparent md: text-white md:p-0 md:dark:hover:text-sky-300 dark:text-white">Login</a> }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
