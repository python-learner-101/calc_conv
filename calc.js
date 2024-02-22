document.addEventListener('DOMContentLoaded',function(){
    const dropdown=document.getElementById('mode');
    const x=document.getElementById('x');
    const y=document.getElementById('y');
    const output=document.getElementById('output');
    const add=document.getElementById('+');
    const sub=document.getElementById('-');
    const mul=document.getElementById('*');
    const div=document.getElementById('/');
    add.addEventListener('click',function(event){
        event.preventDefault();
        let val=parseFloat(x.value)+parseFloat(y.value);
        output.innerHTML=val.toFixed(2);
    })
    sub.addEventListener('click',function(event){
        event.preventDefault();
        let val=parseFloat(x.value)-parseFloat(y.value);
        output.innerHTML=val.toFixed(2);
    })
    mul.addEventListener('click',function(event){
        event.preventDefault();
        let val=parseFloat(x.value)*parseFloat(y.value);
        output.innerHTML=val.toFixed(2);
    })
    div.addEventListener('click',function(event){
        event.preventDefault();
        if(y.value!=0){
        let val=parseFloat(x.value)/parseFloat(y.value);
        output.innerHTML=val.toFixed(2);
        }
        else{
            alert("Division by 0 is not allowed enter a valid number in y");
        }
    })
    setInterval(()=>{
        dropdown.addEventListener('change',function(event){
            event.preventDefault();
            if(dropdown.value=='temperature'){
                window.open('temp.html',"_self");
            }
            else if(dropdown.value=='currency'){
                window.open('currency.html',"_self");
            }
        })
    },100)
})