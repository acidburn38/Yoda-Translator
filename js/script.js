const input = document.querySelector(".input_to_translate")
const btn = document.querySelector(".btn")
const h1 = document.querySelector(".text_translated")

btn.addEventListener("click", translate);
let url = "https://api.funtranslations.com/translate/yoda.json"
function translate() {
    let inputValue = input.value;
    newUrl = `${url}?text=${inputValue}`
    fetch(newUrl).then((data)=>data.json()).then((data)=>{
        console.log(data);
        h1.innerHTML = data.contents.translated;
    })
}