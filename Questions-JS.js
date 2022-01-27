const userData = [
  {
    id: "111",
    name: "Peter",
    favorites: {
      food: ["burgers", "pizza"],
      activites: ["basketball", "baseball"],
    },
  },
  {
    id: "222",
    name: "John",
    favorites: {
      food: ["burgers", "tacos"],
      activites: ["football", "golf"],
    },
  },
  {
    id: "333",
    name: "Mary",
    favorites: {
      food: ["pizza", "tacos", "fried chicken"],
      activites: ["volleyball", "softball"],
    },
  },
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]
const idAndFood = userData.map((item) => {
  const {
    id,
    favorites: { food },
  } = item;
  return { id, food };
});

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']
const pizzaPeople = userData.reduce((accumulator, item) => {
  if (item.favorites.food.includes("pizza")) {
    return [...accumulator, item.name];
  }

  return accumulator;
}, []);

// 7. Show us an example of a switch statement being used
const switchMessage = () => {
  const onOff = Math.floor(Math.random() * 2);

  switch (onOff) {
    case 1:
      console.log("the switch is on");
      break;
    case 0:
      console.log("the switch is off");
      break;
    default:
      console.log("try again");
  }
  console.log(onOff);
};
// this function has a random number variable which switches between 1 and 0 randomly
// when "onOff" is 0 the function logs "the switch is off" and when its 1 it logs "the switch is on"
//the message changes depeneding on the number drawn
switchMessage();
