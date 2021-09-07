import * as constants from './const.js';
//console.log(constants.ELEMENT_SIZE); 

function createSliderPool (sliderPoolInArr, rangeArr, countOfElement) {
  let list = [];
  let countOfDuplicateElement = rangeArr[constants.ELEMENT_IN_RANGE_COUNT_ARR_INDEX] - 1;
  
  for (var element in sliderPoolInArr) {
    //console.log(element);
    let listElement = createListElement(sliderPoolInArr[element]);
    list[element] = listElement;
    if (element <= countOfDuplicateElement) {
      listElement = createListElement(sliderPoolInArr[element]);
      list[element % 6 + countOfElement] = listElement;
    };
  };
  
  return list;
};


function createListElement (elementArr) {
  let element = document.createElement('div');
  element.className = 'filmblock-list-item';
  
  let elementImg = elementArr['image'];
  let elementImgBlock = '<div> <img src="' + elementImg + '" width = 285px height = 190px/> </div>';
  
  let elementName = elementArr['name'];
  let elementNameBlock = '<span class="filmblock-list-item__name">' + elementName + '</span>';
  
  let elementContent = elementArr['text'];
  let elementContentBlock =  '<p class="filmblock-list-item__text">' + elementContent + '</p>';
  
  element.innerHTML = '' + elementImgBlock + elementNameBlock + elementContentBlock;
  
  return element;
};

function fillFilmblock (sliderPool, sliderContainer, rangeArr, statusArr ) {
  for (let n in sliderPool) {
    sliderContainer.appendChild(sliderPool[n]);
    
    sliderPool[n].addEventListener('transitionend', () => transitionElement(sliderPool, rangeArr, statusArr));
  };
};

//----------------------------------------------------------------------------------
function transitionElement (elementArr, rangeArr, statusArr) {
  statusArr[constants.ELEMENT_ANIMATION_STATUS_ARR_INDEX] = constants.ANIMATION_END;
  //console.log(statusArr[constants.ELEMENT_ANIMATION_STATUS_ARR_INDEX],'<');
};


function rightSwipe (elementArr, rangeArr, statusArr, paramArr) {
  
  if (statusArr[constants.ELEMENT_ANIMATION_STATUS_ARR_INDEX] == constants.ANIMATION_END) {
    let iRangeArrStart = constants.ELEMENT_RANGE_START_ARR_INDEX;
    let iElementArrEnd = rangeArr[iRangeArrStart] + rangeArr[constants.ELEMENT_IN_RANGE_COUNT_ARR_INDEX];
    
    //console.log('>',rangeArr[iRangeArrStart],iElementArrEnd);
    
    if (iElementArrEnd + 1 <= rangeArr[constants.ELEMENT_RANGE_END_ARR_INDEX]) {
    
      elementArr[rangeArr[iRangeArrStart]].style.marginLeft = paramArr[constants.ELEMENT_MARGIN_LEFT_ARR_INDEX] + "px";
    
      statusArr[constants.ELEMENT_ANIMATION_STATUS_ARR_INDEX] = constants.ANIMATION_ACTIVE;
      rangeArr[iRangeArrStart] = rangeArr[iRangeArrStart] + 1;
    } else {
      for (let n in elementArr) {
        elementArr[n].style.marginLeft = paramArr[constants.ELEMENT_MARGIN_LEFT_DEFAULT_ARR_INDEX] + "px";
      }
      rangeArr[iRangeArrStart] = constants.ELEMENT_RANGE_START;
    }
    

  }
  
};



function leftSwipe (elementArr, rangeArr, statusArr, paramArr) {
  
  if (statusArr[constants.ELEMENT_ANIMATION_STATUS_ARR_INDEX] == constants.ANIMATION_END) {
    
    let iRangeArrStart = constants.ELEMENT_RANGE_START_ARR_INDEX;  
    let iElementArrEnd = rangeArr[iRangeArrStart] + rangeArr[constants.ELEMENT_IN_RANGE_COUNT_ARR_INDEX];
    
    //console.log('<',rangeArr[iRangeArrStart],iElementArrEnd);
    
    if (rangeArr[iRangeArrStart] - 1 >= constants.ELEMENT_RANGE_START) {
    
      elementArr[rangeArr[iRangeArrStart] - 1].style.marginLeft = paramArr[constants.ELEMENT_MARGIN_LEFT_DEFAULT_ARR_INDEX] + "px";
      statusArr[constants.ELEMENT_ANIMATION_STATUS_ARR_INDEX] = constants.ANIMATION_ACTIVE;
    
      rangeArr[iRangeArrStart] = rangeArr[iRangeArrStart] - 1;
    } else {
      for (let n in elementArr) {
        if (rangeArr[constants.ELEMENT_RANGE_END_ARR_INDEX] - n > rangeArr[constants.ELEMENT_IN_RANGE_COUNT_ARR_INDEX]) {
          elementArr[n].style.marginLeft = paramArr[constants.ELEMENT_MARGIN_LEFT_ARR_INDEX] + "px";
        }
      };
      rangeArr[iRangeArrStart] = rangeArr[constants.ELEMENT_RANGE_END_ARR_INDEX] - rangeArr[constants.ELEMENT_IN_RANGE_COUNT_ARR_INDEX];
      //console.log(rangeArr[iRangeArrStart]);
    }
    

  }
  
};
//----------------------------------------------------------------------------------
//debug
function updateSliderElementMarginLeft(elementArr, statusArr, paramArr, rangeArr) {
  for (let n in elementArr) {
    //console.log(n, '<=', rangeArr[constants.ELEMENT_RANGE_START_ARR_INDEX]
     //          ,'/n', elementArr[n]);
  
    if (n < rangeArr[constants.ELEMENT_RANGE_START_ARR_INDEX] ) { 
      elementArr[n].style.marginLeft = paramArr[constants.ELEMENT_MARGIN_LEFT_ARR_INDEX] + "px";    
    } else {
      elementArr[n].style.marginLeft = paramArr[constants.ELEMENT_MARGIN_LEFT_DEFAULT_ARR_INDEX] + "px"; 
    };
    
    //console.log('/n', elementArr[n]);
  };
};


