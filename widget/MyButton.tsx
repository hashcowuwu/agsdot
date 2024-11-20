
function MyButton(): JSX.Element {
    let count:number = 1;
    return <button onClick={{count = count + 1}} >
        <label label={{count}}></label>
    </button>
}

export default MyButton;