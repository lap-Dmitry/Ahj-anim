export default class Widget {
  createCollapse(container) {
    this.container = document.getElementById('widget');
    const cont = document.createElement('div');
    cont.classList.add('collapse-container');

    cont.innerHTML = `
      <button class="btn-collapse collapsed">Collapse</button>
      <div class="text-container">
        <div class="text-collapse">
          Anim pariatur cliche reprehenderit, enim eiusmod high life </br>
          accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, </br>
          craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    `;

    this.container.insertAdjacentElement('beforeend', cont);

    const btn = document.querySelector('.btn-collapse');
    const textCont = document.querySelector('.text-container');

    btn.addEventListener('click', (event) => {
      event.preventDefault();

      btn.classList.toggle('collapsed');

      if (btn.classList.contains('collapsed')) {
        textCont.classList.remove('show');
      } else {
        textCont.classList.add('show');
      }
    });
  }
}
