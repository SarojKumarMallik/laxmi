<?php
	require '../assets/includes/checklogin.php';

	try {
		require_once '../assets/includes/config.php';
		$achievementId = $_POST['achievementId'];
		$sql = "UPDATE achievements SET deleted = NOW() WHERE id = $achievementId AND orgCode = '".$_SESSION['orgCode']."'";
		$sql = "UPDATE achievements SET deleted = NOW() WHERE id = $achievementId ";
		$result = mysqli_query($conn, $sql);
		if ($result) {
			$data = [
				'result' => [
					'status' => [
						'statusCode' => "0"
					]
				]
			];
			echo json_encode($data);
			exit();
		} else {
			$data = [
				'result' => [
					'status' => [
						'statusCode' => "1", 
						'errorCode' => mysqli_errno($conn),
						'errorMessage' => mysqli_error($conn),
					]
				]
			];
			echo json_encode($data);
			exit();
		}
		

	} catch (Exception $e) {
		$data = [
			'result' => [
				'status' => [
					'statusCode' => "1", 
					'errorCode' => $e->getCode(), 
					'errorLine' => $e->getLine(), 
					'errorMessage' => $e->getMessage(),
					'errorFile' => $e->getFile()
				]
			]
		];
		echo json_encode($data);
		exit();
	}
?>