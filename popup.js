function listTerm(term) {
    const termLine = document.getElementById('term');
    termLine.innerHTML = `We found some resources related to your medical search term: "${term}"`;
}

function listPods(pods) {
    const podList = document.getElementById('podcasts');

    pods.forEach(pod => {
        let item = document.createElement('li');

        let img = document.createElement('img');

        img.src = 'img/Feed-icon.svg.png';

        let podName = document.createElement('p');

        podName.innerHTML = pod.name;

        item.appendChild(img);
        item.appendChild(podName);

        item.addEventListener('click', () => {
            if (pod.url)
                chrome.runtime.sendMessage({ "message": "open_page", "url": pod.url });
        })

        podList.appendChild(item);
    })

}


function listSubs() {
    const subList = document.getElementById('subreddits');

    for (let i = 1; i < 6; i++) {
        let item = document.createElement('li');

        let img = document.createElement('img');

        img.src = 'img/reddit.png';

        let subName = document.createElement('p');

        subName.innerHTML = '/r/breastcancer';

        item.appendChild(img);
        item.appendChild(subName);

        item.addEventListener('click', () => {
            chrome.runtime.sendMessage({ "message": "open_page", "url": 'https://www.reddit.com/r/breastcancer/' });
        })

        subList.appendChild(item);
    }

}

function listTwitter() {
    const twitList = document.getElementById('twitters');

    for (let i = 1; i < 6; i++) {
        let item = document.createElement('li');

        let img = document.createElement('img');

        img.src = 'img/twitter.png';

        let twitterName = document.createElement('p');

        twitterName.innerHTML = '@BCRFcure';

        item.appendChild(img);
        item.appendChild(twitterName);

        item.addEventListener('click', () => {
            chrome.runtime.sendMessage({ "message": "open_page", "url": 'https://twitter.com/BCRFcure' });
        })

        twitList.appendChild(item);
    }

}

chrome.storage.sync.get(['storeTerm'], function(result) {
    let popTerm = result.storeTerm.split('+').join(' ');
    console.log('pulled term from storage to popup', popTerm);
    listTerm(popTerm);
});

chrome.storage.sync.get(['storePods'], function(result) {
    let popPods = result.storePods;
    console.log('pulled pods from storage to popup', popPods);
    listPods(popPods);
    listSubs();
    listTwitter();
});