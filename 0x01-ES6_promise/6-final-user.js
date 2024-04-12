import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  /**
  * when all of the provided Promises resolve or reject.
  * Takes in an array of Promises.
  * Returns a new Promise.
  */
  return Promise
    // Call the signUpUser() and uploadPhoto() functions
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    // When promises are all settled it should return array wit structures
    .then((results) => (
      results.map((out) => ({
        status: out.status,
        value: out.status === 'fulfilled' ? out.value : String(out.reason),
      }))
    ));
}
