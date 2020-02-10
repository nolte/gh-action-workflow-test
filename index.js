
const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

async function main() {
    console.log("Test App")

}
main().catch((e) => core.setFailed(e.message));
