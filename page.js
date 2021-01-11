'use strict';

const maxTextLength = 50000;
const text = document.body.innerText;
chrome.runtime.sendMessage({
  "text": text.substr(0, maxTextLength),
  "truncated": text.length > maxTextLength,
  "title": document.title,
  "url": document.URL,
  "agent": navigator.userAgent
});

