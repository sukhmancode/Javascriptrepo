const form=document.querySelector('form');
const submit=document.getElementById('submit')
const names=document.getElementById('name')
const email=document.getElementById('email')
const userlist=document.getElementById('user-list')
submit.addEventListener('click',function(e){
    submit.style.opacity="0.7"
    e.preventDefault();
    if(names.value==="" || email.value==""){
        alert("fill your details")
    }else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`NAME:${names.value} 
        EMAIL:${email.value}`))
        names.value='';
        email.value='';
        userlist.appendChild(li)
    }

})