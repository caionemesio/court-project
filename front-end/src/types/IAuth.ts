interface IProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: ("admin" | "user")[];
}
interface IUser {
  role: "admin" | "user";
  name: string;
}

interface IAuthContextType {
  user: IUser | null;
  login: (userData: IUser, token: string) => void;
  logout: () => void;
}
interface ISessionData {
  user: IUser;
  token: string;
}

export type { IProtectedRouteProps, IAuthContextType, IUser, ISessionData };
