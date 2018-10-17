const initialState = {
  count: 0
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      var newState = { ...state };
      newState.count++;
      return newState;
    case "DECREMENT":
      var newState = { ...state };
      newState.count--;
      return newState;
    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer);

function currentState() {
  let currentState = store.getState();
  $("#counter").text(currentState.count);
}

$(document).ready(function() {
  currentState();
  $("#increment").on("click", function() {
    store.dispatch({
      type: "INCREMENT"
    });
    currentState();
  });
  $("#decrement").on("click", function() {
    store.dispatch({
      type: "DECREMENT"
    });
    currentState();
  });
});
