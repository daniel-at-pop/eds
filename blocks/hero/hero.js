export default function decorate(block) {
  block.children[0].classList.add('hero__logo-container');
  block.children[1].classList.add('hero__background-container');
  block.children[2].classList.add('kd-layout__content-container');
  block.children[3].classList.add('kd-layout__content-container');
}
