// ==UserScript==
// @name        101Downloader
// @namespace   Deci
// @match       https://www.101soundboards.com/*
// @version     1.0
// @author      Decimation
// @description 8/13/2024, 11:37:18 PM
// @grant GM_addElement
// @run-at document-end
// @require https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2
// ==/UserScript==


function getItem(element) {
	let link = element.getElementsByTagName('a')[0];
	let txt = link.textContent;
	let linkSrc = link.getAttribute('href');
	let audio = element.getElementsByTagName('audio')[0];
	let audioSrc = audio.children[0].getAttribute('src');


	return {
		'elem': element,
		'linkSrc': linkSrc,
		'audioSrc': audioSrc,
		'txt': txt,
		'link': link
	}
}

function addButton(element) {
	GM_addElement(element.elem.parentElement, 'a', {
		'class': 'fas fa-fw fa-download mr-2',
		'text': 'Download',
		'src': element.audioSrc,
		'href': element.linkSrc,
		'download': element.txt + '.mp3',
		'style': 'display: inline; margin-left: 10px;',
		// 'textContent': "Download...",
	});
}

const disconnect = VM.observe(document.body, () => {
	const soundElements = document.querySelectorAll("span[id*='soundPlayer']");
	if (soundElements) {
		let soundItems = [];

		for (let i = 0; i < soundElements.length; i++) {
			let elem = getItem(soundElements[i]);

			soundItems.push(elem);
			addButton(elem);
			// console.log(`${url} ${par} -> ${link} \n ${txt}`)
		}
		return true;
	}

});