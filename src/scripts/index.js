import { openNavbar } from "./navbar.js";
import { getAllCountrys, getAllGlobalInformation } from "./requests.js";


const listGlobal = await getAllGlobalInformation()
const listAllCountry = await getAllCountrys()

function printGlobalInformation(obj){
    const totalCases = document.querySelector('.total__cases')
    const totalNewCases = document.querySelector('.total__newCases')
    const totalActiveCases = document.querySelector('.total__activeCases')
    const totalCritical = document.querySelector('.total__critical')
    const totalDeaths = document.querySelector('.total__deaths')
    const totalNewDeaths = document.querySelector('.total__newDeaths')
   

    totalCases.innerHTML = obj.TotalCases
    totalNewCases.innerHTML = obj.NewCases
    totalActiveCases.innerHTML = obj.ActiveCases
    totalCritical.innerHTML = obj.Serious_Critical
    totalDeaths.innerHTML = obj.TotalDeaths
    totalNewDeaths.innerHTML = obj.NewDeaths
}

function searchCountryFilter(list, search){
    const foundCountry = list.filter(obj =>{
        if(obj.Country.toLowerCase().trim().includes(search.toLowerCase().trim())){
            return obj
        }
    })
    return foundCountry
}


function printSearch(){
    const inputSearch = document.querySelector('.search__country')

    // const list = document.querySelector('.showcase')


    inputSearch.addEventListener('change', (e) =>{
        // list.innerHTML = ''
  
        const currentList = searchCountryFilter(listAllCountry, inputSearch.value)
        console.log(currentList)

        // printCard(searchArray)
    })

}

openNavbar()
printGlobalInformation(listGlobal[0])

printSearch()