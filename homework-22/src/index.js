import io from 'socket.io-client';
import moment from 'moment';

const socket = io('http://localhost:3000');

const button = document.getElementById('send');
const input = document.getElementById('input');
let userId;

button.addEventListener('click', () => {
  if(input.value === '') {
    return;
  }
  socket.emit('message', input.value);
  input.value = '';
})

socket.on('welcome', id => {
  userId = id;
  console.log(userId)
})

socket.on('receiveMessage', response => {
  const isMessageFromUser = response.userId === userId;

  const chatContainer = document.createElement('div');
  chatContainer.classList.add('chatContainer');
  if(!isMessageFromUser){
    chatContainer.classList.add('left');
  }

  const message = document.createElement('div');
  message.classList.add('message');
  if(!isMessageFromUser) {
    message.classList.add('friend')
  }

  const messageInfo = document.createElement('div');
  messageInfo.classList.add('message_container');

  const username = document.createElement('p');
  username.innerText = 'Кирило';
  username.classList.add('username');

  const date = document.createElement('p');
  date.innerText = moment().format();
  date.classList.add('date');

  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message_container');

  const textParagraph = document.createElement('p');
  textParagraph.innerText = response.message;

  chatContainer.appendChild(message);
  message.appendChild(messageInfo);
  messageInfo.appendChild(username);
  messageInfo.appendChild(date);
  message.appendChild(messageContainer);

  const chatMessageContainer = document.getElementsByClassName('chat')[0];
  chatMessageContainer.appendChild(chatContainer);
})
