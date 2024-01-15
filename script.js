let selectedPerson = 'John';
let messageCount = 0;

function selectPerson(person) {
    selectedPerson = person;

    document.getElementById('John').style.backgroundColor = '#8b7f64'; 
    document.getElementById('Jane').style.backgroundColor = '#8b7f64';

    document.getElementById(person).style.backgroundColor = '#00FA9A';

    if (person === 'John') {
        messageCount = 0;
        notification1();
      }
    if (person === 'Jane') {
        messageCount = 0;
        notification2();
    }
}

function sendMessage() {
    let messageInput = document.getElementById("message-input");
    let message = messageInput.value;

    if (message !== "") {
        appendMessage(selectedPerson, message);
        messageInput.value = "";

        if (selectedPerson === 'John') {
            messageCount++;
            notification1();
        }
  
        if (selectedPerson === 'Jane') {
            messageCount++;
            notification2();
        }
    }
    else {
        alert("please enter your message")
    }
}

function appendMessage(sender, text) {
    let chatMessages = document.getElementById("chat-messages");
    let messageElement = document.createElement("div");
    let messageTime = getTime();
    messageElement.className = sender === 'John' ? 'message-John' : 'message-Jane';
    messageElement.innerHTML = `<strong>${sender}:</strong> ${text} <span class="get-time">${messageTime}</span>`;
    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return timeString;
}

function notification1() {
    let notificationElement = document.getElementById("notification2");
    notificationElement.textContent = messageCount > 0 ? messageCount : '';
  }
  function notification2() {
    let notificationElement = document.getElementById("notification1");
    notificationElement.textContent = messageCount > 0 ? messageCount : '';
  }