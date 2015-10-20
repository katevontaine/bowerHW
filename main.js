//ANSWER1
var itemPrice = items.forEach(function(item, idx, arr){
console.log(item.price);
});

function avgPrice(){
  var sum = 0;
    items.forEach(function (item, inx, arr){
    sum += item.price;
    });
    return Math.floor(sum/items.length);
    console.log(avgPrice);
}
console.log(avgPrice);

document.querySelector('#answer1').innerHTML = "<p>The average price is " + avgPrice(); + ".</p>";




// function sum(x,y)
// {
//   console.log(arguments);
//   if (typeof x ==="number" && typeof y === "number")
//     console.log( x + y)
//    return x+y;
//
// }




//ANSWER2
// document.querySelector('#answer2').innerHTML =



//ANSWER3
// document.querySelector('#answer3').innerHTML =




//ANSWER4
// document.querySelector('#answer4').innerHTML =



//ANSWER5
// document.querySelector('#answer5').innerHTML =





//ANSWER6
// document.querySelector('#answer6').innerHTML =







// _.times(100, function() {
//   console.log("hi");
// });
