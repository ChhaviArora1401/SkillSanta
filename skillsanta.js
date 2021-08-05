//Q1

var dateToday = new Date('October 15, 1996 05:35:32:77 GMT+11:00');
var d = dateToday.getUTCMilliseconds();
console.log(d); //77 output

//Q2

var library = [{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
},
{
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
},
{
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
}
];

for (var i = 0; i < library.length; i++) {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
        console.log("Done: " + book);
    } else {
        console.log("Pending:  " + book);
    }
}


//Q3
var Employee =
{
    company: 'Rohit'
}
var Emp1 = Object.create(employee);
delete Emp1.company
Console.log(emp1.company);
//error employee not defined


//Q4

function foo1() {
    return {
        bar: "hello"
    };
}
function foo2() {
    return
    {
        bar: "hello"
    };
}
//not same


//Q5

var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function (num) {
    return num / 2;
});
print(new_arr);


//It does not show any text buy pops ups print paper request 
//for output we will use console.log()
// console.log(new_arr);
// [1, 28, 39, 17, 32.5]


//Q6

const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])
set.delete('Beethoven')


//Q7

const operatingSystem = {
    name: 'Ubuntu',
    version: 18.4,
    license: 'Open Source'
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);


//Q8



//Q9

const gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function () {
        return `Hi, my name is ${this.name}!`;
    },
};
console.log(gimli.greet());

//output "Hi, my name is Gimli!"


//Q10. 
function Hero(name, level) {
    name = name;
    level = level;
}

//correct below

function Hero(name, level) {
    this.name = name;
    this.level = level;
}

