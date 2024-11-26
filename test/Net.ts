import Network from "gi://AstalNetwork"

const network = Network.get_default()

print(network.state)
print(network.connectivity)
print(network.primary)
print(network.wired.speed)
print(network.wired.device.name)
print(network.wired.speed)
