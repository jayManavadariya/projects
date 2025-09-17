"use client"
import React, { ChangeEvent, useState } from 'react';

interface User {
  name: string;
  age: number;
  city: string;
}

const userData: User[] = [
  { name: "john", age: 20, city: "surat" },
  { name: "doe", age: 25, city: "bhuj" },
  { name: "carl", age: 52, city: "vapi" },
  { name: "xavier", age: 35, city: "surat" },
  { name: "tom", age: 40, city: "vapi" },
];

const Search_filter = () => {
  const [nameSearch, setNameSearch] = useState<string>('');
  const [cityFilter, setCityFilter] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'' | 'asc' | 'desc'>('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameSearch(e.target.value);
  };

  const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCityFilter(e.target.value);
  };
  const cities = Array.from(new Set(userData.map(user => user.city)));

  const filteredAndSortedUsers = userData
    .filter(user => user.name.toLowerCase().includes(nameSearch.toLowerCase()))
    .filter(user => (cityFilter ? user.city === cityFilter : true))
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.age - b.age;
      }
      if (sortOrder === 'desc') {
        return b.age - a.age;
      }
      return 0; 
    });

  return (
    <div>
      <div className='flex mb-5 gap-10'>
        <input
          type="text"
          placeholder="Search by name..."
          value={nameSearch}
          onChange={handleNameChange}
        />

        <select title='city' value={cityFilter} onChange={handleCityChange}>
          <option value="" className='text-black'>Filter by city</option>
          {cities.map((city) => (
            <option key={city} value={city} className='text-black'>{city}</option>
          ))}
        </select>

        <button type='button' onClick={() => setSortOrder('asc')}>Age-Asc</button>
        <button type='button' onClick={() => setSortOrder('desc')}>Age-Desc</button>
      </div>
      
      <ul>
        {filteredAndSortedUsers.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age} - {user.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search_filter;
