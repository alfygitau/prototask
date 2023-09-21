import React from "react";
import { data } from "../../static/data";

const Dashboard = () => {
  return (
    <div className="mt-[40px]">
      <div className="w-[70%] flex items-center justify-between mb-[100px]">
        <button className="border-2 p-[8px] w-[160px] rounded-[10px] font-bold text-[white] bg-[#02273D] ">
          Add Patient
        </button>
        <button className="border-2 p-[8px] w-[160px] text-[#02273D] font-bold rounded-[10px]">
          Refer Patient
        </button>
        <button className="border-2 p-[8px] w-[160px] text-[#02273D] font-bold rounded-[10px]">
          View Referals
        </button>
      </div>
      <div className="flex items-center w-[100%] justify-between">
        <div className="flex items-center border-2 p-[7px] w-[230px] rounded-[10px]">
          <div className="mr-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 64 64"
            >
              <path
                fill="#000"
                d="M29.905 11.078a5.225 5.225 0 0 0 5.616-4.789A5.229 5.229 0 0 0 30.725.673a5.222 5.222 0 0 0-5.614 4.792a5.22 5.22 0 0 0 4.794 5.614zm1.431 10.461a3.516 3.516 0 0 1 2.852 3.464a3.529 3.529 0 0 1-3.528 3.528H19.228a2.24 2.24 0 0 1-2.074-3.088l1.236-2.885l13.766-9.86h-6.559c-2.519-.07-4.289.805-5.304 2.789c-.688 1.335-4.342 9.498-4.342 9.498a3.528 3.528 0 0 0 3.278 4.836h4.465l-1.317 8.66l-6.93 20.026a3.37 3.37 0 1 0 6.402 2.113l7.969-22.59c1.554 2.525 4.647 7.051 5.173 7.906c.121 1.421 1.234 13.948 1.234 13.948a3.374 3.374 0 0 0 3.657 3.059a3.368 3.368 0 0 0 3.059-3.657l-1.31-14.743a3.307 3.307 0 0 0-.49-1.471l-5.729-9.285l.912-11.653s1.357 4.611 1.458 4.944c.291.952.947 1.635 1.62 2.18c.394.314 7.081 4.865 7.081 4.865c.372.172.676.323 1.075.35a2.352 2.352 0 0 0 2.533-2.158a2.365 2.365 0 0 0-.92-2.061s-6.663-4.575-6.934-4.774a1.403 1.403 0 0 1-.439-.61l-2.637-9.498c-.429-1.437-1.877-2.673-3.708-2.673h-.789l-3.329 8.841z"
              />
              <path
                fill="#000"
                d="M30.66 27.241a2.232 2.232 0 0 0 .24-4.453l-1.635 4.467l1.395-.014z"
              />
            </svg>
          </div>
          <div>
            <p className="text-center text-[#02273D] font-bold">
              Patient waiting
            </p>
            <p className="text-center text-[#02273D] font-bold">13</p>
          </div>
        </div>
        <div className="flex items-center border-2 p-[7px] w-[230px] rounded-[10px]">
          <div className="mr-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"
              />
              <path
                fill="currentColor"
                d="M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"
              />
            </svg>
          </div>
          <div>
            <p className="text-center text-[#02273D] font-bold">
              Doctors on Duty
            </p>
            <p className="text-center text-[#02273D] font-bold">34</p>
          </div>
        </div>
        <div className="flex items-center border-2 p-[7px] w-[230px] rounded-[10px]">
          <div className="mr-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M5.5 7.959a3 3 0 1 0-1 0v4.082a3 3 0 1 0 1 0V7.96ZM5 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm2 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm4.146-8.146a.5.5 0 0 0 .708-.708L10.707 5H12.5A2.5 2.5 0 0 1 15 7.5V12a3 3 0 1 0 1 .17V7.5A3.5 3.5 0 0 0 12.5 4h-1.793l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2ZM17 15a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"
              />
            </svg>
          </div>
          <div>
            <p className="text-center text-[#02273D] font-bold">
              Test Requests
            </p>
            <p className="text-center text-[#02273D] font-bold">34</p>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[500px] border-2 border-[#63A0F1] mt-[20px]">
        <div className="border-b-2">
          <p>PATIENTS</p>
        </div>
        <div className="flex items-center justify-center mt-[20px] border-b-2 w-[97%] mx-auto">
          <p className="w-[12%]">NO</p>
          <p className="w-[12%]">ID</p>
          <p className="w-[18%]">Name</p>
          <p className="w-[14%]">Age</p>
          <p className="w-[14%]">Country</p>
          <p className="w-[14%]">Gender</p>
          <p className="w-[14%]">Other</p>
        </div>
        {data?.map((item) => (
          <div className="flex items-center justify-center mb-[0px] w-[97%] mx-auto">
            <p className="w-[12%]">{item?.id}</p>
            <p className="w-[12%]">{item.NO}</p>
            <p className="w-[18%]">{item.name.toUpperCase()}</p>
            <p className="w-[14%]">{item?.age}</p>
            <p className="w-[14%]">{item?.country}</p>
            <p className="w-[14%]">{item?.gender}</p>
            <p className="w-[14%]">{item.other}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
