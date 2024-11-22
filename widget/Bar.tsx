import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import { Variable } from "astal"
import BatteryPercentage from "./BatteryPercentage"
import BatteryLevel from "./BatteryLevel.tsx";
import Counter from "./Counter"
import Time from "./Time.tsx"
import  Hello  from "./Hello.tsx";

const time = Variable("").poll(1000, "date")

export default function Bar(gdkmonitor: Gdk.Monitor) {
    return <window
        className="Bar"
        gdkmonitor={gdkmonitor}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        anchor={Astal.WindowAnchor.TOP
            | Astal.WindowAnchor.LEFT
            | Astal.WindowAnchor.RIGHT}
        application={App}>
        <centerbox>
            <Hello /> 
            <BatteryLevel />
            <Time />
            <box />
            {/* <button
                onClick={() => print("hello")}
                halign={Gtk.Align.CENTER} >
                <label label={time()} />
            </button> */}
            {/* <Counter /> */}
        </centerbox>
    </window>
}
