Y = 0
X = 0
radio.set_group(1)

def on_forever():
    global X, Y
    X = input.rotation(Rotation.ROLL)
    Y = input.rotation(Rotation.PITCH)
    if Y < -30:
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            """)
        radio.send_value("name", control.device_serial_number())
    elif Y > 30:
        basic.show_leds("""
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            """)
    elif X < -30:
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """)
    elif X > 30:
        basic.show_leds("""
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            """)
    else:
        basic.clear_screen()
basic.forever(on_forever)
