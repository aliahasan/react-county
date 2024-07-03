/* eslint-disable react/prop-types */

const Country = ({country , onRemoveCountry}) => {
   
    const handleRemove =  (name) =>{
        onRemoveCountry(name)
    }
    return (
       <div>
         <section className="country">
          <img className="flag" src={country.flags.png} alt={country.name.common} />
          <h3>Name : {country.name.common}</h3>
          <h3>Population : {country.population}</h3>
          <h3>Capital : {country.capital}</h3>
          <h3>Area : {country.area}</h3>
          <div>
            <button onClick={() => handleRemove(country.name.common)}
            className="btn"
            >Remove</button>
          </div>
        </section>
       </div>
    );
};

export default Country;