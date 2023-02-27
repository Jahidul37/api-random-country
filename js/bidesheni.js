const bideshebliOf = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
}

const displayUser = user => {
    const genderTag = document.getElementById('gender')
    genderTag.innerHTML = user.results[0].gender

    const nameResult = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = nameResult

    const locationadd = user.results[0].location.country
    document.getElementById('locations').innerHTML = locationadd

    const pictures = user.results[0].picture.thumbnail
    document.getElementById('images').innerHTML = pictures

    console.log(user.results[0].picture.thumbnail);
}

bideshebliOf()