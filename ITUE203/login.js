function loginUser() 
{
    const usernameInput = document.getElementById('username'); // FIXED: was 'email'
    const passwordInput = document.getElementById('password');

    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!usernameRegex.test(usernameInput.value))
    {
        alert("Invalid Username!\n- Must be 3-16 characters long.\n- Can only contain letters, numbers, underscores (_), and hyphens (-).");
        return false; 
    }

    if (!passwordRegex.test(passwordInput.value))
    {
        alert("Invalid Password!\n- Must be at least 8 characters long.\n- Must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return false; 
    }

    if (usernameInput.value === "student123" && passwordInput.value === "Pass123@123") {
        window.location.href = "mainpage.html";
        return false; 
    } else {
        alert("Incorrect username or password!");
        return false; 
    }
}
