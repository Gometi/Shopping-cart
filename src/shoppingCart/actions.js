
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

