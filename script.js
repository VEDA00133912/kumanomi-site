function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
  document.getElementById(modalId).classList.add("show");
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  document.getElementById(modalId).classList.remove("show");
}

window.addEventListener('scroll', function() {
  var backToTop = document.getElementById('back-to-top');
  if (window.pageYOffset > 100) {
      backToTop.classList.add('show');
  } else {
      backToTop.classList.remove('show');
  }
});

document.getElementById('back-to-top').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});