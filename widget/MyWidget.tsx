function MyWidget() {
    const labels = [
        "label1",
        "label2",
        "label3"
    ]

    return <box>
        {labels.map(label => (
            <label label={label} />
        ))}
    </box>
}