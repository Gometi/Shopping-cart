
export function update(text) {
  return {
    type: 'EDIT',
    payload: {...text}
  };
}

export function remove(id){
  return {
    type: 'REMOVE',
    payload: id
  };
}

export function updateModal(text) {
  return {
    type: 'UPDATE_MODAL',
    payload: { ...text }
  };
}


