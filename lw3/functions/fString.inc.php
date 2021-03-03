<?php
    require_once('const.inc.php');
       
    function getPosInLine(string $mainString, string $subString) :?int
    {
        return (strpos($mainString, $subString) === FALSE) ? 
                        null : strpos($mainString, $subString);
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
 