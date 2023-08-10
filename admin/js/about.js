const viewAboutDetails = () => {
    $.ajax({
        url: '../controllers/viewAboutController.php',
        type: "POST",
        data: "fetch=true",
        cache: false,
        success: (response) => {
            const editAboutParsedResponse = JSON.parse(response);

            if (editAboutParsedResponse['result']['status']['statusCode'] == "0") {
                let aboutDetail = editAboutParsedResponse['aboutDetails'];
                if (aboutDetail.length > 0) {
                    $("#editAboutId").val(aboutDetail[0]['id']);
                    $("#headingOneInput").val(aboutDetail[0]['heading']);
                    $("#headingTwoInput").val(aboutDetail[0]['moreHeading']);
                    $("#descOneInput").val(aboutDetail[0]['description']);
                    $("#descTwoInput").val(aboutDetail[0]['more']);
                    $("#videoLinkInput").val(aboutDetail[0]['videoLink']);
                    $("#videoFrameInput").val(aboutDetail[0]['videoIframe']);
                    $("#editImageHiddenFileOne").val(aboutDetail[0]['number1img']);
                    $("#editImageHiddenFileTwo").val(aboutDetail[0]['number2img']);
                    $("#editImageHiddenFileThree").val(aboutDetail[0]['number3img']);
                    $("#editImageHiddenFileFour").val(aboutDetail[0]['number4img']);
                    $("#editImageHiddenFileFive").val(aboutDetail[0]['number5img']);
                    $("#editImageHiddenFileSix").val(aboutDetail[0]['number6img']);
                    if (aboutDetail[0]['number1img'] != null) {
                        $("#storedViewImageOne").attr("src", '../../img/uplaods/' + aboutDetail[0]['number1img']);
                        $("#storedViewImageOne").attr("alt", aboutDetail[0]['number1img']);
                    } else {
                        $("#storedViewImageOne").attr("src", "");
                        $("#storedViewImageOne").attr("alt", "");
                    }
                    if (aboutDetail[0]['number2img'] != null) {
                        $("#storedViewImageTwo").attr("src", '../../img/uplaods/' + aboutDetail[0]['number2img']);
                        $("#storedViewImageTwo").attr("alt", aboutDetail[0]['number2img']);
                    } else {
                        $("#storedViewImageTwo").attr("src", "");
                        $("#storedViewImageTwo").attr("alt", "");
                    }
                    if (aboutDetail[0]['number3img'] != null) {
                        $("#storedViewImageThree").attr("src", '../../img/uplaods/' + aboutDetail[0]['number3img']);
                        $("#storedeViewImageThree").attr("alt", aboutDetail[0]['number3img']);
                    } else {
                        $("#storedViewImageThree").attr("src", "");
                        $("#storedeViewImageThree").attr("alt", "");
                    }
                    if (aboutDetail[0]['number4img'] != null) {
                        $("#storedViewImageFour").attr("src", '../../img/uplaods/' + aboutDetail[0]['number4img']);
                        $("#storedeViewImageFour").attr("alt", aboutDetail[0]['number4img']);
                    } else {
                        $("#storedViewImageFour").attr("src", "");
                        $("#storedeViewImageFour").attr("alt", "");
                    }
                    if (aboutDetail[0]['number5img'] != null) {
                        $("#storedViewImageFive").attr("src", '../../img/uplaods/' + aboutDetail[0]['number5img']);
                        $("#storedeViewImageFive").attr("alt", aboutDetail[0]['number5img']);
                    } else {
                        $("#storedViewImageFive").attr("src", "");
                        $("#storedeViewImageFive").attr("alt", "");
                    }
                    if (aboutDetail[0]['number6img'] != null) {
                        $("#storedViewImageSix").attr("src", '../../img/uplaods/' + aboutDetail[0]['number6img']);
                        $("#storedeViewImageSix").attr("alt", aboutDetail[0]['number6img']);
                    } else {
                        $("#storedViewImageSix").attr("src", "");
                        $("#storedeViewImageSix").attr("alt", "");
                    }
                    if (aboutDetail[0]['isActive'] == "0") {
                        $("#addAboutStatus").prop("checked", false);
                    } else {
                        $("#addAboutStatus").prop("checked", true);
                    }
                    let editStatusCheckbox = document.getElementById('addAboutStatus');
                    if (editStatusCheckbox.checked == '1') {
                        $("#addAboutStatusOption").html("Published");
                    } else {
                        $("#addAboutStatusOption").html("Draft");
                    }

                } else {
                    // notification("Error", "exclamation-sign", "Internal Error", "danger");
                }
            } else {

            }

        }
    });
}

