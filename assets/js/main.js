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
function totalProduction(){
console.log("milk production is")

}

const one=document.getElementById('shedA')
const two=document.getElementById('shedB')
const three=document.getElementById('shedC')
const four=document.getElementById('shedD')
const bttn=document.getElementById('btn1')

const out1=document.getElementById('output1')
const out2=document.getElementById('output2')
const out3=document.getElementById('output3')
const out4=document.getElementById('output4')
const out5=document.getElementById('output5')

 function getOutput1(){
    let answer='Your production'
    let get=answer+one;
    out1.innerHTML=one.value;

 }
 bttn.addEventListener('click',getOutput1)
 function getOutput2(){
    out2.innerHTML=two.value;
 }
 bttn.addEventListener('click',getOutput2)

 function getOutput3(){
    out3.innerHTML=three.value;
 }
 bttn.addEventListener('click',getOutput3)

 function getOutput4(){
    out4.innerHTML=four.value;
 }
 bttn.addEventListener('click',getOutput4)
 function getAdd(){
    let getAddResult=one+two+three+four;
    return getAddResult;
 }
 let total=getAdd();
output5.innerHTML=total.value


