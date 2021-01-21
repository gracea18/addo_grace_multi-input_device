while True:
    music.set_volume(255)
    if input.sound_level() > 50 and input.light_level() < 6:
        music.power_up.play()
        music.siren.play_until_done()
        light.set_all(light.rgb(255, 0, 0))
        pause(100)
        light.set_all(light.rgb(255, 0, 0))
    else:
        light.set_all(light.rgb(255,255,255))
