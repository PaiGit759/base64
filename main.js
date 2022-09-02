let stringBase64;
let stringStorage;
var file;
//var arr = new Array();

function encodeImageFileAsURL(element) {
   file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    console.log(file.name, reader.result)
    stringBase64 = reader.result
    document.getElementById("foto").src = stringBase64;

  }
  reader.readAsDataURL(file);
}

function UploadFile(index = 0) {
  //  alert(file.size)
  index = document.getElementById("indexOnloadFile").value;

  stringStorage = localStorage.getItem('storedFotoValue');
  arr = stringStorage.split(' ');
  if (index >= arr.length) {
    alert("Index is outside the array")
    return
  }
       document.getElementById("foto").src = arr[index];//stringBase64;
   }

function buttonOnclickUpload(index = 2) {
//  alert(file.size)
stringStorage = localStorage.getItem('storedFotoValue');
arr = stringStorage.split(' ');
     document.getElementById("foto").src = arr[index];//stringBase64;
 }
 
 function buttonOnclickSave() {
  if (file.size>=100000) {
    alert("File size must not exceed 100 KB");
    return;
  }
  //localStorage.setItem('storedFotoValue',"" );

  stringStorage = localStorage.getItem('storedFotoValue') + " " + stringBase64;
  arr = stringStorage.split(' ');

  localStorage.setItem('storedFotoValue',stringStorage);
  aaa = 9;
//       document.getElementById("foto").src = stringBase64;
   }

// localStorage.setItem('storedValue', localStorage.getItem('storedValue') + "|" + storedValue);
  
// document.getElementById("exsamp").innerHTML = "<br><br>" + localStorage.getItem('storedValue');
