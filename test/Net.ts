import Network from "gi://AstalNetwork"

const network = Network.get_default()

print(network.state)
print(network.connectivity)
print(network.primary)
print(network.wired.speed)

//print(network.client.devices)
print(network.client.hostname)
print(network.client.state)
print(network.client.version)
print(network.wired.get_icon_name())
print(network.wired.get_state())

//print(network.client.devices)


print("================")


const tmp = Network.device_state_to_string()
console.log(tmp);


//print(network.client.devices)
