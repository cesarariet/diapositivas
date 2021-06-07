crearGrafico(
  "fermat",
  () => fermat.setCoordSystem(-3, 3, -3, 3),
  undefined,
  undefined,
  undefined,
  "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"
);
