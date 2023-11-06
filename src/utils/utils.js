export function sleep(delay) {
  return new Promise((resolve) =>
    setTimeout(
      resolve,
      delay * 1000
    )
  );
}
