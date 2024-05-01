import { createLogger, transports, format } from 'winston';

export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.colorize(),
    format.printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level} : ${message}`;
    }),
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: 'error.log',
      level: 'error',
    }),
    new transports.File({ filename: 'combined.log' }),
  ],
});
