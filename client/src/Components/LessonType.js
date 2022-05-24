// // This is the dropdown in which lessons of a certain type will live

// // LessonType houses LessonSummary
// // Notes

// import React from "react";
// import Notes from "./Notes"
// // import 'flowbite';

// function LessonType() {
//     return (
//         <>
//          {/* <div className="px-4 py-5 sm:px-6">
//     <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
//     <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
//   </div> */}
//   <div className="border-t border-gray-200">
//     <dl>
//       <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
//         <dt className="text-sm font-medium text-gray-500">Lesson title</dt>
//         <dt className="text-sm font-medium text-gray-500">languages</dt>
//         <dt className="text-sm font-medium text-gray-500">accessibility features</dt>
//         <dt className="text-sm font-medium text-gray-500">notes button</dt>
//         <dt className="text-sm font-medium text-gray-500">completed check</dt>
//         {/* <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Margot Foster</dd>
//         <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Margot Foster</dd> */}
//       </div>
//       <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//         <dt className="text-sm font-medium text-gray-500">Application for</dt>
//         <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Backend Developer</dd>
//       </div>
//       <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//         <dt className="text-sm font-medium text-gray-500">Email address</dt>
//         <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">margotfoster@example.com</dd>
//       </div>
//       <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//         <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
//         <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$120,000</dd>
//       </div>
//       <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//         <dt className="text-sm font-medium text-gray-500">About</dt>
//         <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
//       </div>
//       <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//         <dt className="text-sm font-medium text-gray-500">Attachments</dt>
//         <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//           <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
//             <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
//               <div className="w-0 flex-1 flex items-center">
//                 {/* <!-- Heroicon name: solid/paper-clip --> */}
//                 <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                   <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
//                 </svg>
//                 <span className="ml-2 flex-1 w-0 truncate"> resume_back_end_developer.pdf </span>
//               </div>
//               <div className="ml-4 flex-shrink-0">
//                 <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
//               </div>
//             </li>
//             <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
//               <div className="w-0 flex-1 flex items-center">
//                 {/* <!-- Heroicon name: solid/paper-clip --> */}
//                 <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                   <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
//                 </svg>
//                 <span className="ml-2 flex-1 w-0 truncate"> coverletter_back_end_developer.pdf </span>
//               </div>
//               <div className="ml-4 flex-shrink-0">
//                 <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
//               </div>
//             </li>
//           </ul>
//         </dd>
//       </div>
//     </dl>
//   </div>

//         </>
//     )
// }

// export default LessonType;


// {/* <div id="accordion-open" data-accordion="open">
// <h2 id="accordion-open-lesson-summary-heading-1">
//     <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
//         <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>Map through Lesson Summary</span>
//         <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//     </button>
// </h2>
// <div id="accordion-open-lesson-summary-body-1" className="hidden" aria-labelledby="accordion-open-heading-1">
//     <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//         <p>NOTES goes here?</p>
//         <Notes />
//         {/* <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
//         <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="https://flowbite.com/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p> */}
//     // </div> */}
// {/* </div> */}
// {/* </div> */}