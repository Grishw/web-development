<?php

    $stringOfLaterENGl = 'abcdefghijklmnopqrstuvwxyz';
    $stringOfLaterENGa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $stringOfNumber = '0123456789';

    function getGETParam (string $name) :?string
    {  
        return isset($_GET[$name]) ? ($_GET[$name]) : null;
    }
    
    function getPosInLine(string $mainString, string $subString) :?int
    {
        return (strpos($mainString, $subString) === FALSE) ? 
                        null : strpos($mainString, $subString);
    }

    function isPassHaveAllowChar(string $pass, string $charSring, string $latterSringLower) 
    {
        $result = TRUE;
        
        for($i = 0; $i <= strlen($pass)-1; $i++)
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

    function getCoutOfRepeatInString(string $pass): int
    {
        $result = 0;
        $chekedCharString = "";
        
        for($i = 0; $i <= strlen($pass)-1; $i++)
        {
            if(getPosInLine($chekedCharString, $pass[$i]) === null)
            {
                substr_count($pass, $pass[$i]) === 1 ? : 
                $result += substr_count($pass, $pass[$i]);
                
                $chekedCharString = $chekedCharString."$pass[$i]";
            }
             
        }
        return $result;
    }