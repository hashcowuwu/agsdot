import { Variable, bind } from "astal"

export default function Counter() {
    const count = Variable(0)

    function increment() {
        count.set(count.get() + 1)
        console.log(count.get())
    }
    return <box>
        <label label={bind(count).as(num => num.toString())} />
        <button onClicked={increment}>
            {count.get()}
        </button>
    </box>
}

