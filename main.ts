input.onButtonPressed(Button.A, function () {
    Set = 1
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    Set = 0
    basic.showIcon(IconNames.Triangle)
})
let lastCommand = ""
let command = ""
let Y = 0
let X = 0
let Set = 0
radio.setGroup(1)
basic.forever(function () {
    X = input.rotation(Rotation.Roll)
    Y = input.rotation(Rotation.Pitch)
    if (Set == 0) {
        if (Y < -30) {
            command = "Forward"
            basic.showArrow(ArrowNames.North)
        } else if (Y > 30) {
            command = "Forback"
            basic.showArrow(ArrowNames.South)
        } else if (X < -30) {
            command = "Left"
            basic.showArrow(ArrowNames.West)
        } else if (X > 30) {
            command = "Right"
            basic.showArrow(ArrowNames.East)
        } else {
            command = "Stop"
            basic.clearScreen()
        }
    } else {
        if (Y < -30) {
            command = "ArmUp"
            basic.showArrow(ArrowNames.North)
        } else if (Y > 30) {
            command = "ArmDown"
            basic.showArrow(ArrowNames.South)
        } else if (X < -30) {
            command = "HandUp"
            basic.showArrow(ArrowNames.West)
        } else if (X > 30) {
            command = "HandDown"
            basic.showArrow(ArrowNames.East)
        } else {
            command = "Stop"
            basic.clearScreen()
        }
    }
    if (command != lastCommand) {
        radio.sendValue(command, control.deviceSerialNumber())
        lastCommand = command
    }
    basic.pause(100)
})
