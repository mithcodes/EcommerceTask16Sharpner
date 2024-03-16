import { createContext, useReducer } from "react";
import cartReducer from "./CartReducer";
import { useContext } from "react";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];


const eventsArray = [
  { date: "July 26", city: "New York", venue: "Obama Theatre" },
  { date: "August 10", city: "Los Angeles", venue: "Hollywood Stadium" },
  { date: "September 5", city: "Chicago", venue: "Windy City Hall" },
  {
    date: "October 18",
    city: "San Francisco",
    venue: "Golden Gate Auditorium",
  },
  { date: "November 2", city: "Miami", venue: "Sunshine Arena" },
  { date: "December 12", city: "Seattle", venue: "Space Needle Pavilion" },
  { date: "January 8", city: "Boston", venue: "Harvard Arts Center" },
  { date: "February 14", city: "Austin", venue: "Live Music Hall" },
  { date: "March 22", city: "Denver", venue: "Mile High Stadium" },
  { date: "April 30", city: "Nashville", venue: "Country Music Palace" },
];

const initialState = {
  products: productsArr,
  cart: [],
  tours: eventsArray,
};

const AppContext = createContext();
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export default Context;
export const AppState = () => {
  return useContext(AppContext);
};