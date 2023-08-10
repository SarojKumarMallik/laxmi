import { useState } from "react";
import $ from "jquery";
import DoctorContext from "./doctorscontext";
import { baseUrl } from "../../utility/utilityfunctions";

const DoctorState = (props) => {
    const [docList, setDocList] = useState([]);
    const [docInfo, setDocInfo] = useState([]);
    const [docPageDesc, setDocPageDesc] = useState({});

    const getDocList = () => {
        $.ajax({
            url: `${baseUrl}doctorsfromclinic`,
            type: "GET",
            success: (response) => {
                if (response.status === 0) {
                    setDocList(response.data);
                } else {
                    console.log(response);
                }
            },
        });
    }

    const getDocInfo = () => {
        $.ajax({
            url: `${baseUrl}doctorsinfo`,
            type: "GET",
            success: (response) => {
                if (response.status === 0) {
                    setDocInfo(response.data.docInfo);
                    setDocPageDesc(response.data.pageDesc[0]);
                } else {
                    console.log(response);
                }
            },
        });
    }

    return (
        <DoctorContext.Provider value={{ docList, docInfo, docPageDesc, getDocList, getDocInfo }}>
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorState;