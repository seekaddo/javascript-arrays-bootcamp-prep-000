
<<<<<<< HEAD

 var chocolateBars = [ "snickers","hundred grand", "kitkat","skittles" ];

 function addElementToBeginningOfArray(array,value) {
   return [value,...array];
=======
 let chocolateBars = [
   "snickers",
   "hundred grand",
   "kitkat",
   "skittles"
 ];

 function addElementToBeginningOfArray(array,value) {
   return [value,... array);
>>>>>>> a57818f5c74c3266a8ceb22eac53eefcf648ff4e
 }


 function destructivelyAddElementToBeginningOfArray(array,value) {
<<<<<<< HEAD
    array.unshift(value); //this mutate the elements in the array
    return array;
 }

function addElementToEndOfArray(array, elem) {

   return [...array,elem];
}

function destructivelyAddElementToEndOfArray(array,elem) {
   array.push(elem);
   return array;

=======
   return array.unshift(value); //this mutate the elements in the array
 }

function addElementToEndOfArray(array, elem) {
  return [array,...elem];
}

function destructivelyAddElementToEndOfArray(array,elem) {
  return array.push(elem);
>>>>>>> a57818f5c74c3266a8ceb22eac53eefcf648ff4e
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift(); //this is distructive,
    return array;

}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop() // this is distructive
   return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length-1); //this does not mutate the array
}
