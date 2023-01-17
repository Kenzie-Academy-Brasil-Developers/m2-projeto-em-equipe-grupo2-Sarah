const requestsHeader = {
    'X-RapidAPI-Key': 'dfbf9a3fdfmsh0e58794cb87a218p16186bjsn15d4aea76006',
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
}

//ENEIAS

export async function newsRequest(){

    const news = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-health-news/1',
    {
        method: 'GET',
        headers: requestsHeader
    })

    .then(news => news.json())
    .then(news => {
        
        return news
    })

    return news
}

