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
  if (window.scrollY > 100) {
      backToTop.classList.add('show');
  } else {
      backToTop.classList.remove('show');
  }
});

document.getElementById('back-to-top').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('status-link').addEventListener('click', function(event) {
    event.preventDefault();
    const statusCard = document.getElementById('status-card');
    statusCard.classList.add('show');
});

document.getElementById('confirm-status').addEventListener('click', function() {
    window.open('https://kumanomi.instatus.com/', '_blank');
    document.getElementById('status-card').classList.remove('show');
});

document.getElementById('cancel-status').addEventListener('click', function() {
    document.getElementById('status-card').classList.remove('show');
});
