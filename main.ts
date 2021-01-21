while (true) {
    music.setVolume(255)
    if (input.soundLevel() > 50 && input.lightLevel() < 6) {
        light.setAll(light.rgb(255, 255, 255))
        light.clear()
        light.setAll(light.rgb(255, 255, 255))
        music.siren.playUntilDone()
    } else {
        light.showAnimation(light.rainbowAnimation, 5000)
    }
    
}
