  var display = document.getElementById('displayNumber');
  var btn_1 = parseInt(document.getElementById('button1').value);
  var btn_2 = parseInt(document.getElementById('button2').value);
  var btn_3 = parseInt(document.getElementById('button3').value);
  var btn_4 = parseInt(document.getElementById('button4').value);
  var btn_5 = parseInt(document.getElementById('button5').value);
  var btn_6 = parseInt(document.getElementById('button6').value);
  var btn_7 = parseInt(document.getElementById('button7').value);
  var btn_8 = parseInt(document.getElementById('button8').value);
  var btn_9 = parseInt(document.getElementById('button9').value);
  var btn_0 = parseInt(document.getElementById('button0').value);
  // var btn_add = document.getElementById('button+');
  // var btn_minus = document.getElementById('button-');
  // var btn_multi = document.getElementById('buttonx');
  // var btn_divide = document.getElementById('button/');

  var x = y = 0;
  
  var isGotX = isGotY = isGotResult = pressedNumber = pressedEqual = false;
  /* 
    * isGotX: Biến kiểm tra x đã có giá trị thay cho giá trị mặc định chưa
    * isGotY: Biến kiểm tra y đã có giá trị thay cho giá trị mặc định chưa
    * isGotResult: Biến kiểm tra result đã có giá trị thay cho giá trị mặc định ban đầu chưa
    * passedNumber: Biến kiểm tra xem có ấn liên tục phím số quá 1 lần không (ấn số nhiều lần thì số sau nối số trước, chưa thực hiện thêm bất kỳ phép toán nào)
    * pressedEqual: Biến kiểm tra xem đã ấn phím dấu = lần nào chưa
  */
  var operation, result;
  
  function getNumber(num) {
    display.innerHTML = num;
    if (!isGotX) {
      x = num;
      pressedNumber = isGotX = true;
    } else if (isGotX && pressedNumber && !isGotY && !isGotResult) {
      x = x*10 + num;
      display.innerHTML = x;
    } else if (isGotX && !pressedNumber && !isGotY && !isGotResult) {
      y = num;
      pressedNumber = isGotY = true;
    } else if (isGotX && pressedNumber && isGotY && !isGotResult) {
      y = y*10 + num;
      display.innerHTML = y; 
    } else if (isGotX && pressedNumber && !isGotY && isGotResult) {
      deleteAll();
    } else {
      x = result;
      y = num;
    }
  }

  function doYouWantBeContinued() {
    if (!isGotResult && isGotY && !pressedEqual) {
      getResult();
      display.innerHTML = result;
      isGotResult = false;
    } else if (isGotResult && isGotY && pressedEqual) {
      x = result;
      isGotY = isGotResult = false;
    }
    pressedNumber = pressedEqual = isGotResult = false;
  }

  function addition() {
    doYouWantBeContinued();
    return operation = '+';
  }

  function subtraction() {
    doYouWantBeContinued();
    return operation = '-';
  }

  function multiplication() {
    doYouWantBeContinued();
    return operation = 'x';
  }

  function division() {
    doYouWantBeContinued();
    return operation = '/';
  }


  function displayResult() {
    x = result;
    isGotY = false;
    display.innerHTML = result;
  }

  function getResult() {
    switch (operation) {
      case '+':
        result = x + y;
        displayResult()
        break;
      case '-':
        result = x - y;
        displayResult();
        break;
      case 'x':
        result = x * y;
        displayResult();
        break;
      case '/':
        result = x / y;
        displayResult();
        break;
    }
    isGotResult = pressedEqual = true;
  }

  function deleteAll() {
    x = y = result = 0;
    operation = '';
    isGotX = isGotY = isGotResult = pressedNumber = pressedEqual = false;
    display.innerHTML = 0;
  }