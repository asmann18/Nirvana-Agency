let btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  let adsoyad = document.querySelector(".adsoyad_input");
  let email = document.querySelector(".email_input");
  let telefon = document.querySelector(".telefon_input");
  let movzu = document.querySelector(".movzu_input");
  let mesaj = document.querySelector(".mesaj_input");
  let body = `Name:${adsoyad.value}  Email:${email.value}  Telefon:${telefon.value}  Movzu:${movzu.value}  Mesaj:${mesaj.value}`;

  const apiUrl='https://discord.com/api/webhooks/1082302151663026327/62lFHzN-orRuUQQ9py7X2lcp_v6l9gtxHzYT_mzm203d-Drbc5lg1W0lIlMhsCB_SSvc'
  fetch(apiUrl,{
    method:"POST",
    body:JSON.stringify(body)
  })






  // request.send(JSON.stringify(params));
  // sleep(2000);
  // adsoyad.value = "";
  // email.value = "";
  // telefon.value = "";
  // movzu.value = "";
  // mesaj.value = "";
  // // client.js
  // const WebSocket = require("ws");

  // const ws = new WebSocket(
  //   "https://discord.com/api/webhooks/1082244995555274822/45hct4W1GSWacq0S7mLjWoGYHDVSc0mYnEnZyBuVk4P-0IEpsslx5KMnAdF23xJiolUB"
  // );

  // var apiKey = process.env.RELAY_KEY;
  // var apiSecret = process.env.RELAY_SECRET;

  // ws.on("open", function open() {
  //   // on connection, send our authentication request
  //   ws.send(JSON.stringify({ action: "auth", key: apiKey, secret: apiSecret }));
  // });

  // ws.on("close", function close() {
  //   console.log("disconnected");
  // });

  // ws.on("message", function incoming(data) {
  //   console.log(data);
  //   var msg = JSON.parse(data);
  //   if (msg.type === "status" && msg.status === "authenticated") {
  //     // if we got authentication confirmation, send subscribe event to the server
  //     ws.send(JSON.stringify({ action: "subscribe", buckets: ["123"] }));
  //   }
});
//   // Email.send({
//   //   Host: "smtp.gmail.com",
//   //   Username: "nirvanagencyaz@gmail.com",
//   //   Password: "fcgvnuguobdrnmka",
//   //   To: "nirvanagency@gmail.com",
//   //   From: "you@isp.com",
//   //   Subject: "This is the subject",
//   //   Body: body,
//   // }).then((message) => alert(message));
// });

// let buy = document.querySelectorAll(".buy_btn");
// buy.addEventListener("click",()=>{
//     console.log({buy})
// });
let logo = document.querySelector(".logo_img");
logo.addEventListener("click", function () {
  console.log("1");
}); //baxilmalidi
