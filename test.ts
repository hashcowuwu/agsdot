import Battery from "gi://AstalBattery"

const battery = Battery.get_default()

print(battery.percentage)