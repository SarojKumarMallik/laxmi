import './Appointment.css';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";

import { toast } from 'react-toastify';
import React, { useContext, useEffect, useState } from 'react';
import $ from 'jquery';
import DatePicker from "react-datepicker";

import doctorContext from '../../context/doctors/doctorscontext';
import appointmentContext from '../../context/appointment/appointmentcontext';
import progressContext from '../../context/loading/progresscontext';

function Appointment() {
    const [apptDate, setApptDate] = useState(new Date());

    const { setProgress } = useContext(progressContext);
    const { docList } = useContext(doctorContext);
    const { slotTimings, getSlots } = useContext(appointmentContext);

    useEffect(() => {
        setProgress(70);
        setTimeout(() => {
            setProgress(100);
        }, 100);
    }, []);


    const checkAvailableSlots = () => {
        if ($("#doctor").val() !== "" && apptDate !== null) {
            getSlots($("#doctor").val(), apptDate);
        } else {
            $("#apptTime").html(`<option value="">Select Appointment Time*</option>`)
            toast.error("Please Select a Doctor and Appointment Date !", { theme: "colored" });
        }
    }

    const handelFormSubmit = (e) => {
        e.preventDefault();
        if ($("#apptTime").val() === "") {
            toast.error("Please Select Slot Timing !", { theme: "colored" });
        } else {
            console.log("Submited");
        }
    }


    return (
        <section id="appointment" className="appointment section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Book an Appointment</h2>
                    <p>Book your appointment today and let our doctors help you.</p>
                </div>

                <form className="appointment-form mb-5 mt-3">
                    <div className="row">
                        <div className="col-md-4 form-group">
                            <select name="doctor" id="doctor" className="form-select">
                                <option value="">Select Doctor</option>
                                {docList.map(item => <option value={item.doctor_id} key={item.doctor_id}>{item.doctor_name}</option>)}
                            </select>
                        </div>
                        <div className="col-md-4 form-group">
                            <label className="me-3">Select Appointment Date*</label>
                            <DatePicker className="form-control" placeholderText='Select Appointment Date*' selected={apptDate} onChange={(date) => { setApptDate(date); }} />
                        </div>
                        <div className="col-md-4 form-group">
                            <select name="apptTime" id="apptTime" className="form-select">
                                <option value="">Select Appointment Time*</option>
                                {slotTimings.map(item => item.status === "0" && <option value={item.slot_id} key={item.slot_id}>{`${item.start_time} - ${item.end_time}`}</option>)}
                            </select>
                        </div>

                        <div className="text-center mt-3">
                            <button className="appt-btn" type="button" onClick={checkAvailableSlots}>Check For Available Slots</button>
                        </div>
                    </div>
                </form>

                <form className="appointment-form my-5" onSubmit={handelFormSubmit}>
                    <h3 className="section-title">Fill Patient Details Here</h3>
                    <div className="row">
                        <div className="col-md-3 form-group mb-3">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name*" required />
                        </div>
                        <div className="col-md-3 form-group mb-3">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                        </div>
                        <div className="col-md-3 form-group mb-3">
                            <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone*" required />
                        </div>
                        <div className="col-md-3 form-group mb-3">
                            <select name="age" id="age" className="form-select" required>
                                <option value="">Select Age*</option>
                                <option value="0-18">Below 18</option>
                                <option value="18-40">18-40</option>
                                <option value="40+">40 above</option>
                            </select>
                        </div>
                        <div className="col-md-12 form-group mb-3">
                            <textarea className="form-control" name="message" rows="3" placeholder="Address"></textarea>
                        </div>
                        <div className="col-md-12 form-group mb-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
                        </div>
                    </div>

                    <div className="text-center mt-3"><button className="appt-btn" type="submit">Book an Appointment</button></div>
                </form>
            </div>
        </section>
    );
}

export default Appointment;