import {newsRequest} from './requests.js'

async function renderNews(){
    const newsList = document.querySelector('#news__list')

    const news = await newsRequest()

    console.log(news)

    newsList.innerHTML = ''

    news.news.forEach(element => {
        const card = createCard(element) 

        newsList.append(card)
    })
}

function createCard(element){
    
    const container = document.createElement('li')
    const link = document.createElement('a')
    const imgFont = document.createElement('img')
    const div = document.createElement('div')
    const title = document.createElement('h2')
    const content = document.createElement('p')
    const imgNews = document.createElement('img')

    container.classList.add('item__list')
    link.classList.add('link__news')
    div.classList.add('div__news')
    imgFont.classList.add('images__font')
    imgNews.classList.add('images__news')
    
    
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

    
    div.append(title,content)
    link.append(imgFont,div,imgNews)
    container.append(link)
    
    return container
}
renderNews()