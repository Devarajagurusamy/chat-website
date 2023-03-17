const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const messages = document.querySelector('.messages');

form.addEventListener('submit', e => {
	e.preventDefault();
	const message = input.value.trim();
	if (message !== '') {
		const div = document.createElement('div');
		div.classList.add('message', 'outgoing');
		div.innerHTML = message;
		messages.appendChild(div);
		input.value = '';
		messages.scrollTop = messages.scrollHeight;
	}
});
