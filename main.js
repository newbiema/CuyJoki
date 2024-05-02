const formJoki = document.getElementById('formJoki');

formJoki.addEventListener('submit', (event) => {
  event.preventDefault();
  const nama = document.getElementById('nama').value;
  const jasa = document.getElementById('jasa').value;
  const deadline = document.getElementById('deadline').value;
  const message = encodeURIComponent(`NAMA : ${nama}\nJENIS TUGAS : ${jasa}\nDEADLINE : ${deadline}`);
  const whatsappLink = `https://wa.me/6287892219615?text=${message} `;
  window.open(whatsappLink ,"_blank")
});