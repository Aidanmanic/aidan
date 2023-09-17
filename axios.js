const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const quoteText = document.getElementById("quote-text")

const getQuote = () => {
    axios.get("https://api.quotable.io/random").then(res => {
        console.log(res.data.content)
        quoteText.textContent = res.data.content
    }).catch(err => {
        console.log(err)
    })
};

getBtn.addEventListener("click", getQuote);
