export const logError = (error: Error, extra?: unknown) => {
  // todo use logger service
  console.error(error, extra);
};
