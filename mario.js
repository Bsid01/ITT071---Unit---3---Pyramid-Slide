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

    let div;
    let rowStr;
    let tNode;
    let str;

    for (i = 1; i <= r; i++) {
      str="";
      //printing spaces
      for (j = 0; j < r - i; j++) {
        str += ".";
      }
      //printing hashes
      for (k = -1; k < i; k++) {
        str += "#";
      }
      console.log(str);
      rowStr = document.createElement("p");
      tNode = document.createTextNode(str);
      rowStr.appendChild(tNode);
      div = document.getElementById("pyramid");
      div.appendChild(rowStr);
    }
}
let r = parseInt(prompt("Enter a number for the height of the pyramid: "));
printPyramid(r);