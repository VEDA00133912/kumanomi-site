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
