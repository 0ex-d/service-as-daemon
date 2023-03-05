const { setTimeout } = require('timers/promises');
const osUtils = require('os-utils');

const envVar = process.env;

const currentTs = () => {
    return Math.floor(Date.now() / 1000);
};

const cLog = console.log;

const runService = async () => {
    const runsStartMs = currentTs();
    cLog(`Instance Id: ${envVar.LaunchInstanceID}`);
    cLog(`Redis Connection : ${envVar.REDIS_CONNECTION_STRING}`);
    cLog(`Instance Port : ${envVar.PORT}`);
    cLog(`Provider : ${envVar.PROVIDER}`);

    cLog(`Finished running! took ${currentTs() - runsStartMs} secs. Next run is in ${envVar.FREQUENCY_SECONDS} seconds`);

    // Print the current memory usage
    cLog(`System OS type: ${osUtils.platform()}`);
    cLog(`Memory usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);

    // Print the current CPU usage
    osUtils.cpuUsage((cpuUsage) => {
        cLog(`CPU usage: ${cpuUsage.toFixed(2)}%`);
    });

    await setTimeout(envVar.FREQUENCY_SECONDS * 1000);
    await runService();
};

runService();
