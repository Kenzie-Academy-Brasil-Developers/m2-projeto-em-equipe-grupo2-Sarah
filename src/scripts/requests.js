const requestsHeader = {
    'X-RapidAPI-Key': 'dfbf9a3fdfmsh0e58794cb87a218p16186bjsn15d4aea76006',
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
}

//Julia

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