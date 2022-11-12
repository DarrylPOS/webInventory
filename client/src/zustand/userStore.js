import create from "zustand";
import axios from "axios";

const API = axios.create({ baseURL: "https://web--end.herokuapp.com/user/" });
// const API = axios.create({ baseURL: "http://localhost:5000/user/" });

export const useLogStore = create((set) => ({
  user: [],
  isLoading: false,
  isError: false,

  logIn: async (formData, navigate) => {
    set({ isLoading: true });
    try {
      const { data } = await API.post("/signin", formData);
      localStorage.setItem("profile", JSON.stringify({ ...data }));
      set((state) => ({ user: [data, ...state.user] }));
      navigate("/record");
    } catch (err) {
      console.log(err.message);
      alert(err.message)
    }
    set({ isLoading: false });
  },

  signUp: async (formData, navigate) => {
    console.log(formData);
    set({ isLoading: true });
    try {
      const { data } = await API.post("/signup", formData);
      set((state) => ({ user: [data, ...state.user] }));
      localStorage.setItem("profile", JSON.stringify({ ...data }));
      navigate("/record");
    } catch (err) {
      console.log(err.message);
      alert(err.message)
    }
    set({ isLoading: false });
  },

  logOut: (navigate) => {
    set({ isLoading: true });
    try {
      console.log("logout");
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
    set({ isLoading: false });
  },


}));
