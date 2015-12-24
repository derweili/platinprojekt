
 <!DOCTYPE html>
 <html lang="">
 	<head>
 		<?php 

		$sender_email = $_POST["Email"];
		$sender_name = $_POST["Name"];
		$sender_message = $_POST["Nachricht"];


		$empfaenger = "info@platinprojekt.de";
		$betreff = "Nachricht von " . $sender_name . " über www.platinprojekt.de";
		$from="From:Platin Projekt<info@platinprojekt.de>\n";
		$from .= "Reply-To: " . $sender_email ."\n";
		//$from .= "Cc: email2@domain.de\n";
		//$from .= "Bcc: email3@domain.de\n";
		$from .= "X-Mailer: PHP/" . phpversion(). "\n";
		$from .= "X-Sender-IP: $REMOTE_ADDR\n";
		//$from .= "Content-Type: text/html";
		$text = $sender_message;

		mail($empfaenger, $betreff, $text, $from);
		 ?>
 		<meta charset="utf-8">
 		<meta http-equiv="X-UA-Compatible" content="IE=edge">
 		<meta name="viewport" content="width=device-width, initial-scale=1">
 		<title>Mail versendet</title>
 
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
		<link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
		<meta http-equiv="refresh" content="3; URL=http://www.platinprojekt.de/">
 	</head>
 	<body>
 		<div class="veranstaltungen darksection" id="live">
			<div class="row">
				<div class="small-12 columns">
			 		<h1 style="text-align:center">Nachricht versendet.</h1>
			 		<h2>Vielen Dank für dein Nachricht. Du wirst weiterleitet.</h2>
			 	</div>
			 </div>
		</div>
 
 		<!-- jQuery -->
 		<!-- Bootstrap JavaScript -->
 	</body>
 </html>