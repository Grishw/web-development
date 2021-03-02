<?php
    header("Content-Type: text/plain");
    require_once('function.inc.php');

    $firstName = getGETParam("first_name") === null ? "-" : getGETParam("first_name");
    $lastName = getGETParam("last_name") === null ? "-" : getGETParam("last_name");
    $email = getGETParam("email") === null ? "-" : getGETParam("email");
    $age =getGETParam("age") === null ? "-" : getGETParam("age");

    if($email !== "-")
    {
        $fp = fopen("data/$email.txt", "w");
        if(fwrite($fp, $firstName . PHP_EOL) === false)
        {
            echo "Err with writing info to '$email.txt'";
            exit; 
        }
        if(fwrite($fp, $lastName . PHP_EOL) === false)
        {
            echo "Err with writing info to '$email.txt'";
            exit; 
        }
        if(fwrite($fp, $age . PHP_EOL) === false)
        {
            echo "Err with writing info to '$email.txt'";
            exit; 
        }
    }
    else
    {
        echo "No email in survay";
    }

    