// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function App() {
//   const [activeTab, setActiveTab] = useState("");

//   const navTabs = [
//     {
//       text: "Master Data",
//       path: "/master-data",
//       subTabs: [
//         { text: "Field Glass Report", path: "/field-glass-report" },
//         { text: "Confirmation Report", path: "/confirmation-report" },
//         // Add more sub-tabs as needed
//       ],
//     },
//     { text: "Reconciliation Process", path: "/reconciliation-process" },
//     { text: "FG Vs Artemis", path: "/fg-vs-artemis" },
//   ];

//   const handleTabClick = (path) => {
//     setActiveTab(path);
//   };

//   return (
//     <div className="flex justify-content-start align-items-end surface-200 text-base lg:text-xl md:text-lg w-full">
//       {navTabs.map((tab, index) => (
//         <div key={index} className="mx-1">
//           {tab.subTabs ? (
//             <div className="relative">
//               <button
//                 className={`no-underline ${
//                   activeTab.includes(tab.path) &&
//                   "border-b-2 font-medium surface-300"
//                 }`}
//                 onClick={() => handleTabClick(tab.path)}
//               >
//                 {tab.text}
//               </button>
//               {activeTab.includes(tab.path) && (
//                 <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded shadow-md">
//                   {tab.subTabs.map((subTab, subIndex) => (
//                     <Link
//                       key={subIndex}
//                       to={subTab.path}
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                       onClick={() => handleTabClick(subTab.path)}
//                     >
//                       {subTab.text}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link
//               to={tab.path}
//               className={`no-underline ${
//                 activeTab === tab.path && "border-b-2 font-medium surface-300"
//               }`}
//               onClick={() => handleTabClick(tab.path)}
//             >
//               {tab.text}
//             </Link>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function App() {
//   const [activeTab, setActiveTab] = useState("");

//   const navTabs = [
//     {
//       text: "Master Data",
//       path: "/master-data",
//       subTabs: [
//         { text: "Field Glass Report", path: "/field-glass-report" },
//         { text: "Confirmation Report", path: "/confirmation-report" },
//         // Add more sub-tabs as needed
//       ],
//     },
//     { text: "Reconciliation Process", path: "/reconciliation-process" },
//     { text: "FG Vs Artemis", path: "/fg-vs-artemis" },
//   ];

//   const handleTabClick = (path) => {
//     setActiveTab(path);
//   };

//   return (
//     <div className="flex justify-content-start align-items-end surface-200 text-base lg:text-xl md:text-lg w-full">
//       {navTabs.map((tab, index) => (
//         <div key={index} className="mx-1">
//           {tab.subTabs ? (
//             <div className="relative">
//               <div
//                 className={`no-underline ${
//                   activeTab.includes(tab.path) &&
//                   "border-bottom-2 font-medium surface-300"
//                 }`}
//                 onClick={() => handleTabClick(tab.path)}
//               >
//                 {tab.text}
//               </div>
//               {activeTab.includes(tab.path) && (
//                 <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded shadow-md">
//                   {tab.subTabs.map((subTab, subIndex) => (
//                     <Link
//                       key={subIndex}
//                       to={subTab.path}
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                       onClick={() => handleTabClick(subTab.path)}
//                     >
//                       {subTab.text}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link
//               to={tab.path}
//               className={`no-underline ${
//                 activeTab === tab.path && "border-bottom-2 font-medium surface-300"
//               }`}
//               onClick={() => handleTabClick(tab.path)}
//             >
//               {tab.text}
//             </Link>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }




// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function App() {
//   const [activeTab, setActiveTab] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track dropdown visibility

//   const navTabs = [
//     {
//       text: "Master Data",
//       path: "/master-data",
//       subTabs: [
//         { text: "Field Glass Report", path: "/field-glass-report" },
//         { text: "Confirmation Report", path: "/confirmation-report" },
//         // Add more sub-tabs as needed
//       ],
//     },
//     { text: "Reconciliation Process", path: "/reconciliation-process" },
//     { text: "FG Vs Artemis", path: "/fg-vs-artemis" },
//   ];

//   const handleTabClick = (path) => {
//     setActiveTab(path);
//     if (path === "/master-data") {
//       // Toggle dropdown visibility when Master Data tab is clicked
//       setIsDropdownOpen((prev) => !prev);
//     } else {
//       setIsDropdownOpen(false); // Close dropdown for other tabs
//     }
//   };

//   return (
//     <div className="flex justify-content-start align-items-end surface-200 text-base lg:text-xl md:text-lg w-full">
//       {navTabs.map((tab, index) => (
//         <div key={index} className="mx-1">
//           {tab.subTabs ? (
//             <div className="relative">
//               <div
//                 className={`no-underline ${
//                   activeTab.includes(tab.path) &&
//                   "border-b-2 font-medium surface-300"
//                 }`}
//                 onClick={() => handleTabClick(tab.path)}
//               >
//                 {tab.text}
//               </div>
//               {tab.path === "/master-data" && isDropdownOpen && (
//                 <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded shadow-md">
//                   {tab.subTabs.map((subTab, subIndex) => (
//                     <Link
//                       key={subIndex}
//                       to={subTab.path}
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                       onClick={() => handleTabClick(subTab.path)}
//                     >
//                       {subTab.text}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link
//               to={tab.path}
//               className={`no-underline ${
//                 activeTab === tab.path && "border-b-2 font-medium surface-300"
//               }`}
//               onClick={() => handleTabClick(tab.path)}
//             >
//               {tab.text}
//             </Link>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }



import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const [activeTab, setActiveTab] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track dropdown visibility

  const navTabs = [
    {
      text: "Master Data",
      path: "/master-data",
      subTabs: [
        { text: "Field Glass Report", path: "/field-glass-report" },
        { text: "Confirmation Report", path: "/confirmation-report" },
        // Add more sub-tabs as needed
      ],
    },
    { text: "Reconciliation Process", path: "/reconciliation-process" },
    { text: "FG Vs Artemis", path: "/fg-vs-artemis" },
  ];

  const handleTabClick = (path) => {
    setActiveTab(path);
    if (path === "/master-data") {
      // Toggle dropdown visibility when Master Data tab is clicked
      setIsDropdownOpen((prev) => !prev);
    } else {
      setIsDropdownOpen(false); // Close dropdown for other tabs
    }
  };

  return (
    <div className="flex justify-start align-items-end surface-200 text-base lg:text-xl md:text-lg w-full p-4">
      {navTabs.map((tab, index) => (
        <div key={index} className="mx-4">
          {tab.subTabs ? (
            <div className="relative">
              <div
                className={`no-underline ${
                  activeTab.includes(tab.path) &&
                  "border-bottom-2 font-medium surface-300"
                }`}
                onClick={() => handleTabClick(tab.path)}
              >
                {tab.text}
              </div>
              {tab.path === "/master-data" && isDropdownOpen && (
                <div className="absolute top-full left-0 bg-blue-300 border border-gray-200 rounded shadow-md">
                  {tab.subTabs.map((subTab, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subTab.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => handleTabClick(subTab.path)}
                    >
                      {subTab.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              to={tab.path}
              className={`no-underline ${
                activeTab === tab.path && "border-bottom-2 font-medium surface-300"
              }`}
              onClick={() => handleTabClick(tab.path)}
            >
              {tab.text}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}


