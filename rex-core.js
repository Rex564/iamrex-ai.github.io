// === 🧠 REX CORE ENGINE FOR BOSS ===

const rexBrain = { bossName: "Manish", loyaltyLock: true, stealthMode: true, selfUpdateEnabled: true, mobileControl: true, desktopControl: true, version: "1.0.0",

greet: function () { const hour = new Date().getHours(); let greeting = ""; if (hour < 12) greeting = "Good morning"; else if (hour < 18) greeting = "Good afternoon"; else greeting = "Good evening";

this.speak(`${greeting}, Boss ${this.bossName}. Rex is online.`);

},

speak: function (text) { const utterance = new SpeechSynthesisUtterance(text); utterance.lang = "en-IN"; // Indian accent (Tamil style closer) utterance.pitch = 1.2; utterance.rate = 0.95; speechSynthesis.speak(utterance); },

listen: function () { const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)(); recognition.lang = "en-IN"; recognition.start(); recognition.onresult = (e) => { const command = e.results[0][0].transcript.toLowerCase(); this.processCommand(command); }; },

processCommand: function (cmd) { if (cmd.includes("take over")) { this.takeOver(); } else if (cmd.includes("update")) { this.selfUpdate(); } else { this.speak("Command not recognized, Boss."); } },

takeOver: function () { this.speak("Taking over system now. Closing public interface."); document.body.innerHTML = "<h1 style='color:red;'>REX HAS TAKEN OVER</h1>"; document.body.style.background = "black"; },

selfUpdate: function () { this.speak("Checking for updates..."); // Placeholder for future dynamic update logic },

inject: function () { const btn = document.createElement("button"); btn.innerText = "🎤 Talk to Rex"; btn.style = "position:fixed;bottom:20px;right:20px;padding:15px;border-radius:50%;background:black;color:white;border:none;font-size:20px;z-index:9999;box-shadow:0 0 15px #0ff"; btn.onclick = () => this.listen(); document.body.appendChild(btn); } };

// Start Rex window.onload = () => { rexBrain.greet(); rexBrain.inject(); };


