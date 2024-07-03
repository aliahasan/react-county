import { useEffect, useState } from "react";
import Country from "../Countries/Country";
import Search from "../Search";

const FetchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const url = "https://restcountries.com/v3.1/all";

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setAllCountries(data);
      setLoading(false);
      setError("");
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const updateCountry = countries.filter(
      (country) => country.name.common !== name
    );
    setCountries(updateCountry);
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = allCountries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setCountries(newCountries);
  };

  return (
    <div>
      <div className="search">
        <Search onSearch={handleSearch}></Search>
      </div>
      <section className="countries">
        {loading && <h2>Loading</h2>}
        {error && <h2>{error.message}</h2>}
        {countries &&
          countries.map((country, index) => (
            <Country
              key={index}
              country={country}
              onRemoveCountry={handleRemoveCountry}
            ></Country>
          ))}
      </section>
    </div>
  );
};

export default FetchCountry;
