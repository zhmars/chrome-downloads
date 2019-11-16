chrome.browserAction.onClicked.addListener(function (tab) {
  var chromeExtURL = 'chrome://downloads/'
  // getAllInWindow was deprecated since Chrome 33
  // chrome.tabs.getAllInWindow(null, function (tabList) {
  chrome.tabs.query({ currentWindow: true }, function (tabList) {
    for (var i = 0; i < tabList.length; i++) {
      if (tabList[i].url === chromeExtURL) {
        chrome.tabs.update(tabList[i].id, { selected: true })
        return
      }
    }
    chrome.tabs.create({ url: chromeExtURL, selected: true })
  })
})
