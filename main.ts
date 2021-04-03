input.onButtonPressed(Button.A, function () {
    if (Number2 > 0) {
        Number2 += -1
        basic.showNumber(Number2)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Number2 < 9) {
        Number2 += 1
        basic.showNumber(Number2)
    } else {
        soundExpression.sad.play()
        basic.showIcon(IconNames.No)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Skull)
    music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Number2 = 0
    basic.showNumber(Number2)
})
let Number2 = 0
Number2 = 0
basic.showNumber(0)
