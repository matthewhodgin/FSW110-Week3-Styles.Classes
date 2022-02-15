var h2List = document.createElement("ul");
for (var i = 0; i < 5; i++) {
var h2Element = document.createElement("h2");
h2Element.innerText = 'Hello Again, World';
h2List.append(h2Element);
h2Element.style.color = 'cornflowerblue';
h2Element.style.fontSize = '20px';
h2Element.style.fontWeight = 'lighter';
h2Element.style.fontFamily = 'sans-serif';
h2Element.classList.add('border');
}
document.body.append(h2List);
