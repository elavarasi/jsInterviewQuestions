
var items = ["item1", "item2", "item3"];
for (var  i=0; i < items.length; i++){
  function f(){
  console.log(items[2]);
  console.log(items[i]);   //for the inside function the i in defined. But for the outside function the i is not defined
  console.log("Ela is inside");
  }
console.log(items[i]);
// f();
}
f();
