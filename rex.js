const messages = document.getElementById("rex-messages");
const input = document.getElementById("rex-input");
const sendButton = document.getElementById("rex-send");

sendButton.addEventListener("click", sendMessage);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const userInput = input.value.trim();
  if (!userInput) return;

  appendMessage(userInput, "user");
  input.value = "";

  setTimeout(() => {
    appendMessage("🤖 Rex: Processing your command with full loyalty, Boss...", "rex");
    // You can later connect this with AI backend
  }, 500);
}

function appendMessage(text, sender) {
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  message.textContent = text;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}
