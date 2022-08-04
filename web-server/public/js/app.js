fetch('http://localhost:3000/weather?adress=Sławno')
    .then(res => {
        res.json().then(data => {
            if(data.error) {
                console.log(data.error);
            } else {
                console.log(data.temperature);
                console.log(data.location);
            }
        })
    }).catch(err => {console.log(err)})

const weatherForm = document.querySelector('form');
const search = document.querySelector('input')

weatherForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log(search.value)
})