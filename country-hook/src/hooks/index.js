import axios from "axios";
import {useEffect, useState} from "react";

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};
export const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (name) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
        .then((res) => setCountry({...res, found: true}))
        .catch((err) => setCountry({found: false}));
    }

    return () => {
      setCountry(null);
    };
  }, [name]);

  return country;
};
