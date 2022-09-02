<?php
//создание таблицы базы данных
include 'bdconfig.php';
try{
$stmt = $conn->query("CREATE TABLE `users` (`id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT, PRIMARY KEY(id), `firstname` VARCHAR(25) NOT NULL, `lastname` VARCHAR(25) NOT NULL, `email` VARCHAR(50) NOT NULL, `password` VARCHAR(50) NOT NULL);");
echo 'Таблица создана';
}
catch (PDOException $e) {
    print "Ошибка!: " . $e->getMessage();
    die();
  }
?>