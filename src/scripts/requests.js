const requestsHeader = {
    'X-RapidAPI-Key': 'dfbf9a3fdfmsh0e58794cb87a218p16186bjsn15d4aea76006',
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
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

export async function getAllVaccinesII(){
    const vaccines = await fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines-phase-ii`, {
        method: 'GET',
        headers: requestsHeader
    })

    const vaccinesJson = vaccines.json();

    return vaccinesJson
}

export async function getAllVaccinesIII(){
    const vaccines = await fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines-phase-iii`, {
        method: 'GET',
        headers: requestsHeader
    })

    const vaccinesJson = vaccines.json();

    return vaccinesJson
}

export async function getAllVaccinesIV(){
    const vaccines = await fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines-phase-iv`, {
        method: 'GET',
        headers: requestsHeader
    })

    const vaccinesJson = vaccines.json();

    return vaccinesJson
}

export async function getAllApprovedVaccines(){
    const vaccines = await fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-fda-approved-vaccines`, {
        method: 'GET',
        headers: requestsHeader
    })

    const vaccinesJson = vaccines.json();

    return vaccinesJson
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