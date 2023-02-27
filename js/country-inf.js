const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {

    const countriesContainer = document.getElementById('all-countries');
    // for (const country of countries) {
    //     console.log(country);
    // }

    // for loop caara anothe option ace . seta hocce map dia... or forEach dia o jay

    // foreach use
    countries.forEach(country => {
        console.log(country);

        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
        <h3> Name : ${country.name.common} </h3>
        <p> Capital : ${country.capital ? country.capital[0] : 'no capital'} </p>
        <button onclick="loadcountriesDetails('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv)
    });

}

const loadcountriesDetails = code => {

    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => showCountry(data[0]))
}

const showCountry = country => {
    const detailsContainer = document.getElementById('country-detail')
    detailsContainer.innerHTML = `
    <h3>name : ${country.name.common}</h3>
    <img src="${country.flags.png}">
    
    `
}


loadCountries()