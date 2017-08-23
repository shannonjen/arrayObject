var myArray = [1, "Jen", true, null, 0];

console.log("This is myArray[2]: "+ myArray[2]);


var user1 = {
  username: "shannonjen",
  password: "1234"
}

var user2 = {
  username: "bobdole",
  password: "2345"
}

console.log("User1 username: " +user1.username);
console.log("User2 username: " +user2.username);

var person = {
  firstName: "Homer",
  middleName: "Jay",
  lastName: "Simpson"
};

// "Homer"
// "Jay"
// "Simpson"
for (var key in person) {
  console.log(person[key]);
}

// firstName
// middleName
// lastName
for (var key in person) {
  console.log(key);
}
