while True:
    music.set_volume(255)
    if input.sound_level() > 50 and input.light_level() > 6:
        music.siren.play_until_done()
        light.set_all(light.rgb(255, 255, 255))
    #if the light level is above 6, set all the neopixels to light yellow and play the wawawawaa sound
    elif input.light_level() > 6:
        music.wawawawaa.play_until_done()
        light.set_all(light.rgb(255, 255, 75))
    

