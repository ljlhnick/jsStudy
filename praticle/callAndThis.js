// var _ = require("lodash-es");
var age = 10;
var person = {
    age: 20,
    getAge() {
        var age = 30;
        return this.age;
    },
};

console.log("first", age);
console.log("second", person.getAge()); // this指向被调用者 --- person  它的age是20

var b = person.getAge;
console.log("third", b()); //this指向被调用者b函数，b函数指向windos  它的age是10,  实际情况是 undefined

console.log("fourth", person.getAge()); // this还是指向被调用者 --- person 它的age是20

console.log("fifth", (1, person.getAge)(), (person.getAge = person.getAge)()); //指向window   实际情况是 undefined

console.log(
    "use bind",
    (1, person.getAge.bind(person))(),
    person.getAge.call(person)
); // 将指向该为person对象  它的age是20

function getAge2() {
    this.age = 40;
    console.log("getAge2 func", person.getAge()); // this任然指向被调用者person
}
getAge2();
console.log("sixth", age); //10

//apply call求最大值最小值, 求和
var numbers = [5, 255, 656, 5464, -699674, 87, -11, 4656];
console.log(
    "max value => ",
    Math.max.apply(this, numbers),
    Math.min.apply(this, numbers)
);
console.log(
    "sum",
    numbers.reduce((x, y) => x + y)
);

//冒泡排序
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log("moddle sort afetr", numbers);

//选择排序
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
        if (numbers[i] > numbers[j]) {
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}
console.log("select sort after", numbers);

//快速排序

//数组去重

//数组反转
console.log("reverse", numbers.reverse());

numbers.name = -1;

//for-in 0-name
for (let i of numbers) {
    console.log("for-of", i);
}

console.log(numbers);