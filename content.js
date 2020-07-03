async function checkClinicalTerm(searchTerm) {
    const clinicalQuery = 'https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=' + searchTerm;

    const request = new XMLHttpRequest();

    request.open("GET", clinicalQuery, false);

    await request.send();
    const resultData = request.response;
    console.log('resultData', resultData);
    const matches = +(resultData[1]);

    console.log('matches', matches);

    return !!matches
}

const query = new URLSearchParams(window.location.search);

const term = query.get('q').split(' ').join('+');

console.log('pulled google search query', term);

const found = checkClinicalTerm(term);

found.then(match => {
    console.log(match);

    if (match)
        chrome.runtime.sendMessage({ message: "clinical_term", term: term });
})