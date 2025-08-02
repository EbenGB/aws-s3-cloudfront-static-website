// Simple client-side behavior for the AWS static website demo
(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const btn = document.getElementById('helloBtn');
  const out = document.getElementById('output');

  function log(msg) {
    if (out) out.textContent = msg;
    // Also log to console for verification
    console.log(msg);
  }

  if (btn) {
    btn.addEventListener('click', function () {
      log('Hello from script.js! This site is ready for S3 + CloudFront deployment.');
    });
  } else {
    log('script.js loaded.');
  }
})();
