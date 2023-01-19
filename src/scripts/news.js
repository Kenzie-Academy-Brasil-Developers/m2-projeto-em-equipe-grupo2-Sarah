import { openNavbar } from './navbar.js'
import {newsPageOneRequest, newsPageTwoRequest, newsPageThreeRequest, newsPageFourRequest, newsPageFiveRequest, newsPageSixRequest, newsPageSevenRequest, newsPageEightRequest,} from './requests.js'


async function renderNews(){
    const newsList = document.querySelector('#news__list')

    const newsPageOne = await newsPageOneRequest()
    const newsPageTwo = await newsPageTwoRequest()
    const newsPageThree = await newsPageThreeRequest()
    const newsPageFour = await newsPageFourRequest()
    const newsPageFive = await newsPageFiveRequest()
    const newsPageSix = await newsPageSixRequest()
    const newsPageSeven = await newsPageSevenRequest()
    const newsPageEight = await newsPageEightRequest()
    

    newsList.innerHTML = ''

    newsPageOne.news.forEach(element => {
        const card = createCard(element) 

        newsList.append(card)
    })

    newsPageTwo.news.forEach(element => {
        const card = createCard(element) 

        newsList.append(card)
    })

    newsPageThree.news.forEach(element => {
        const card = createCard(element) 

        newsList.append(card)
    })

    newsPageFour.news.forEach(element => {
        const card = createCard(element) 

        newsList.append(card)
    })

    newsPageFive.news.forEach(element => {
        const card = createCard(element) 

        newsList.append(card)
    })

    newsPageSix.news.forEach(element => {
        const card = createCard(element) 

        newsList.append(card)
    })

    newsPageSeven.news.forEach(element => {
        const card = createCard(element) 

        newsList.append(card)
    })

    newsPageEight.news.forEach(element => {
        const card = createCard(element) 

        newsList.append(card)
    })
}

function createCard(element){
    
    const container = document.createElement('li')
    const link = document.createElement('a')
    const divImgFont = document.createElement('div')
    const spanImgFont = document.createElement('span')
    const imgFont = document.createElement('img')
    const div = document.createElement('div')
    const title = document.createElement('h2')
    const content = document.createElement('p')
    const divImgNews = document.createElement('div')
    const imgNews = document.createElement('img')
    const date = document.createElement('h4')

    container.classList.add('item__list')
    link.classList.add('link__news')
    divImgFont.classList.add('div__imgFont')
    spanImgFont.classList.add('span__imgFont')
    imgFont.classList.add('images__font')
    div.classList.add('div__news')
    divImgNews.classList.add('div__imgNews')
    imgNews.classList.add('images__news')
    date.classList.add('date__news')
    
    link.href = element.link

    if(element.reference == 'cbs-news'){
        imgFont.src = '../assets/cbs-news.jpg'
    } else if(element.reference == 'google-news-uk' || element.reference == 'google-news' || element.reference == 'google-news-ca' || element.reference == 'google-news-au' || element.reference == 'google-news-in'){
        imgFont.src = '../assets/google-news.jpg'
    } else if(element.reference == 'fox-news'){
        imgFont.src = '../assets/fox-news.jpg'
    } else if(element.reference == 'cnn'){
        imgFont.src = '../assets/cnn.jpg'
    } else if(element.reference == 'cbc-news'){
        imgFont.src = '../assets/cbc-news.jpg'
    } else if(element.reference == 'abc-news' || element.reference == 'abc-news-au'){
        imgFont.src = '../assets/abc-news.jpg'
    } else if(element.reference == 'bbc-news'){
        imgFont.src = '../assets/bbc-news.jpg'
    } else if(element.reference == 'the-washington-times'){
        imgFont.src = '../assets/the-washington-times.png'
    } else if(element.reference == 'the-washington-post'){
        imgFont.src = '../assets/the-washington-post.png'
    } else if(element.reference == 'the-wall-street-journal'){
        imgFont.src = '../assets/the-wall-street-journal.png'
    } else if(element.reference == 'nbc-news'){
        imgFont.src = '../assets/nbc-news.jpg'
    } else if(element.reference == 'medical-news-today'){
        imgFont.src = '../assets/mnt-news.png'
    } else if(element.reference == 'news24'){
        imgFont.src = '../assets/news24.png'
    } else if(element.reference == 'new-scientist'){
        imgFont.src = '../assets/new-scientist.jpg'
    } else if(element.reference == 'usa-today'){
        imgFont.src = '../assets/usa-today.jpg'
    }
    
    imgFont.alt = "Imagem da fonte"
    
    title.id = 'news__title'
    content.id = 'news__content'
    
    title.innerHTML = element.title
    content.innerHTML = element.content
    
    imgNews.src = element.urlToImage
    imgNews.alt = "Imagem da notícia"

    
    let pubDate = new Date(element.pubDate)
    let pubHour = pubDate.getHours()
    let pubMinute = pubDate.getMinutes()
    let pubDay = pubDate.getDate()
    let pubMonth = pubDate.getMonth()
    let pubYear = pubDate.getFullYear()


    let currentDate = new Date()
    let currentHour = currentDate.getHours()
    let currentMinute = currentDate.getMinutes()
    let currentDay = currentDate.getDate()
    let currentMonth = currentDate.getMonth()
    let currentYear = currentDate.getFullYear()


    let diference = 0
    
    if(currentDay == pubDay && currentMonth == pubMonth && currentYear == pubYear){
        if(currentHour == pubHour){
            diference = currentMinute - pubMinute
            date.innerHTML = `${diference} minutes ago`
            
        } else if(currentHour != pubHour){
            diference = currentHour - pubHour
            date.innerHTML = `${diference} hours ago`
        } 
    } else if(currentYear == pubYear && currentMonth == pubMonth && currentDay != pubDay){
        diference = currentDay - pubDay
        date.innerHTML = `${diference} days ago`
    }    
    else if(currentYear == pubYear && currentMonth != pubMonth){
        diference = currentMonth - pubMonth
        date.innerHTML = `${diference} months ago`

    } else if(currentYear != pubYear){
        diference = currentYear - pubYear
        date.innerHTML = `${diference} years ago`
    }
   
    
    divImgNews.append(imgNews,date)
    divImgFont.append(spanImgFont,imgFont)
    div.append(title,content)
    link.append(divImgFont,div,divImgNews)
    container.append(link)
    
    return container
}


async function showAndHideLoader () {
    const newsList = await renderNews()
    const loader = document.querySelector('#loader-add-remove');
    if (newsList == []){
        loader.classList.add('loader');
    } else {
        loader.classList.remove('loader');
    }
}


showAndHideLoader()
renderNews()
openNavbar()