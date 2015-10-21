$(document).ready(function(){

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

$('#answer1').text(avgPrice);


//ANSWER2
items.forEach(function (item, idx, arr){
  if (item.price < 14 && item.price > 18){
    console.log(item.title + item.price);
  }
  document.querySelector('#answer2').innerHTML += item.title + item.price + "<br>";
});
// $('#answer2').text(item.title + item.price);
// $('#answer2').text("sjdfnwsjfn");
// document.querySelector('#answer2').innerHTML += item.title + item.price;


//ANSWER3
var itemCurr = items.forEach(function(item, idx, arr){
console.log(item.currency_code);
});

var itemCurrGBP = items.filter(function(item, idx){
  return item.currency_code === "GBP";
});

itemCurrGBP[0].title

document.querySelector('#answer3').innerHTML = itemCurrGBP[0].title + itemCurrGBP[0].price


// //ANSWER4
// var itemWood = items.forEach(function(item, idx, arr){
// console.log(item.materials.wood);
// console.log(item.title);
//
// document.querySelector('#answer4').innerHTML = (item.title) + "<br>"
//
// });

//ANSWER5 ??????????

// var materials = _.pluck(items, "materials");
//
// var morethan8 = items.filter(function(materials.title, idx, arr)
// { if (items.materials.length >=8)}{
//
// }
//
// });


// (materials.length > 8 || materials.length == 8)
//   function(){
//     return materials.title, materials.quantity, materials.materials;
//     console.log(items.title, items.quantity, items.materials);
//   });

// ??????

// document.querySelector('#answer5').innerHTML =

//ANSWER6
// var whoMade = items.valueOf("materials");
// var Made = items.valueOf("who_made");
// var iDid = _.contains("i_did");
// var iMade = _.pluck("who_made", "i_did");
// iMade.length;
//
// $('#answer6').text(iMade.length);
// document.querySelector('#answer6').innerHTML = (iMAde.length)

// _.times(100, function() {
//   console.log("hi");
// });


var iMade = _.filter(items, function(el){
  return el.who_made === "i_did";
});
$('#answer6').text(iMade.length);
});
