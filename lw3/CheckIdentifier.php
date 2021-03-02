<?php
    header("Content-Type: text/plain");
    require_once('function.inc.php');

    $identifier = getGETParam("identifier");
    $isIdentif = "yes";

    if($identifier === null)
    {
        $isIdentif = "no - No identifier here";
    }
    else
    {       
        if(getPosInLine($stringOfLaterENGl, strtolower($identifier[0])) === null)
        {
            $isIdentif = "no - First char is not a lettar from latin Alphabet";
        }
        else
        {
            for($i = 1; $i <= strlen($identifier)-1; $i++)
            {
                if(getPosInLine($stringOfLaterENGl, strtolower($identifier[$i])) === null && 
                  getPosInLine($stringOfNumber, $identifier[$i]) === null)
                {
                    $isIdentif = "no - '$identifier[$i]' not from allowed list of char";
                    break;
                }
            };
            
        }

    }
    echo $isIdentif;
    