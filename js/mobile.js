const API_URL = 'https://dsa-instructor-pearl.vercel.app/api/ask'; 
function formatMessageWithCode(text) {
    if (!text) return "ERROR: Bot sent an empty response.";
    return text.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
}
function addMessage(sender, text, isUser) {
    const chatBox = document.getElementById('chat-box');
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    msgDiv.classList.add(isUser ? 'user-msg' : 'bot-msg');
    const formattedText = isUser ? text : formatMessageWithCode(text);
    msgDiv.innerHTML = `
        <div class="msg-sender">${sender}</div>
        <div class="msg-content">${formattedText}</div>
    `;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
async function sendMessage() {
    const inputField = document.getElementById('user-input');
    const text = inputField.value.trim();
    if (!text) return;
    addMessage('YOU', text, true);
    inputField.value = '';
    const chatBox = document.getElementById('chat-box');
    const loadingId = 'loading-' + Date.now();
    chatBox.innerHTML += `<div id="${loadingId}" class="message bot-msg"><div class="msg-sender">INSTRUCTOR</div><div class="msg-content">Compiling roast...</div></div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: text })
        });
        const data = await response.json();
        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) loadingElement.remove();
        if (response.ok) {
            const botReply = data.text; 
            
            if (botReply) {
                addMessage('INSTRUCTOR', botReply, false);
            } else {
                addMessage('SYSTEM', 'ERROR: The bot sent an empty text field.', false);
            }
        } else {
            addMessage('SYSTEM', 'ERROR: Connection unstable. Status: ' + response.status, false);
        }
    } catch (error) {
        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) loadingElement.remove();
        
        addMessage('SYSTEM', 'CRITICAL ERROR: ' + error.message, false);
        console.error("Detailed Error:", error);
    }
}
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
});