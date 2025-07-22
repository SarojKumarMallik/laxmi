import { useState } from "react";
import { toast } from "react-toastify";
import $ from "jquery";
import AppointmentContext from "./appointmentcontext";
import { baseUrl } from "../../utility/utilityfunctions";

const AppointmentState = (props) => {
    const [slots, setSlots] = useState([]);
    const [slotTimings, setSlotTimings] = useState([]);

    const getSlots = (doctorId, date) => {
        const apptDate = `${date.getFullYear()}-${((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1))}-${(date.getDate() < 10 ? "0" + date.getDate() : date.getDate())}`;

        $.ajax({
            url: `${baseUrl}allslots`,
            type: "POST",
            data: { doctorId, apptDate },
            success: (response) => {
                if (response.status === 0) {
                    setSlots(response.data.slots);
                    setSlotTimings(response.data.slotsDetail);
                } else {
                    console.log(response);
                }
            },
        });
    }

    const saveAppointment = (data) => {
        $.ajax({
            url: `${baseUrl}saveappointment`,
            type: "POST",
            data: data,
            success: (response) => {
                if (response.status === 0) {
                    toast.success("Your appointment request sent successfully!", { theme: "colored" });
                } else {
                    console.log(response);
                }
            },
        });
    }

    return (
        <AppointmentContext.Provider value={{ slots, getSlots, saveAppointment, slotTimings }}>
            {props.children}
        </AppointmentContext.Provider>
    );
}

export default AppointmentState;