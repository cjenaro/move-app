import * as React from "react";
import { User } from "../types/user";

interface Props {
  children: React.ReactNode;
}

interface AuthContext {
  user?: User;
  setUser: (user: User) => void;
}

const AuthContext = React.createContext<AuthContext | undefined>(undefined);

export function AuthProvider({ children }: Props) {
  const [user, setUser] = React.useState<User | undefined>();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error("useAuth needs to be used within AuthProvider");

  return context;
}
