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
        return { x: this.x, y: this.y }; 
    }
    get_x(){
        return this.x;
    }
    get_y(){
        return this.y;
    }
}

export default Grid;