import Grid from "./grid";
import Autito from "./autito";
describe("Posición", () => {
    it("deberia Devolver la Posicion", () => {
      const grid = new Grid();
      grid.setAtr(3,3);
      expect(grid.getAtr()).toEqual({ x: 3, y: 3 });
    });
  });

  describe("Autito", () => {
    it("deberia Devolver la Posicion Inicial del autito", () => {
      const autito=new Autito();
      autito.setAtr(0,"3N");
      expect(autito.getAtr()).toEqual( {X :0 , Y: 3 , O: "N" } );
    });
  });
  