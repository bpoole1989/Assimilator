chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ searchTerm: '', results: {} });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'www.google.com' },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === 'clinical_term') {

            console.log('received term from content script', request.term)
            apiCalls(request.term);
        } else if (request.message === "open_page") {
            console.log('opening new tab', request.url)
            chrome.tabs.create({ "url": request.url });
        }
    }
);

async function apiCalls(term) {
    let itunesPodQuery = 'https://itunes.apple.com/search?term=' + term + '&media=podcast&attribute=keywordsTerm&limit=5';

    console.log('performing podcast API call', itunesPodQuery)
    let podRequest = new XMLHttpRequest();

    podRequest.open("GET", itunesPodQuery, false);

    await podRequest.send();
    let resultPods = JSON.parse(podRequest.response);
    console.log('resultData count', resultPods.resultCount);
    let pods = resultPods.results.map(pod => ({ name: pod.collectionName, url: pod.collectionViewUrl, feed: pod.feedUrl }));

    console.log(pods);

    chrome.storage.sync.set({ storeTerm: term }, function() {
        console.log('Term set on storage' + term);
    });

    chrome.storage.sync.set({ storePods: pods }, function() {
        console.log('Podcasts set on storage');
    });
}