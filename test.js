const questions_array = []; //to be filled
fetch("C:\Users\redel\Documents\Code\socal-asian-purity-test\list.csv")
  .then(response => response.text())
  .then(csv => {
    var q_string = csv.trim().split('\n');
    // while (q_string.length != 0) {
    //   var comma = q_string.indexOf(",");
      
    //   //end of list
    //   if (comma == -1) {
    //     comma = q_string.length;
    //   }

    //   var q = q_string.substring(0, comma);
    //   questions_array.push(q);
      
    //   q_string = q_string.substring(comma + 1, q_string.length);
    // }
    console.log(q_string);
  })
  .catch((error) => {
    console.error(error);
  })