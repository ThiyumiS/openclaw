process.stdout.write("ready\n");

// Keep the process alive
const keepAlive = setInterval(() => {}, 1000);

const shutdown = () => {
  clearInterval(keepAlive);
  process.exit(0);
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
