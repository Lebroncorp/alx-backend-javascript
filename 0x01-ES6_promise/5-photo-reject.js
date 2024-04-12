export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    // Reject the promise with an error and the formatted string
    // print filename cannot be processed
    reject(new Error(`${filename} cannot be processed`));
  });
}
