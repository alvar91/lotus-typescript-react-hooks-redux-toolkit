export const formatTime = (seconds: number) => {
  return [
    Math.floor(seconds / 3600),
    Math.floor(seconds / 60) % 60,
    seconds % 60,
  ]
    .join(":")
    .replace(/\b(\d)\b/g, "0$1");
};
