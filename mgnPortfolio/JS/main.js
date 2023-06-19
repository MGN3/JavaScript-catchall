
let headerElement = document.querySelector('#header1');
let footerElement = document.getElementsByTagName('footer');
console.log({ headerElement, footerElement });

console.log(footerElement);

/*In the previous code, the element got by the id "header1" is not properly accessed, 
probably because the js is loading before the DOM element.
 If I use this function it seems to work, since the element is only caught when DOM is loaded..
 */
document.addEventListener('DOMContentLoaded', function () {// possible arguments for an event listener: "function(x), (arg) =>, someFunction".
	const headerElement = document.getElementById('header1');
	const footerElement = document.getElementsByTagName('footer');
	console.log({ headerElement, footerElement });
});

/*THE PROBLEM SOLVED: The key was that my script linking this file was in the <head> of the HTML doc,
 instead of at the end, where it works perfectly, probaly because then the DOM has been loaded.
*/
/*HTML tags contain a huge series of predefined attributes.
You can: 
add new classes: headerElement.ClassList.add()
remove classes: headerElement.ClassList.remove()

*/
console.log(headerElement.getAttribute('nodeName'));

console.log(document.title);

/*Function that originally inserted a new img tag with an image, replacing the original img element.
After that, i only replaced the src attribute of the original img with the src of the new image.
Finally, I found that unnecesary because I could just use img.src to change the src attribute of the img element.*/
function imgChange() {
	let infojobs;
	let deleteP;
	//let imgGoku;

	infojobs = document.getElementById('infojobs');
	//HTML element no longer necessary
	mgGoku = document.createElement('img');//CREATING A NEW HTML ELEMENT
	//imgGoku.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');


	infojobs.addEventListener('mouseover', function () {//ALTERNATIVE: mouseover->muouseenter: secondary elements taken into account

		infojobs.src = './IMG/infojobs.jpg';
		//Modifying the img adding attributes like: style or class(bootstrap 5 class/attribute);
		infojobs.setAttribute('style', 'border-radius: 20%;');
		//Remove the content inside the tags.
		deleteP = document.getElementById('hideP');
		deleteP.setAttribute("style", 'visibility: hidden;')
		//infojobs.setAttribute('class', "rounded-5");

	});

	infojobs.addEventListener('mouseout', function () {//ALTERNATIVE: mouseout->mouseleave: secondary elements taken into account

		infojobs.src = "./IMG/infojobsGradoSuperior.jpg";
		deleteP.setAttribute("style", "visibility: visible;");
	});
}

imgChange();

/*Condicion para que se ejecute la función cambio imagen en relación a fechas. (Solo se ejecuta la función si se accede a la web a esa hora concreta).
const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();

if (hour === 13 && minute === 5) {
	cambioImagen();

};
*/
//////////ADDING A NEW CLASS ATTRIBUTE
/*Down bellow, I create a lsit of all the tags <p>.
It's called nodeList, similar to an array, but not the same.
An alternative object is HTMLCollection.

Each element of the variable inserted is an html object with all these many attributes

This is the nodeList:
0: p#jumbotronText.fs-4.TESTING
1: p.TESTING
2: p.TESTING
3: p.TESTING
4: p.TESTING
5: p.TESTING
6p#textofooter.col-md-4.mb-0.TESTING
7p.TESTING
length: 8


At the same time, each element of the nodeList contains other elements and lists of elements.
*/

let test = document.querySelectorAll('p');
console.log(test);
//The next operation adds a new class into the list of existing classes.
//This could be useful to add the same classes to all the elements in a nodeList, appliying bootstrap premade classes. 
test.forEach(element => {
	element.classList.add('TESTING');
});



