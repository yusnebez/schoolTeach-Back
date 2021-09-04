const api = axios.create({
    baseURL:"http://localhost:3012",
    timeout: 2000
})

document.getElementById('login').addEventListener("click", function(){
    api.post('/login',{
    email: document.getElementById('login_email').value,
    password: document.getElementById('login_password').value

    })
    .then(function (response){
      if(response.data && response.data.token) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('email', response.data.email)
        localStorage.setItem('name', response.data.name)
        home()
    }else {
        alert(" No puede logearse")
    }
    
    })
    .catch(function (error) {
        alert(" No puede logearse")

    })
}) 

function home(){
    window.location.href = "../public/subject.html"

}