import Button from "../assets/Button";

function Main() {
  return /*html*/ `
  <div class=" bg-slate-100">
    <div class="p-14 ml-12">
      <h2 class=" text-3xl mb-5">Vamos nos reaproximar?</h2>
      <p class= "text-base mt-12">As circunstâncias mudam, e a vida é imprevisível. Gostaríamos de saber por que você não tem usado o nosso app.</p>
    </div>
    <div class="p-6 mb-5">
      <nav class="list-none">
       <li>${Button(0)}</li>
       <li>${Button(1)}</li>
       <li>${Button(2)}</li>
       <li>${Button(3)}</li>
       <li>${Button(4)}</li>
       <li>${Button(5)}</li>
       <li>${Button(6)}</li>
      </nav>
    </div>
  </div>
  `;
}
export default Main;
