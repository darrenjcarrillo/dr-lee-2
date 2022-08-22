<?php
require('vendor/autoload.php');
$post_data = $_POST;

if( ! isset($post_data['action']) ){
  
	echo json_encode(
		array(
			'type' => 'error', 
			'message' => 'Action is required.',
			'provided data' => $_POST
		)
	);
	exit;
}

if( $post_data['action'] === 'schedule' ){
  parse_str($post_data['data'], $form_data);

  $user_email = $form_data['email'];
  $user_name = $form_data['name'];
  
	$mail = new PHPMailer;

	$mail->setFrom('noreply@email.com', 'truSculpt® Clinique Anti-Aging');
	// $mail->addAddress('email@email.com', 'truSculpt®');
	// $mail->addAddress('xx', 'truSculpt®');
	
	// Add a recipient
	$mail->addAddress('darren.carrillo@urgeinteractive.com', 'UI');
	// Add a recipient
	$mail->addCC($user_email, $user_name);     // Add a recipient
	// $mail->AddBCC('tracking@urgeinteractive.com', 'UI');     // Add a BCC recipient
	
	$mail->isHTML(true);

  $body = '<div style="width: 600px; max-width:100%; margin: 0 auto;">';
  $body .= '<div style="text-align: center; padding: 15px;background:#fff;">';
	$body .= '<img style="margin:0 auto;" width="200px" height="auto"; src="https://trubody-montreal.ca/img/clinique-logo.png" />';
	$body .= '</div>';
	$body .= '<table style="border: 1px solid #4d4d4d; border-collapse: collapse; width: 100%;">';

	foreach( $form_data as $name => $value ) {
		if($name == 'g-recaptcha-response'){ continue;}

    	$body .= '<tr style="border: 1px solid #4d4d4d;"><td style="width: 30%; padding: 10px; border: 1px solid #4d4d4d;"><strong>'.str_replace(array('_', '-'),' ', ucfirst($name)).'</strong></td><td style="width: 70%; padding: 10px; border: 1px solid #4d4d4d;">'.ucfirst($value).'</td></tr>';
	}

	$body .= '</table>';
	$body .= '</div>';

  $mail->Subject = 'Coolsculpting, Scheduling Request';
	$mail->Body    = $body;

  $response = 'Message has been sent';
  $type = 'success';
  $mail->isHTML(true);
  
	if( ! $mail->send() ) {
		$type = 'error';
		$response = 'Message could not be sent.';
		$response .= 'Mailer Error: ' . $mail->ErrorInfo;
	}

	echo json_encode(array('type' => $type, 'message' => $response));
	exit;
  
} 
