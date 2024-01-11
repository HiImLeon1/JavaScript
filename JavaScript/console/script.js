// var => 함수 레벨
// function func() {
//     if(true){
//         var a = 'a';
//         console.log(a);

//     }
//     console.log(a);
// }
// console.log(a);
// func();

// let, const => block 레벨
// function func() {

//     if (true) {
//         let a = 'a';
//         console.log(a);
//     }
//     console.log(a);
// }
// func();
// console.log(greeting);
// var greeting ='hello';
function fun(){
    console.log('hoisting test')
}

fun();
