import {useDispatch} from "react-redux";
import userService from "../services/user";
import {setUser} from "../reducers/userReducer";

const useUser = () => {
  const dispatch = useDispatch();

  const setCurrentUser = () => {
    const token = window.localStorage.getItem("token-blog");
    if (token) {
      userService.setToken(token);
      userService.currentUser().then((resp) => {
        dispatch(setUser(resp.data.user));
      });
    }
  };
  return {
    setCurrentUser,
  };
};

export default useUser;
