import {useState} from "react";

const MILES_TO_KM = 1.60934;
const KM_TO_MILES = 1 / MILES_TO_KM;

const UnitConverter = () => {
  const [miles, setMiles] = useState('');
  const [kilometers, setKilometers] = useState('');

  // Handle changes in the miles input
  const handleMilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setMiles(value);

    if (value === '' || isNaN(Number(value))) {
      setKilometers('');
    } else {
      const milesValue = parseFloat(value);
      setKilometers((milesValue * MILES_TO_KM).toFixed(2));
    }
  };

  // Handle changes in the kilometers input
  const handleKilometersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setKilometers(value);

    if (value === '' || isNaN(Number(value))) {
      setMiles('');
    } else {
      const kmValue = parseFloat(value);
      setMiles((kmValue * KM_TO_MILES).toFixed(2));
    }
  };

  return (
    <div className="ExampleContainer">
      <h2>Example 1 - Unit converter</h2>
      <div className='Form'>
        <div className='FormField'>
          <div className="InputField">
            <label htmlFor="milesInput">Miles: </label>
            <input
              className='Input'
              type="number"
              id="milesInput"
              value={miles}
              onChange={handleMilesChange}
              placeholder="Enter miles"
            />
          </div>
          <div className='InputField'>
            <label htmlFor="kilometersInput">Kilometers: </label>
            <input
              className='Input'
              type="number"
              id="kilometersInput"
              value={kilometers}
              onChange={handleKilometersChange}
              placeholder="Enter kilometers"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnitConverter;