export default interface User {
  id?: number | string;
  firstName?: string;
  lastName?: string;
  email?: string;
  lastVisitedAt?: number | string;
}

export const defaultUser = (): User => {
  return {};
};
