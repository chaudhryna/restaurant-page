function contactPage() {
	const contentDiv = document.querySelector('#content');

	contentDiv.textContent = '';

	const contactH1 = document.createElement('h1');
	contactH1.textContent = `Questions? Contact Us.`;
	contentDiv.appendChild(contactH1);

	const contactForm = document.createElement('form');
	contactForm.classList.add('contactForm');
	contactForm.insertAdjacentHTML(
		'afterbegin',
		`<div class="form-row">
			<label for="email">EMAIL</label>
			<input type="email" name="email" id="email" />
		</div>
		<div class="form-row">
			<textarea rows="14" name="comment" id="comment" placeholder="Leave a question or comment."></textarea>
		</div>
		<button type="button" class="contactBtn">Submit</button>
		`,
	);
	contentDiv.appendChild(contactForm);
}

export default contactPage;
