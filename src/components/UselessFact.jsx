import {useState, useEffect} from "react";

export default function UselessFact() {
  const [randomFact, setRandomFact] = useState("");
  const [source, setSource] = useState();

  useEffect(() => {
    const getFact = async () => {
      let response = await fetch(
        "https://uselessfacts.jsph.pl/api/v2/facts/random"
      );
      let data = await response.json();
      setRandomFact(data.text);
      setSource(data.source_url);
    }
    getFact(); //run the async function we just defined
  }, []); //empty square brackets are an empty dependency array

  //conditional rendering
  let sourceDiv = <div>Unknown source</div>;
  if (source) {
    sourceDiv = <div><em>{source}</em></div>;
  }
  return (
    <div>
      <h2>Today's random useless fact</h2>
      <div>{randomFact}</div>
      {sourceDiv}
    </div>
  );
}