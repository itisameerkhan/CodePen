const container = document.querySelector('.container');
const btn = document.querySelectorAll('.btn');

const imageList = ["https://images.unsplash.com/photo-1506200226649-c1926c43e716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
                   "https://images.unsplash.com/photo-1688498465616-66cf281e32d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
                   "https://images.unsplash.com/photo-1687911694244-1886feff4cdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                   "https://images.unsplash.com/photo-1608848941236-55f915f782d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"];

let index = 0;
btn.forEach(button => {
  button.addEventListener('click',()=>{
    if(button.classList.contains('btn-left')) {
      index--;
      if(index < 0) index = imageList.length - 1;
      container.style.background = `url(${imageList[index]})`;
    }
    else if(button.classList.contains('btn-right')) {
      index++;
      if(index >= imageList.length) index = 0;
      container.style.background = `url(${imageList[index]})`;
    }
  })
})

console.log(`url(${imageList[index]}) center/cover fixed`);