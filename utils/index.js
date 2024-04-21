module.exports = {
    updatePlayerCount: (client, seconds) => {
        const interval = setInterval(function setStatus() {
            //> 20 player(s)
            let status = `${GetNumPlayerIndices()} player(s)`
            client.user.setActivity(status, {type: "WATCHING"})
            return setStatus
        }(), seconds * 1000) // Every 1000 is eaqual to 5 seconds (the player count is set to 5 seconds by default) you can change this if needed
    }
}