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

export async function getAllCountrysInAsia(){
    const list = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/asia', {
        method: 'GET',
        headers: requestsHeader
    })

    const listJson = await list.json()

    return listJson
}

export async function getAllCountrysInAfrican(){
    const list = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/africa', {
        method: 'GET',
        headers: requestsHeader
    })

    const listJson = await list.json()

    return listJson
}

export async function getAllCountrysInEuropean(){
    const list = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/europe', {
        method: 'GET',
        headers: requestsHeader
    })

    const listJson = await list.json()

    return listJson
}

export async function getAllCountrysInNorthernAmerican(){
    const list = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/northamerica', {
        method: 'GET',
        headers: requestsHeader
    })

    const listJson = await list.json()

    return listJson
}

export async function getAllCountrysInSorthernAmerican(){
    const list = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/southamerica', {
        method: 'GET',
        headers: requestsHeader
    })

    const listJson = await list.json()

    return listJson
}

export async function getAllCountrysInOceanian(){
    const list = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/australia', {
        method: 'GET',
        headers: requestsHeader
    })

    const listJson = await list.json()

    return listJson
}