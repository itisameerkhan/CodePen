const toastBox = document.getElementById('toast-box');
const successMessage = '<i class="fa-solid fa-circle-check"></i> sucessfully submitted';
const errorMessage = '<i class="fa-solid fa-circle-xmark"></i> please fix the error';
const invalidMessage = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

function showToast(message)
{
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = message;
  toastBox.appendChild(toast)
  
  if(message.includes('error')) {
    toast.classList.add('error')
  }
  if(message.includes('Invalid')) {
    toast.classList.add('invalid')
  }
  
  setTimeout(() => {
    toast.remove()
  },6000)
}
