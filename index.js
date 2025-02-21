var btn = document.querySelector('button');


document.addEventListener('keydown',()=>{
    if (event.key == 'Enter') {
        check();
        let result = document.querySelector('input').innerHTML='';
    }
    
})

btn.addEventListener('click',()=>{
    check();
});


function check() {
    
    let txt = document.getElementById('textbox');

    let txt_value  = txt.value;

    let txt_splited = txt_value.split('')

    let txt_reversed = txt_splited.reverse();

    let txt_joined = txt_reversed.join('');

 
    


    if (txt_value == txt_joined) {
        
        let result = document.querySelector('.result');

        result.innerHTML = `${txt_value} is A palindlome !!!`;
    }else{
        let result = document.querySelector('.result');

        result.innerHTML = `${txt_value} is not A palindlome !!!`;
    }
}