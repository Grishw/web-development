<?php
    header("Content-Type: text/plain");
    require_once('../functions/function.inc.php');

    $identifier = getGETParam("identifier");
    $result = "yes";

    if($identifier === null)
    {
        $result = "no - No identifier here";
    }
    else if($identifier !== '')
    {       
        if(123 > ord(strtolower($identifier[0])) && 
                ord(strtolower($identifier[0])) > 96)
        {
            for($i = 1; $i <= strlen($identifier) - 1; $i++)
            {
                if(!(10 > ord($identifier[$i]) && 
                          ord($identifier[$i]) > -1) &&  
                  !(123 > ord(strtolower($identifier[$i])) && 
                          ord(strtolower($identifier[$i])) > 95))
                {
                    $result = "no - '$identifier[$i]' not from allowed list of char";
                    break;
                }
            }
            
        }
        else
        {
           $result = "no - First char is not a lettar from latin Alphabet";          
        }

    }
    else
    {
        $result = "no - GET[identifier] is empty";
    }
    echo $result;