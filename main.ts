while (true) {
    music.setVolume(255)
    if (input.soundLevel() > 50 && input.lightLevel() > 6) {
        music.siren.playUntilDone()
        light.setAll(light.rgb(255, 255, 255))
    } else if (input.lightLevel() > 6) {
        // if the light level is above 6, set all the neopixels to light yellow and play the wawawawaa sound
        music.wawawawaa.playUntilDone()
        light.setAll(light.rgb(255, 255, 75))
    }
    
}
