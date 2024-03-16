import { AppState } from "../context/Context";
import "../App.css";
import Footer from "../components/Footer";

const Home = () => {
  const { state } = AppState();
  const tours = state.tours;

  return (
    <>
      <div className="header">The Generics</div>
      
      <div className="music">Tours</div>
      {tours.map((e) => {
        return (
          <div className="tour">
            <div className="tourData">{e.date}</div>
            <div className="tourData">{e.city}</div>
            <div className="tourData">{e.venue}</div>
            <div className="tourData">
              <button className="tour_btn">Book Tickets</button>
            </div>
          </div>
        );
      })}
      <Footer />
    </>
  );
};
export default Home;