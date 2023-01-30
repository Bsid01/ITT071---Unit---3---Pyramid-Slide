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

    let str = "";

    for (i = 1; i <= r; i++) {
      //printing spaces
      for (j = 0; j < r - i; j++) {
        str += ".";
      }
      //printing hashes
      for (k = 0; k < i+1; k++) {
        str += "#";
      }
      str += "\n";
    }
    console.log(str);

}
let r = parseInt(prompt("Enter a number for the height of the pyramid: "));
printPyramid(r);