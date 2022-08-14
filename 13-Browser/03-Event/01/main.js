const button = document.querySelector('button');
button.addEventListener('click', () => alert('1'));  // (1) ทำงานเมื่อกด click ปุ่ม
button.removeEventListener('click', () => alert('1')); // (2)
button.onclick = () => alert(2); // (3) ทำงานหลังจากเรียก addEventListener alert('1') เมื่อกด click ปุ่ม
