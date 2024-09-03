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
    it("deberia Girar a la Izquierda", () => {  
      const autito=new Autito();
      autito.setAtr(0,"3N");    
      expect(autito.girar("I")).toEqual( {O: "O" } );
    });
    it("deberia Girar a la Izquierda", () => {  
      const autito=new Autito();
      autito.setAtr(0,"3N");    
      expect(autito.girar("D")).toEqual( {O: "E" } );
    });
    it("No deberia Girar", () => {  
      const autito=new Autito();
      autito.setAtr(0,"3N");    
      expect(autito.girar("A")).toEqual( {O: "N" } );
    });
    it("Debería Avanzar", () => {  
      const autito=new Autito();
      autito.setAtr(0,"3N");    
      expect(autito.mover("A")).toEqual( {X :0 , Y: 4 , O: "N" } );
    });
    it("Debería Avanzar y Girar", () => {  
      const autito=new Autito();
      autito.setAtr(0,"3S");    
      expect(autito.mover("IAIA")).toEqual( {X :1 , Y: 4 , O: "N" } );
    });
    it("Debería Avanzar", () => {  
      const autito=new Autito();
      autito.setAtr(1,"4N");    
      expect(autito.mover("IAIA")).toEqual( {X :0 , Y: 3 , O: "S" } );
    });
  });
  