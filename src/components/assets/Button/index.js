import car from "../../../../images/car.png";
import money from "../../../../images/money.png";
import time from "../../../../images/time.png";
import security from "../../../../images/security.png";
import block from "../../../../images/block.png";
import card from "../../../../images/card.png";
import atenc from "../../../../images/atenc.png";

const options = [
  {
    id: 1,
    img: car,
    texto: "Não precisei mais usar o app da Uber.",
  },
  {
    id: 2,
    img: money,
    texto: "Os preços são muito altos.",
  },
  {
    id: 3,
    img: time,
    texto: "As viagens demoram muito.",
  },
  {
    id: 4,
    img: security,
    texto: "Não sinto segurança para usar o app da Uber.",
  },
  {
    id: 5,
    img: block,
    texto: "Não consigo fazer login na minha conta.",
  },
  {
    id: 6,
    img: card,
    texto: "Tive problemas relacionados a pagamentos.",
  },
  {
    id: 7,
    img: atenc,
    texto: "Tive uma experiência ruim.",
  },
];
const links = [
  {
    id: 1,
    link: "https://www.uber.com/br/pt-br/ride/",
  },
  {
    id: 2,
    link: "https://help.uber.com/riders/article/como-os-pre%C3%A7os-s%C3%A3o-calculados/?nodeId=d2d43bbc-f4bb-4882-b8bb-4bd8acf03a9d",
  },
  {
    id: 3,
    link: "https://help.uber.com/riders/article/como-funcionam-as-previs%C3%B5es-de-chegada?nodeId=6a4dbe13-0a86-4d11-a0ab-cc88f8171fb8",
  },
  {
    id: 4,
    link: "https://www.uber.com/br/pt-br/safety/",
  },
  {
    id: 5,
    link: "https://help.uber.com/riders/article/n%C3%A3o-consigo-entrar-na-minha-conta?nodeId=53cf8809-a0fc-4856-8706-de637266d4f3",
  },
  {
    id: 6,
    link: "https://help.uber.com/riders/section/op%C3%A7%C3%B5es-de-pagamento-?nodeId=969a673b-e414-4fa4-a73b-297106d6cdc7",
  },
  {
    id: 7,
    link: "https://help.uber.com/",
  },
];
function Button(id) {
  return /*html*/ `
  <div class="">
    <a href=${links[id].link} class="flex items-center gap-20 hover:bg-blue-600 hover:text-gray-50 hover:font-bold font-bold w-btn mx-auto mb-5 py-3 rounded-3xl	 "><img class="w-12 ml-5" src=${options[id].img}>${options[id].texto}</a>
  </div>
  `;
}
export default Button;
