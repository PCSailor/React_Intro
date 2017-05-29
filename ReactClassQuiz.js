console.log('ReactClassQuiz.js is run');
// Question 3
function aTimer() {
    setTimeout(timeOut1, 2000);
    setTimeout(timeOut2, 4000);
    setTimeout(timeOut3, 6000);
    setTimeout(timeOut4, 8000);
    setTimeout(timeOut5, 10000);
    clearInterval();
}

function timeOut1() { console.log('test code'); }

function timeOut2() { console.log('test code'); }

function timeOut3() { console.log('test code'); }

function timeOut4() { console.log('test code'); }

function timeOut5() { console.log('test code'); }
aTimer();




// Why does the above code not work? What line could you add between 11 and 12 that would make it work.


// var str = {};
// var logger = {
//     leadText: 'INFO: ',
//     info: function(str) {
//         console.log(this.leadText + str);
//     }
// };
// str = "string";
// var fn = logger.info;
// fn(' function was called');

// console.log("logger = ", logger);
// console.log("logger.leadText = ", logger.leadText);
// console.log("logger.info = ", logger.info);
// console.log("logger.info.str() = ", logger.info.str());