import Battery from "gi://AstalBattery"
import { bind } from "astal"

function BatteryPercentage() {
    const bat = Battery.get_default()
    return <box> <label label={bind(bat, "percentage").as((p) => " %")} color /> </box>
}


export default BatteryPercentage;