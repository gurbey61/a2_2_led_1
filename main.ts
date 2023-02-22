basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(300)
})
