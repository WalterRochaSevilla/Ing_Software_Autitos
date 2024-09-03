// function autito(x,y,O){
//     return {X: x, Y: y, O: O};
// }
// export default autito;
class Autito{
    setAtr(x,YO){
        this.x = x;
        this.y = parseInt(YO[0]);
        this.o = YO[1];
    }
    getAtr(){
        return {X: this.x, Y: this.y, O: this.o};
    }
}
export default Autito;