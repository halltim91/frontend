import { useState, useEffect, ReactElement } from "react";
import axios from "axios";
import { CharacterCard, EmptyCard } from "../components/CharacterCard";

export default function Search() {
  const [name, setname] = useState<string>("");
  const [data, setdata] = useState([]);
  const [cardlist, setcardlist] = useState([] as ReactElement[]);

  //retrieves the character list
  useEffect(() => {
    axios
      .get("https://thronesapi.com/api/v2/Characters")
      .then((resp) => {
        setdata(resp.data);
      })
      .catch((err) => {
        console.log("Error:\n" + err);
      });
  }, []);

  function onClick() {
    const temp = [];
    if (name.trim().length > 0) {
      for (let i = 0; i < data.length; i++) {
        const c: { fullName: string; imageUrl: string; image: string } =
          data[i];
        if (c.fullName.toLowerCase().includes(name.trim().toLowerCase())) {
          temp.push(
            <CharacterCard
              name={c.fullName}
              img={c.imageUrl}
              alt={c.image}
              key={i}
            />
          );
        }
      }
      if (temp.length === 0) temp.push(<EmptyCard />);
    }
    setcardlist(temp);
  }

  return (
    <div className="container d-flex flex-column pt-5 align-items-center">
      <h1 className="ms-5">Search</h1>
      <label className="ms-5 mb-3" htmlFor="nameinput">
        Enter the name of a GoT Character to look up
      </label>
      <input
        className="ms-5 mb-3 p-1 rounded"
        type="text"
        id="nameinput"
        onChange={(e) => setname(e.target.value)}
      />
      <button
        className="ms-5 btn text-light bg-dark"
        id="searchbtn"
        onClick={onClick}
      >
        Search
      </button>
      <div className="d-flex flex-column p-5">{cardlist}</div>
    </div>
  );
}
