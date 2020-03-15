"use strict";

let searchMaduraOnline = function(word) {
  var query = word.selectionText;
  chrome.tabs.create({
    url: "https://www.maduraonline.com/?find=" + query
  });
};

chrome.contextMenus.create({
  title: "Search in MaduraOnline",
  contexts: ["selection"],
  onclick: searchMaduraOnline
});
