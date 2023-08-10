import { toast } from "react-toastify";
import { useState } from "react";
import $ from "jquery";
import ContactContext from "./contactcontext";
import { baseUrl } from "../../utility/utilityfunctions";

const ContactState = (props) => {
    const [contactInfo, setContactInfo] = useState({});

    const getContactInfoContent = () => {
        $.ajax({
            url: `${baseUrl}contactinfo`,
            type: "GET",
            success: (response) => {
                if (response.status === 0) {
                    setContactInfo(response.data[0]);
                } else {
                    console.log(response);
                }
            },
        });
    }

    const sendInquiryDetails = (data) => {
        $.ajax({
            url: `${baseUrl}saveinquiry`,
            type: "POST",
            data: data,
            success: (response) => {
                if (response.status === 0) {
                    toast.success("Thank you for showing interest. We have recieved your request, will get back to you soon", { theme: "colored" });
                } else {
                    console.log(response);
                }
            },
        });
    }


    return (
        <ContactContext.Provider value={{ contactInfo, getContactInfoContent, sendInquiryDetails }}>
            {props.children}
        </ContactContext.Provider>
    );
}

export default ContactState;