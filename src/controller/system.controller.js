import catchAsync from "../utils/catchAsync.js";
import * as os from "os";

export const test = catchAsync(async (req, res) => {
  const { body, method } = req;
  res.status(201).json({ method, data: body });
});

export const healthCheck = catchAsync(async (req, res) => {
  const totalMem = os.totalmem();
  const memProc = process.memoryUsage();
  const freemMem = os.freemem();
  const healthCheck = {
    message: "OK",
    uptime: `${Math.floor(process.uptime())} seconds`,
    responseTime: process.hrtime(),
    memory: {
      processMemory: memProc,
      systemMemory: {
        free: freemMem,
        total: totalMem,
        percentFree: Math.round((freemMem / totalMem) * 100),
      },
    },
    currentUser: os.userInfo(),
    network: os.networkInterfaces(),
    os: {
      platform: process.platform,
      version: os.release(),
      totalMemory: os.totalmem(),
      uptime: os.uptime(),
      applicationVersion: process.version,
      nodeDependencyVersions: process.versions,
    },
    cpus: os.cpus(),
  };
  res.status(200).send(healthCheck);
});
