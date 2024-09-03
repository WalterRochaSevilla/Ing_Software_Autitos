import Grid from "./grid";
describe("Posición", () => {
    it("deberia Devolver la Posicion", () => {
      const grid = new Grid();
      grid.setAtr(3,3);
      expect(grid.getAtr()).toEqual({ x: 3, y: 3 });
    });
  });
  