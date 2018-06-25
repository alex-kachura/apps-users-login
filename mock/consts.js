export const MOCK_STATE = {
  apps: {
    isFetching: false,
    isPosting: false,
    items: [{
      created: '2018-01-31T16:21:24.001Z',
      id: '7964112f-c961-4fd4-8754-30dcd8cd1863',
      logo: 'http://lorempixel.com/48/48/animals',
      name: 'Ergonomic Wooden Chair',
    }],
  },
  errorMessage: null,
  profile: {
    isChecking: false,
    isLoggedIn: true,
    isPosting: false,
  },
  users: {
    byAppId: {
      '7964112f-c961-4fd4-8754-30dcd8cd1863': {
        hasMore: true,
        items: [{
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/pehamondello/128.jpg',
          email: 'Maia.Kulas91@yahoo.com',
          id: '08763df3-d738-4f03-addc-6ab8379e48ce',
          name: 'Herminia Ortiz Ms.',
        }],
        offset: 0,
      },
    },
    isFetching: false,
  },
}
