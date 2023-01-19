const requestsHeader = {
    'X-RapidAPI-Key': 'dfbf9a3fdfmsh0e58794cb87a218p16186bjsn15d4aea76006',
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
}
export async function newsPageOneRequest(){
    const news = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-health-news/1',
    {
        method: 'GET',
        headers: requestsHeader});
    const newsJson = await news.json();
    if(!news.ok) {
        console.log('Couldnt get all the news');
    }
    return newsJson;
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
    });
    const listGlobalJson = await listGlobal.json()
    return listGlobalJson
}
export async function getAllVaccines () {
    const vaccines = await fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines`, {
        method: 'GET',
        headers: requestsHeader
    })
    const vaccinesJson = await vaccines.json();
    if(!vaccines.ok) {
        console.log('Couldnt get all the vaccines information');
    }
    return vaccinesJson;
}
export async function getAllVaccinesI(){
    const vaccines = await fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines-phase-i`, {
        method: 'GET',
        headers: requestsHeader
    })
    const vaccinesJson = vaccines.json();
    return vaccinesJson
}
export async function getAllCountrysInAsia(){
    const list = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/asia', {
        method: 'GET',
        headers: requestsHeader
    })
    const listJson = await list.json()
    return listJson
}
export async function getAllVaccinesII(){
    const vaccines = await fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines-phase-ii`, {
        method: 'GET',
        headers: requestsHeader
    });
    const vaccinesJson = vaccines.json();
    return vaccinesJson
}
export async function getAllCountrysInAfrican(){
    const list = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/africa', {
        method: 'GET',
        headers: requestsHeader
    });
    const listJson = await list.json()
    return listJson
}
export async function getAllVaccinesIII(){
    const vaccines = await fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines-phase-iii`, {
        method: 'GET',
        headers: requestsHeader
    });
    const vaccinesJson = vaccines.json();
    return vaccinesJson
}
export async function getAllCountrysInEuropean(){
    const list = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/europe', {
        method: 'GET',
        headers: requestsHeader
    });
    const listJson = await list.json()
    return listJson
}
export async function getAllVaccinesIV(){
    const vaccines = await fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines-phase-iv`, {
        method: 'GET',
        headers: requestsHeader
    });
    const vaccinesJson = vaccines.json();
    return vaccinesJson
}
export async function getAllCountrysInNorthernAmerican(){
    const list = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/northamerica', {
        method: 'GET',
        headers: requestsHeader
    });
    const listJson = await list.json()
    return listJson
}
export async function getAllApprovedVaccines(){
    const vaccines = await fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-fda-approved-vaccines`, {
        method: 'GET',
        headers: requestsHeader
    });
    const vaccinesJson = vaccines.json();
    return vaccinesJson
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
export async function getSpecifVaccine (category, name) {
    const vaccine = await fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-vaccines/${category}/${name}`, {
        method: 'GET',
        headers: requestsHeader
    });
    const vaccineJson = await vaccine.json();
    if(!vaccine.ok) {
        console.log('Vaccine not found');
    }
    return vaccineJson;
}

export async function newsPageTwoRequest(){

    const news = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-health-news/2',
    {
        method: 'GET',
        headers: requestsHeader
    })

    const newsJson = await news.json();
    if(!news.ok) {
        console.log('Couldnt get all the news');
    }
    return newsJson;
}

export async function newsPageThreeRequest(){

    const news = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-health-news/3',
    {
        method: 'GET',
        headers: requestsHeader
    })

    const newsJson = await news.json();
    if(!news.ok) {
        console.log('Couldnt get all the news');
    }
    return newsJson;
}

export async function newsPageFourRequest(){

    const news = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-health-news/4',
    {
        method: 'GET',
        headers: requestsHeader
    })

    const newsJson = await news.json();
    if(!news.ok) {
        console.log('Couldnt get all the news');
    }
    return newsJson;
}

export async function newsPageFiveRequest(){

    const news = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-health-news/5',
    {
        method: 'GET',
        headers: requestsHeader
    })

    const newsJson = await news.json();
    if(!news.ok) {
        console.log('Couldnt get all the news');
    }
    return newsJson;
}

export async function newsPageSixRequest(){

    const news = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-health-news/6',
    {
        method: 'GET',
        headers: requestsHeader
    })

    const newsJson = await news.json();
    if(!news.ok) {
        console.log('Couldnt get all the news');
    }
    return newsJson;
}

export async function newsPageSevenRequest(){

    const news = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-health-news/7',
    {
        method: 'GET',
        headers: requestsHeader
    })

    const newsJson = await news.json();
    if(!news.ok) {
        console.log('Couldnt get all the news');
    }
    return newsJson;
}

export async function newsPageEightRequest(){

    const news = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-health-news/8',
    {
        method: 'GET',
        headers: requestsHeader
    })

    const newsJson = await news.json();
    if(!news.ok) {
        console.log('Couldnt get all the news');
    }
    return newsJson;
}