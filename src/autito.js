// function autito(x,y,O){
//     return {X: x, Y: y, O: O};
// }
// export default autito;
class Autito{
    setAtr(x,YO){
        this.x = x;
        this.y = parseInt(YO[0]);
        this.o = YO[1];
        this.orientaciones= ["N","E","S","O"];
    }
    getAtr(){
        return {X: this.x, Y: this.y, O: this.o};
    }
    girar(G) {
        const indexActual = this.orientaciones.indexOf(this.o); // Encontrar la posición actual en el array de orientaciones
        let nuevoIndex;

        if (G === "D") { // Si gira a la derecha
            nuevoIndex = (indexActual + 1) % this.orientaciones.length; // Incrementa el índice
        } else if (G === "I") { // Si gira a la izquierda
            nuevoIndex = (indexActual - 1 + this.orientaciones.length) % this.orientaciones.length; // Decrementa el índice
        } else {
            nuevoIndex = indexActual
        }

        this.o = this.orientaciones[nuevoIndex]; // Actualizar la orientación
        return {O: this.o};
    }
}
export default Autito;