<?php
    header("Content-Type: text/plain");
    require_once('function.inc.php');

    $identifier = getGETParam("identifier");
    echo $identifier;