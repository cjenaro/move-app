import * as React from "react";
import { RawUser, User } from "../types/user";
import useLogin from "./use-login";

interface Props {
  children: React.ReactNode;
}

interface AuthContext {
  user?: User;
  setUser: (user: User) => void;
  loading?: boolean;
  logOut?: () => void;
}

const AuthContext = React.createContext<AuthContext | undefined>(undefined);

export function parseUser(raw: RawUser): User {
  return {
    name: raw.data.name,
    routines: raw.data.routines,
    dni: raw.data.dni,
    id: raw.ref["@ref"].id,
    valid: raw.data.valid,
  };
}

export function AuthProvider({ children }: Props) {
  const [user, set] = React.useState<User | undefined>();
  const [loading, setLoading] = React.useState<boolean>(false);

  function setUser(user: User) {
    const d = new Date();
    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
    document.cookie = `movelogged=${user.dni}; expires=${d.toUTCString()}`;
    set(user);
  }

  async function logUser(dni: string) {
    setLoading(true);
    const blob = await fetch("/.netlify/functions/login", {
      method: "POST",
      body: JSON.stringify({ dni: Number(dni) }),
    });
    const json = await blob.json();

    if (blob.ok && json?.data[0]) {
      set(parseUser(json.data[0]));
    }

    setLoading(false);
  }

  function logOut() {
    const decodedCookie = decodeURIComponent(document.cookie);
    const loggedCookie = decodedCookie
      .split(";")
      .find((cookie) => cookie.includes("movelogged"));

    if (!loggedCookie) return;

    const parts = loggedCookie.split("=");
    const cookieName = parts[0];
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;

    set(undefined);
  }

  React.useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const decodedCookie = decodeURIComponent(document.cookie);
    const loggedCookie = decodedCookie
      .split(";")
      .find((cookie) => cookie.includes("movelogged"));

    if (!loggedCookie) return;

    const parts = loggedCookie.split("=");
    const dniCookie = parts[1];

    logUser(dniCookie);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error("useAuth needs to be used within AuthProvider");

  return context;
}
