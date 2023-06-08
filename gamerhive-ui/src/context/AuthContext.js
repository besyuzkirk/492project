import { createContext, useContext, useEffect, useReducer } from 'react';
import * as auth from '../api/auth';
import Loading from '../components/Loading';


const AuthContext = createContext();

const initialState = {
  token: auth.getToken(),
  isAuthenticated: false,
  user: null,
  isLoading: true,
};

function AuthProvider(props) {
  const [state, setState] = useReducer(
    (s, a) => ({ ...s, ...a }),
    initialState
  );

  const logout = () => {
    auth.logoutUser();
    setState({ ...initialState, isLoading: false });
   
    window.location.reload();
  };

  const login = async (userData) => {

    try {
      const data = await auth.loginUser(userData);
      setState({ ...data, isAuthenticated: !!data.user, isLoading: false });
      console.log(data)
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const register = async (userData) => {
    try {
      const data = await auth.registerUser(userData);
      setState({ ...data, isAuthenticated: !!data.user, isLoading: false });
      window.location.reload();
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  useEffect(() => {
    console.log("hear")
    auth
      .loadUser()
      .then(({ data }) => {
        setState({
          data,
          isLoading: false,
          isAuthenticated: !!data,
        });

      })
      .catch((err) => {
        console.error(err.response?.data?.message);
        setState({
          ...initialState,
          isLoading: false,
        });
      });
  }, []);

  if (state.isLoading) {
    
    return <Loading />;
  }


  return (
    <AuthContext.Provider
      value={{ ...state, login, register, logout }}
      {...props}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export default AuthProvider;