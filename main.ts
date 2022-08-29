input.onButtonPressed(Button.A, function () {
    basic.showNumber(0 + jackpot_coin)
    jackpot_coin += jackpot_coin + 1
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(jackpot_coin - 1)
    basic.clearScreen()
    basic.pause(500)
    if (jackpot_coin) {
        basic.showNumber(randint(149, 150))
    } else if (numberJACKPOT && false) {
        for (let index = 0; index < 5; index++) {
            basic.showString("!!JACKPOT!!")
        }
    }
})
let jackpot_coin = 0
let numberJACKPOT = 0
numberJACKPOT = 150
basic.forever(function () {
	
})
control.inBackground(function () {
	
})
