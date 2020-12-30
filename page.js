'use strict';

chrome.runtime.sendMessage({
  "text": document.body.innerText,
  "title": document.title,
  "url": document.URL,
  "agent": navigator.userAgent,
  "time": new Date()
});

