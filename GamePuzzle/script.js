// Thuật toán đổi ảnh dựa trên tên của thư mục chứa ảnh và tên các phần cắt cắt của ảnh
// Giải thích ý nghĩa các biến
/*
  * temp là biến để chọn thư mục chứa ảnh, mỗi thư mục khác nhau chứa 5 phần của 1 bức ảnh (ở đây có 3 bức ảnh khác nhau tương ứng với 3 thư mục chứa ảnh)
  * x là biến chọn 1 trong 5 phần của ảnh (theo thứ tự tương ứng với các part 1-> 5)
  * dontReapt là biến lưu giá trị random của lần thực thi trước, tránh trùng lặp lại ảnh (tức là ko có biến này thì sẽ gặp trường hợp click mà ảnh ko thay đổi do số random bị lặp lại giống lần thực thi trước)
*/

window.onload = () => {
  changePic('part1');
  changePic('part2');
  changePic('part3');
  changePic('part4');
  changePic('part5');
}

var getRandomNumber = () => {
  return Math.floor((Math.random() * 3) + 1);
}
var dontRepeat;

function changePic(part) {
  var picSelect = document.getElementById(part).childNodes[1];
  var temp;

  do {
    temp = getRandomNumber();
  } while ((dontRepeat == temp) || (temp == parseInt(picSelect.alt.substring(4,3))) ) 
  
  dontRepeat = temp;
  
  var x = part.substring(part.length,part.length-1);
  
  picSelect.src = `./images/pic${temp}/image_part_00${x}.jpg`;
  picSelect.alt = `pic${temp}`;

  var part1 = document.getElementById('part1').childNodes[1].alt;
  var part2 = document.getElementById('part2').childNodes[1].alt;
  var part3 = document.getElementById('part3').childNodes[1].alt;
  var part4 = document.getElementById('part4').childNodes[1].alt;
  var part5 = document.getElementById('part5').childNodes[1].alt;

  if (part1==part2 && part1==part3 && part1==part4 && part1==part5)
    for (var i = 0; i<5; i++)
      document.querySelectorAll("img")[i].classList.add('correct');
  else
    for (var i = 0; i<5; i++)
      document.querySelectorAll("img")[i].classList.remove('correct');
}
