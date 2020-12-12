var socket = io();

var searcParams = new URLSearchParams(window.location.search);

if (!searcParams.has("escritorio")) {
  window.location = "index.html";
  throw new Error("El escritorio es necesario");
}

var escritorio = searcParams.get("escritorio");
var label = $("small");

$("h1").text("Escritorio " + escritorio);

$("button").on("click", function () {
  socket.emit("atenderTicket", { escritorio }, function (resp) {
    if (resp === "No hay tickets") {
      label.text(resp);

      alert(resp);
      return;
    }
    label.text("Ticket " + resp.numero);
  });
});
