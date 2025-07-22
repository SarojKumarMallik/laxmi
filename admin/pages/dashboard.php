<?php require "../assets/includes/header.php"?>

<div class="container-fluid">
    <main id="main" class="main">
        <div class="pagetitle">
            <!-- <h1>Dashboard</h1> -->
            <nav>
                <ol class="breadcrumb"></ol>
            </nav>
            <!-- <h1>TODAY STATISTICS</h1> -->
        </div>
        <!-- End Page Title -->

        <section class="section dashboard">
            <div class="row">
                <!-- Left side columns -->
                <div class="col-md-12">
                    <div class="row">
                        <!-- Appointment Card -->
                        <div class="col-md-12">
                            <div class="card info-card sales-card">
                                <div class="card-body">
                                    <h5 class="card-title text-center">Today's Appointments</h5>

                                    <div class="d-flex align-items-center justify-content-center">
                                        <div
                                            class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <h6 id="tot_appointments">0</h6>
                                            <input type="hidden" id="tot_appointments2">
                                            <!-- <i class="bi bi-people"></i> -->
                                        </div>
                                        <div class="ps-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Appointment Card -->

                        <!-- Enquiries Card -->
                        <div class="col-md-12">
                            <div class="card info-card sales-card">
                                <div class="card-body">
                                    <h5 class="card-title text-center">Today's Enquiries</h5>

                                    <div class="d-flex align-items-center justify-content-center">
                                        <div
                                            class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <h6 id="tot_enquiries">0</h6>
                                            <input type="hidden" id="tot_enquiries2">
                                            <!-- <i class="bi bi-people"></i> -->
                                        </div>
                                        <div class="ps-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Enquiries Card -->

                        <!-- Appointment -->
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">APPOINTMENTS</h5>

                                    <div id="appointmentInfoTableContainer"></div>
                                </div>
                                <!-- End Appointment -->
                            </div>
                        </div>

                        <!-- Enquiries -->
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">ENQUIRIES</h5>

                                    <div id="enquiryInfoTableContainer"></div>
                                </div>
                                <!-- End Enquiries -->
                            </div>
                        </div>
                        <!-- End Left side columns -->
                    </div>
        </section>
    </main>
    <!-- End #main -->
</div>



<script src="../js/dashboard.js"></script>
<?php require "../assets/includes/footer.php" ?>