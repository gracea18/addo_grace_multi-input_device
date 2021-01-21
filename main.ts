while (true) {
    music.setVolume(255)
    if (input.soundLevel() > 50 && input.lightLevel() < 6) {
        music.powerUp.play()
        music.siren.playUntilDone()
        light.setAll(light.rgb(255, 0, 0))
        pause(100)
        light.setAll(light.rgb(255, 0, 0))
    } else {
        light.setAll(light.rgb(255, 255, 255))
    }
    
}
