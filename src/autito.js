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
        const indexActual = this.orientaciones.indexOf(this.o);
        let nuevoIndex;
        if (G === "D") { 
            nuevoIndex = (indexActual + 1) % this.orientaciones.length;
        } else if (G === "I") {
            nuevoIndex = (indexActual - 1 + this.orientaciones.length) % this.orientaciones.length;
        } else {
            nuevoIndex = indexActual
        }
        this.o = this.orientaciones[nuevoIndex];
        return {O: this.o};
    }
    mover(comando_movimiento){
        for (const letra of comando_movimiento){
            if (letra == "D" || letra == "I"){
                this.girar(letra);
            }else{
                switch(this.o){
                    case "N":
                        this.y= this.y + 1;
                        break;
                    case "S":
                        this.y= this.y - 1;
                        break;
                    case "O":
                        this.x= this.x - 1;
                        break;
                    case "E":
                        this.x= this.x + 1;
                        break;
                }
            }
        }
        return {X: this.x, Y: this.y, O: this.o};
    }
}
export default Autito;