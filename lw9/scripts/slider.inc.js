import * as constants from './const.js';
console.log(constants.DESCTOP_ACTIVE_ELEMENT_COUNT); 



function createSliderPool (elemCount, sliderPoolInArr) {
  let list = [];

  for (var element in sliderPoolInArr) {
    let listElement = addFilmToFilmBlock(sliderPoolInArr[element], element);
    //console.log(listElement);
    list[element] = listElement;
  };
  
  return list;
};

function addFilmToFilmBlock (elementArr, n) {
  let element = document.createElement('div');
  element.className = 'filmblock-list-item filmblock-list-item__' + n;
  
  let elementImg = elementArr['image'];
  let elementImgBlock = '<div> <img src="' + elementImg + '" /> </div>';
  
  let elementName = elementArr['name'];
  let elementNameBlock = '<span class="filmblock-list-item__name">' + elementName + '</span>';
  
  let elementContent = elementArr['text'];
  let elementContentBlock =  '<p class="filmblock-list-item__text">' + elementContent + '</p>';
  
  element.innerHTML = '' + elementImgBlock + elementNameBlock + elementContentBlock;
  
  return element;
};

function fillFilmblock (sliderPool, sliderContainer, topBorder) {
  for (let n in sliderPool) {
    if (n <= topBorder) {
      sliderContainer.appendChild(sliderPool[n]);
    } 
  }
};

//----------------------------------------------------------------------------------
/*function leftSwipe () {
    sliderPoolArr[activeElemRangeEnd][0] = 0;
    sliderContainer.removeChild(sliderPoolArr[activeElemRangeEnd][1]);
    activeElemRangeEnd = (activeElemRangeEnd-1) < 0 
      ? countElementInRange-1 
      : activeElemRangeEnd-1;
      
    if (activeElemRangeStart-1 < 0) {
      activeElemRangeStart = countElementInRange - 1;
    } else {
      activeElemRangeStart = activeElemRangeStart - 1;
    }
    sliderPoolArr[activeElemRangeStart][0] = 1;
    sliderContainer.prepend(sliderPoolArr[activeElemRangeStart][1]);
    
  } 

function rightSwipe () {
    sliderPoolArr[activeElemRangeStart][0] = 0;
    sliderContainer.removeChild(sliderPoolArr[activeElemRangeStart][1]);
    activeElemRangeStart = (activeElemRangeStart+1)%countElementInRange;
    
    activeElemRangeEnd = (activeElemRangeEnd+1)%countElementInRange;
    sliderPoolArr[activeElemRangeEnd][0] = 1;   
    sliderContainer.appendChild(sliderPoolArr[activeElemRangeEnd][1]);
  } 
*/

function leftSwipe (container, elementArr, elementRangStart, elementRangEnd) {
  
  


 
  //container.removeChild(elementArr[elementRangEnd]);
};






function rightSwipe (container, elementArr, elementRangStart, elementRangEnd) {
  

  //container.removeChild(elementArr[elementRangStart]);
};
//----------------------------------------------------------------------------------


export function run (inData) { 

  let sliderContainer = document.getElementsByClassName('filmblock-list').item(0);
  let activeElemCount = constants.DESCTOP_ACTIVE_ELEMENT_COUNT;
  let activeElemRangeStart = constants.DESCTOP_ACTIVE_ELEMENT_ARRAY_INDEX_START;
  let activeElemRangeEnd = activeElemCount;
  let sliderPoolArr = createSliderPool(activeElemCount, inData);
  let countElementInRange = sliderPoolArr.length;
  
  fillFilmblock(sliderPoolArr, sliderContainer, activeElemRangeEnd);
  
  let sliderLeftArrow = document.getElementsByClassName('filmblock__arrow_left').item(0);
  let sliderRightArrow = document.getElementsByClassName('filmblock__arrow_right').item(0);
  // добавить анимацию
  sliderLeftArrow.addEventListener('click' , () => leftSwipe(sliderContainer, sliderPoolArr, activeElemRangeStart, activeElemRangeEnd));
  sliderRightArrow.addEventListener('click' , () => rightSwipe(sliderContainer, sliderPoolArr, activeElemRangeStart, activeElemRangeEnd));
}


