const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Modal open function
const openModal = () =>{
    console.log("Modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

//Modal close function
const closeModal = () =>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};


// const person ={
//     name :"Jhon",
//     age: 30,

//     greet(){
//         console.log(` Helllo, my name is this.nameandI'm{this.age} years old.`);
//     }
// }

// const greet = person.greet;
// greet();

// let x = 10;
// const y ={
//     x: 20,
     
//     z() {
//         console.log(this.x);
//     }
// }
// const z = y.z;
// z(); 

let myElement = document.querySelector('#my-element');
myElement.style.color = 'red';