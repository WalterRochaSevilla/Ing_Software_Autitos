import Grid from "./grid";
import Autito from "./autito";

class Control {
    setAtr(creacion) {
        const [dimensiones_grid, posicion_autito, movimientos] = creacion.split('/');
        const [ancho, alto] = dimensiones_grid.split(',').map(Number); // Asegúrate de que ancho y alto sean números
        this.grid = new Grid();
        this.grid.setAtr(ancho, alto);
        const [x,yo]=posicion_autito.split(',');
        this.autito=new Autito();
        this.autito.setAtr(parseInt(x), yo);
        this.movimientos = movimientos; // Guardar movimientos para usar en el método `mover`
    }
    
    mover() {
        const resultado = this.autito.mover(this.movimientos, this.grid.get_x(), this.grid.get_y()); // Utiliza this.movimientos
        return resultado;
    }
}

export default Control;
