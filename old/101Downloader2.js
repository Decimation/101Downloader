var x = $x("//span[contains(@id,'soundPlayer')]");
var y = [];

for (let i = 0; i < x.length; i++) {


	let elem = getItem(x[i]);

	y.push(elem);
	console.log(elem);

	// console.log(`${url} ${par} -> ${link} \n ${txt}`)
}

function getAll() {
	y.forEach(element => {
		element.downloadLink.click();
		console.log(`Downloaded ${element.txt}`);
	});
}

function getItem(item) {
	let link = item.getElementsByTagName('a')[0];
	let txt = link.textContent;
	let linkSrc = link.getAttribute('href');
	let audio = item.getElementsByTagName('audio')[0];
	let audioSrc = audio.children[0].getAttribute('src');

	let downloadLink = document.createElement('a');
	downloadLink.href = audioSrc;
	downloadLink.download = txt + '.mp3';
	// downloadLink.download = url.split('/').pop();


	// downloadLink.click();

	return {
		'item': item,
		'downloadLink': downloadLink,

		'linkSrc': linkSrc,
		'audioSrc': audioSrc,
		'txt': txt,

	}
}