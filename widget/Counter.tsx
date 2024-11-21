import { Variable, bind } from "astal"

export default function Counter() {
    const count = Variable(0)
    function increment() {
        count.set(count.get() + 1)
        console.log(count.get().toString())
        let num:String = count.get().toString()
        return <box>
            {num.toString()}
        </box>
    }
    
    return <box>
        <label label={bind(count).as(num => num.toString())} as/>
        <button onClicked={increment}>
            {bind(count).as(num => num.toString())}
        </button>
    </box>
}

