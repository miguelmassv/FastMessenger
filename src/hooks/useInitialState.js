import { useState, useEffect } from "react";

const useInitialState = API => {
  const [services, setServices] = useState({ services: [] });

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setServices(data));
  }, []);
  return services;
};

export default useInitialState;
