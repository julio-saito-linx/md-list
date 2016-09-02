// chains
import receiveDataFromFirebase from './chains/receiveDataFromFirebase';
import deleteChildFromFirebase from './chains/deleteChildFromFirebase';
// import putItem from './chains/putItem';
import deleteItemChain from './chains/deleteItemChain';

import setBody from './chains/setBody';
import submitItemBody from './chains/submitItemBody';
import setCurrentItem from './chains/setCurrentItem';
import cancelEdit from './chains/cancelEdit';

export default module => {
  module.addState({
    items: {},
    current_item: {body: ''},
    is_saving: false,
    error: null,
  });

  module.addSignals({
    firebaseChildAdded: receiveDataFromFirebase,
    firebaseChildRemoved: deleteChildFromFirebase,
    firebaseChildChanged: receiveDataFromFirebase,

    currentItemChanged: {
      chain: setBody,
      immediate: true
    },
    currentItemSubmitted: submitItemBody,
    // updateItemTitleSubmitted: submitItemBody,
    removeItemClicked: deleteItemChain,
    itemClicked: setCurrentItem,
    editCanceled: cancelEdit,
    // removeAllItemsClicked: removeAllItems,

  });
};
