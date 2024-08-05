import {useEffect, useState} from "react";
import axios from "axios";

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

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  // ...

  const create = async (resource) => {
    const resp = await axios.post(baseUrl, resource);
    setResources(resources.concat(resp.data));
  };

  useEffect(() => {
    baseUrl && axios.get(baseUrl).then((res) => setResources(res.data));
  }, [baseUrl]);
  const service = {
    create,
  };

  return [resources, service];
};
