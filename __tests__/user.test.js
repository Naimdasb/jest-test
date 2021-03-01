jest.mock('../request');

const getUserName = require('../user')

// The assertion for a promise must be returned.
it('works with promises', async () => {
  const userID = 2
  try {
    const data = await getUserName(userID)
    expect(data).toBe('Mark')
  } catch(error) {
    expect(error).toEqual({
      error: 'User with ' + userID + ' not found.',
    })
  }
});