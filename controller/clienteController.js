import { clientes } from "../model/clientes.js";

function listarClientesActivos() {}

function listarClientesInactivos() {}

function listarClientesPendientes() {}

function listarClientes() {
  clientes.map((cliente) => {
    let clienteCard = document.createElement("div");
    clienteCard.classList.add("cliente-card");
    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    let avatar = document.createElement("div");
    avatar.classList.add("avatar");
    let badge = document.createElement("span");
    badge.classList.add("badge");
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    let clienteNombre = document.createElement("h3");
    clienteNombre.classList.add("cliente-nombre");
    let clienteEmpresa = document.createElement("p");
    clienteEmpresa.classList.add("cliente-empresa");
    let clienteInfo = document.createElement("div");
    clienteInfo.classList.add("cliente-info");
    let infoItem = document.createElement("div");
    infoItem.classList.add("info-item")
    let infoIcon = document.createElement("span");
    infoIcon.classList.add("info-icon")
    let infoText = document.createElement("span");
    infoText.classList.add("info-text")
    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer")
    let btnDetalle = document.createElement("button");
    btnDetalle.classList.add("btn", "btn-primary")
    let btnContacto = document.createElement("button");
    btnContacto.classList.add("btn", "btn-secondary")

    cardHeader.append(avatar, badge);
    infoItem.append(infoIcon, infoText);
    clienteInfo.append(infoItem);
    cardFooter.append(btnDetalle, btnContacto);
    cardBody.append(clienteNombre, clienteEmpresa, clienteInfo);
    clienteCard.append(cardHeader, cardBody, cardFooter);

    document.getElementById("clientes-grid").append(clienteCard)
  });
}
let listadoClientes = document.getElementById("listarClientes");
listadoClientes.addEventListener("click", listarClientes);
