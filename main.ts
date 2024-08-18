LCD_i2c.LcdBegin(62)
LCD_i2c.setCursor(0, 16)
LCD_i2c.printText("hello world")
basic.pause(1000)
basic.forever(function () {
    LCD_i2c.scrollDisplayLeft()
    basic.pause(500)
})
