import Wp from "gi://AstalWp"

const audio = Wp.get_default().audio

print(audio.default_speaker.volume)
