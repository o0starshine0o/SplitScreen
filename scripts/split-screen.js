window.onload = function () {
    const items = document.getElementsByTagName("a");
    for (let item of items) {
        const href = item.getAttributeNode("href");
        if (href == null) {
            continue
        }

        item.setAttribute('target', 'detailFrame')
    }

}