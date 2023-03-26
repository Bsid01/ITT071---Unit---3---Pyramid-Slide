/*function recursivePyramid(height,start = 0){
  if(height==0){
    return;
  }
  let str="";
      for (j = 0; j < height - start; j++) {
        str += " ";
      }
      for (k = 0; k < start+1; k++) {
        str += "#";
      }
      str += "\n";
  console.log(str)
      recursivePyramid(height-1,start+1)
}*/

function printPyramid(r) {
    let div = document.getElementById('pyramid').innerHTML = '';
    let drop = document.getElementById('dropdown').value;
    let lab = document.getElementById('lab3');
    let rowStr;
    let tNode;
    let str;

    for (i = 1; i <= r; i++) {
      str = ""
      //printing spaces
      for (j = 0; j < r - i; j++) {
        str += " ";
      }
      //printing hashes
      for (k = -1; k < i; k++) {
        str += drop;
      }
      rowStr = document.createElement("p");
      tNode = document.createTextNode(str);
      rowStr.appendChild(tNode);
      div = document.getElementById("pyramid");
      div.appendChild(rowStr);
      lab.innerHTML = str.length-1;
    }
}

document.getElementById("pyramid").style.whiteSpace = "pre";

let inPut = document.querySelector("#height");
inPut.addEventListener("input", myFunction);

function myFunction() {
  let inP = document.getElementById("height").value;
  printPyramid(inP);
}