<?php
    header("Content-Type: text/plain");
    require_once('function.inc.php');

    $email = getGETParam("email") === null ? "-" : getGETParam("email");

    if($email !== "-")
    {
        
        $fp = "data/$email.txt";
        
        if (file_exists($fp))
        {
            $file_array = file($fp);
            
            echo "First Name: ";
            echo trim($file_array[0]) === "-" ? " \n" : trim($file_array[0])."\n";
            
            echo "Last Name: ";
            echo trim($file_array[1]) === "-" ? " \n" : trim($file_array[1])."\n";
            
            echo "Email: ". $email."\n";
            
            echo "Age: ";
            echo trim($file_array[2]) === "-" ?" \n" : trim($file_array[2])."\n";
        }
        else
        {
            echo "Have not survey with $email";
        }
    }
    else
    {
        echo "Have not email";
    }