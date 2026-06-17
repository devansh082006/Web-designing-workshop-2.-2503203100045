function sendMessage() {

    let input = document.getElementById("messageInput");
    let text = input.value.trim();

    if(text === "") return;

    let msg = document.createElement("div");
    msg.classList.add("message");
    msg.classList.add("sent");

    msg.innerText = text;

    document.getElementById("messages").appendChild(msg);

    input.value = "";

    document.getElementById("messages").scrollTop =
    document.getElementById("messages").scrollHeight;
}