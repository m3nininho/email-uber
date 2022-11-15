import logo from "../../../images/logo.png";
import img1 from "../../../images/img1.png";

function Header() {
  return /*html*/ `
  
  <header class="bg-blue-200 p-5">
    <div class=" max-w-2xl mx-auto p-12">
    <div class="w-20 mb-10">
      <a  href="https://www.uber.com/br/pt-br/"><img src=${logo}></a>
    </div>
      <div>
        <h2 class=" text-4xl w-96 mb-3">Sua experiência é importante para nós</h2>
        <p class=" text-xl">Como faz tempo que você não viaja com a gente, gostaríamos de pedir um feedback. Sua opinião nos ajudará a melhorar os serviços para toda a nossa comunidade.</p>
      </div>
      <img class="mt-2" src=${img1}>
     </div> 
  </header>
  `;
}

export default Header;
