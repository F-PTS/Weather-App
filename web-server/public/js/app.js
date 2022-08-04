const weatherForm = document.querySelector('form');
const search = document.querySelector('input')
const result = document.querySelector('.result');

weatherForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log(search.value)

    fetch(`http://localhost:3000/weather?adress=${search.value}`)
    .then(res => {
        res.json().then(data => {
            if(data.error) {
                result.textContent=`Error! \n${data.error}`
            } else {
                result.textContent=`It is ${data.forecast} right now, and it is ${data.temperature} dagrees out. Feels like ${data.feelsLike}. All in ${data.location},${data.city},${data.country}`
            }
        })
    }).catch(err => {console.log(err)})
})