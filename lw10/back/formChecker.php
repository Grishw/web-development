<?php

function cors() {
    
    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
    
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
        exit(0);
    }
};
  	
    cors();
    // Формируем массив для JSON ответа
    $method = $_SERVER['REQUEST_METHOD'];
    $data = json_decode(file_get_contents('php://input'));
  

    $result = [
        '1' => $method,
        '2' => $data,
        'email' => 'false'
    ];
    
    if (filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $result['email'] = 'ok';
    } else {
        $result['email'] = 'uncorrect';
    }

    echo json_encode($result);


?>