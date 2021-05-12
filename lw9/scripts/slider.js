
function createSliderPool(elemCount) {
  let sliderPoolInArr = [ 
    ['filmblock-list-item__image_narcoz', 'Наркоз', 'Клай Бересфорд вынужден лечь под нож. Однако в процессе операции на сердце он неожиданно приходит в себя. Находясь в парализованном состоянии, будучи не в силах пошевелить ни рукой, ни ногой, он, тем не менее, чувствует каждое касание скальпеля к своей плоти…'],
    ['filmblock-list-item__image_escapefromShoushenko', 'Побег из Шоушенка', 'Успешный банкир Энди Дюфрейн обвинен в убийстве собственной жены и ее любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решетки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, вооруженный живым умом и доброй душой, отказывается мириться с приговором судьбы и начинает разрабатывать невероятно дерзкий план своего освобождения.'],
    ['filmblock-list-item__image_astral', 'Астрал', 'Джош и Рене переезжают со своими детьми в новый дом, но не успевают толком распаковать вещи, как начинаются странные события. Необъяснимо перемещаются предметы, в детской звучат странные звуки… Но в настоящий ужас приходят родители, когда их десятилетний сын Далтон впадает в кому. Все усилия врачей в больнице помочь мальчику безуспешны.'],
    ['filmblock-list-item__image_gravitacia', 'Гравитация', 'Доктор Райан Стоун, блестящий специалист в области медицинского инжиниринга, отправляется в свою первую космическую миссию под командованием ветерана астронавтики Мэтта Ковальски, для которого этот полет — последний перед отставкой. Но во время, казалось бы, рутинной работы за бортом случается катастрофа. Шаттл уничтожен, а Стоун и Ковальски остаются совершенно одни; они находятся в связке друг с другом, и все, что они могут, — это двигаться по орбите в абсолютно черном пространстве без всякой связи с Землей и какой-либо надежды на спасение.'],
    ['filmblock-list-item__image_avatar', 'Аватар', 'Бывший морпех Джейк Салли прикован к инвалидному креслу. Несмотря на немощное тело, Джейк в душе по-прежнему остается воином. Он получает задание совершить путешествие в несколько световых лет к базе землян на планете Пандора, где корпорации добывают редкий минерал, имеющий огромное значение для выхода Земли из энергетического кризиса.']
  ];

  //console.log(elemCount);
  let list = [];
  //console.log(list[0]);
  //console.log('------------------------------------------------');
  
  for (let n in sliderPoolInArr) {
    //console.log(n);
    //console.log(sliderPoolInArr[n]);
    //console.log('||||');
    
    let listElement = [];
    listElement[0] = 0;
    if (n <= elemCount) {
      listElement[0] = 1;
    }
    let element = addFilmToFilmBlock(sliderPoolInArr[n]);
    element.addClass = 'filmblock-list-item__' + n;
    listElement[1] = element;

    list[n] = listElement;
  }
  //console.log(list);
  return list;
};


function addFilmToFilmBlock(elementArr) {
  let element = document.createElement('div');
  element.className = 'filmblock-list-item';
  
  let elementImg = elementArr[0];
  let elementImgBlock = '<div class="filmblock-list-item__image ' + elementImg + '" > </div>';
  
  let elementName = elementArr[1];
  let elementNameBlock = '<span class="filmblock-list-item__name">' + elementName + '</span>';
  
  let elementContent = elementArr[2];
  let elementContentBlock =  '<p class="filmblock-list-item__text">' + elementContent + '</p>';
  
  element.innerHTML = '' + elementImgBlock + elementNameBlock + elementContentBlock;
  
  return element;
  //console.log(element); 
};

function fillFilmblock(sliderPool) {
  for (let n in sliderPool) {
    if (sliderPool[n][0] == 1) {
      parenElement.appendChild(sliderPool[n][1]);
    } 
  }
};

function run() { 
  parenElement = document.getElementsByClassName('filmblock-list').item(0);
  //console.log(parenElement);
  activeElemCount = 4;
  activeElemRangeStart = 0;
  activeElemRangeEnd = activeElemCount-1;
  //console.log(activeElemCount);
  sliderPoolArr = createSliderPool(activeElemCount);
  countElementInRange = sliderPoolArr.length;
  //console.log(sliderPoolArr);
  fillFilmblock(sliderPoolArr);
  
  sliderLeftArrow = document.getElementsByClassName('filmblock__arrow_left').item(0);
  //console.log(sliderLeftArrow);
  sliderRightArrow = document.getElementsByClassName('filmblock__arrow_right').item(0);
  
  
  sliderLeftArrow.addEventListener('click' , function () {
    //console.log('start: S:'+activeElemRangeStart + ' E:' + activeElemRangeEnd);
    sliderPoolArr[activeElemRangeEnd][0] = 0;
    parenElement.removeChild(sliderPoolArr[activeElemRangeEnd][1]);
    activeElemRangeEnd = (activeElemRangeEnd-1) < 0 
      ? countElementInRange-1 
      : activeElemRangeEnd-1;
      
    if (activeElemRangeStart-1 < 0) {
      activeElemRangeStart = countElementInRange - 1;
    } else {
      activeElemRangeStart = activeElemRangeStart - 1;
    }
    sliderPoolArr[activeElemRangeStart][0] = 1;
    parenElement.prepend(sliderPoolArr[activeElemRangeStart][1]);
    
    
    //console.log('end: S:'+activeElemRangeStart + ' E:' + activeElemRangeEnd);
  } );
  
  
  
  sliderRightArrow.addEventListener('click' , function () {
    //console.log('start: S:'+activeElemRangeStart + ' E:' + activeElemRangeEnd);
    sliderPoolArr[activeElemRangeStart][0] = 0;
    parenElement.removeChild(sliderPoolArr[activeElemRangeStart][1]);
    activeElemRangeStart = (activeElemRangeStart+1)%countElementInRange;
    
    activeElemRangeEnd = (activeElemRangeEnd+1)%countElementInRange;
    sliderPoolArr[activeElemRangeEnd][0] = 1;   
    parenElement.appendChild(sliderPoolArr[activeElemRangeEnd][1]);

    //console.log('end: S:'+activeElemRangeStart + ' E:' + activeElemRangeEnd);
  } );
}

window.onload = () => run();

/* sliderPool[n][0]
0 - don't display in filmblock
1 - display in filmblock
2 - remuve from filmblock
3 - add to filmblock
4 - change element position
*/
