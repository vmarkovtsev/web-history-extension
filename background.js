'use strict';

chrome.storage.sync.get(["apiKey", "projectId"], (items) => {
  firebase.initializeApp(items);
});

chrome.instanceID.getID((instanceID) => {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const time = new Date(message.time);
    message.origin = instanceID;
    firebase
      .firestore()
      .collection(`${time.getUTCFullYear()}/${time.getUTCMonth() + 1}/${time.getUTCDate()}/${time.getUTCHours()}/${time.getUTCMinutes()}`)
      .add(message);
    return true
  });
});
