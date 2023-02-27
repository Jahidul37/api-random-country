const loadqute = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => kaniyaQutes(data))

}


const kaniyaQutes = quote => {
    const connectQuote = document.getElementById('quote')
    console.log(quote);

    connectQuote.innerHTML = quote.quote


}


loadqute()