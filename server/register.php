<?php 
include 'bdconfig.php';
//разрешения для работы с фронтендом
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//переменная, которой присваюваются данные с сервера
$data = json_decode(file_get_contents("php://input"));
$first_name = $data->first_name;
$last_name = $data->last_name;
$email = $data->email;
$password = $data->password;
$passwordmd = md5($password);
if ($first_name && $last_name && $email && $password){
try {
    //Запись в БД
    $query = "INSERT INTO `users`(`firstname`, `lastname`, `email`, `password`) VALUES (:first_name, :last_name, :email, :password)";
    $params = [
        ':first_name' => $first_name,
        ':last_name' => $last_name,
        ':email' => $email,
        ':password' => $passwordmd,
    ];
    $stmt = $conn->prepare($query);
    $stmt->execute($params);
}
catch (PDOException $e) {
    echo "Ошибка записи: " . $e->getMessage();

}
}
?>