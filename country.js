const container = document.getElementById('country-container');

const searchCountry = async () => {
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    inputField.value = '';
    
    const url = `https://restcountries.eu/rest/v2/name/${inputValue}`;
    const response = await fetch(url);
    const data = await response.json();
    showCountry(data[0]);
}

const showCountry = country => {
    console.log(country);
    container.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card my-5" style="width: auto;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${country.flag}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${country.name}</h5>
                    <p class="card-text">Native Name: ${country.nativeName} <br> Capital: ${country.capital} <br> Currency: ${country.currencies[0].name}</p>
                    <p class="card-text"><small class="text-muted">Population: ${country.population}</small></p>
                </div>
            </div>
        </div>
    </div>        
    `;
    container.appendChild(div);
}