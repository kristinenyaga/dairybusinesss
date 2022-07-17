let list = document.querySelectorAll('.link');
        for(let i = 0;i<list.length;i++){
            list[i].onclick = function(){
                let j=0;
                while(j < list.length){
                    list[j++].className='link';
                }
                list[i].className='link active';
            }
        }
        let toggleBar = document.querySelector('.toggleMenu');
        let navigation = document.querySelector('.navigationBar')

        toggleBar.onclick = function(){
            toggleBar.classList.toggle('active');
            navigationBar.classList.toggle('active');
        }