const form=document.getElementById('form');
const username=document.getElementById('username');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
alert("Đăng kí tài khoản");
form.addEventListener('submit', function(e)
{
    e.preventDefault();
    ValidateInputs();

})

const setError=funtion(element, message)
{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

};

const isValidEmail=funtion(email)
{
    const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z/-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).tolower.Case());
}
const ValidateInputs=function()
{
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();
    if (usernameValue ==='')
     {
        setError(username,'Tên đăng nhập được yêu cầu!');
    } else {
        setSuccess(username);
    }

    if(emailValue ==='')
    {
        setError(email,'Email được yêu cầu');
    }
    else
    {
        if(!isValidEmail(emailValue))
        {
            setError(email,'Vui lòng cung cấp email chính xác');
        }
    }
}