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
    mover(comando_movimiento, limitex=50000, limitey=50000){
        for (const letra of comando_movimiento){
            if (letra == "D" || letra == "I"){
                this.girar(letra);
            }else{
                switch(this.o){
                    case "N":
                        if(this.y +  1 <= limitey){
                            this.y= this.y + 1;
                        }
                        break;
                    case "S":
                        if(this.y -  1 >= 0){
                            this.y= this.y - 1;
                        }
                        break;
                    case "O":
                        if (this.x -1 >= 0){
                            this.x= this.x - 1;
                        }
                        break;
                    case "E":
                        if(this.x +  1 <= limitex){
                            this.x= this.x + 1;
                        }
                        break;
                }
            }
        }
        return {X: this.x, Y: this.y, O: this.o};
    }
}
export default Autito;