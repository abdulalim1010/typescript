const user = {
  id: 123,
  name: {
    firstName: "Abdul",
    lastName: "Alim"
  },
  gender: "male",
  favoriteColor: "blue"
};
const { favoriteColor, name:
   { firstName:myfirstName } } = user;
// console.log(favoriteColor,myfirstName); 
const friends = ["Abdul", "Alim", "rahul", "kamal"];
const myfiends = [friends[3]];
console.log(myfiends);