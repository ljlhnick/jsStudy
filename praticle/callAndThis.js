var age = 10;
var person = {
    age: 20,
    getAge() {
        var age = 30;
        return this.age;
    }
};

console.log("first", age, age * 2);
console.log("second", person.getAge()) // this指向被调用者 --- person  它的age是20

var b = person.getAge;
console.log("third", b()); //this指向被调用者b函数，b函数指向windos  它的age是10,  实际情况是 undefined

console.log("fourth", (person.getAge)()) // this还是指向被调用者 --- person 它的age是20

console.log("fifth", (1, person.getAge)(), (person.getAge = person.getAge)()) //指向window   实际情况是 undefined

console.log("use bind", (1, person.getAge.bind(person))(), person.getAge.call(person)) // 将指向该为person对象  它的age是20

function getAge2() {
    this.age = 40;
    console.log("getAge2 func", person.getAge()); // this任然指向被调用者person
}
getAge2();
console.log("sixth", age) //10