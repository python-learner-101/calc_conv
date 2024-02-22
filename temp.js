document.addEventListener('DOMContentLoaded',function(){
    const output=document.getElementById('output');
    const c=document.getElementById('celcius');
    const f=document.getElementById('fahren');
    const inp=document.getElementById('input');
    const dropdown=document.getElementById('mode');

    setInterval(()=>{
        dropdown.addEventListener("change",function(event){
            event.preventDefault();
            if(dropdown.value=="currency"){
                window.open("currency.html","_self");
            }
            else if(dropdown.value=="basic"){
                window.open("calc.html","_self");
            }
        })
        c.addEventListener('click',function(event){
            event.preventDefault();
            let x=inp.value;
            output.innerHTML=toc(x).toFixed(2);
        })
        f.addEventListener('click',function(event){
            event.preventDefault();
            let x=inp.value;
            output.innerHTML=tof(x).toFixed(2);
        })
    },100)
})

function toc(x){
    return (5/9)*(parseFloat(x)-32);
}
function tof(x){
    return (9*parseFloat(x)/5)+32;
}
