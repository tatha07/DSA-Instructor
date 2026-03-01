document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const codeBox = document.getElementById('code-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    sendBtn.addEventListener('click', askBot);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') askBot();
    });
    async function askBot() {
        const text = userInput.value.trim();
        if (!text) return;
        addMessage(text, 'user-msg', 'USER');
        userInput.value = '';
        const loadingId = addMessage('Processing request...', 'bot-msg', 'SYSTEM');
        try {
         const response = await fetch('https://dsa-instructor-pearl.vercel.app/api/ask?v=' + Date.now(), {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ question: text })
         });
            const data = await response.json();
            document.getElementById(loadingId).remove(); 
            processResponse(data.text);
        } catch (error) {
            console.error("Error:", error);
            document.getElementById(loadingId).querySelector('.msg-content').innerText = "ERROR: Server connection failed. Check backend integrity.";
            document.getElementById(loadingId).querySelector('.msg-content').style.color = "#ff4444";
        }
    }
    function addMessage(text, className, senderName) {
        const div = document.createElement('div');
        div.className = `message ${className}`;
        div.id = 'msg-' + Date.now();
        div.innerHTML = `
            <div class="msg-sender">${senderName}</div>
            <div class="msg-content">${escapeHTML(text)}</div>
        `;
        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight;
        return div.id;
    }
    function processResponse(rawText) {
        const codeRegex = /```(\w*)\n([\s\S]*?)```/g;
        let codeContent = '';
        let match;
        let hasCode = false;
        while ((match = codeRegex.exec(rawText)) !== null) {
            hasCode = true;
            const language = match[1] ? match[1].toUpperCase() : 'CODE';
            const actualCode = escapeHTML(match[2].trim());
            
            codeContent += `
                <div class="code-block-wrapper">
                    <div class="code-header">${language}</div>
                    <div class="code-content">${actualCode}</div>
                </div>
            `;
        }
        const explanationText = rawText.replace(/```\w*\n[\s\S]*?```/g, '').trim();

        if (explanationText) {
            addMessage(explanationText, 'bot-msg', 'SYSTEM');
        }
        if (hasCode) {
            codeBox.innerHTML = codeContent;
        } else {
            codeBox.innerHTML = `
                <div class="empty-state">
                    > No syntax generated for this query.
                </div>`;
        }
    }
    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag])
        );
    }
const inputElement = document.getElementById('user-input');
const targetPlaceholder = "Try to stump me, amateur...";
let charIndex = 0;
function typePlaceholder() {
    if (charIndex === 0) {
        inputElement.setAttribute('placeholder', ''); // Clear initial
    }
    if (charIndex < targetPlaceholder.length) {
        const currentText = inputElement.getAttribute('placeholder');
        inputElement.setAttribute('placeholder', currentText + targetPlaceholder.charAt(charIndex));
        charIndex++;
        setTimeout(typePlaceholder, 60); 
    }
}
setTimeout(typePlaceholder, 500);
});
