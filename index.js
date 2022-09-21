const cat_btn = document.getElementById("cat_btn")
const anime_btn = document.getElementById("anime_btn")
const excuse_btn = document.getElementById("fish_btn")
const cat_result = document.getElementById("cat_result")
const anime_result = document.getElementById("anime_result")
const excuse_result = document.getElementById("excuse_result")

cat_btn.addEventListener("click", async () => {
    try {
        let res = await fetch("https://meowfacts.herokuapp.com/")
        let data = await res.json();
        console.log(data)
        cat_result.innerHTML = `
        <h4>Fact: ${data.data}</h4>
        `
    } catch (error) {
        console.log(error)
    }
})
anime_btn.addEventListener("click",async()=>{
    try {
        let res = await fetch("https://animechan.vercel.app/api/random")
        let data = await res.json()
        console.log(data)
        anime_result.innerHTML=`
        <h4>Anime: ${data.anime}</h4>
        <h4>Character: ${data.character}</h4>
        <h4>Quote: ${data.quote}</h4>
        `
    } catch (error) {
        console.log(error)
    }
})
excuse_btn.addEventListener("click",async()=>{
    try {
        let res = await fetch("https://excuser.herokuapp.com/v1/excuse")
        let data = await res.json()
        console.log(data)
        excuse_result.innerHTML =`
        <h4>Category: ${data[0].category}</h4>
        <h4>Excuse: ${data[0].excuse}</h4>
        `
    } catch (error) {
        
    }
})
