import React from "react";
import { formulateDate } from "../../utils/formulateDate";

const Doctorabout = ({ name, about, qualifications, experiences }) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 ">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9 ">
            {name}
          </span>
        </h3>
        <p className="text__para ">{about}</p>
      </div>

      <div className="mt-12 ">
        <h3 className="text-[20px] leading-[30px] test-headingColor font-semibold ">
          Education{" "}
        </h3>

        <ul className="pt-4 md:p-5 ">
          {qualifications?.map((item, index) => {
            console.log(item);
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] "
            >
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                  {console.log(item.startingDate) &&
                    formulateDate(item.startingDate)}{" "}
                  -{formulateDate(item.endingDate)}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor ">
                  {item.degree}
                </p>
              </div>
              <p className="text-[14px] leading-5 font-medium text-textColor ">
                {item.university}
              </p>
            </li>;
          })}
          {/* <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                {formulateDate("12-04-2010")} - {formulateDate("12-04-2018")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor ">
                Masters in surgery
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor ">
              Apollo Hospital, New Delhi
            </p>
          </li> */}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 ">
          {experiences?.map((item, index) => {
            console.log(item);
            <li key={index} className="p-4 rounded bg-[#fff9ea] ">
              <span className="text-yellowColor test-[15px] leading-6 font-semibold ">
                {formulateDate(item.startingDate)} -{" "}
                {formulateDate(item.endingDate)}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor ">
                {item.position}
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor ">
                {item.hospital}
              </p>
            </li>;
          })}
          {/*           
          <li className="p-4 rounded bg-[#fff9ea] ">
            <span className="text-yellowColor test-[15px] leading-6 font-semibold ">
              {formulateDate("12-04-2010")} - {formulateDate("12-04-2018")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor ">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor ">
              Apollo Hospital, New Delhi
            </p>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Doctorabout;
