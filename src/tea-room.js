import teaHouseHero from './images/tea-house.png';

function teaRoomPage() {
	const contentDiv = document.querySelector('#content');
    contentDiv.textContent = '';
	const mainH1 = document.createElement('h1');
	mainH1.textContent = `Welcome to Our Tea House!`;
	contentDiv.appendChild(mainH1);

	contentDiv.insertAdjacentHTML(
		'beforeend',
		`<div class="wide-card">
			<img src="tea-house.png" class='heroImg'/>
			<div class="legend">
				<p>Come in and savor the unique flavor of our hand-selected teas and enjoy afternoon high tea, lunch or dinner.</p>
				<br />
				<p>The Tea House is also available for private parties and for tours of our amazing tea farm!</p>
			</div>
		</div>`,
	);
}
export default teaRoomPage;
