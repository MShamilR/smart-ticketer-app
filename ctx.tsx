import { useContext, createContext, type PropsWithChildren } from "react";
import { useAuthState, useUserState } from "./store/useStorageState";

const AuthContext = createContext<{
  signIn: (
    token: string,
    refreshToken: string,
    user: { id: string; name: string; email: string }
  ) => void;
  signOut: () => void;
  session?: string | null;
  user?: { id: string; name: string; email: string } | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  user: null,
  isLoading: false,
});

// Hook to access session info
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }
  return value;
}

// Session Provider
export function SessionProvider({ children }: PropsWithChildren) {
  const [[isAuthLoading, auth], setAuth] = useAuthState();
  const [[isUserLoading, user], setUser] = useUserState();

  const isLoading = isAuthLoading || isUserLoading;

  const signIn = (
    token: string,
    refreshToken: string,
    user: { id: string; name: string; email: string }
  ) => {
    setAuth({ token, refreshToken });
    setUser(user);
  };

  const signOut = () => {
    setAuth(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        session: auth?.token || null,
        user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
