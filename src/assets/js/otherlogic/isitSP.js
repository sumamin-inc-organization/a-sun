export default function isItSp(){
    const isItSp = window.matchMedia("(max-width: 500px)");
    if(isItSp.matches){
        return true;
    }
    else {
        return false;
    }
}