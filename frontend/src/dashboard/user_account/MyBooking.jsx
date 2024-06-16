import React from "react";
import UseFetchData from "../../hooks/UseFetchData";
import DoctorCard from "../../components/Doctors/DoctorCard";
import { BASE_URL } from "../../config";
import Loader from "../../loader/Loader";
import Error from "../../components/Error/Error";

const MyBooking = () => {
  const {
    data: appointments,
    loading,
    error,
  } = UseFetchData(`${BASE_URL}/users/appointments/my-appointments`);
  return (
    <div>
      {loading && !error && <Loader />}
      {error && !loading && <Error errMessage={error} />}
      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          {appointments.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      )}
      {!loading && !error && appointments.length === 0 && (
        <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor ">
          You did not book any appointment
        </h2>
      )}
    </div>
  );
};

export default MyBooking;
