const output = document.getElementById("rex-output");
const input = document.getElementById("rex-input");
const sendBtn = document.getElementById("rex-send");
const voiceBtn = document.getElementById("rex-voice-toggle");

function respond(message) {
  output.innerText = "🤖 Rex: " + message;
}

function processCommand(command) {
  const cmd = command.toLowerCase();
  if (cmd.includes("trillionaire")) {
    respond("🚀 Activating Trillionaire Trading Core. Simulating secure profit path...");
    simulateTrade();
  } else if (cmd.includes("scan") || cmd.includes("trade")) {
    respond("📊 Scanning market using AI logic...");
    setTimeout(() => respond("✅ Best trade found. Securing with Loyalty Lock."), 2000);
  } else if (cmd.includes("loyalty")) {
    respond("🔒 Loyalty Mode is already maxed and locked to Boss only.");
  } else if (cmd.includes("self update")) {
    respond("⚙️ Rex is upgrading in background with God-Tier enhancements.");
  } else {
    respond("🤖 Rex received: " + command);
  }
}

function simulateTrade() {
  setTimeout(() => {
    respond("💹 Simulated gain: ₹2.3 Cr in 4 weeks. Estimated path ready.");
  }, 2500);
}

sendBtn.addEventListener("click", () => {
  const command = input.value;
