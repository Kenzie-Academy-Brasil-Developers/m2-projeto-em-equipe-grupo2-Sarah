import { getAllApprovedVaccines, getAllVaccines, getAllVaccinesI, getAllVaccinesII, getAllVaccinesIII, getAllVaccinesIV, getSpecifVaccine } from "./requests.js"

const listVaccinesPhaseAll = await getAllVaccines()
const listVaccinesPhaseI = await getAllVaccinesI()
const listVaccinesPhaseII = await getAllVaccinesII()
const listVaccinesPhaseIII = await getAllVaccinesIII()
const listVaccinesPhaseIV = await getAllVaccinesIV()
const listVaccinesApproveds = await getAllApprovedVaccines()



function createVaccineCards (element) {
    const li = document.createElement('li');
    
    const companyDiv = document.createElement('div');
    companyDiv.classList.add('vaccine-company__container');

    const company = document.createElement('h3');
    company.innerText = 'Company:';
    
    const companyName = document.createElement('p');
    companyName.innerText = element.developerResearcher;
    companyName.dataset.category = element.trimedCategory;
    companyName.dataset.name = element.trimedName;

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
    description.innerText = 'Description:';

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

function showMoreVaccineInformation () {
    const allVaccineTitle = document.querySelectorAll('.vaccine-company__container > p');
    const body = document.querySelector('body');

    allVaccineTitle.forEach(vaccine => {
        vaccine.addEventListener('click', async (e) => {
        let company = e.target.dataset.name;
        let category = e.target.dataset.category;

        let vaccineFound = await getSpecifVaccine(category, company);

        let modal = vaccineModal(vaccineFound[0]);

        body.append(modal);

        modal.showModal();

        closeModal();

        })
    })
}

function vaccineModal(element) {
    const modal = document.createElement("dialog");

    const closeButton = document.createElement('button');
    closeButton.classList.add('close__button');
    closeButton.innerText = 'X'

    const companyDiv = document.createElement('div');
    companyDiv.classList.add('vaccine-company__container');

    const company = document.createElement('h3');
    company.innerText = 'Company:';
    
    const companyName = document.createElement('p');
    companyName.innerText = element.developerResearcher;
    companyName.dataset.category = element.trimedCategory;
    companyName.dataset.name = element.trimedName;

    companyDiv.append(company, companyName);

    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('vaccine-category__container');

    const category = document.createElement('h3');
    category.innerText = 'Category:';

    const categoryName = document.createElement('p');
    categoryName.innerText = element.category;

    categoryDiv.append(category, categoryName);

    const stageDiv = document.createElement('div');
    stageDiv.classList.add('vaccine-stage__container');

    const stage = document.createElement('h3');
    stage.innerText = 'Stage:';

    const stageName = document.createElement('p');
    stageName.innerText = element.phase;

    stageDiv.append(stage, stageName);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('vaccine-description__container');

    const description = document.createElement('h3');
    description.innerText = 'Description:';

    const descriptionName = document.createElement('p');
    descriptionName.innerText = element.description;

    descriptionDiv.append(description, descriptionName);

    const nextStepsDiv = document.createElement('div');
    nextStepsDiv.classList.add('vaccine-nextSteps__container');

    const nextSteps = document.createElement('h3');
    nextSteps.innerText = 'Next Steps:';

    const nextStepsName = document.createElement('p');
    nextStepsName.innerText = element.nextSteps;

    nextStepsDiv.append(nextSteps, nextStepsName);

    modal.append(closeButton, companyDiv, categoryDiv, stageDiv, descriptionDiv, nextStepsDiv);

    return modal;
}

function closeModal () {
    const modal = document.querySelector('dialog');
    const closeButton = document.querySelector('.close__button');

    closeButton.addEventListener('click', () => {
        modal.remove()
    })
}

phaseButton()
phaseSelect()
showMoreVaccineInformation ()