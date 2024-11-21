import { Variable, bind } from "astal"

export default function Counter() {
    const count = Variable(0)
    let num:String = count.get().toString()
    function increment() {
        count.set(count.get() + 1)
    }
    return <box>
        <label label={bind(count).as(num => num.toString())} />
        <button onClicked={increment}>
            <label label={num}></label>
        </button>
    </box>
}

