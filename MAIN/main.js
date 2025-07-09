 function copyToClipboard() {
   const linkElement = document.getElementById('copyLink');
   const tempInput = document.createElement('input');
   tempInput.value = linkElement.href;
   document.body.appendChild(tempInput);
   tempInput.select();
   document.execCommand('copy');
   document.body.removeChild(tempInput);

   // Optionally, you can provide some visual feedback to the user
   alert('Link copied to clipboard!');
 }

 const dropdownBtns = document.querySelectorAll('.dropdown-btn');
 dropdownBtns.forEach(btn => {
   btn.addEventListener('click', () => {
     const dropdown = btn.querySelector('.dropdown');
     dropdown.style.display = dropdown.style.display === 'none' || dropdown.style.display === '' ? 'block' : 'none';
   });
 });