function setParam (rangeArr, paramArr) { 

  
  let windowWith = window.innerWidth;
  
  let countInRange = rangeArr[constants.ELEMENT_IN_RANGE_COUNT_ARR_INDEX];
  let marginLeftDefault = paramArr[constants.ELEMENT_MARGIN_LEFT_DEFAULT_ARR_INDEX];
  let marginLeftInActive = paramArr[constants.ELEMENT_MARGIN_LEFT_ARR_INDEX];
  
  switch (windowWith) {
    case 1440:
      countInRange = 4;
      marginLeftDefault = 0;
      marginLeftInActive = -300;
      break;
      
    case 1024:
      countInRange = 2;
      marginLeftDefault = 70;
      marginLeftInActive = -300;
      break; 
      
    case 768:
      countInRange = 2;
      marginLeftDefault = 22;
      marginLeftInActive = -292;
      break;
      
    case 425:
      countInRange = 1;
      marginLeftDefault = 0;
      marginLeftInActive = -296;
      break;     
  }
  
  rangeArr[constants.ELEMENT_IN_RANGE_COUNT_ARR_INDEX] = countInRange;
  paramArr[constants.ELEMENT_MARGIN_LEFT_DEFAULT_ARR_INDEX] = marginLeftDefault;
  paramArr[constants.ELEMENT_MARGIN_LEFT_ARR_INDEX] = marginLeftInActive;
  
  /*console.log(window.innerWidth,
             ' /start-',rangeArr[constants.ELEMENT_START_ARR_INDEX],
             ' /rstart-',rangeArr[constants.ELEMENT_RANGE_START_ARR_INDEX],
             ' /count-',rangeArr[constants.ELEMENT_IN_RANGE_COUNT_ARR_INDEX],
             ' /margDef-',paramArr[constants.ELEMENT_MARGIN_LEFT_DEFAULT_ARR_INDEX],
             ' /marg-',paramArr[constants.ELEMENT_MARGIN_LEFT_ARR_INDEX]
             
             );*/
};

function fillDefaultRangeArr(rangeArr) {
  rangeArr[constants.ELEMENT_IN_RANGE_COUNT_ARR_INDEX] = 4; 
  rangeArr[constants.ELEMENT_RANGE_START_ARR_INDEX] = constants.ELEMENT_RANGE_START;
  rangeArr[constants.ELEMENT_RANGE_END_ARR_INDEX] = 0;
  rangeArr[constants.ELEMENT_START_ARR_INDEX] = 1;
};

export function run (inData, countOfElement) { 

  let sliderContainer = document.getElementsByClassName('filmblock-list').item(0);
  let sliderElementRangeArr = [];
  fillDefaultRangeArr(sliderElementRangeArr);
  
  let sliderPoolArr = createSliderPool(inData, sliderElementRangeArr, countOfElement);
  sliderElementRangeArr[constants.ELEMENT_RANGE_END_ARR_INDEX] = sliderPoolArr.length;
  
  //console.log(sliderPoolArr);
  
  let sliderElementStatusArr = [];
  sliderElementStatusArr[constants.ELEMENT_ANIMATION_STATUS_ARR_INDEX] = constants.ANIMATION_START_VALUE;
  
  let sliderElementParamArr = [];
  setParam(sliderElementRangeArr, sliderElementParamArr);
  
  
  //console.log(sliderElementRangeArr, sliderElementStatusArr);
  
  fillFilmblock(sliderPoolArr, sliderContainer, sliderElementRangeArr ,sliderElementStatusArr);
  
  window.addEventListener('resize', () => {
    setParam(sliderElementRangeArr, sliderElementParamArr);
    updateSliderElementMarginLeft(sliderPoolArr, sliderElementStatusArr, sliderElementParamArr, sliderElementRangeArr);
  });
  
  let sliderLeftArrow = document.getElementsByClassName('filmblock__arrow_left').item(0);
  let sliderRightArrow = document.getElementsByClassName('filmblock__arrow_right').item(0);
  // добавить анимацию
  sliderLeftArrow.addEventListener('click' , () => leftSwipe(sliderPoolArr, sliderElementRangeArr, sliderElementStatusArr, sliderElementParamArr));
  
  sliderRightArrow.addEventListener('click' , () => rightSwipe(sliderPoolArr, sliderElementRangeArr, sliderElementStatusArr, sliderElementParamArr));
}


