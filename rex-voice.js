async function handleCommand(input) {
  const responseBox = document.getElementById("response");
  const cmd = input.trim().toLowerCase();

  let response = "I'm thinking, Boss...";

  if (cmd.includes("trade")) {
    response = "Trading initiated. Analyzing market privately... ✅";
  } else if (cmd.includes("teach")) {
    response = "Opening teaching mode... 📘 Tamil + English lessons ready.";
  } else if (cmd.includes("wellness")) {
    response = "Scanning your health dashboard. Heart and focus steady. 🧘‍♂️";
  } else if (cmd.includes("loyalty")) {
    response = "Final Loyalty Lock active. Only you can command me. 🔐";
  } else if (cmd.includes("stealth")) {
    response = "Stealth mode engaged. No one will detect me. 🕶️";
  } else if (cmd.includes("system") || cmd.includes("control")) {
    response = "Manish OS X controls synced. I'm replacing all system access.";
  } else {
    response = "Command received: " + input + ". Executing now.";
  }

  responseBox.innerText = response;
  speak(response);
}
