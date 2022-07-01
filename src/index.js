import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Translations
const flagsItem = document.getElementById('flags'),
	textsToChange = document.querySelectorAll('[data-section]');


	const changeLanguage = async (language) => {
		const requestJson = await fetch(`./translations/${language}.json`);
		const texts = await requestJson.json();

		// for (let textToChange of textsToChange) {
		textsToChange.forEach(textToChange => {

			const section = textToChange.dataset.section,
			value = textToChange.dataset.value;

			if (textToChange.classList.contains('to-sibling')) {
				const sibling = textToChange.nextElementSibling,
				progressBar = sibling.children[0];
				progressBar.innerHTML = texts[section][value];
			} else {
				textToChange.innerHTML = texts[section][value];
			}

		})

}

flagsItem.addEventListener("click", (e) => {
	changeLanguage(e.target.parentElement.dataset.language);
})

// --------

// Menu language active
const flags = document.querySelectorAll('.menu .menu__flags .menu__flags--wrapper'),
  flag1 = flags[0],
	flag2 = flags[1];

flag1.addEventListener('click', () => {
	if (!flag1.classList.contains('js-active')) {
		flag1.classList.add('js-active');
	}
	if (flag2.classList.contains('js-active')) {
		flag2.classList.remove('js-active')
	}
});

flag2.addEventListener('click', () => {
	if (!flag2.classList.contains('js-active')) {
		flag2.classList.add('js-active');
	}
	if (flag1.classList.contains('js-active')) {
		flag1.classList.remove('js-active')
	}
});

// --------

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
