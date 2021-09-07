
import {run as sliderStart} from './slider.inc.js';


//--------------------------------------------------------------

//getting data from json
async function doFetch() {
  var headers = {  
    "method": 'GET'
    
  }
  
  var url = 'http://127.0.0.1:57110/scripts/data.json';

  const response = await fetch(url, headers);
  
  if (response.ok) {
    const json = await response.json();
    sliderStart(json, Object.keys(json).length);
  }
  
}

//--------------------------------------------------------------



//--------------------------------------------------------------
//slider start
doFetch();
//--------------------------------------------------------------