$(document).ready(() => {
    viewAboutDetails();

    let addStatusCheckbox = document.getElementById('addAboutStatus');
    let addStatusOutput = document.getElementById('addAboutStatusOption');
    addStatusCheckbox.addEventListener('change', function () {
        if (addStatusCheckbox.checked) {
            addStatusOutput.textContent = 'Published';
        } else {
            addStatusOutput.textContent = 'Draft';
        }
    });

    // Get the input element
    const imageEditInputOne = document.getElementById('imageOneInput');

    // Get the preview image element
    const previewEditImageOne = document.getElementById('previewEditImageOne');

    // Get the Stored image element
    const storedViewImageOne = document.getElementById('storedViewImageOne');

    // Listen for changes in the input file selection
    imageEditInputOne.addEventListener('change', function (event) {
        // Check if a file is selected
        if (event.target.files && event.target.files[0]) {
            // Create a FileReader object
            const reader = new FileReader();

            // Set the image source once it's loaded
            reader.onload = function (e) {
                previewEditImageOne.src = e.target.result;
                previewEditImageOne.style.display = 'block';
                storedViewImageOne.style.display = 'none';
            };

            // Read the selected file as a data URL
            reader.readAsDataURL(event.target.files[0]);
        } else {
            // No file selected, hide the preview
            previewEditImageOne.style.display = 'none';
            storedViewImageOne.style.display = 'block';
        }
    });

    // Get the input element
    const imageEditInputTwo = document.getElementById('imageTwoInput');

    // Get the preview image element
    const previewEditImageTwo = document.getElementById('previewEditImageTwo');

    // Get the Stored image element
    const storedViewImageTwo = document.getElementById('storedViewImageTwo');

    // Listen for changes in the input file selection
    imageEditInputTwo.addEventListener('change', function (event) {
        // Check if a file is selected
        if (event.target.files && event.target.files[0]) {
            // Create a FileReader object
            const reader = new FileReader();

            // Set the image source once it's loaded
            reader.onload = function (e) {
                previewEditImageTwo.src = e.target.result;
                previewEditImageTwo.style.display = 'block';
                storedViewImageTwo.style.display = 'nTwo';
            };

            // Read the selected file as a data URL
            reader.readAsDataURL(event.target.files[0]);
        } else {
            // No file selected, hide the preview
            previewEditImageTwo.style.display = 'nTwo';
            storedViewImageTwo.style.display = 'block';
        }
    });

    // Get the input element
    const imageEditInputThree = document.getElementById('imageThreeInput');

    // Get the preview image element
    const previewEditImageThree = document.getElementById('previewEditImageThree');

    // Get the Stored image element
    const storedViewImageThree = document.getElementById('storedViewImageThree');

    // Listen for changes in the input file selection
    imageEditInputThree.addEventListener('change', function (event) {
        // Check if a file is selected
        if (event.target.files && event.target.files[0]) {
            // Create a FileReader object
            const reader = new FileReader();

            // Set the image source once it's loaded
            reader.onload = function (e) {
                previewEditImageThree.src = e.target.result;
                previewEditImageThree.style.display = 'block';
                storedViewImageThree.style.display = 'nThree';
            };

            // Read the selected file as a data URL
            reader.readAsDataURL(event.target.files[0]);
        } else {
            // No file selected, hide the preview
            previewEditImageThree.style.display = 'nThree';
            storedViewImageThree.style.display = 'block';
        }
    });

    // Get the input element
    const imageEditInputFour = document.getElementById('imageFourInput');

    // Get the preview image element
    const previewEditImageFour = document.getElementById('previewEditImageFour');

    // Get the Stored image element
    const storedViewImageFour = document.getElementById('storedViewImageFour');

    // Listen for changes in the input file selection
    imageEditInputFour.addEventListener('change', function (event) {
        // Check if a file is selected
        if (event.target.files && event.target.files[0]) {
            // Create a FileReader object
            const reader = new FileReader();

            // Set the image source once it's loaded
            reader.onload = function (e) {
                previewEditImageFour.src = e.target.result;
                previewEditImageFour.style.display = 'block';
                storedViewImageFour.style.display = 'nFour';
            };

            // Read the selected file as a data URL
            reader.readAsDataURL(event.target.files[0]);
        } else {
            // No file selected, hide the preview
            previewEditImageFour.style.display = 'nFour';
            storedViewImageFour.style.display = 'block';
        }
    });

    // Get the input element
    const imageEditInputFive = document.getElementById('imageFiveInput');

    // Get the preview image element
    const previewEditImageFive = document.getElementById('previewEditImageFive');

    // Get the Stored image element
    const storedViewImageFive = document.getElementById('storedViewImageFive');

    // Listen for changes in the input file selection
    imageEditInputFive.addEventListener('change', function (event) {
        // Check if a file is selected
        if (event.target.files && event.target.files[0]) {
            // Create a FileReader object
            const reader = new FileReader();

            // Set the image source once it's loaded
            reader.onload = function (e) {
                previewEditImageFive.src = e.target.result;
                previewEditImageFive.style.display = 'block';
                storedViewImageFive.style.display = 'nFive';
            };

            // Read the selected file as a data URL
            reader.readAsDataURL(event.target.files[0]);
        } else {
            // No file selected, hide the preview
            previewEditImageFive.style.display = 'nFive';
            storedViewImageFive.style.display = 'block';
        }
    });

    // Get the input element
    const imageEditInputSix = document.getElementById('imageSixInput');

    // Get the preview image element
    const previewEditImageSix = document.getElementById('previewEditImageSix');

    // Get the Stored image element
    const storedViewImageSix = document.getElementById('storedViewImageSix');

    // Listen for changes in the input file selection
    imageEditInputSix.addEventListener('change', function (event) {
        // Check if a file is selected
        if (event.target.files && event.target.files[0]) {
            // Create a FileReader object
            const reader = new FileReader();

            // Set the image source once it's loaded
            reader.onload = function (e) {
                previewEditImageSix.src = e.target.result;
                previewEditImageSix.style.display = 'block';
                storedViewImageSix.style.display = 'nSix';
            };

            // Read the selected file as a data URL
            reader.readAsDataURL(event.target.files[0]);
        } else {
            // No file selected, hide the preview
            previewEditImageSix.style.display = 'nSix';
            storedViewImageSix.style.display = 'block';
        }
    });

    $("#aboutForm").submit(function (e) {
        e.preventDefault(); // Prevent the form from submitting normally

        // Get the form data
        const formData = new FormData(this);
        // Make the AJAX request
        $.ajax({
            url: '../controllers/addAboutController.php',
            type: 'POST',
            data: formData,
            processData: false, // Important! Prevent jQuery from processing the data
            contentType: false, // Important! Set the content type to false
            success: function (response) {
                const parsedResponse = JSON.parse(response);
                if (parsedResponse.result.status.statusCode == "0") {
                    sweetAlert("success", "Updated Successfully");
                } else {
                    sweetAlert("error", parsedResponse.result.status.errorMessage);
                }
            },
            error: function (xhr, status, error) {
                console.error(error); // Print any error messages
            }
        });
        viewAboutDetails();
    });
});

