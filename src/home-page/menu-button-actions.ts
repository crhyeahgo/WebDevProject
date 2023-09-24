export function addMenuButtonListeners(): void {
  const btn = document.getElementById('personal-growth-btn');
  btn!.addEventListener('click', function (event) {
    location.replace("./personal-growth/");
  });
}