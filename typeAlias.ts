type User={
  id: number,
  name:{
    firstName: string;
    lastName:string
  }
  contactNumber: number;
  adress: {
    division: string;
    district:string
  },
  gender:"male" | "female"
}

const users1: User = {
  id: 123,
  name: {
    firstName: "abdul",
    lastName:"alilm"
  },
  contactNumber: 1234567890,
  adress: {
    division: "Dhaka",
    district:"Dhaka"
  },
  gender:"male"
}
const user2: User = {
  id: 123,
  name: {
    firstName: "rahul",      
    lastName:"alilm"
  },
  contactNumber: 1234567890,
  adress: {
    division: "Dhaka",
    district:"Dhaka"
  },
  gender:"male"
}
console.log(users1,user2)