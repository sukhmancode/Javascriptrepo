const form=document.querySelector('form');
const submit=document.getElementById('submit')
const names=document.getElementById('name')
const email=document.getElementById('email')
const userlist=document.getElementById('user-list')
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


submit.addEventListener('click',function(e){
    submit.style.opacity="0.7"
    e.preventDefault();
    if(names.value===""){
        alert("name field cant be empty")
    }
    else if(!email.value.match(validRegex)){
        alert("email is Invalid or empty")
    }
    
    else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`NAME:${names.value} 
        EMAIL:${email.value}`))
        names.value='';
        email.value='';
        userlist.appendChild(li)
    }

})