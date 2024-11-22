import {  Gtk } from "astal/gtk3"
import { execAsync } from "astal"

export default function Hello() {

  function changeWallpaper() {
    execAsync(["bash", "-c", "/home/$USER/code/agsdot/lib/changeWallpaper.py"])
    .then((out) => console.log(out))
    .catch((err) => console.error(err))
  }
  return <button
  onClicked={changeWallpaper}
  halign={Gtk.Align.CENTER} >
  ♥️
  </button>
}
