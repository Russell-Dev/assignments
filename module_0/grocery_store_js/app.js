var shopper={
    firstName: "Jen",
    lastName: "Laurence",
    id: 556667788,
    isFemale: true,
    fullName : function() {
        return this.firstName + " " + this.lastName;
      }
}

var groceryCart=[
  "onions", "tomatoes", "cucumbers", "olives", "bread", "eggs", "milk"
]

console.log(groceryCart[2])
console.log(groceryCart.length)
console.log(groceryCart[6])