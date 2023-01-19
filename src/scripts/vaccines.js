import { getAllApprovedVaccines, getAllVaccines, getAllVaccinesI, getAllVaccinesII, getAllVaccinesIII, getAllVaccinesIV, getSpecifVaccine } from "./requests.js"

import { openNavbar } from './navbar.js'

const listVaccinesPhaseAll = await getAllVaccines()
const listVaccinesPhaseI = await getAllVaccinesI()
const listVaccinesPhaseII = await getAllVaccinesII()
const listVaccinesPhaseIII = await getAllVaccinesIII()
const listVaccinesPhaseIV = await getAllVaccinesIV()
const listVaccinesApproveds = await getAllApprovedVaccines()


function createVaccineCards (element) {
    const li = document.createElement('li');

    const tagLink = document.createElement('a');
    tagLink.classList.add('taglink__vaccine')
    tagLink.dataset.category = element.trimedCategory;
    tagLink.dataset.name = element.trimedName;
    
    const companyDiv = document.createElement('div');
    companyDiv.classList.add('vaccine-company__container');
    companyDiv.dataset.category = element.trimedCategory;
    companyDiv.dataset.name = element.trimedName;

    const company = document.createElement('h3');
    company.innerText = 'Company:';
    company.dataset.category = element.trimedCategory;
    company.dataset.name = element.trimedName;
    
    const companyName = document.createElement('p');
    companyName.innerText = element.developerResearcher;
    companyName.dataset.category = element.trimedCategory;
    companyName.dataset.name = element.trimedName;
    
    companyDiv.append(company, companyName);

    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('vaccine-category__container');
    categoryDiv.dataset.category = element.trimedCategory;
    categoryDiv.dataset.name = element.trimedName;

    const category = document.createElement('h3');
    category.innerText = 'Category:';
    category.dataset.category = element.trimedCategory;
    category.dataset.name = element.trimedName;

    const categoryName = document.createElement('p');
    categoryName.innerText = element.category;
    categoryName.dataset.category = element.trimedCategory;
    categoryName.dataset.name = element.trimedName;

    categoryDiv.append(category, categoryName);

    const phaseDiv = document.createElement('div');
    phaseDiv.classList.add('vaccine-phase__container');
    phaseDiv.dataset.category = element.trimedCategory;
    phaseDiv.dataset.name = element.trimedName;

    const phase = document.createElement('h3');
    phase.innerText = 'Phase:';
    phase.dataset.category = element.trimedCategory;
    phase.dataset.name = element.trimedName;

    const phaseName = document.createElement('p');
    phaseName.innerText = element.phase;
    phaseName.dataset.category = element.trimedCategory;
    phaseName.dataset.name = element.trimedName;

    phaseDiv.append(phase, phaseName);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('vaccine-description__container');
    descriptionDiv.dataset.category = element.trimedCategory;
    descriptionDiv.dataset.name = element.trimedName;

    const description = document.createElement('h3');
    description.innerText = 'Description:';
    description.dataset.category = element.trimedCategory;
    description.dataset.name = element.trimedName;

    const descriptionName = document.createElement('p');
    descriptionName.innerText = element.description;
    descriptionName.dataset.category = element.trimedCategory;
    descriptionName.dataset.name = element.trimedName;

    descriptionDiv.append(description, descriptionName);

    const FDAApprovedDiv = document.createElement('div');
    FDAApprovedDiv.classList.add('vaccine-FDAApproved__container');
    FDAApprovedDiv.dataset.category = element.trimedCategory;
    FDAApprovedDiv.dataset.name = element.trimedName;

    const FDAApproved = document.createElement('h3');
    FDAApproved.innerText = 'FDA aproved:';
    FDAApproved.dataset.category = element.trimedCategory;
    FDAApproved.dataset.name = element.trimedName;

    const FDAApprovedName = document.createElement('p');
    FDAApprovedName.dataset.category = element.trimedCategory;
    FDAApprovedName.dataset.name = element.trimedName;
    if (element.phase === 'Authorized') {
        FDAApprovedName.innerText = 'Authorized';
    } else {
       FDAApprovedName.innerText = 'Not approved yet'; 
    }
    
    FDAApprovedDiv.append(FDAApproved, FDAApprovedName);

    tagLink.append(companyDiv, categoryDiv, phaseDiv, descriptionDiv, FDAApprovedDiv);

    li.append(tagLink);

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
            renderAllVaccineCards(listVaccinesPhaseAll);
            showMoreVaccineInformation ();;
        }else if(selectTag.value == "Phase-I"){
            renderAllVaccineCards(listVaccinesPhaseI);
            showMoreVaccineInformation ();
        }else if(selectTag.value == "Phase-II"){
            renderAllVaccineCards(listVaccinesPhaseII);
            showMoreVaccineInformation ();
        }else if(selectTag.value == "Phase-III"){
            renderAllVaccineCards(listVaccinesPhaseIII);
            showMoreVaccineInformation ();
        }else if(selectTag.value == "Phase-IV"){
            renderAllVaccineCards(listVaccinesPhaseIV);
            showMoreVaccineInformation ();
        }else if(selectTag.value == "FDA-Aproved"){
            renderAllVaccineCards(listVaccinesApproveds);
            showMoreVaccineInformation ();
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
        showMoreVaccineInformation ();
    })
    buttonPhaseI.addEventListener("click", () =>{
        showCase.innerHTML = ""
        renderAllVaccineCards(listVaccinesPhaseI)
        showMoreVaccineInformation ();
    })
    buttonPhaseII.addEventListener("click", () =>{
        showCase.innerHTML = ""
        renderAllVaccineCards(listVaccinesPhaseII)
        showMoreVaccineInformation ();
    })
    buttonPhaseIII.addEventListener("click", () =>{
        showCase.innerHTML = ""
        renderAllVaccineCards(listVaccinesPhaseIII)
        showMoreVaccineInformation ();
    })
    buttonPhaseIV.addEventListener("click", () =>{
        showCase.innerHTML = ""
        renderAllVaccineCards(listVaccinesPhaseIV)
        showMoreVaccineInformation ();
    })
    buttonAproved.addEventListener("click", () =>{
        showCase.innerHTML = ""
        renderAllVaccineCards(listVaccinesApproveds)
        showMoreVaccineInformation ();
    })
}

