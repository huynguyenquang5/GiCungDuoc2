class ElectricLamp {
    constructor() {
        this.status = "";
    }
    getLampStatus(){
        if (this.status === "On"){
            document.write("The lamp is on" + "<br>")
        } else if (this.status === "Off"){
            document.write("The lamp is off" + "<br>")
        }
    }
    turnOn(){
        this.status = "On"
    }
    turnOff(){
        this.status = "Off"
    }
}

class SwitchButton {
    constructor() {
        this.status = ""
        this.lamp = ""
    }
    getButtonStatus(){
        if (this.status === "On"){
            document.write("The button is on" + "<br>")
        } else if (this.status === "Off"){
            document.write("The button is off" + "<br>")
        }
    }

    connectToLamp(){
        if (this.lamp === ElectricLamp){
            document.write("This lamp is connected" + "<br>")
        } else {
            document.write("This lamp is not connected" + "<br>")
        }
    }
    switchOn(){
        this.status = "On"
    }
    switchOff(){
        this.status = "Off"
}
}
let button = new SwitchButton();
button.connectToLamp();
button.switchOff();
button.getButtonStatus()
let lamp = new ElectricLamp();
lamp.turnOn()
lamp.getLampStatus();
