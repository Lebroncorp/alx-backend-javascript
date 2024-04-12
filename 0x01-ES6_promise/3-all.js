import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  // Call the uploadPhoto function to upload the user's photo then chain all
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((userResp) => {
      console.log(`${userResp[0].body} ${userResp[1].firstName} ${userResp[1].lastName}`);
    })
    .catch(() => {
      // In the event of an error, log Signup system offline to console
      console.log('Signup system offline');
    });
}
