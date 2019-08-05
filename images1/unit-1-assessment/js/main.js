
var num = 1 ;
var total = 1;

/*--- cached elements ---*/
var displayEl = document.querySelector('h1');
var inputEl = document.querySelector('input');

/*--- event listeners ---*/
document.getElementById("add-btn").addEventListener('click', function() {
  num += parseFloat(inputEl.value);
//   inputEl.value = 1;
  render();
});

document.getElementById('rem-btn').addEventListener('click', function() {
  num -= parseFloat(inputEl.value);
//   inputEl.value = 1;
  render();
});

/*--- functions ---*/
function render() {
  displayEl.textContent = num;
}

  // functions
//   function init() {
//     sum =  0;
    
//     render();
//   }
  
//   function render() {
//     displayEl.textContent = (sum >= 0 ? '+' : '') + sum;
//     displayEl.style.color = sum >= 0 ? 'green' : 'red';
//   }
  
//   init();













// document.getElementByID('add').addEventListener('click', function() {
//    inp1 = 1++ parseFloat(inp1.value) ;
//     inp1.value =  '1';
//     render();
//   });


//   function render() {
// displayEl.textContent = ( inpt1 = ++1 ) 
    
// function init() {
//  displayEl =  1;
    
//     render();
//   }
//   init();