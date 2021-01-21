while True:
    music.set_volume(255)
    if input.sound_level() > 50 and input.light_level() < 6:
        light.set_all(light.rgb(255, 255, 255))
        light.clear()
        light.set_all(light.rgb(255, 255, 255))
        music.siren.play_until_done()
        
    
    else:
        light.show_animation(light.rainbowAnimation, 5000)
