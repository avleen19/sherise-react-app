import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CitySelect, CountrySelect, StateSelect } from "react-country-state-city";
import './EmploymenthtmlForm.css';

const EmploymenthtmlForm = () => {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);

  const [htmlFormData, setHtmlFormData] = useState({
    name: '',
    add: '',
    contact: '',
    age: '',
    qualifications: '',
    area: 'Option 1',
    work: 'Option 1'
  });

  const handleChange = (e) => {
    if (!e || !e.target) return;
    const { name, value, type } = e.target;

    setHtmlFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  return (
    <div className='page'>
      <h2 className='head'>Employment Opportunities</h2>
      <form onSubmit={handleSubmit}>
        <div className='form'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={htmlFormData.name} onChange={handleChange} required />
          <label htmlFor="add">Address:</label>
          <input type="text" id="add" name="add" value={htmlFormData.add} onChange={handleChange} required />
          <label htmlFor="contact">Contact:</label>
          <input type="text" id="contact" name="contact" value={htmlFormData.contact} onChange={handleChange} required />
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={htmlFormData.age} onChange={handleChange} required />
          <label htmlFor="qualifications">Qualifications:</label>
          <input type="text" id="qualifications" name="qualifications" value={htmlFormData.qualifications} onChange={handleChange} required />

          <div className="select-container">
            <label htmlFor="country">Country:</label>
            <CountrySelect
                onChange={(e) => {
                    setCountryid(e.id);
                }}
                placeHolder="Select Country"
            />
          </div>

          <div className="select-container">
            <label htmlFor="state">State:</label>
            <StateSelect
                countryid={countryid}
                onChange={(e) => {
                    setstateid(e.id);
                }}
                placeHolder="Select State"
            />
          </div>

          <div className="select-container">
            <label htmlFor="city">City:</label>
            <CitySelect
                countryid={countryid}
                stateid={stateid}
                onChange={(e) => {
                    console.log(e);
                }}
                placeHolder="Select City"
         />
          </div>

          <div className="flex-container">
            <div id="area-container">
              <label htmlFor="area">Areas of work:</label>
              <select id="area" name="area" value={htmlFormData.area} onChange={handleChange}>
                <option value="Option 1">Education</option>
                <option value="Option 2">Handicraft and cottage industries</option>
                <option value="Option 3">Health</option>
              </select>
            </div>

          </div>

          <input type="submit" value="Submit" className='submit' />
        </div>
      </form>
    </div>
    
  );
};

export default EmploymenthtmlForm;