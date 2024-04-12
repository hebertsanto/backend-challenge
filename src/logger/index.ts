import { createLogger, transports, format } from 'winston';

export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.colorize(),

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    format.printf(({ level, message, timestamp, pid } : any) => {
      pid = process.pid;

      return `${timestamp} ${level}:(${pid}) : ${message}`;
    }),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
  ],
});
