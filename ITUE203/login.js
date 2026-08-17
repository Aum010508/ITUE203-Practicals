function loginUser() 
{
    const usernameInput = document.getElementByPlaceHolder('Username').value.trim();
    const passwordInput = document.getElementByPlaceHolder('Password').value.trim();

    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!usernameRegex.test(usernameInput))
    {
        alert("Invalid Username!\n- Must be 3-16 characters long.\n- Can only contain letters, numbers, underscores (_), and hyphens (-).");
        return false; 
    }

    if (!passwordRegex.test(passwordInput))
    {
        alert("Invalid Password!\n- Must be at least 8 characters long.\n- Must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return false; 
    }

    if (usernameInput === "student123" && passwordInput === "Pass@123") {
        window.location.href = "mainpage.html";
        return false; 
    } else {
        alert("Incorrect username or password!");
        return false; 
    }
}
