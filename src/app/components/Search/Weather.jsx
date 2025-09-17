"use client";
import React, { useEffect, useState } from "react";

const LoadingSpinner = () => (
  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
);

const Weather = () => {
  const [input, setInput] = useState("");
  const [debounce, setDebounce] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handler = setTimeout(() => setDebounce(input), 500);
    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  useEffect(() => {
    const fetchData = async () => {
      if (debounce) {
        setIsLoading(true);
        setError(null);
        try {
          const responce = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=ab491a5d55be4fe2bda61912251609&q=${input}&aqi=no`
          );
          const data = await responce.json()
          console.log(data);
          
          if (data.error) {
            setError(data.error);
            setData(null);
          } else {
            setData(data);
          }
        } catch (error) {
          console.error("Error:", error);
          setError("Some data fetching Error...");
        } finally {
          setIsLoading(false);
        }
      } else {
        setData(null);
      }
    };
    fetchData();
  }, [debounce]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 font-sans text-gray-800">
      <h1 className="text-4xl font-light mb-8 text-gray-900 tracking-wide">Weather Forecast</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={handleChange}
        className="w-full max-w-sm p-4 text-center text-lg bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300"
      />

      <div className="mt-8 text-center min-h-[150px]">
        {isLoading && <LoadingSpinner />}
        {error && !isLoading && (
          <p className="text-red-500 font-medium">{error}</p>
        )}
        {data && !isLoading && (
          <div className="mt-8 w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg border border-gray-200 animate-fade-in">
            <p className="text-xl font-semibold mb-2">{data.location.name}</p>
            <p className="text-sm text-gray-500 mb-4">{data.location.region}, {data.location.country}</p>
            <div className="flex flex-col items-center">
              <img
                src={data.current.condition.icon}
                alt={data.current.condition.text}
                className="w-20 h-20 mb-4"
              />
              <p className="text-6xl font-thin mb-2">{data.current.temp_c}°C</p>
              <p className="text-gray-600 font-medium mb-6">{data.current.condition.text}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 border-t border-gray-200 pt-4">
              <div className="flex flex-col items-center border-r border-gray-200 pr-2">
                <p className="font-semibold">Humidity</p>
                <p>{data.current.humidity}%</p>
              </div>
              <div className="flex flex-col items-center pl-2">
                <p className="font-semibold">Wind</p>
                <p>{data.current.wind_kph} kph</p>
              </div>
            </div>
          </div>
        )}

        {!data && !isLoading && !error && input && (
          <p className="text-gray-500 mt-8">No results found for that city.</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
