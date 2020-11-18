var nameRegex = new RegExp(/^[A-Z][a-z]{2,}$/);
var emailReGex = "^[a-z0-9A-Z]+([._+-][a-z0-9A-Z]+)*[@][a-z0-9A-Z]+[.][a-zA-Z]{2,3}(.[a-zA-Z]{2})?$";
var phoneRegex = "^[1-9][0-9]{1}[ ][1-9]{1}[0-9]{9}$";
var passwordRegex = "((?=.*[A - Z])(?=.*[0 - 9])(?= ^[a - zA - Z0 - 9] *[@$#^!-+][a-zA-Z0-9]*$)).{8,}";

function CheckName(name)
{
    if(nameRegex.test(name))
    {
        console.log("Valid");
    }
    else
    {
        console.log("Invalid");
    }
}

CheckName("pranav");
