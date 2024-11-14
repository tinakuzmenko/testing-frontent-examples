import { useState } from 'react';

const ThemeSwitch = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme(prevTheme => !prevTheme);
  };

  return (
    <div className="ExampleContainer">
      <h2>Example 1 - Theme switch</h2>
      <div className={`Wrapper ${isLightTheme ? 'LightTheme' : 'DarkTheme'}`}>
        <div className="SwitchWrapper">
          Light
          <label className="Switch">
            <input onChange={toggleTheme} type="checkbox" />
            <span className="Slider"></span>
          </label>
          Dark
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
