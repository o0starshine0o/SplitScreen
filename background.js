function reddenPage(pageUrl, linkUrl) {
    document.write(
        '<html>' +
        '<head></head>' +
        '<frameset cols=\'50%,*\' frameborder=\'1\'>' +
        '<frame name=\'mainFrame\' src=' + pageUrl + '>' +
        '<frame name=\'detailFrame\' src=' + linkUrl + '>' +
        '</frameset >' +
        '</html>'
    )
}

chrome.contextMenus.create({
    type: 'normal',
    title: `SplitScreen`,
    id: 'SplitScreen',
    contexts: ['link']
})
chrome.contextMenus.onClicked.addListener((info, tab) => {
    /**
     * editable:false
     * frameId:0
     * linkUrl:"https://zhuanlan.zhihu.com/p/600585942"
     * menuItemId:"google"
     * pageUrl:"https://www.zhihu.com/people/flood-sung"
     * selectionText:"展望2023-2028：AGI过去现在及未来发展"
     */
    chrome.scripting.executeScript({
        target: {tabId: tab.id, allFrames: true},
        function: reddenPage,
        args: [info.pageUrl, info.linkUrl]
    });
})