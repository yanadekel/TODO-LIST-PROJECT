const { TestScheduler } = require('@jest/core');
const Todo= require ('./test');
// console.log(Todo);



Test('proparty pushing string in to arrey', ()=>{
const t2 = new Todo();
t2. creatTask('');
t2.print();
})
