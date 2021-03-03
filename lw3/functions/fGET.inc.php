<?php

    require_once('const.inc.php');

    function getGETParam (string $name) :?string
    {  
        return isset($_GET[$name]) ? ($_GET[$name]) : null;
    }