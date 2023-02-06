(function(){
    let screen = document.querySelector(".screen")
    let buttons = document.querySelectorAll(".btn")
    let clear = document.querySelector(".btn-clear")
    let equal = document.querySelector(".btn-equal")


         // Button click on screen//
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value += value;

        })
    })
        // To working on this (=) for sum,minus, multiple and all //
    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = 'Please Enter';
        } else{
            let answer = eval(screen.value);
            screen.value = answer;

        }
    })
       // To clear any value from calculator
    clear.addEventListener('click', function(e){
        screen.value = ""
    })






})();