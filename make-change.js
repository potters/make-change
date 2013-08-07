// Implement the subway change robot

var australianCoinSet = {
  roo: 200,
  wombat: 100,
  halfCentury: 50,
  platypus: 20,
  tenner: 10,
  fiver: 5,
  cent: 1
}

var americanCoinSet = {
  quarters: 25,
  dimes: 10,
  nickels: 5,
  pennies: 1
}

var changer = function(coinSet) {
  return function(cents) {
    return change(cents, coinSet)
  }
}

var usChange = changer(americanCoinSet)
var auChange = changer(australianCoinSet)

var change = function(cents, coinSet) {
  // coinSet = coinSet || americanCoinSet
  var result = {}
  for(key in coinSet) {
    var value = coinSet[key]
    if (cents >= value) {
      result[key] = Math.floor(cents/value)
      cents = cents%value
    }
  }
  return result
}

// ---

// tests

var assertEqualish = function(a,b) {
  var equal = equalish(a,b)
  if (equal) return
  console.error('Error, values not equal', 'a', a, 'b', b)
  assert(equal)
}

var equalish = function(a,b){
  return JSON.stringify(a) === JSON.stringify(b)
}

var assert = function(truthy){
  if(!truthy){
    throw new Error("Shit dun fucked up")
  }
}

assertEqualish(usChange(0),{})
assertEqualish(usChange(1), {pennies: 1})
assertEqualish(usChange(2), {pennies: 2})
assertEqualish(usChange(5), {nickels: 1})
assertEqualish(usChange(6), {nickels: 1, pennies: 1})
assertEqualish(usChange(7), {nickels: 1, pennies: 2})
assertEqualish(usChange(10), {dimes: 1})
assertEqualish(usChange(11), {dimes: 1, pennies: 1})
assertEqualish(usChange(12), {dimes: 1, pennies: 2})
assertEqualish(usChange(15), {dimes: 1, nickels: 1})
assertEqualish(usChange(20), {dimes: 2})
assertEqualish(usChange(25), {quarters: 1})
assertEqualish(usChange(89), {quarters: 3, dimes: 1, pennies: 4})
assertEqualish(usChange(69), {quarters: 2, dimes: 1, nickels: 1, pennies: 4})

assertEqualish(auChange(69), {halfCentury: 1, tenner: 1, fiver: 1, cent: 4})

console.log("okay")
