const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          id: Math.random(),
          name: 'facebbok/react',
          description: '...description',
          url: 'http://github.com/facebook/react',
        },
      ];

    default:
      return state;
  }
}