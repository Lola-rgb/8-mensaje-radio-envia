input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendNumber(2)
})
radio.setGroup(1)
