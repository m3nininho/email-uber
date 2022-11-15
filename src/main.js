import Header from "./components/Header";
import Main from "./components/Main";
document.querySelector("#app").innerHTML = /*html*/ `
  <div class="max-w-3xl mx-auto ">

  ${Header()}
  ${Main()}
  </div>
`;
