const requestsHeader = {
    'X-RapidAPI-Key': 'dfbf9a3fdfmsh0e58794cb87a218p16186bjsn15d4aea76006',
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
}


export async function getAllGlobalInformation(){
    const listGlobal = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', {
        method: 'GET',
        headers: requestsHeader
    })

    const listGlobalJson = await listGlobal.json()

    return listGlobalJson
}

export async function getAllCountrys(){
    const listGlobal = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries', {
        method: 'GET',
        headers: requestsHeader
    })

    const listGlobalJson = await listGlobal.json()

    return listGlobalJson
}