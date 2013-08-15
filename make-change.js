var americanCoinSet = {
  quarters: 25,
  dimes: 10,
  nickels: 5,
  pennies: 1
}

var australianCoinSet = {
  roo: 200,
  wombat: 100,
  halfCentury: 50,
  platypus: 20,
  tenner: 10,
  fiver: 5,
  cent: 1
}

var changer = function(coinSet) {
  return function(cents) {
    return change(cents, coinSet)
  }
}

var usChange = changer(americanCoinSet)
var auChange = changer(australianCoinSet)

var change = function(cents, coinSet) {
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

change.americanCoinSet = americanCoinSet
change.australianCoinSet = australianCoinSet
change.usChange = usChange
change.auChange = auChange
module.exports = change

