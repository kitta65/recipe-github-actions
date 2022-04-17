const core = require("@actions/core")

const input = core.getInput("log-message")
console.log(`The input is ${input}`)
