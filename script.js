document.addEventListener("DOMContentLoaded", () => {
  const inputMovimentos = document.querySelector("#movimentos");
  const inputOcorrencias = document.querySelector("#ocorrencias");
  const inputPotencial = document.querySelector("#potencial");
  const inputCritico = document.querySelector("#critico");

  const result = document.querySelector("#result");
  const legend = document.querySelector("#legend");

  function update() {
    const m = parseFloat(inputMovimentos.value);
    const o = parseFloat(inputOcorrencias.value);
    const p = parseFloat(inputPotencial.value);
    const c = parseFloat(inputCritico.value);

    if (isNaN(m) || isNaN(o) || isNaN(p) || isNaN(c)) {
      result.textContent = "Preencha todos os dados acima";
      legend.textContent = "---";
      return;
    }

    let valor = 0;
    valor += o * 25;
    valor += p * 60;
    valor += c * 15;
    valor = valor / 100;
    valor = valor / m;
    valor = valor * 100000;

    let final = (100 - valor).toFixed(2);
    final = Math.max(0, Math.min(final, 100));

    let legenda = "PÉSSIMO";
    if (final >= 50) legenda = "RUIM";
    if (final >= 55) legenda = "ABAIXO";
    if (final >= 60) legenda = "REGULAR";
    if (final >= 65) legenda = "BOM";
    if (final >= 70) legenda = "MUITO BOM";
    if (final >= 80) legenda = "ÓTIMO";
    if (final >= 85) legenda = "EXCELENTE!";

    result.textContent = final + "%";
    legend.textContent = legenda;
  }

  inputMovimentos.addEventListener("input", update);
  inputOcorrencias.addEventListener("input", update);
  inputPotencial.addEventListener("input", update);
  inputCritico.addEventListener("input", update);
});