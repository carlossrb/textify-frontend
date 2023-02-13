import { createContext, useContext, useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};
sessionStorage.getItem;
const initState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  signed: false,
};

type UserContextMethods = {
  login: () => void;
  logout: () => void;
  signup: (params: { username: string; password: string; email: string }) => void;
};

type AuthContextValue = {
  user: {
    name: string;
    email: string;
  };
  token: string;
  signed: boolean;
  methods: UserContextMethods;
};

export const useAuth = (): AuthContextValue => {
  return useContext(AuthContext);
};
const AuthContext = createContext<AuthContextValue>({} as never);

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<Omit<AuthContextValue, 'methods'>>(initState);
  const methods: UserContextMethods = {
    login() {
      setAuth({
        ...auth,
        signed: true,
      });
    },

    signup(params) {
      setAuth({
        ...auth,
        signed: true,
      });
    },

    logout() {
      setAuth({
        ...initState,
      });
      sessionStorage.removeItem('@App:user');
    },
  };

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    if (storagedUser) {
      setAuth(JSON.parse(storagedUser));
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        ...auth,
        methods,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
