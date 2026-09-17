async function loginUser() 
{
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!usernameRegex.test(usernameInput)) {
        alert("Invalid Username!\n- Must be 3-16 characters long.\n- Can only contain letters, numbers, underscores (_), and hyphens (-).");
        return false; 
    }

    if (!passwordRegex.test(passwordInput)) {
        alert("Invalid Password!\n- Must be at least 8 characters long.\n- Must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return false; 
    }

    try {
        const response = await fetch("info.json");
        const users = await response.json();

        const match = users.find(u => u.username === usernameInput && u.password === passwordInput);

        if (match) {
            alert(`Login successful! Welcome ${match.name}`);
            window.location.href = "mainpage.html";
        } else {
            alert("Incorrect username or password!");
        }
    } catch (error) {
        console.error("Error reading JSON:", error);
        alert("Unable to process login right now.");
    }

    return false;
}
