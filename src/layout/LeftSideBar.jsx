import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./layout.css";

const LeftSideBar = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <div className="border-2 mt-[40px] h-[800px] rounded-[20px] w-[70%] mx-auto leftbar">
      <div className="mb-[60px] flex justify-center">
        <p className="mt-[20px] text-center w-[160px] ">
          Mabanga Medical Center
        </p>
      </div>
      <div
        className="mb-[30px] flex ml-[40px] items-center"
        onClick={() => setActiveTab("dashboard")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="mr-[5px]"
        >
          <path
            fill={activeTab === "dashboard" ? "#04787b" : "currentColor"}
            d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"
          />
        </svg>
        <NavLink to="/">Dashboard</NavLink>
      </div>
      <div
        className="mb-[30px] flex ml-[40px] items-center"
        onClick={() => setActiveTab("laboratory")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className="mr-[5px]"
        >
          <path
            fill={activeTab === "laboratory" ? "#04787b" : "currentColor"}
            fill-rule="evenodd"
            d="M16.432 15C14.387 9.893 12 8.547 12 6V3h.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H8v3c0 2.547-2.387 3.893-4.432 9c-.651 1.625-2.323 4 6.432 4s7.083-2.375 6.432-4zm-1.617 1.751c-.702.21-2.099.449-4.815.449s-4.113-.239-4.815-.449c-.249-.074-.346-.363-.258-.628c.22-.67.635-1.828 1.411-3.121c1.896-3.159 3.863.497 5.5.497s1.188-1.561 1.824-.497a15.353 15.353 0 0 1 1.411 3.121c.088.265-.009.553-.258.628z"
            clip-rule="evenodd"
          />
        </svg>
        <NavLink to="/laboratory">Laboratory</NavLink>
      </div>
      <div
        className="mb-[30px] flex ml-[40px] items-center"
        onClick={() => setActiveTab("patients")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 64 64"
          className="mr-[5px]"
        >
          <path
            fill={activeTab === "patients" ? "#04787b" : "currentColor"}
            d="M29.905 11.078a5.225 5.225 0 0 0 5.616-4.789A5.229 5.229 0 0 0 30.725.673a5.222 5.222 0 0 0-5.614 4.792a5.22 5.22 0 0 0 4.794 5.614zm1.431 10.461a3.516 3.516 0 0 1 2.852 3.464a3.529 3.529 0 0 1-3.528 3.528H19.228a2.24 2.24 0 0 1-2.074-3.088l1.236-2.885l13.766-9.86h-6.559c-2.519-.07-4.289.805-5.304 2.789c-.688 1.335-4.342 9.498-4.342 9.498a3.528 3.528 0 0 0 3.278 4.836h4.465l-1.317 8.66l-6.93 20.026a3.37 3.37 0 1 0 6.402 2.113l7.969-22.59c1.554 2.525 4.647 7.051 5.173 7.906c.121 1.421 1.234 13.948 1.234 13.948a3.374 3.374 0 0 0 3.657 3.059a3.368 3.368 0 0 0 3.059-3.657l-1.31-14.743a3.307 3.307 0 0 0-.49-1.471l-5.729-9.285l.912-11.653s1.357 4.611 1.458 4.944c.291.952.947 1.635 1.62 2.18c.394.314 7.081 4.865 7.081 4.865c.372.172.676.323 1.075.35a2.352 2.352 0 0 0 2.533-2.158a2.365 2.365 0 0 0-.92-2.061s-6.663-4.575-6.934-4.774a1.403 1.403 0 0 1-.439-.61l-2.637-9.498c-.429-1.437-1.877-2.673-3.708-2.673h-.789l-3.329 8.841z"
          />
          <path
            fill={activeTab === "patients" ? "#04787b" : "currentColor"}
            d="M30.66 27.241a2.232 2.232 0 0 0 .24-4.453l-1.635 4.467l1.395-.014z"
          />
        </svg>
        <NavLink to="/patients">Patients</NavLink>
      </div>
      <div
        className="mb-[30px] flex ml-[40px] items-center"
        onClick={() => setActiveTab("messages")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="mr-[5px]"
        >
          <path
            fill={activeTab === "messages" ? "#04787b" : "currentColor"}
            d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455ZM7 10v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2Z"
          />
        </svg>
        <NavLink to="/messages">Messages</NavLink>
      </div>
      <div
        className="mb-[30px] flex ml-[40px] items-center"
        onClick={() => setActiveTab("pharmacy")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="mr-[5px]"
        >
          <path
            fill={activeTab === "pharmacy" ? "#04787b" : "currentColor"}
            d="M3 21v-2l2-6l-2-6V5h12.7l1.45-4l2.35.85L18.35 5H21v2l-2 6l2 6v2H3Zm8-4h2v-3h3v-2h-3V9h-2v3H8v2h3v3Zm-5.9 2h13.8l-2-6l2-6H5.1l2 6l-2 6Zm6.9-6Z"
          />
        </svg>
        <NavLink to="/pharmacy">Pharmacy</NavLink>
      </div>
      <div
        className="mb-[30px] flex ml-[40px] items-center"
        onClick={() => setActiveTab("schedule")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="mr-[5px]"
        >
          <path
            fill={activeTab === "schedule" ? "#04787b" : "currentColor"}
            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"
          />
        </svg>
        <NavLink to="/schedule">Schedule</NavLink>
      </div>
    </div>
  );
};

export default LeftSideBar;
