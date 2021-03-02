<?php
    header("Content-Type: text/plain");
    require_once('function.inc.php');

    $text = getGETParam("text");

    $text = trim($text);
    $text = preg_replace('/\s\s+/',' ',$text);

    echo $text;