const initialState = {
  loading: false,
  messages: []
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      state = {
        ...state,
        messages: [...state.messages, action.payload]
      };
      break;
    case 'DELETE_MESSAGE':
      state = {
        ...state,
        messages: state.messages.filter(message => message.id !== action.payload)
      };
      break;
  }

  return state;
};
