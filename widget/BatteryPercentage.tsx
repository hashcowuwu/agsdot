import Battery from "gi://AstalBattery"
import { bind } from "astal"

function BatteryPercentage() {
    const bat = Battery.get_default()
    return <label label={bind(bat, "percentage").as((p) => p * 100 + " %")} /> 
}


export default BatteryPercentage;
