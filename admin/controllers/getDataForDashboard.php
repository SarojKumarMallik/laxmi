<?php
	require '../assets/includes/checklogin.php';

	try {
		require_once '../assets/includes/config.php';
		$fromDate = date('Y-m-d');
		$toDate = date('Y-m-d');
        
		$totalEnquiries = "SELECT COUNT(id) as tot_enquiries FROM inquiryinfo WHERE created  >= '$fromDate 00:00:00' AND created <= '$toDate 23:59:59' AND orgCode = '".$_SESSION['orgCode']."'";

		$totalAppointments = "SELECT COUNT(id) as tot_appointments FROM appointments WHERE created  >= '$fromDate 00:00:00' AND created <= '$toDate 23:59:59' AND orgCode = '".$_SESSION['orgCode']."'";
		
		$tot_enquiries = 0; 
		$tot_appointments = 0; 
        
		$result1 = mysqli_query($conn, $totalAppointments);
		$result2 = mysqli_query($conn, $totalEnquiries);

		while($rows1 = mysqli_fetch_assoc($result1)){
			$tot_appointments = $rows1['tot_appointments'];
		}

		while($rows2 = mysqli_fetch_assoc($result2)){
			$tot_enquiries = $rows2['tot_enquiries'];
		}

		echo json_encode(
			array(
				'result' => array(
					'status' => array(
						'statusCode' => "0"
					)
				),
				"sql" => $totalEnquiries,
				"sql2" => $totalAppointments,
				"tot_enquiries" => $tot_enquiries,
				"tot_appointments" => $tot_appointments,
				'from' => $fromDate,
				'to' => $toDate
			)
		);

		exit();
	} catch (Exception $e) {
		$data = array(
			'result' => array(
				'status' => array(
					'statusCode' => "1", 
					'errorCode' => $e->getCode(), 
					'errorLine' => $e->getLine(), 
					'errorMessage' => $e->getMessage(),
					'errorFile' => $e->getFile()
				)
			)
		);
		echo json_encode($data);
		exit();
	}
?>