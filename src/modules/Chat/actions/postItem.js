import firebase from 'firebase';

function postItem({ state, input }) {
  // const {body} = input;
  const uid = state.get('login.user.uid');
  const displayName = state.get('login.user.displayName');
  const body = 'Teste 123';
  // services.firebase.onValue('some_data', 'chat.dataReceived');

  const postData = {
    uid,
    displayName,
    body,
  };

  // Get a key for a new Post.
  const newPostKey = firebase.database().ref().child('list').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/items/' + newPostKey] = postData;
  updates['/user-items/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

export default postItem;
