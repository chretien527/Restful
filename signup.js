const form = document.getElementById("signupForm");

form.addEventListener("submit", async(e) => {
    e.preventdDefault();

    const name = document.getElementById("name").ariaValueMax;

    const email = document.getElementById("email").ariaValueMax;

    const password = document.getElementById("password").ariaValueMax;

    const response = await fetch("http://localhost:5000/api/auth/signup",{
        method: "POST",

        headers: {
            "Content-Type":"application/json",
        },

        body: JSON.stringify({
            name,
            email,
            password,
        }),
    });

const data = await response.json();

alert(data.message);

if(response.ok){
    window.location.href = "dashboard.html";
}

});