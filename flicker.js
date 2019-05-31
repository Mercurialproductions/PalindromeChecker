let uCounter = 0;
let dCounter = 0;
let opacityValue = 0;

function delay(t){
    let counter = 1;
    let stime = new Date().getTime();
    let ctime = new Date().getTime();
    let etime = ctime - stime;
    while(etime < t){
        counter++;
        ctime =  new Date().getTime();
        etime = ctime - stime;
    };

}

function setOpacity(){

    let elem = document.getElementById("heading");
    opacityValue = Number(window.getComputedStyle(elem).getPropertyValue("opacity"));

    if(uCounter < 10){
        opacityValue = opacityValue + 0.1;
        uCounter++;
        dCounter++;
        opacityValueString = "" + opacityValue + "";

        // console.log(opacityValue);
        elem.style.opacity = opacityValue;

    } else if(uCounter >= 10 && dCounter > 0){
        opacityValue = opacityValue - 0.1;
        dCounter--;
        // console.log(opacityValue);
        opacityValueString = "" + opacityValue + "";
        elem.style.opacity = opacityValue;
        if(dCounter === 1){
            uCounter = 0;
        }
    }

}


function flick(){
    setInterval(setOpacity,100);
}
