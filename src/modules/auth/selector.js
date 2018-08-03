export const errorParser = message => {
  if (message.password && message.email) return `password: ${message.password},\n email: ${message.email}`;
  else if (message.password) return `password: ${message.password}`;
  else if (message.email) return `email: ${message.email}`;
  else return message;
};
export const getIsAuthorized = state => state.auth.isAuthorized;
export const getLogginError = state => state.auth.isAuthorized;
export const getRegistrationError = state => state.auth.isAuthorized;
