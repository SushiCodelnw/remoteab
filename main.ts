joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    contol = "Move"
    basic.showIcon(IconNames.Rollerskate)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    contol = "Arm"
    basic.showIcon(IconNames.Sword)
})
let command = ""
let contol = ""
contol = "Move"
radio.setGroup(1)
joystickbit.initJoystickBit()
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 200) {
        basic.showArrow(ArrowNames.North)
        if (contol == "Move") {
            command = "Forward"
        } else {
            command = "ArmUp"
        }
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        basic.showArrow(ArrowNames.South)
        if (contol == "Move") {
            command = "Forback"
        } else {
            command = "ArmDown"
        }
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        basic.showArrow(ArrowNames.West)
        if (contol == "Move") {
            command = "Left"
        } else {
            command = "HandUp"
        }
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        basic.showArrow(ArrowNames.East)
        if (contol == "Move") {
            command = "Right"
        } else {
            command = "HandDown"
        }
    } else {
        command = "Stop"
        basic.clearScreen()
    }
    radio.sendValue(command, control.deviceSerialNumber())
})
