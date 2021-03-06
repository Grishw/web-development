<?php
    header("Content-Type: text/plain");
    require_once('../functions/function.inc.php');

    $password = getGETParam("password");

    $passStrength = 0;

    if($password  === null)
    {
        echo "No password here";
    }
    else if( isPassHaveAllowChar($password, $stringOfNumber, $stringOfLaterENGl))
    {
        $size = strlen($password);
        
        $passStrength += 4*$size;
        
        for($i = 0; $i <= $size - 1; $i++)
        {
            if((10 > ord($identifier[$i]) && 
                      ord($identifier[$i]) > -1))
            {   
                $passStrength += 4;
            }
        };
        
        $countOfApperLetter = 0;
        for($i = 0; $i <= $size - 1; $i++)
        {
            if(getPosInLine($stringOfLaterENGa, $password[$i]) !== null)
            {
                $countOfApperLetter++;
            }
        };
        
        if($countOfApperLetter !== 0) 
        {
            $passStrength += ($size - $countOfApperLetter)*2;
        }
        
        $countOfLowerLetter = 0;
        for($i = 0; $i <= $size - 1; $i++)
        {
            if(getPosInLine($stringOfLaterENGl, $password[$i]) !== null)
            {
                $countOfLowerLetter++;
            }
        };
        
        if($countOfLowerLetter !== 0)
        {
            $passStrength += ($size - $countOfLowerLetter)*2; 
        }
        
        $coutOfLetter = $countOfLowerLetter + $countOfApperLetter;
        
        if($size - $coutOfLetter === 0)
        {
            $passStrength -= $coutOfLetter;
        }
        
        if($coutOfLetter === 0) 
        {
            $passStrength -= $size;
        }
        
        $passStrength -= getCoutOfRepeatInString($password);

        
        echo "Pass power for '$password' = ".$passStrength;
    }
    else
    {
        echo "Haves some not allowed char";
    };


