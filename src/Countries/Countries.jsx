import useFetch from "../HOOKS/useFetch";
import Country from "./Country";

const Countries = () => {
  const url = "https://restcountries.com/v3.1/all";
  const { data, loading, error } = useFetch(url);
  return (
    <div>
      <div>
        <p> {loading && loading}</p>
        <p> {error && error}</p>
        {data &&
          data.slice(0,100).map((country , index) => (
            <Country key={index} country={country} index  ={index + 1}></Country>
          ))}
      </div>
    </div>
  );
};

export default Countries;
