import React from "react";
import { Calendar } from "rsuite";

const RightSideBar = () => {
  return (
    <div className="mt-[40px] px-[20px] h-[800px] w-[80%]">
      <div className="flex items-center gap-[20px] mb-[40px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="4.25" cy="6.5" r=".5" />
            <circle cx="7.5" cy="6.5" r=".5" />
            <circle cx="10.75" cy="6.5" r=".5" />
            <path d="m4.5 12.5l-4 1l1-3v-9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1Z" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" stroke-width="2">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 19v-9a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v9M6 19h12M6 19H4m14 0h2m-9 3h2"
            />
            <circle cx="12" cy="3" r="1" />
          </g>
        </svg>
        <div>||</div>
        <div className="flex items-center gap-[10px]">
          <img
            src="https://img.freepik.com/free-photo/doctor-with-white-robe-stethoscope_144627-43879.jpg"
            alt="doctor"
            className="w-[40px] h-[40px] rounded-[100%] object-cover"
          />
          <div className="flex flex-col">
            <p className="text-[12px]">Susan Proctor</p>
            <p className="text-[12px]">Clinical Officer</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between w-[95%] mb-[10px]">
          <p>Doctors</p>
          <p>See all</p>
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="w-[100%] border-2 h-[60px] rounded-[20px] flex px-[10px]">
            <div className="flex items-center">
              <div className="mr-[10px]">
                <img
                  src="https://img.freepik.com/free-photo/doctor-with-white-robe-stethoscope_144627-43879.jpg"
                  alt="doctor"
                  className="w-[40px] h-[40px] rounded-[100%] object-cover"
                />
              </div>
              <div className="flex flex-col mr-[80px]">
                <p className="text-[12px] leading-3">Susan Proctor</p>
                <p className="text-[12px]">Clinical Officer</p>
              </div>
            </div>
            <div className="flex mt-[15px]">
              <p className="text-[12px]">On Duty</p>
            </div>
          </div>
          <div className="w-[100%] border-2 h-[60px] rounded-[20px] flex px-[10px]">
            <div className="flex items-center">
              <div className="mr-[10px]">
                <img
                  src="https://img.freepik.com/free-photo/doctor-with-white-robe-stethoscope_144627-43879.jpg"
                  alt="doctor"
                  className="w-[40px] h-[40px] rounded-[100%] object-cover"
                />
              </div>
              <div className="flex flex-col mr-[80px]">
                <p className="text-[12px]">Susan Proctor</p>
                <p className="text-[12px]">Clinical Officer</p>
              </div>
            </div>
            <div className="flex mt-[15px]">
              <p className="text-[12px]">On Duty</p>
            </div>
          </div>
          <div className="w-[100%] border-2 h-[60px] rounded-[20px] flex px-[10px]">
            <div className="flex items-center">
              <div className="mr-[10px]">
                <img
                  src="https://img.freepik.com/free-photo/doctor-with-white-robe-stethoscope_144627-43879.jpg"
                  alt="doctor"
                  className="w-[40px] h-[40px] rounded-[100%] object-cover"
                />
              </div>
              <div className="flex flex-col mr-[80px]">
                <p className="text-[12px]">Susan Proctor</p>
                <p className="text-[12px]">Clinical Officer</p>
              </div>
            </div>
            <div className="flex mt-[15px]">
              <p className="text-[12px]">On Duty</p>
            </div>
          </div>
          <div className="w-[100%] border-2 h-[60px] rounded-[20px] flex px-[10px]">
            <div className="flex items-center">
              <div className="mr-[10px]">
                <img
                  src="https://img.freepik.com/free-photo/doctor-with-white-robe-stethoscope_144627-43879.jpg"
                  alt="doctor"
                  className="w-[40px] h-[40px] rounded-[100%] object-cover"
                />
              </div>
              <div className="flex flex-col mr-[80px]">
                <p className="text-[12px]">Susan Proctor</p>
                <p className="text-[12px]">Clinical Officer</p>
              </div>
            </div>
            <div className="flex mt-[15px]">
              <p className="text-[12px]">On Duty</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-[95%] mt-[10px] mb-[10px]">
          <p>BOOKED SESSIONS</p>
          <p>See all</p>
        </div>
        <div className="flex flex-col gap-[5px]">
          <div className="w-[100%] h-[40px] rounded-[10px] px-[10px] border-2 flex items-center justify-between">
            <p className="text-[12px]">Samba Mapanga</p>
            <p className="text-[12px]">12th July 2024</p>
          </div>
          <div className="w-[100%] h-[40px] rounded-[10px] px-[10px] border-2 flex items-center justify-between">
            <p className="text-[12px]">Samba Mapanga</p>
            <p className="text-[12px]">12th July 2024</p>
          </div>
          <div className="w-[100%] h-[40px] rounded-[10px] px-[10px] border-2 flex items-center justify-between">
            <p className="text-[12px]">Samba Mapanga</p>
            <p className="text-[12px]">12th July 2024</p>
          </div>
          <div className="w-[100%] h-[40px] rounded-[10px] px-[10px] border-2 flex items-center justify-between">
            <p className="text-[12px]">Samba Mapanga</p>
            <p className="text-[12px]">12th July 2024</p>
          </div>
          <div className="w-[100%] h-[40px] rounded-[10px] px-[10px] border-2 flex items-center justify-between">
            <p className="text-[12px]">Samba Mapanga</p>
            <p className="text-[12px]">12th July 2024</p>
          </div>
          <div className="w-[100%] h-[40px] rounded-[10px] px-[10px] border-2 flex items-center justify-between">
            <p className="text-[12px]">Samba Mapanga</p>
            <p className="text-[12px]">12th July 2024</p>
          </div>
          <div className="w-[100%] h-[40px] rounded-[10px] px-[10px] border-2 flex items-center justify-between">
            <p className="text-[12px]">Samba Mapanga</p>
            <p className="text-[12px]">12th July 2024</p>
          </div>
        </div>
      </div>
      <div className="w-[100%] border-2 mt-[10px]">
        <Calendar compact bordered />
      </div>
    </div>
  );
};

export default RightSideBar;
