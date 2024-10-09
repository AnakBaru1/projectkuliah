const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click",() =>
{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click",() =>
{
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click",() =>
{
    container.classList.add("sign-up-mode2");
});

sign_in_btn2.addEventListener("click",() =>
{
    container.classList.remove("sign-up-mode2");
});
document.getElementById('sign-in-form').addEventListener('submit', function(event) 
    {  
            event.preventDefault();  
            var username = document.getElementById('username').value;  
            var password = document.getElementById('password').value;  
     
    if (username.length < 5 || username.length > 15) 
    {  
            alert('Username harus memiliki panjang minimal 5 karakter dan maksimal 15 karakter');  
            return;  
    }  
     
    if (password.length < 8 || password.length > 20) 
    {  
            alert('Password harus memiliki panjang minimal 8 karakter dan maksimal 20 karakter');  
            return;  
    }  
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) 
    {  
            alert('Password harus memiliki minimal satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus');  
            return;  
    }  
    if (username === password) 
    {  
            alert('Username dan password tidak boleh sama');  
            return;  
    }  
    this.submit();  
 });  
   
 document.getElementById('sign-up-form').addEventListener('submit', function(event) 
 {  
            event.preventDefault();  
            var username = document.getElementById('username-signup').value;  
            var email = document.getElementById('email-signup').value;  
            var password = document.getElementById('password-signup').value;  
     
    if (username.length < 5 || username.length > 15) 
    {  
            alert('Username harus memiliki panjang minimal 5 karakter dan maksimal 15 karakter');  
            return;  
    }  
      
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) 
    {  
            alert('Email harus memiliki format yang benar');  
            return;  
    }  
     
    if (password.length < 8 || password.length > 20) 
    {  
            alert('Password harus memiliki panjang minimal 8 karakter dan maksimal 20 karakter');  
            return;  
    }  
    
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) 
    {  
            alert('Password harus memiliki minimal satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus');  
            return;  
    }  
     
    if (username === password) 
    {  
            alert('Username dan password tidak boleh sama');  
            return;  
    }  
      
    this.submit();  
 });