import { Variable, GLib, bind } from "astal"


export default function Time2({ format = "%H:%M - %A %e." }) {
    const time = Variable<string>("").poll(1000, () =>
        GLib.DateTime.new_now_local().format(format)!)
    return  <label
        className="Time"
        onDestroy={() => time.drop()}
        label={time()}
    />
}
