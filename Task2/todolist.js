const input=document.getElementById("input");
const list=document.getElementById("list");
function addtask(){
    if(input.value ==='')
    {
        alert("Please add a task");

    } 
    else{
        let li=document.createElement('li');
        li.innerHTML=input.value;
        list.appendChild(li);
        let s=document.createElement('span');
        var txt = document.createTextNode("\u00D7");
        s.appendChild(txt)
        
        li.appendChild(s);

    }
    input.value ="";
    handledata();
    
}
list.addEventListener("click",function(h){
    if(h.target.tagName =='LI'){
        h.target.classList.toggle=("checked");
       handledata();
    }
    else if(h.target.tagName == 'SPAN'){
        h.target.parentElement.remove();
        handledata();
    }

},false);
function handledata(){
    localStorage.setItem("data",list.innerHTML);
}
function showdata(){
    list.innerHTML=localStorage.getItem("data");
}
