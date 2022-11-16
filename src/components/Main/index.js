import Button from "../assets/Button";

function Main() {
  return /*html*/ `
  <main class=" bg-slate-100 flex flex-col justify-center items-center flex-wrap">
  <div>
    <div class="ml-10 mt-10 p-6">
      <h2 class="text-3xl mb-5">Vamos nos reaproximar?</h2>
      <p class= " text-xl mt-12 text-gray-500">As circunstâncias mudam, e a vida é imprevisível. Gostaríamos de saber por que você não tem usado o nosso app.</p>
    </div>
    <div>
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
  </main>
  `;
}
export default Main;