function showMoreVaccineInformation () {
    const allVaccineCards = document.querySelectorAll('.taglink__vaccine');
    const body = document.querySelector('body');

    allVaccineCards.forEach(vaccine => {
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
    modal.classList.add('vaccine__modal');

    const vaccineImg = document.createElement('img');
    if (element.category === "Non-replicating viral vector") {
        vaccineImg.src = "../assets/non-replicate-viral.jpg";
    } else if (element.category === 'Protein subunit') {
        vaccineImg.src = "../assets/protein-subunit.jpg";
    } else if (element.category === 'RNA-based vaccine') {
        vaccineImg.src = "../assets/Rna-based.jpg";
    } else if (element.category === 'Replicating viral vector') {
        vaccineImg.src = "../assets/replicating-viral.jpg";
    } else if (element.category === 'DNA-based') {
        vaccineImg.src = "../assets/Dna-based.jpg";
    } else if (element.category === 'Inactivated virus') {
        vaccineImg.src = "../assets/inactivated-virus.jpg";
    } else if (element.category === 'Live attenuated virus') {
        vaccineImg.src = "../assets/live-attenuated-virus.jpg";
    } else if (element.category === 'Virus-like particle') {
        vaccineImg.src = "../assets/virus-like-particle.jpg";
    } else {
        vaccineImg.src = "../assets/replicating-bacterial.jpg";
    }

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

    modal.append(closeButton, vaccineImg, companyDiv, categoryDiv, stageDiv, descriptionDiv, nextStepsDiv);

    return modal;
}

function closeModal () {
    const modal = document.querySelector('dialog');
    const closeButton = document.querySelector('.close__button');

    closeButton.addEventListener('click', () => {
        modal.remove()
    })
}


function showAndHideLoader () {
    const vaccinesList = document.querySelector('#vaccines__list');
    const loader = document.querySelector('.loader');

    if (vaccinesList.childNodes.length > 0) {
        loader.classList.add('hidden');
    } else {
        loader.classList.remove('hidden');
    }
}

   
phaseButton()
phaseSelect()
showMoreVaccineInformation ()
openNavbar();
showAndHideLoader ();