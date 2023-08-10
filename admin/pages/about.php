<?php require "../assets/includes/header.php"?>

<div class="container-fluid">
    <main id="main" class="main">
        <div class="pagetitle">
            <!-- <h1>Site Settings</h1> -->
            <nav>
                <ol class="breadcrumb"></ol>
            </nav>
        </div>
        <!-- End Page Title -->

        <section class="section dashboard">
            <div class="row">
                <!-- Left side columns -->
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header fs-5 fw-bold">About</div>
                        <div class="card-body pt-3">
                            <form class="row g-3" id="aboutForm" enctype="multipart/form-data">
                                <div class="col-md-6">
                                    <label for="headingOneInput" class="form-label">Heading
                                        *</label>
                                    <input type="text" class="form-control" id="headingOneInput" name="headingOneInput">
                                </div>
                                <div class="col-md-6">
                                    <label for="descOneInput" class="form-label">Description *</label>
                                    <textarea class="form-control" rows="3" id="descOneInput"
                                        name="descOneInput"></textarea>
                                </div>
                                <div class="col-md-6">
                                    <label for="headingTwoInput" class="form-label">More Heading
                                        *</label>
                                    <input type="text" class="form-control" id="headingTwoInput" name="headingTwoInput">
                                </div>
                                <div class="col-md-6">
                                    <label for="descTwoInput" class="form-label">More Description *</label>
                                    <textarea class="form-control" rows="3" id="descTwoInput"
                                        name="descTwoInput"></textarea>
                                </div>
                                <div class="col-md-6">
                                    <label for="videoLinkInput" class="form-label">Video Link *</label>
                                    <input type="text" class="form-control" id="videoLinkInput" name="videoLinkInput">
                                </div>
                                <div class="col-md-6">
                                    <label for="videoFrameInput" class="form-label">Video Frame *</label>
                                    <input type="text" class="form-control" id="videoFrameInput" name="videoFrameInput">
                                </div>
                                <div class="col-md-4">
                                    <label class="form-check-label" for="addAboutStatus">Status</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="addAboutStatus"
                                            name="addAboutStatus">
                                        <label class="form-check-label" id="addAboutStatusOption">Draft</label>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="custom-file-upload">
                                        <input type="file" id="imageOneInput" name="imageOneInput">
                                        <label for="imageOneInput"><i class="bi bi-upload me-2"></i>Image 1</label>
                                    </div>
                                    <img class="img-thumbnail" id="previewEditImageOne" alt="Preview Image"
                                        style="display: none;">
                                    <input type="hidden" name="editImageHiddenFileOne" id="editImageHiddenFileOne">
                                    <img src="" id="storedViewImageOne" class="img-thumbnail">
                                </div>
                                <div class="col-md-12">
                                    <div class="custom-file-upload">
                                        <input type="file" id="imageTwoInput" name="imageTwoInput">
                                        <label for="imageTwoInput"><i class="bi bi-upload me-2"></i>Image 2</label>
                                    </div>
                                    <img class="img-thumbnail" id="previewEditImageTwo" alt="Preview Image"
                                        style="display: none;">
                                    <input type="hidden" name="editImageHiddenFileTwo" id="editImageHiddenFileTwo">
                                    <img src="" id="storedViewImageTwo" class="img-thumbnail">
                                </div>
                                <div class="col-md-12">
                                    <div class="custom-file-upload">
                                        <input type="file" id="imageThreeInput" name="imageThreeInput">
                                        <label for="imageThreeInput"><i class="bi bi-upload me-2"></i>Image 3</label>
                                    </div>
                                    <img class="img-thumbnail" id="previewEditImageThree" alt="Preview Image"
                                        style="display: none;">
                                    <input type="hidden" name="editImageHiddenFileThree" id="editImageHiddenFileThree">
                                    <img src="" id="storedViewImageThree" class="img-thumbnail">
                                </div>
                                <div class="col-md-12">
                                    <div class="custom-file-upload">
                                        <input type="file" id="imageFourInput" name="imageFourInput">
                                        <label for="imageFourInput"><i class="bi bi-upload me-2"></i>Image 4</label>
                                    </div>
                                    <img class="img-thumbnail" id="previewEditImageFour" alt="Preview Image"
                                        style="display: none;">
                                    <input type="hidden" name="editImageHiddenFileFour" id="editImageHiddenFileFour">
                                    <img src="" id="storedViewImageFour" class="img-thumbnail">
                                </div>
                                <div class="col-md-12">
                                    <div class="custom-file-upload">
                                        <input type="file" id="imageFiveInput" name="imageFiveInput">
                                        <label for="imageFiveInput"><i class="bi bi-upload me-2"></i>Image 5</label>
                                    </div>
                                    <img class="img-thumbnail" id="previewEditImageFive" alt="Preview Image"
                                        style="display: none;">
                                    <input type="hidden" name="editImageHiddenFileFive" id="editImageHiddenFileFive">
                                    <img src="" id="storedViewImageFive" class="img-thumbnail">
                                </div>
                                <div class="col-md-12">
                                    <div class="custom-file-upload">
                                        <input type="file" id="imageSixInput" name="imageSixInput">
                                        <label for="imageSixInput"><i class="bi bi-upload me-2"></i>Image 6</label>
                                    </div>
                                    <img class="img-thumbnail" id="previewEditImageSix" alt="Preview Image"
                                        style="display: none;">
                                    <input type="hidden" name="editImageHiddenFileSix" id="editImageHiddenFileSix">
                                    <img src="" id="storedViewImageSix" class="img-thumbnail">
                                </div>
                                <div class="pt-3 border-top">
                                    <button type="reset" class="btn btn-sm btn-warning me-2"><i
                                            class="bi bi-arrow-clockwise me-1"></i>Reset</button>
                                    <input type="hidden" id="editAboutId" name="editAboutId">
                                    <button type="submit" class="btn btn-sm btn-primary"><i
                                            class="bi bi-save2 me-1"></i>Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- End Left side columns -->
            </div>
        </section>
    </main>
    <!-- End #main -->
</div>




<script src="../js/about.js"></script>
<?php require "../assets/includes/footer.php" ?>