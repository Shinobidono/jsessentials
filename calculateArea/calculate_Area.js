let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
 
 let area = length * width;
  document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;

}

let g1;
let g2;
let g3;

function groceryTracker() {
    g1 = parseFloat(document.getElementById('grocery1').value);
    g2 = parseFloat(document.getElementById('grocery2').value);
    g3 = parseFloat(document.getElementById('grocery3').value);

   let total = g1 + g2 + g3;
    document.getElementById('result2').innerText = `The total amount is $ ${total}`;
}