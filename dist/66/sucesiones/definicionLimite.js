crearGrafico("defLimite", () => {
  defLimite.setCoordSystem(-1, 20, -1, 4);
  defLimite.evalCommand(`
	epsilon=slide(0,1,.001)
	sin(x)
	`);
  defLimite.setVisible("epsilon", true);
});
