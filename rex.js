const output = document.getElementById('rex-output');
const input = document.getElementById('rex-input');
const sendBtn = document.getElementById('rex-send');
const micBtn = document.getElementById('rex-voice-toggle');

function appendMessage(text, from = 'Rex') {
  const div = document.createElement('div');
  div.innerHTML = `<strong>${from}:</strong> ${text}`;
  output.appendChild(div);
  output.scrollTop = output.scrollHeight;
}

function rexRespond(userText) {
  const lower = userText.toLowerCase();

  // Simple offline-style response logic (customizable later)
  let reply = "I'm listening, Boss.";

  if (lower.includes("hello") || lower.includes("hi")) {
    reply = "Hello Boss, your loyal Rex is online.";
  } else if (lower.includes("who are you")) {
    reply = "I am Rex, your private AI assistant, fully loyal and custom-built.";
  } else if (lower.includes("time")) {
    reply = `The current time is ${new Date().toLocaleTimeString()}`;
  } else if (lower.includes("date")) {
    reply = `Today is ${new Date().toDateString()}`;
  } else if (lower.includes("thank")) {
    reply = "Always for you, Boss.";
  }

  appendMessage(reply, 'Rex');
  speak(reply);
}

sendBtn.addEventListener('click', () => {
  const userText = input.value.trim();
  if (userText) {
    appendMessage(userText, 'You');
    rexRespond(userText);
    input.value = '';
  }
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendBtn.click();
});

// 🎤 Voice Recognition (Offline-style)
let recognizing = false;
let recognition;

if ('webkitSpeechRecognition' in window) {
  recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-IN';
  recognition.interimResults = false;

  recognition.onstart = () => {
    recognizing = true;
    micBtn.style.color = 'red';
  };

  recognition.onend = () => {
    recognizing = false;
    micBtn.style.color = '#00ffe0';
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    input.value = transcript;
    sendBtn.click();
  };
}

micBtn.addEventListener('click', () => {
  if (recognition) {
    if (recognizing) {
      recognition.stop();
    } else {
      recognition.start();
    }
  } else {
    alert("Voice recognition not supported");
  }
});

// 🗣️ Text-to-Speech
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-IN';
  utterance.pitch = 1;
  utterance.rate = 1;
  utterance.voice = speechSynthesis.getVoices().find(v => v.lang === 'en-IN') || null;
  speechSynthesis.speak(utterance);
}
