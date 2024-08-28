const countryName=new URLSearchParams(location.search).get('name')
const flagImage=document.querySelector('.country-details img')
const countryNameH1=document.querySelector('.country-details h1')
const nativeName=document.querySelector('.native-name')
const population=document.querySelector('.population')
const region=document.querySelector('.region')
const subRegion=document.querySelector('.sub-region')
const capital=document.querySelector('.capital')
const topLevelDomain=document.querySelector('.top-level-domain')
const currencies=document.querySelector('.currencies')
const languages=document.querySelector('.language')
const borderCountries=document.querySelector('.border-countries')
const themeChanger=document.querySelector('.theme-changer')

let theme=localStorage.getItem('Theme')
document.body.classList.add(theme)
themeChanger.innerHTML=`<i class="${localStorage.getItem('Class')}"></i>&nbsp;&nbsp;${localStorage.getItem('Mode')}`

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=>res.json())
.then(([data])=>{
    flagImage.src=data.flags.svg
    countryNameH1.innerText=data.name.common
    population.innerText=data.population.toLocaleString('en-IN')
    region.innerText=data.region
    topLevelDomain.innerText=data.tld.join(', ')
    if(data.subregion)
        subRegion.innerText=data.subregion
    if(data.capital)
        capital.innerText=data.capital?.[0]
    if(data.currencies)
        currencies.innerText=Object.values(data.currencies).map((currency)=>currency.name).join(', ')
    if(data.languages)
    languages.innerText=Object.values(data.languages).join(', ')
    if(data.name.nativeName)
        nativeName.innerText=Object.values(data.name.nativeName)[0].common
    else
        nativeName.innerText=data.name.common

    // fetch border data
    if(data.borders){
        data.borders.forEach((border) => {
            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res)=>res.json())
            .then(([borderCountry])=>{
                const borderCountryTag=document.createElement('a')
                borderCountryTag.innerText = borderCountry.name.common
                borderCountryTag.href=`country.html?name=${borderCountry.name.common}`
                borderCountries.append(borderCountryTag)
            })  
        })
    }
     
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