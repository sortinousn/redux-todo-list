export const loadFromStorageToState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (!serializedState) return [];
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Attempt to save state to local storage, log error if it doesn't work
export const saveToStorageFromState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error("LocalStorage Error: ", err);
  }
};
