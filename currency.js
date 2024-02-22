document.addEventListener('DOMContentLoaded',function() {
    const inp=document.getElementById('input');
    const output=document.getElementById('output');
    const yen=document.getElementById('yen');
    const dollar=document.getElementById('dollar');
    const pound=document.getElementById('pound');
    const won=document.getElementById('won');
    const yuan=document.getElementById('yuan');
    const euro=document.getElementById('euro');
    const ruble=document.getElementById('ruble');
    const pruppee=document.getElementById('pruppee');
    const sdollar=document.getElementById('sdollar');
    const dropdown=document.getElementById('mode');
    
    setInterval(()=> {
        dropdown.addEventListener("change",function(event){
            event.preventDefault();
            if(dropdown.value=="temperature"){
                window.open("temp.html","_self");
            }
            else if(dropdown.value=="basic"){
                window.open("calc.html","_self");
            }
        })
        yen.addEventListener('click',function(event){
            event.preventDefault();
            let value=parseFloat(inp.value)*1.81;
            output.innerHTML=value.toFixed(4);
        })
        dollar.addEventListener('click',function(event){
            event.preventDefault();
            let value=parseFloat(inp.value)*0.012;
            output.innerHTML=value.toFixed(4);
        })
        pound.addEventListener('click',function(event){
            event.preventDefault();
            let value=parseFloat(inp.value)*0.0095;
            output.innerHTML=value.toFixed(4);
        })
        won.addEventListener('click',function(event){
            event.preventDefault();
            let value=parseFloat(inp.value)*16.09;
            output.innerHTML=value.toFixed(4);
        })
        yuan.addEventListener('click',function(event){
            event.preventDefault();
            let value=parseFloat(inp.value)*0.087;
            output.innerHTML=value.toFixed(4);
        })
        euro.addEventListener('click',function(event){
            event.preventDefault();
            let value=parseFloat(inp.value)*0.011;
            output.innerHTML=value.toFixed(4);
        })
        ruble.addEventListener('click',function(event){
            event.preventDefault();
            let value=parseFloat(inp.value)*1.11;
            output.innerHTML=value.toFixed(4);
        })
        pruppee.addEventListener('click',function(event){
            event.preventDefault();
            let value=parseFloat(inp.value)*3.37;
            output.innerHTML=value.toFixed(4);
        })
        sdollar.addEventListener('click',function(event){
            event.preventDefault();
            let value=parseFloat(inp.value)*0.016;
            output.innerHTML=value.toFixed(4);
        })
    },100)
})