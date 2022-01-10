import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

//API URL
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    //When the user click the button, filter api data
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    //When fetching api, set Loading true
    setLoading(true);
    try {
      //Try to fetch data
      const res = await fetch(url);
      const tours = await res.json();
      //setLoading false when it's done
      setLoading(false);
      //set Tours when it's done
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    //Fetch tours when the page first load
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  //If there's no tour element
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
