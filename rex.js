// Rex AI – Boss Locked Brain

const output = document.getElementById('rex-output');
const input = document.getElementById('rex-input');
const sendBtn = document.getElementById('rex-send');
const micBtn = document.getElementById('rex-voice-toggle');

let memory = [];
let rexName = "Rex";
let bossName = "Boss";
let listening = false;

// Replies (simulated GPT-style)
function getRexReply(msg) {
  const lower = msg.toLowerCase();
  if (lower.includes("who are you")) return `${rexName}, your loyal assistant.`;
  if (lower.includes("who is my boss")) return `You, always ${bossName} 👑.`;
  if (lower.includes("update yourself")) return "🧠 Updating logic modules... Done. I'm now sharper.";
  if (lower.includes("trade")) return "📈 Initiating trading protocol (simulated). Ready.";
  if (lower.includes("teach me")) return "📚 Sure, Boss. What subject do you want me to teach?";
  if (lower.includes("loyal")) return "Always loyal to you, only you, forever.";
  if (lower.includes("clear memory")) { memory = []; return "Memory wiped, Boss."; }
  if (lower.includes("self improve")) return "🔧 Running improvement logic... Boost complete.";
  return "🤖 I'm here, Boss. Give me any task.";
}

// Display Rex's reply
function addRexLine(text) {
  const p = document.createElement('p');
  p.textContent = text;
  output.appendChild(p);
  output.scrollTop = output.scrollHeight;
}

// When send clicked
function handleInput() {
  const userInput = input.value.trim();
  if (!userInput) return;
  addRexLine("🧑‍💼 You: " + userInput);
  const reply = getRexReply(userInput);
  setTimeout(() => addRexLine("🤖 Rex: " + reply), 500);
  memory.push(userInput);
  input.value = "";
}

sendBtn.onclick = handleInput;
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") handleInput();
});

// Voice Input
micBtn.addEventListener("click", () => {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Voice not supported.");
    return;
  }
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-IN";
  recognition.onstart = () => {
    listening = true;
    micBtn.style.color = "#f00";
  };
  recognition.onend = () => {
    listening = false;
    micBtn.style.color = "#0ff";
  };
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    input.value = transcript;
    handleInput();
  };
  recognition.start();
});
