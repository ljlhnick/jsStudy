// $(document).ready(function(){

// })
$(function(){
    // new Object
    var person = new Object();
    person.name = 'yho';
    person.age = 21;
    person.work = () => {
        console.log(person.name + " work")
    }
    person.work();

    //对象字面量
    var p = {
        name: 'odo',
        age: 25,
        work(){
            console.log(this.age + " 对象字面量");
        }
    }
    p.work();

    //函授构造器
    function Person(name, age){
        this.name = name;
        this.age = age;
    }
    Person.prototype.toString = () => {
       return this.name + "---" + this.age;
    };
    Person.prototype.work = () => {
        console.log(ps.name + " 函授构造器");
    };
    var ps = new Person('ljlh', 22);
    ps.work();


    var defaults = {
        size: 10,
        name: 'ljlhnick',
        count: 8
    }
    var opt = $.extend({},defaults,{name:'gyx',count:10,state:1});
    console.log(opt,defaults.state);
});
