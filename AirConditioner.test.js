const AirConditioner = require('./AirConditioner');

    test('AC should be off by default', () => {
        let myAirConditioner = new AirConditioner();
        expect(myAirConditioner.isOn()).toBe(false);
    });

    test('AC should turn on', () => {
        let myAirConditioner = new AirConditioner();
        myAirConditioner.powerOn();
        expect(myAirConditioner.isOn()).toBe(true);
    });

    test('AC should turn off', () => {
        let myAirConditioner = new AirConditioner();
        myAirConditioner.powerOn();
        myAirConditioner.powerOff();
        expect(myAirConditioner.isOn()).toBe(false);
    });

    test('AC temperature should increase by 1', () => {
        let myAirConditioner = new AirConditioner();
        myAirConditioner.powerOn();
        myAirConditioner.increaseTemperature(1);
        expect(myAirConditioner.getTemperature()).toBe(17);
    });

    test('AC temperature should decrease by 1', () => {
        let myAirConditioner = new AirConditioner();
        myAirConditioner.powerOn();
        myAirConditioner.increaseTemperature(5);
        myAirConditioner.decreaseTemperature();
        expect(myAirConditioner.getTemperature()).toBe(20);
    });

    test('AC temperature should not exceed 30', () => {
        let myAirConditioner = new AirConditioner();
        myAirConditioner.powerOn();
        myAirConditioner.increaseTemperature(14);
        myAirConditioner.increaseTemperature(1);
        expect(myAirConditioner.getTemperature()).toBe(30);
    });

    test('AC temperature should not go below 16', () => {
        let myAirConditioner = new AirConditioner();
        myAirConditioner.powerOn();
        myAirConditioner.decreaseTemperature();
        expect(myAirConditioner.getTemperature()).toBe(16);
    });

    test('AC temperature should not increase when off', () => {
        let myAirConditioner = new AirConditioner();
        myAirConditioner.increaseTemperature(1);
        expect(myAirConditioner.getTemperature()).toBe(16);
    });

    test('AC temperature should not decrease when off', () => {
        let myAirConditioner = new AirConditioner();
        myAirConditioner.powerOn();
        myAirConditioner.increaseTemperature(14);
        myAirConditioner.powerOff();
        myAirConditioner.decreaseTemperature();
        expect(myAirConditioner.getTemperature()).toBe(30);
    });

