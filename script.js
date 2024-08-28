const countriesContainer=document.querySelector('.countries-container')
const filterByRegion=document.querySelector('.filter-by-region')
const searchInput=document.querySelector('.search-container input')
const themeChanger=document.querySelector('.theme-changer')
const themeIcon=document.querySelector('.thema-changer i')
// fetch('https://restcountries.com/v3.1/all')
// .then((res)=>res.json())
// .then((data)=>{
//     countriesContainer.innerHTML=''
//     data.forEach((country)=>{
//         const countryCard=document.createElement('a')
//         countryCard.classList.add('country-card')
//         countryCard.href=`/country.html?name=${country.name.common}`
//         countryCard.innerHTML=`<img src="${country.flags.svg}" alt="${country.name.common} flag">
//                     <div class="card-text">
//                         <h3 class="card-title">${country.name.common}</h3>
//                         <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
//                         <p><b>Region: </b>${country.region}</p>
//                         <p><b>Capital:</b>${country.capital?.[0]}</p>
//                    </div>`
//         countriesContainer.append(countryCard)
//     })
// })
if(!localStorage.getItem('Theme'))
{
    localStorage.setItem('Theme','white')
    localStorage.setItem('Class','fa-regular fa-moon')
    localStorage.setItem('Mode','Dark Mode')
}

let theme=localStorage.getItem('Theme')
document.body.classList.add(theme)
themeChanger.innerHTML=`<i class="${localStorage.getItem('Class')}"></i>&nbsp;&nbsp;${localStorage.getItem('Mode')}`

let allCountriesData
fetch('https://restcountries.com/v3.1/all')
.then((res)=>res.json())
.then((data)=>{
    renderCountries(data)
    allCountriesData=data
})


// filterByRegion.addEventListener('change',(e)=>{
//     fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
//     .then((res)=>res.json())
//     .then((data)=>{
        
//         data.forEach((country)=>{
//             const countryCard=document.createElement('a')
//             countryCard.classList.add('country-card')
//             countryCard.href=`/country.html?name=${country.name.common}`
//             countryCard.innerHTML=`<img src="${country.flags.svg}" alt="${country.name.common} flag">
//                         <div class="card-text">
//                             <h3 class="card-title">${country.name.common}</h3>
//                             <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
//                             <p><b>Region: </b>${country.region}</p>
//                             <p><b>Capital:</b>${country.capital?.[0]}</p>
//                     </div>`
//             countriesContainer.append(countryCard)
//     })
// })
// })

//


filterByRegion.addEventListener('change',(e)=>{
    fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
    .then((res)=>res.json())
    .then(renderCountries)
})
//Event for Filter by Region ^

//Render function for countries
function renderCountries(data)
{
    countriesContainer.innerHTML=''
    data.forEach((country)=>{
        const countryCard=document.createElement('a')
        countryCard.classList.add('country-card')
        countryCard.href=`/country.html?name=${country.name.common}`
        countryCard.innerHTML=`<img src="${country.flags.svg}" alt="${country.name.common} flag">
                    <div class="card-text">
                        <h3 class="card-title">${country.name.common}</h3>
                        <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
                        <p><b>Region: </b>${country.region}</p>
                        <p><b>Capital:</b>${country.capital?.[0]}</p>
                   </div>`
        countriesContainer.append(countryCard)
    })
}
//Search by name
searchInput.addEventListener('input',(e)=>
{
    const filteredCountries=allCountriesData.filter((country)=>country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
    renderCountries(filteredCountries)
})

themeChanger.addEventListener('click',()=>{
    if(theme=='dark')
    {
        document.body.classList.remove('dark')
        localStorage.Theme='white';
        document.body.classList.add('white')
        localStorage.setItem('Class','fa-regular fa-moon')
        localStorage.setItem('Mode','Dark Mode')
    }
    else
    {
        document.body.classList.remove('white')
        localStorage.Theme='dark';
        document.body.classList.add('dark')
        localStorage.setItem('Class','fa-sharp-duotone fa-solid fa-sun')
        localStorage.setItem('Mode','Light Mode')
    }
    themeChanger.innerHTML=`<i class="${localStorage.getItem('Class')}"></i>&nbsp;&nbsp;${localStorage.getItem('Mode')}`
    theme=localStorage.getItem('Theme')
})



// Copy data
// const countriesContainer=document.querySelector('.countries-container')
// const filterByRegion=document.querySelector('.filter-by-region')
// const searchInput=document.querySelector('.search-container input')
// const themeChanger=document.querySelector('.theme-changer')
// // fetch('https://restcountries.com/v3.1/all')
// // .then((res)=>res.json())
// // .then((data)=>{
// //     countriesContainer.innerHTML=''
// //     data.forEach((country)=>{
// //         const countryCard=document.createElement('a')
// //         countryCard.classList.add('country-card')
// //         countryCard.href=`/country.html?name=${country.name.common}`
// //         countryCard.innerHTML=`<img src="${country.flags.svg}" alt="${country.name.common} flag">
// //                     <div class="card-text">
// //                         <h3 class="card-title">${country.name.common}</h3>
// //                         <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
// //                         <p><b>Region: </b>${country.region}</p>
// //                         <p><b>Capital:</b>${country.capital?.[0]}</p>
// //                    </div>`
// //         countriesContainer.append(countryCard)
// //     })
// // })

// let allCountriesData
// fetch('https://restcountries.com/v3.1/all')
// .then((res)=>res.json())
// .then((data)=>{
//     renderCountries(data)
//     allCountriesData=data
// })


// // filterByRegion.addEventListener('change',(e)=>{
// //     fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
// //     .then((res)=>res.json())
// //     .then((data)=>{
        
// //         data.forEach((country)=>{
// //             const countryCard=document.createElement('a')
// //             countryCard.classList.add('country-card')
// //             countryCard.href=`/country.html?name=${country.name.common}`
// //             countryCard.innerHTML=`<img src="${country.flags.svg}" alt="${country.name.common} flag">
// //                         <div class="card-text">
// //                             <h3 class="card-title">${country.name.common}</h3>
// //                             <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
// //                             <p><b>Region: </b>${country.region}</p>
// //                             <p><b>Capital:</b>${country.capital?.[0]}</p>
// //                     </div>`
// //             countriesContainer.append(countryCard)
// //     })
// // })
// // })

// //


// filterByRegion.addEventListener('change',(e)=>{
//     fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
//     .then((res)=>res.json())
//     .then(renderCountries)
// })
// //Event for Filter by Region ^

// //Render function for countries
// function renderCountries(data)
// {
//     countriesContainer.innerHTML=''
//     data.forEach((country)=>{
//         const countryCard=document.createElement('a')
//         countryCard.classList.add('country-card')
//         countryCard.href=`/country.html?name=${country.name.common}`
//         countryCard.innerHTML=`<img src="${country.flags.svg}" alt="${country.name.common} flag">
//                     <div class="card-text">
//                         <h3 class="card-title">${country.name.common}</h3>
//                         <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
//                         <p><b>Region: </b>${country.region}</p>
//                         <p><b>Capital:</b>${country.capital?.[0]}</p>
//                    </div>`
//         countriesContainer.append(countryCard)
//     })
// }
// //Search by name
// searchInput.addEventListener('input',(e)=>
// {
//     const filteredCountries=allCountriesData.filter((country)=>country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
//     renderCountries(filteredCountries)
// })

// themeChanger.addEventListener('click',()=>{
//     document.body.classList.toggle('dark')
// })