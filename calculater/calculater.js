let string = "";
let clickAudio = new Audio("effect_tick.mp3");
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        clickAudio.play();
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = '';
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
        
    })
})