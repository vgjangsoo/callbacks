// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  // console.log(arr);
  // console.log(arr);
  arr.forEach(function(element) {
    if (element === "Waldo") {
      found(element);
  };
  });

  // console.log(arr);
  // var finding = arr.forEach();
  // console.log(finding);
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found();   // execute callback
  //   }
  // }
}

function actionWhenFound(element) {
  console.log("Found " + element +"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);