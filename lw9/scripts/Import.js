
import {run as sliderStart} from './slider.inc.js';


//--------------------------------------------------------------

//getting data from json
async function doFetch() {
  var headers = {  
    "method": 'GET'
    
  }
  
  var url = 'http://localhost:8080/scripts/data.json';

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
