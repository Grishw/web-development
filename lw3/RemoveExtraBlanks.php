<?php
    header("Content-Type: text/plain");
    require_once('function.inc.php');

    $text = getGETParam("text");
    if($text !== null)
    {
        $text = trim($text);
        $text = preg_replace('/\s\s+/',' ',$text);
        echo $text;
    }
    else
    {
        echo "No text here";
    };
    