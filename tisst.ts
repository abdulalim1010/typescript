const add = (num1: number | string, num2: number | string) => {
  if (typeof num1 === "number" && typeof num2 == "number") {
    return num1 + num2;

  }
}
console.log(add(3,"4"))