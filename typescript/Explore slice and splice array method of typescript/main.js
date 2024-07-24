// Array splice()
// The splice() method can be used to add new items to an array:
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted item:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
// Array slice()
// The slice() method slices out a piece of an array into a new array:
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
var color = ["Red", "Orange", "Green", "pink", "blue", "black"];
var r = color.slice(2, 4);
console.log(r);
