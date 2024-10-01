const TOKEN = "7735855072:AAH7LpIGKW-UeVs-bVikrl8QGyOljSLpie8";
const CHAT_ID = "-4558955405";
const URI_API = `https://api.telegram.org/bot${TOKEN}/SendMessage`

// html elements
let numberInput = document.querySelector('#number');



document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  // message that is sent
  let message = `<b>New message</b> \n`;
  message += `<b>Sender:</b> ${this.name.value} ${this.surname.value}\n`;
  message += `<b>Phone Number:</b> ${this.number.value}\n`;
  message += `<b>Message:</b> ${this.txtarea.value}\n`;

  // sending to telegram
  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  }).then((response)=>{
    console.log(response)
    this.name.value = "";
    this.surname.value = "";
    this.txtarea.value = "";
    this.number.value = "";
  })
});
