let me = {
  firstName: "Bradley",
  lastName: "Graham",
  age: "19",
  favorite: {
    food: "lasagna",
    color: "maroon"
  },
  pets: {
    Marlow: {
      age: 7,
      color: "spotted black"
    },
    George: {
      age: 3938,
      color: "beige"
    }
  }
}

let users = {
  user1: {
    avatar: "banana",
    favoriteVehicle: "Seargent Marauder",
    playTime: "17.5 hours",
    guild: "The deadliest fruit"
  },
  gamer: {
    avatar: "orange",
    guild: "Deadly Fruit"
  }
}
function avatar() {
  let x = myForm.fname.value;
  console.log(users[x].avatar);
}