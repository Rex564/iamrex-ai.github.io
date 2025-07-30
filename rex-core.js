document.getElementById('send-btn').addEventListener('click', processCommand);

function processCommand() {
  const input = document.getElementById('user-input').value.trim().toLowerCase();
  const output = document.getElementById('response');

  if (!input) return;

  if (input.includes('boss takeover')) {
    output.innerText = '🛡️ Taking Over Manish OS...';
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = 'rex-maxx.apk'; // your Rex APK
      link.download = 'manishOSX-core.apk';
      link.click();
      output.innerText = '✅ Operation complete. APK delivered.';
      document.body.innerHTML = ''; // Hide site after activation
    }, 1000);
  } else {
    output.innerText = `🤖 Rex: Received → "${input}"`;
  }
}
