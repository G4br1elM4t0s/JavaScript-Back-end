const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 49 9 * * 4', function (){
    console.log('executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function (){
    tarefa1.cancel();
    console.log('Cancelando tarefa 1');
}, 20000);
//setInterval
//setImmediate



const regra = new schedule.RecurrenceRule();
regra.dayOfWeek =  [new schedule.Range(1,5)]
regra.hour = 9;
regra.minute = 50;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log('Executando tarefa2!',new Date().getSeconds());
})