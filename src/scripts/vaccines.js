
import { getAllApprovedVaccines, getAllVaccines, getAllVaccinesI, getAllVaccinesII, getAllVaccinesIII, getAllVaccinesIV } from "./requests.js"

const listVaccinesPhaseAll = await getAllVaccines()
const listVaccinesPhaseI = await getAllVaccinesI()
const listVaccinesPhaseII = await getAllVaccinesII()
const listVaccinesPhaseIII = await getAllVaccinesIII()
const listVaccinesPhaseIV = await getAllVaccinesIV()
const listVaccinesApproveds = await getAllApprovedVaccines()



//Julia

function createVaccineCards (element) {
    const li = document.createElement('li');

    const imageCard = document.createElement('img');

    const companyDiv = document.createElement('div');
    companyDiv.classList.add('vaccine-company__container');

    const company = document.createElement('h3');
    company.innerText = 'Company:';

    const companyName = document.createElement('p');
    companyName.innerText = element.developerResearcher;

    companyDiv.append(company, companyName);

    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('vaccine-category__container');

    const category = document.createElement('h3');
    category.innerText = 'Category:';

    const categoryName = document.createElement('p');
    categoryName.innerText = element.category;

    categoryDiv.append(category, categoryName);

    const phaseDiv = document.createElement('div');
    phaseDiv.classList.add('vaccine-phase__container');

    const phase = document.createElement('h3');
    phase.innerText = 'Phase:';

    const phaseName = document.createElement('p');
    phaseName.innerText = element.phase;

    phaseDiv.append(phase, phaseName);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('vaccine-description__container');

    const description = document.createElement('h3');
    description.innerText = 'description:';

    const descriptionName = document.createElement('p');
    descriptionName.innerText = element.description;

    descriptionDiv.append(description, descriptionName);

    const FDAApprovedDiv = document.createElement('div');
    FDAApprovedDiv.classList.add('vaccine-nextSteps__container');

    const FDAApproved = document.createElement('h3');
    FDAApproved.innerText = 'FDA aproved:';

    const FDAApprovedName = document.createElement('p');
    if (element.FDAApproved === 'undefined') {
        FDAApprovedName.innerText = 'not approved yet';
    } else {
       FDAApprovedName.innerText = element.FDAApproved; 
    }
    
    FDAApprovedDiv.append(FDAApproved, FDAApprovedName);

    li.append(companyDiv, categoryDiv, phaseDiv, descriptionDiv, FDAApprovedDiv);

    return li;
}

function renderAllVaccineCards (array) {
    const vaccinesList = document.querySelector('#vaccines__list');

    array.forEach(vaccine => {
        let vaccineCard = createVaccineCards(vaccine);

        vaccinesList.append(vaccineCard);
    })
}

function phaseSelect(){
    const selectTag = document.querySelector("select")

    const showCase = document.querySelector("#vaccines__list")
    renderAllVaccineCards(listVaccinesPhaseAll)
    
    selectTag.addEventListener("change", () => {
        showCase.innerHTML = ""
        if(selectTag.value == "All"){
            renderAllVaccineCards(listVaccinesPhaseAll)
        }else if(selectTag.value == "Phase-I"){
            renderAllVaccineCards(listVaccinesPhaseI)
        }else if(selectTag.value == "Phase-II"){
            renderAllVaccineCards(listVaccinesPhaseII)
        }else if(selectTag.value == "Phase-III"){
            renderAllVaccineCards(listVaccinesPhaseIII)
        }else if(selectTag.value == "Phase-IV"){
            renderAllVaccineCards(listVaccinesPhaseIV)
        }else if(selectTag.value == "FDA-Aproved"){
            renderAllVaccineCards(listVaccinesApproveds)
        }
    })
}

phaseSelect()

function phaseButton(){
    let buttonAllVaccine = document.querySelector(".all-vaccine__button")
    let buttonPhaseI = document.querySelector(".phaseI-vaccine_button")
    let buttonPhaseII = document.querySelector(".phaseII-vaccine_button")
    let buttonPhaseIII = document.querySelector(".phaseIII-vaccine_button")
    let buttonPhaseIV = document.querySelector(".phaseIV-vaccine_button")
    let buttonAproved = document.querySelector(".aproved-vaccine_button")

    const showCase = document.querySelector("#vaccines__list")
    renderAllVaccineCards(listVaccinesPhaseAll)

    buttonAllVaccine.addEventListener("click", () =>{
        showCase.innerHTML = ""
        renderAllVaccineCards(listVaccinesPhaseAll)
    })
    buttonPhaseI.addEventListener("click", () =>{
        showCase.innerHTML = ""
        renderAllVaccineCards(listVaccinesPhaseI)
    })
    buttonPhaseII.addEventListener("click", () =>{
        showCase.innerHTML = ""
        renderAllVaccineCards(listVaccinesPhaseII)
    })
    buttonPhaseIII.addEventListener("click", () =>{
        showCase.innerHTML = ""
        renderAllVaccineCards(listVaccinesPhaseIII)
    })
    buttonPhaseIV.addEventListener("click", () =>{
        showCase.innerHTML = ""
        renderAllVaccineCards(listVaccinesPhaseIV)
    })
    buttonAproved.addEventListener("click", () =>{
        showCase.innerHTML = ""
        renderAllVaccineCards(listVaccinesApproveds)
    })
}
phaseButton()
