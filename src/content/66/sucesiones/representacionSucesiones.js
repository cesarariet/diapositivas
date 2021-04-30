crearGrafico("graficoDeSucesion", () => {
  graficoDeSucesion.evalCommand(`
	a_n=Sequence((n,2+(-1)^n/n),n,1,50)
	`);
  graficoDeSucesion.setCoordSystem(-1, 20, -1, 4);
});
crearGrafico(
  "sucesionEnLaRecta",
  () => {
    sucesionEnLaRecta.setCoordSystem(0, 3, -1, 1);
    sucesionEnLaRecta.setAxesVisible(true, false);
    sucesionEnLaRecta.evalCommand(`
	a_n=Sequence((2+(-1)^n/n,0),n,1,50)
	`);
  },
  320,
  70
);
