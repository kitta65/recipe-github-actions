const core = require("@actions/core")

const input = core.getInput("message")
console.log(`The input is ${input}`)
