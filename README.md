# Assimilator
*A Chrome Browser Extension that Curates Educational and Support Resources Based on Clinical Search Terms*

Welcome to the result of my very humble, first ever solo hackathon, completed in 3.5 days during my stint at Fullstack Academy!

This idea was born of a marriage between my compulsion towards constant learning and my training in healthcare. I believe that every thinking individual owes it to themselves and the world to educate themselves on what is most important to them and those around them. I'm also deeply familiar with how hard it is to get reliable information about a new medical diagnosis. And I've learned that some of the most helpful material is not given by an in-person expert, but rather stumbled upon while madly searching the web, where you can always find people who have gone through what you're experiencing and can give advice and perspective.   

#
When this extension is running in Chrome, it will check your Google searches against the NIH's Clinical Table Search Service. If your query matches clinical condition search terms, Assimilator will instantly populate in the background a list of podcasts, Reddit forums (aka "subreddits"), and Twitter accounts that are relevant to your search. Links to these resources will be directly available in the extension toolbar pop-up.

#
At this moment, only the podcast list populates, and the Twitter accounts and subreddit links are hardcoded defaults. At the time of the hackathon deadline I was waiting for access to API keys to round out these features. So the code is there, it's just not capable of making the XML HTTP requests necessary to grab the resources. I plan to put the finishing touches on this, improve its styling, and perhaps even get it into the Chrome web store shortly.

What the current version looks like:
![alt text](https://github.com/bpoole1989/Assimilator/blob/master/Assimilator.png?raw=true)

# APIs utilized (so far):
[NIH CLinical Table Search Service](https://clinicaltables.nlm.nih.gov/)

[iTunes store API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)

[ListenNotes API](https://www.listennotes.com/api/)

[Reddit API](https://www.reddit.com/dev/api)

[Twitter API](https://developer.twitter.com/en/docs/api-reference-index)

Copyright (c) 2020 Barish Poole
