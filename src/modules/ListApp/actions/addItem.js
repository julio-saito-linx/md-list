import uuid from 'uuid';

function addItem({state, output}) {
  const newId = uuid.v4();
  const newItem = {};
  newItem[newId] = {
    id: newId,
    title: state.get('listApp.newItemTitle'),
  };

  state.merge('listApp.items', newItem);
  output({id: newId});
}

export default addItem;
