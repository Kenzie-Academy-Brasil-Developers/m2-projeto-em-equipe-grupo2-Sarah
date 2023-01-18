const requestsHeader = {
    'X-RapidAPI-Key': 'dfbf9a3fdfmsh0e58794cb87a218p16186bjsn15d4aea76006',
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
}

//ENEIAS

export async function newsPageOneRequest(){

    const news = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-health-news/1',
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
