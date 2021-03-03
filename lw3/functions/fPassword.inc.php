<?php
    require_once('const.inc.php');
    require_once('fString.inc.php'); 

    function isPassHaveAllowChar(string $pass, string $charSring, string $latterSringLower) 
    {
        $result = TRUE;
        
        for($i = 0; $i <= strlen($pass) - 1; $i++)
        {
            
            if(getPosInLine($charSring, $pass[$i]) === null)
            { 
                if(getPosInLine($latterSringLower, strtolower($pass[$i])) === null)
                {
                    $result = FALSE;
                    break;
                }
            }
            
        }
        
        return $result;
    }