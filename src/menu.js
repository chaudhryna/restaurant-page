import chai from './images/chai.png';
import matcha from './images/matcha.png';
import earlGrey from './images/earl-grey.png';
import mint from './images/mint.png';
import scones from './images/scones.png';
import russianCake from './images/russian-cake.png';
import petitFour from './images/petit-four.png';
import meringue from './images/meringue.png';

function menuPage() {
	const contentDiv = document.querySelector('#content');

	contentDiv.textContent = '';
	const menuH1 = document.createElement('h1');
	menuH1.textContent = `Our Menu`;
	contentDiv.appendChild(menuH1);

	contentDiv.insertAdjacentHTML(
		'beforeend',
		`<h2 class="menuTitle">Tea</h2>
		<div class="card">
			<img src="chai.png" class='teaImg' />
			<div class="menuCard">
				<h3 class="menuCardTitle">Chai</h3>
				<p class="menuCarddesc">A spiced black tea mixture brewed with milk and sweetened with sugar or honey.</p>
			</div>
		</div>
		<div class="card">
			<img src="matcha.png" class='teaImg' />
			<div class="menuCard">
				<h3 class="menuCardTitle">Matcha</h3>
				<p class="menuCarddesc">Matcha is a high-grade green tea ground into powdered form. The green tea powder is whisked into hot water, instead of steeped, to form a frothy drink.</p>
			</div>
		</div>
		<div class="card">
			<img src="earl-grey.png" class='teaImg' />
			<div class="menuCard">
				<h3 class="menuCardTitle">Earl Grey</h3>
				<p class="menuCarddesc">This quintessentially British tea is typically a black tea base flavored with oil from the rind of bergamot orange. </p>
			</div>
		</div>
		<div class="card">
			<img src="mint.png" class='teaImg' />
			<div class="menuCard">
				<h3 class="menuCardTitle">Maghrebi mint tea</h3>
				<p class="menuCarddesc">Maghrebi mint tea, also known as Moroccan mint tea and Algerian mint tea, is a North African green tea prepared with spearmint leaves and sugar.</p>
			</div>
		</div>
		<h2 class="menuTitle">Sweets</h2>
		<div class="card">
			<img src="scones.png" class='teaImg' />
			<div class="menuCard">
				<h3 class="menuCardTitle">Classic scones with jam & clotted cream</h3>
				<p class="menuCarddesc">Classic English Scones are light and airy with a slight crumble. A very British treat to which you can add different dried and fresh fruit. Usually served with afternoon tea and clotted cream.</p>
			</div>
		</div>
		<div class="card">
			<img src="russian-cake.png" class='teaImg' />
			<div class="menuCard">
				<h3 class="menuCardTitle">Russian Tea Cakes</h3>
				<p class="menuCarddesc">These Russian tea cakes are rolled in powdered sugar for a sweet finish and a snowball-like appearance.</p>
			</div>
		</div>
		<div class="card">
			<img src="petit-four.png" class='teaImg' />
			<div class="menuCard">
				<h3 class="menuCardTitle">Petit Four</h3>
				<p class="menuCarddesc">A petit four is a small bite-sized confectionery or savory appetizer. The name is French, petit four, meaning "small oven". </p>
			</div>
		</div>
		<div class="card">
			<img src="meringue.png" class='teaImg' />
			<div class="menuCard">
				<h3 class="menuCardTitle">Meringue</h3>
				<p class="menuCarddesc">Meringue is a type of dessert or candy, often associated with Swiss, French, Polish and Italian cuisines, traditionally made from whipped egg whites and sugar, and occasionally an acidic ingredient such as lemon, vinegar, or cream of tartar. </p>
			</div>
		</div>`,
	);
}

export default menuPage;
