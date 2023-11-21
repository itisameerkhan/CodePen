console.clear();

const accordionButton = document.getElementsByClassName('accordion');

console.log(accordionButton.length);

for(let i=0;i<accordionButton.length;i++)
{
  accordionButton[i].addEventListener('click', ()=> {
    accordionButton[i].classList.toggle('active');
    let panelElement = accordionButton[i].nextElementSibling;
    if(panelElement.style.maxHeight) {
      panelElement.style.maxHeight = null;
    }
    else {
      panelElement.style.maxHeight = panelElement.scrollHeight + "px";
    }
  });
}