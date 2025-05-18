input.onButtonPressed(Button.A, function () {
    radio.sendValue("Arm", control.deviceSerialNumber())
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("Hand", control.deviceSerialNumber())
})
let Y = 0
let X = 0
radio.setGroup(1)
basic.forever(function () {
    X = input.rotation(Rotation.Roll)
    Y = input.rotation(Rotation.Pitch)
    if (Y < -30) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        radio.sendValue("Forward", control.deviceSerialNumber())
    } else if (Y > 30) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        radio.sendValue("Forback", control.deviceSerialNumber())
    } else if (X < -30) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        radio.sendValue("Left", control.deviceSerialNumber())
    } else if (X > 30) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        radio.sendValue("Right", control.deviceSerialNumber())
    } else {
        basic.clearScreen()
    }
})
