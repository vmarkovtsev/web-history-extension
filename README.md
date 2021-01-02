# Log Web History to Firebase

Chrome extension to record all your browsing history to Google's Firestore.
You can setup a personal Firebase project with generous free tier limits.
Those limits should be enough to store your data at no cost during several years;
Google is going to charge you as low as $0.18 per month (according to the pricing as of January 2021) afterward;
it is possible to move the old records to some cloud storage in JSON format and avoid that.

### Installation

Load unpacked from this repository or [install from Chrome Web Store](https://chrome.google.com/webstore/detail/log-web-history-to-fireba/peeibbgjeaolekgoojkeefogkllmfgjf).

### Configuration

You need to obtain two secrets: `apiKey` - Firebase API token, and `projectId` - Firebase project identifier. Once you know them, click the extension's icon and fill them in the corresponding textboxes. They will be automatically saved to your Google profile and synced everywhere.

See [the guide on how to setup Firebase from scratch](FIREBASE.md). Firetore rules must allow writing without user authentication, here is sample code:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow write;
    }
  }
}
```

To check whether everything works and to access the data, open some web page, then go to [console.firebase.google.com](https://console.firebase.google.com/) and further to "Cloud Firestore".

### Operation

The extension writes to Firestore after each page fully loads in Chrome. It puts each document under 6 levels of nesting: `year/month/day/hour/minute/unique ID`, where the first 5 are the time when the page opened. The format of the document is:

* `time` - exact UTC timestamp of when the page opened.
* `title` - title of the page.
* `text` - entire text content of the page. Its size is normally within tens of kilobytes.
* `url` - URL of the page.
* `origin` - unique ID of the browser. It should change device-wise.
* `agent` - user agent of the browser.

### Contributions

Please contribute!

### License

MIT.

