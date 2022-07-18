//  let list =document.querySelectorAll('.link');
//         for(let i = 0;i<list.length;i++){
//             list[i].onclick = function(){
//                 let j=0;
//                while(j < list.length){
//                     list[j++].className='link';
//                }
//                 list[i].className='link active';
//             }
//         }

// var a = document.getElementsByTagName('a');
// var t = document.createElement('input');
// t.type = 'text';

// for (i = 0; i < a.length; i++) { 
//     a[i].onclick = function() {

//         this.parentNode.appendChild(t);
//         return false;
//     };
// }
function totalProduction() {


    const one = parseInt(document.getElementById('shedA').value)
    document.getElementById("output1").innerHTML = one;
    
    const two = parseInt(document.getElementById('shedB').value )
    document.getElementById("output2").innerHTML = two;
    
    const three = parseInt(document.getElementById('shedC').value )
    document.getElementById("output3").innerHTML = three;
    
    const four = parseInt(document.getElementById('shedD').value )
    document.getElementById("output4").innerHTML = four;
    
    const out5 = parseInt(one + two + three + four);
    document.getElementById("output5").innerHTML = out5;
    
    
    
    // 
    
    var weeklyIncome = out5 * 45 * 7;
    document.getElementById("weeklyIncome").innerHTML = "Your yearly income is " + weeklyIncome;
    
    var yearlyIncome = out5 * 45 * 366;
    document.getElementById("yearlyIncome").innerHTML = "Your yearly income is " + yearlyIncome;
    
    var jan = out5 * 45 * 31;
    document.getElementById("jan").innerHTML = "Your January income is " + jan;
    
    var feb = out5 * 45 * 29;
    document.getElementById("feb").innerHTML = "Your February income is " + feb;
    
    var mar = out5 * 45 * 31;
    document.getElementById("mar").innerHTML = "Your March income is " + mar;
    
    var apr = out5 * 45 * 30;
    document.getElementById("apr").innerHTML = "Your April income is " + apr;
    
    var may = out5 * 45 * 31;
    document.getElementById("may").innerHTML = "Your May income is " + may;
    
    var jun = out5 * 45 * 30;
    document.getElementById("jun").innerHTML = "Your June income is " + jun;
    
    var jul = out5 * 45 * 31;
    document.getElementById("jul").innerHTML = "Your July income is " + jul;
    
    var aug = out5 * 45 * 31;
    document.getElementById("aug").innerHTML = "Your August income is " + aug;
    
    var sep = out5 * 45 * 30;
    document.getElementById("sep").innerHTML = "Your September income is " + sep;
    
    var oct = out5 * 45 * 31;
    document.getElementById("oct").innerHTML = "Your October income is " + oct;
    
    var nov = out5 * 45 * 30;
    document.getElementById("nov").innerHTML = "Your November income is " + nov;
    
    var dec = out5 * 45 * 31;
    document.getElementById("dec").innerHTML = "Your Dec income is " + dec;
    
    
    }
    
    button.addEventListener('click', totalProduction)
    
    
    // // const btn = document.getElementById('k')
    
    // const out1 = document.getElementById('output1').innerHTML = one;
    // const out2 = document.getElementById('output2')
    // const out3 = document.getElementById('output3')
    // const out4 = document.getElementById('output4')
    // const getAddResult = document.getElementById('output5')
    // console.log(one)
    
    // function getOutput1() {
    
    //     out1.innerHTML = one.value;
    //      }
    
    // bttn.addEventListener('click', getOutput1)
    // function getOutput2() {
    //     out2.innerHTML = two.value;
    // }
    // bttn.addEventListener('click', getOutput2)
    
    // function getOutput3() {
    //     out3.innerHTML = three.value;
    // }
    // bttn.addEventListener('click', getOutput3)
    
    // function getOutput4() {
    //     out4.innerHTML = four.value;
    // }
    // bttn.addEventListener('click', getOutput4)
    
    // function getAdd() {
    //     const one = document.getElementById('shedA')
    //     const two = document.getElementById('shedB')
    //     const three = document.getElementById('shedC')
    //     const four = document.getElementById('shedD')
       
    //     const total=document.getElementById('k')=one+two+three+four;
    //     return total
    //     // document.getElementById("output5").innerHTML=btn.value;
    //     // console.log(getAddResult);
    // }
    
    // out5.innerHTML=total.value;
    // btn.addEventListener('click', getAdd)
    
    // out5.innerHTML=total.value
    
    
    // const weeksellp = document.getElementById('spweek')
    // const durationweek = document.getElementById('durationweek')
    // const monthsellp = document.getElementById('spmonth')
    // const durationmonth = document.getElementById('durationmonth')
    
    
    
    
    
    // function incomeOverTime(weeksellp,durationweek) {
    
    // }
    