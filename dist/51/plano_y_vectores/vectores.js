crearGrafico("g", () => {
  g.evalCommand(`
  A=(3,2)
  B=(-2,-1)
  d=Segment(A,B)`);
  g.setCoordSystem(-4, 4, -4, 4);
});
