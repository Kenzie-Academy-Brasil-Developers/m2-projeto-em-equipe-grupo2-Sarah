import {newsRequest} from './requests.js'

async function renderNews(){
    const newsList = document.querySelector('#news__list')

    const array = await newsRequest()
    console.log(array)

    newsList.innerHTML = ''

    news.forEach(element => {
        const card = createCard(element)

        newsList.append(card)
    })
}


function createCard(element){
    
    const container = document.createElement('li')
    const imgFont = document.createElement('img')
    const div = document.createElement('div')
    const title = document.createElement('h2')
    const content = document.createElement('p')
    const imgNews = document.createElement('img')
    
    imgFont.src = element.urlToImage
    imgFont.alt = "Imagem da fonte"
    
    title.innerText = element.title
    content.innerText = element.content
    
    imgNews.src = element.imageFileName
    imgNews.alt = "Imagem da notícia"

    
    div.append(title,content)
    container.append(imgFont,div,imgNews)
    
    return container
}
renderNews()