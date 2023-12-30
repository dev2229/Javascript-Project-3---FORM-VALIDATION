var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName()
{
    var name = document.getElementById('contact-name').value;

    if(name.length==0){
        nameError.innerHTML='Name is required';
        return false;
    }

    if(!name.match(/^[A-za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Name is required';
        return false;
    }

    nameError.innerHTML='Valid';
    return true;
}

function validatePhone()
{
    var phone = document.getElementById('contact-phone').value;

    if(phone.length==0){
        phoneError.innerHTML='Phone number is required';
        return false;
    }
    if(phone.length!==10){
        phoneError.innerHTML='Phone number should be 10 digit';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Only digit please .';
        return false;
    }

    phoneError.innerHTML='valid';
    return true;
}

function validateEmail(){

    var email = document.getElementById('contact-email').value;

    if(email.length==0){
        emailError.innerHTML='Phone number is required';
        return false;
    }
    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z][\.][a-z]$/))
    {
        emailError.innerHTML='proper email is required';
        return false;
    }

    emailError.innerHTML='Valid';
    return true;
}

function validateMessage()
{
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required-message.length;

    if(left>0){
        messageError.innerHTML= left + 'More characters are required';
        return false;
    }

    messageError.innerHTML= 'Valid';
    return true;
}

function validateForm()
{
    if(validateName() || validatePhone() || validateEmail() || validateMessage()){
        submitError.style.display='Block';
        submitError.innerHTML='please fix the error';
        setTimeout(function(){submitError.style.display = 'none'},3000);
        return false;
    }
}