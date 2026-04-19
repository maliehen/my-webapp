// ENV is injected by the pipeline into env-config.js
const env = window.APP_ENV || 'local';

document.getElementById('env-label').textContent = `Environment: ${env}`;

function showMessage() {
  document.getElementById('message').textContent =
    `🎉 Running in ${env}!`;
}