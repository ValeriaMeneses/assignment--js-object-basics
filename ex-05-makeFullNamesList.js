/**
 * makeFullNamesList()
 *
 * Write a function called `makeFullNamesList` that takes an array
 * of objects with first and last names properties and returns
 * an array of strings, where each string is a full title + first & last
 * name.
 *
**/
function getFullNames(arrayInput) {
  // console.log(arrayInput[0]);
  var names = []
  for (var i = 0; i < arrayInput.length; i++) {
    var customerObject = arrayInput[i]
    if (customerObject.gender === 'male') {
      names.push('Mr. ' + arrayInput[i].first+ ' ' + arrayInput[i].last)

    }else if (customerObject.gender === 'female') {
      names.push('Ms. ' + arrayInput[i].first+ ' ' + arrayInput[i].last)

    }

  }

  console.log(names)
  console.log('=========')

  return names;
  // RESULTA ? Array de Strings ... ej: ['Ms. Tina Martinez', 'Mr. Bill Dole'...]

  // arrayInput = arrayInput.join(' ')
  // console.log(arrayInput);

}


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var customersList = [
    { first: 'Joe', last: 'Blogs', gender: 'male'},
    { first: 'Kate', last: 'Smith', gender: 'female'},
    { first: 'Dave', last: 'Jones', gender: 'male'},
    { first: 'Jacky', last: 'White', gender: 'female'}
]

var moreCustomersList = [
	{ first: 'Ruby', last: 'Scooby', gender: 'female'},
	{ first: 'Jen', last: 'Vin', gender: 'female'},
	{ first: 'Dan', last: 'Theman', gender: 'male'},
]

//===============================
var fullNamesList1 = getFullNames(customersList)
// => ['Mr. Joe Blogs', 'Ms. Kate Smith', 'Mr. Dave Jones', 'Ms. Jacky White']

console.assert(typeof fullNamesList1[0] === "string")
console.assert(fullNamesList1[0] === "Mr. Joe Blogs")
console.assert(fullNamesList1[1] === "Ms. Kate Smith")
console.assert(fullNamesList1[2] === "Mr. Dave Jones")

//-------------------------------
var moreNamesList = getFullNames(moreCustomersList)
// => ['Ms. Ruby Blogs', 'Ms. Jen Vin', 'Mr. Dan Theman']

console.assert(typeof moreNamesList[1] === "string")
console.assert(moreNamesList[0] === "Ms. Ruby Scooby")
console.assert(moreNamesList[2] === "Mr. Dan Theman")
