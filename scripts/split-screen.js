

function reddenPage(pageUrl, linkUrl) {
    document.write('<html><head></head><frameset cols=\'50%25,*\'><frame src=' + pageUrl + '><frame src=' + linkUrl + '></frameset ></html>')
    // document.body.style.backgroundColor = 'red';
}