const button=document.getElementById('btn')
const joke=document.getElementById('jock')

button.addEventListener('click',()=>{
    const config = {
        headers: {
          Accept: 'application/json',
        } 
    }
    fetch("https://icanhazdadjoke.com",config).then((res) => res.json()).then((data) => {joke.innerText = data.joke})
})
