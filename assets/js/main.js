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
    console.log("milk production is")

}

const one = document.getElementById('shedA')
const two = document.getElementById('shedB')
const three = document.getElementById('shedC')
const four = document.getElementById('shedD')
const bttn = document.getElementById('btn1')
const out5 = document.getElementById('output5')

// const btn = document.getElementById('k')

const out1 = document.getElementById('output1')
const out2 = document.getElementById('output2')
const out3 = document.getElementById('output3')
const out4 = document.getElementById('output4')
const getAddResult = document.getElementById('output5')

function getOutput1() {

    out1.innerHTML = one.value;
     }

bttn.addEventListener('click', getOutput1)
function getOutput2() {
    out2.innerHTML = two.value;
}
bttn.addEventListener('click', getOutput2)

function getOutput3() {
    out3.innerHTML = three.value;
}
bttn.addEventListener('click', getOutput3)

function getOutput4() {
    out4.innerHTML = four.value;
}
bttn.addEventListener('click', getOutput4)

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
function getTotal(){
    var arr=document.querySelectorAll('.userinput')
      let totalCount=0
        for(var i=0;i<arr.length;i++){
            if(parseInt(arr[i].value)){
                totalCount+=parseInt(arr[i].value)
            }
        }
        document.getElementById("totalvalue").value=totalCount
    }

const weeksellp = document.getElementById('spweek')
const durationweek = document.getElementById('durationweek')
const monthsellp = document.getElementById('spmonth')
const durationmonth = document.getElementById('durationmonth')





function incomeOverTime(weeksellp,durationweek) {

}

