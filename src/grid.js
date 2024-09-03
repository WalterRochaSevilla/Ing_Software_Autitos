// function grid(x,y){
//     return x,y;
// }
// export default grid;
class Grid {
    setAtr(x, y) {
        this.x = x;
        this.y = y;
    }
    getAtr() {
        return { x: this.x, y: this.y }; // Devolver un objeto con las coordenadas
    }
}

export default Grid;