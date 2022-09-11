console.log('hello')
const name1=document.getElementById('name')
const email=document.getElementById('email')
const username=document.getElementById('username')
const password=document.getElementById('password')
const cpassword=document.getElementById('cpassword')
const validname=document.querySelector('.validname')
const validemail=document.querySelector('.validemail')
const validusername=document.querySelector('.validusername')
let validname2=false;
let validemail2=false;
let validusername2=false;
let validpassword=false;
let validcpassword=false;
let validmobile=false;


name1.addEventListener('blur',()=>{
    console.log('blured')
    let reg=/(^[a-zA-Z]+) [a-zA-Z]+$/
    let str=name1.value ;
    let result=reg.test(str);
    console.log(reg,result)
    if(result){
        name1.classList.remove('is-invalid')
        name1.classList.add('is-valid')
        validname2=true;
    }
    else{
        name1.classList.add('is-invalid')
        name1.classList.remove('is-valid')
        validname.style.color='red'
    }
    
})
email.addEventListener('blur',()=>{
    console.log('blured')
    let reg=/^[a-z0-9]+@[a-z]+\.[a-z]{3,7}$/
    let str=email.value;
    let result=reg.test(str);
    console.log(result)
    if(result){
        console.log('email matched')
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
        validemail2=true;
    }
    else{
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
        validemail.style.color='red'
    }
})
username.addEventListener('blur',()=>{
    console.log('blured')
    let reg=/^[a-zA-z0-9]+$/
    let str=username.value;
    let result=reg.test(str)
    if(result){
        username.classList.add('is-valid')
        username.classList.remove('is-invalid')
        validusername2=true;
    }
    else{
        username.classList.add('is-invalid')
        username.classList.remove('is-valid')
        validusername.style.color='red';
    }


})
let mobile=document.getElementById('mobile')
mobile.addEventListener('blur',()=>{
    let reg=/^[789]([0-9]){9}/
    let str=mobile.value;
    let result=reg.test(str)
    if(result){
        validmobile=true;
        mobile.classList.add('is-valid')
        mobile.classList.remove('is-invalid')

    }
    else{
        mobile.classList.add('is-invalid')
        mobile.classList.remove('is-valid')
    }
})


let passcheck=(data)=>{
let regex1=/[\@\#\$\,\:\.]/
let regex2=/[A-Z]/
let regex3=/[0-9]/
// let regex4=/(*){8,}/

let result1=regex1.test(data)
console.log(result1)
if(result1){
    document.getElementById('special').style.color='green'
    validpassword=true;
}
else{
    document.getElementById('special').style.color='red'

}
let result2=regex2.test(data)
if(result2){
    document.getElementById('capital').style.color='green'
    validpassword=true;


}
else{
    document.getElementById('capital').style.color='red'

}

let result3=regex3.test(data)
if(result3){
    document.getElementById('num').style.color='green'
    


}
else{
    document.getElementById('num').style.color='green'

}



if(data.length>=8){
    document.getElementById('char').style.color='green'
    


}
else{
    document.getElementById('char').style.color='red'
    
}






}
let cpasscheck=(data2)=>{
    if(password.value==cpassword.value){
        document.getElementById('cpass').style.color='green'
  


    }
    else{
        document.getElementById('cpass').style.color='red'
    }
}

let submit=document.getElementById('submit')
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    if(validname2 && validemail2 && validusername2){
        console.log('you have successfully submitting the form')
        // let success=document.getElementById('success')
        // success.classList.add('show')
        // success.classList.remove('alert-warning')
        // success.classList.add('alert-success')
        document.getElementsByClassName('submitresult')[0].innerHTML=`<div  id="success" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Holy success!</strong> You have successfully submited the form.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      
       
    }
    else{
        console.log('check your form')
        // success.classList.add('show')
        // success.classList.remove('alert-success')
        // success.classList.add('alert-warning')
        document.getElementsByClassName('submitresult')[0].innerHTML=`<div  id="success" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy Uffs!</strong> Something went wrong please check the form.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`



      
        

    }
})



