import { useState } from "react";
import './css/Money.css'

function NOKConverter() {
  const [USD, setUSD] = useState('');
  const [NOK, setNOK] = useState('');

    const convertToInches = () => {
        // Convert centimeters to inches (1 cm = 0.393701 inches)
        const inchesValue = parseFloat(cm) * 0.393701;
        setInches(inchesValue.toFixed(2)); // Round to 2 decimal places
    };


    return (
        <div>
            <input
                type="text"
                value={cm}
                onChange={(e) => setCm(e.target.value)}
                placeholder="Enter length in cm"
            />
            <button onClick={convertToInches}>Convert to Inches</button>
            {inches && <p>{`${cm} cm is equal to ${inches} inches`}</p>}
        </div>
    );
}

export default USAConverter;

function USAConverter() {
    const [USD, setUSD] = useState('');
    const [NOK, setNOK] = useState('');
  
      const convertToInches = () => {
          // Convert centimeters to inches (1 cm = 0.393701 inches)
          const inchesValue = parseFloat(cm) * 0.393701;
          setInches(inchesValue.toFixed(2)); // Round to 2 decimal places
      };
  
  
      return (
          <div>
              <input
                  type="text"
                  value={cm}
                  onChange={(e) => setCm(e.target.value)}
                  placeholder="Enter length in cm"
              />
              <button onClick={convertToInches}>Convert to Inches</button>
              {inches && <p>{`${cm} cm is equal to ${inches} inches`}</p>}
          </div>
      );
  }
  
  export default USAConverter;


  
  function NOKConverter() {
    const [USD, setUSD] = useState('');
    const [NOK, setNOK] = useState('');
  
      const convertToInches = () => {
          // Convert centimeters to inches (1 cm = 0.393701 inches)
          const inchesValue = parseFloat(cm) * 0.393701;
          setInches(inchesValue.toFixed(2)); // Round to 2 decimal places
      };
  
  
      return (
          <div>
              <input
                  type="text"
                  value={cm}
                  onChange={(e) => setCm(e.target.value)}
                  placeholder="Enter length in cm"
              />
              <button onClick={convertToInches}>Convert to Inches</button>
              {inches && <p>{`${cm} cm is equal to ${inches} inches`}</p>}
          </div>
      );
  }
  
  export default NOKConverter;

  function NOKConverter() {
    const [USD, setUSD] = useState('');
    const [NOK, setNOK] = useState('');
  
      const convertToInches = () => {
          // Convert centimeters to inches (1 cm = 0.393701 inches)
          const inchesValue = parseFloat(cm) * 0.393701;
          setInches(inchesValue.toFixed(2)); // Round to 2 decimal places
      };
  
  
      return (
          <div>
              <input
                  type="text"
                  value={cm}
                  onChange={(e) => setCm(e.target.value)}
                  placeholder="Enter length in cm"
              />
              <button onClick={convertToInches}>Convert to Inches</button>
              {inches && <p>{`${cm} cm is equal to ${inches} inches`}</p>}
          </div>
      );
  }
  
  export default NOKConverter;



