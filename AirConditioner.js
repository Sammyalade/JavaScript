
module.exports = class AirConditioner {
    constructor() {
        this.isOn = false;
        this.temperature = 16;
    }

    powerOff() {
        this.isOn = false;
    }

    powerOn() {
        this.isOn = true;
    }

    isOn() {
        return this.isOn;
    }

    increaseTemperature(interval) {
        const isTemperatureRange = this.temperature >= 16 && this.temperature < 30;
        if (this.isOn && isTemperatureRange) {
            this.temperature += interval;
        }
    }

    getTemperature() {
        return this.temperature;
    }

    decreaseTemperature() {
        const isTemperatureRange = this.temperature > 16 && this.temperature < 30;
        if (this.isOn && isTemperatureRange) {
            this.temperature--;
        }
    }
}
