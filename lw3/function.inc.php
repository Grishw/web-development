<?php

    $stringOfLaterENGl = "abcdefghijklmnopqrstuvwxyz";
    $stringOfLaterENGa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    $stringOfNumber = "0123456789";

    function getGETParam (string $name) :?string
    {  
        return isset($_GET[$name]) ? ($_GET[$name]) : null;
    };
    
    function getPosInLine(string $mainString, string $subString) :?int
    {
        return (strpos($mainString, $subString) === FALSE) ? 
                        null : strpos($mainString, $subString);
    }

