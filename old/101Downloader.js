var x = $x("//audio");
var y = [];

for (let i = 0; i < x.length; i++) {

	try {
		if (x[i] === null || x[i] === undefined) {
			continue;
		}
		let elem = getItem(x[i]);
		if (elem === null) {
			continue;
		}
		y.push(elem);
		console.log(elem);
	} catch (error) {

	}
	// console.log(`${url} ${par} -> ${link} \n ${txt}`)
}

function getItem(item) {
	if (!(item.children !== null && item.children !== undefined && item.children.length !== 0)) {
		return null;
	}
	let url = item.children[0].getAttribute('src');
	let par = item.parentElement.children[3].children[0];
	let link = par.children[1].getAttribute("href");
	let txt = par.textContent;

	/* var text = `${txt}`,
		blob = new Blob([text], {
			type: 'audio/mpeg'
		}),
		anchor = document.createElement('a');

	anchor.download = url;
	anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
	anchor.dataset.downloadurl = ['audio/mpeg', anchor.download, anchor.href].join(':');
	anchor.click(); */

	let downloadLink = document.createElement('a');
	downloadLink.href = url;
	downloadLink.download = txt + '.mp3';
	// downloadLink.download = url.split('/').pop();


	// downloadLink.click();

	return {
		'item': item,
		'downloadLink': downloadLink,

		'url': url,
		'par': par,
		'link': link,
		'txt': txt,

	}
}