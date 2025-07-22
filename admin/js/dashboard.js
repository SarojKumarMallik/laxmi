const viewEnquiryInfoDetails = () => {
    $.ajax({
        url: '../controllers/viewEnquiryinfoController.php',
        type: "POST",
        data: "view=true",
        cache: false,
        success: (response) => {
            const enquiryInfoParsedResponse = JSON.parse(response);

            let enquiryInfoParsedResponseInfo = `
            <table class="table table-hover datatable">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Message</th>
                    </tr>
                </thead>
            <tbody>`;
            if (enquiryInfoParsedResponse['result']['status']['statusCode'] == "0") {
                const enquiryInfoDetails = enquiryInfoParsedResponse['enquiryInfoDetails'];

                for (let i = 0; i < enquiryInfoDetails.length; i++) {
                    enquiryInfoParsedResponseInfo += `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${enquiryInfoDetails[i].name}</td>
                        <td>${enquiryInfoDetails[i].email}</td>
                        <td>${enquiryInfoDetails[i].subject}</td>
                        <td>${enquiryInfoDetails[i].message}</td>
                    </tr>`;
                }
            }
            enquiryInfoParsedResponseInfo += `</tbody></table>`;
            $("#enquiryInfoTableContainer").html(enquiryInfoParsedResponseInfo);
            $('.datatable_1').DataTable({
                // scrollX: true,
                // destroy: true,
                responsive: true
            });
        }
    });
}

const viewAppointmentInfoDetails = () => {
    $.ajax({
        url: '../controllers/getAppointmentController.php',
        type: "POST",
        data: "view=true",
        cache: false,
        success: (response) => {
            const appointmentInfoParsedResponse = JSON.parse(response);

            let appointmentInfoParsedResponseInfo = `
            <table class="table table-hover datatable">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Doctor</th>
                        <th scope="col">Appt. Date</th>
                        <th scope="col">Appt. Time</th>
                    </tr>
                </thead>
            <tbody>`;
            if (appointmentInfoParsedResponse['result']['status']['statusCode'] == "0") {
                const appointmentInfoDetails = appointmentInfoParsedResponse['apptDetails'];

                for (let i = 0; i < appointmentInfoDetails.length; i++) {
                    appointmentInfoParsedResponseInfo += `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${appointmentInfoDetails[i].patientName}</td>
                        <td>${appointmentInfoDetails[i].patientEmail}</td>
                        <td>${appointmentInfoDetails[i].patientPhone}</td>
                        <td>${appointmentInfoDetails[i].drName}</td>
                        <td>${appointmentInfoDetails[i].apptDate.slice(0, 16)}</td>
                        <td>${appointmentInfoDetails[i].apptTime}</td>
                    </tr>`;
                }
            }
            appointmentInfoParsedResponseInfo += `</tbody></table>`;
            $("#appointmentInfoTableContainer").html(appointmentInfoParsedResponseInfo);
            $('.datatable').DataTable({
                // scrollX: true,
                // destroy: true,
                responsive: true
            });
        }
    });
}

function getDataForDashboard() {
    $.ajax({
        url: "../controllers/getDataForDashboard.php",
        type: "POST",
        data: "view=true",
        success: function (data) {
            const response = JSON.parse(data);
            if (response['result']['status']['statusCode'] == "0") {
                $("#tot_enquiries").html(response['tot_enquiries']);
                $("#tot_enquiries2").val(response['tot_enquiries']);
                $("#tot_appointments").html(response['tot_appointments']);
                $("#tot_appointments2").val(response['tot_appointments']);
            } else {
                sweetAlert("error", response.result.status.errorMessage);
            }
        }
    });
}
$(document).ready(() => {
    viewEnquiryInfoDetails();
    viewAppointmentInfoDetails();
    getDataForDashboard();

});
