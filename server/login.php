<?php 
include 'bdconfig.php';
//разрешения для работы с фронтендом
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//переменная, которой присваюваются данные с сервера
$data = json_decode(file_get_contents("php://input"));
$email = $data->email;
$password = $data->password;
$passwordmd = md5($password);
if ($email && $password){
try {
    //Получение данных из БД с последующим форматированием в JSON для отправки на фронт
    $stmt = $conn->prepare("SELECT * FROM `users` WHERE `email` = :email AND `password` = :password");
    $stmt->execute([
    'email' => $email,
    'password'=> $passwordmd]);
    $fetchuser = $stmt->fetch(PDO::FETCH_LAZY);
        if ($fetchuser !== ""){
            $outp = "";
            $outp .='{"Email":"' . $fetchuser["email"] .'",';
            $outp .='"first_name":"' . $fetchuser["firstname"] .'",';
            $outp .='"last_name":"' . $fetchuser["lastname"] .'",';
            $outp .='"status":"200"}';
        echo $outp;
}

    
}
catch (PDOException $e) {
    echo "Ошибка: " . $e->getMessage();
}
}
?>