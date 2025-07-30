const mic = document.getElementById('mic');
mic.addEventListener('click', () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    document.getElementById('user-input').value = transcript;
    document.getElementById('send-btn').click();
  };
});
