export default {
  post: async (path: string, data?: any): Promise<any> => {
    if (path === '/auth') {
      const token = 'token';
      const user = {};

      return { token, user };
    }

    return { error: 'Authentication failed' };
  },

  setHeader(header: string): void {
    console.log('Authentication token set in Request header');
  },
};
