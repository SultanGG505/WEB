<?php
$to = "recipient@example.com";
$subject = "Новая заявка с сайта";
$message = "ФИО: ".$_POST["fio"]."\nEmail: ".$_POST["email"]."\nТелефон: ".$_POST["phone"];
$headers = "From: webmaster@example.com";
if (mail($to, $subject, $message, $headers)) {
	echo "Данные успешно отправлены на сервер";
} else {
	echo "Ошибка отправки данных на сервер";
}
?>
