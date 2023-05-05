<?php
    session_start();
    echo session_id();
    if(!isset($_SESSION['logged_user'])){
        header("Location: login.php");
        exit;
    }
?>

<html>

    <head>
        <title>Вводи пароль</title>
        <meta charset="utf-8"/>
    </head>

    <body>
        <p>Привет, <?php echo $_SESSION['logged_user']; ?>, ты на секретной странице!!!</p>
       
    </body>
</html>