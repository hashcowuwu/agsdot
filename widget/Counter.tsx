import { Variable, bind } from "astal"

export default function Counter() {
    const count = Variable(0)
    function increment() {
        count.set(count.get() + 1)
    }
    
    return <box>
        <label label={bind(count).as(num => num.toString())} as/>
        <button onClicked={increment}>
            {bind(count).as(num => num.toString())}
        </button>
    </box>
}

