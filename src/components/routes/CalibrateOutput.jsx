import React from 'react';
import {useState} from 'react';
import {useLocation, Link} from 'react-router-dom';
import axios from 'axios';
import Loading from './../Loading.jsx'
import CalOutputTable from './../tables/CalOutputTable.jsx';

const CalibrateOutput = () => {
  const [output, setOutput] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const data = location.state;

  const handleSubmit = () => {
    let dropDown = document.getElementById('algorithms');
    setIsLoading(true);
    let algorithm = 'v1.2.1';

    let sensors = data.sensors.map(sensor => {
      return {
        sensor_unqiue_id: sensor.sensor_unqiue_id
      };
    })

    for (let i = 0; i < 5; i++) {
      let child = dropDown.children[i];
      if (child.selected) algorithm = child.value
    }

    let body = {
      calibration_file: data.file_name,
      algoritm_version: algorithm,
      sensors: sensors
    };

    // axios.post('/', body)
    //   .then(res => setOutput(res.data))
    //   .catch(err => console.error(err));
  };

  return (
    <div>
      <div className="alg-ctr">
        <label htmlFor="algorithms">Choose Algorithm</label>
        <select name="algorithms" id="algorithms">
          <option value="v1.2.1">v1.2.1</option>
          <option value="v1.2.2">v1.2.2</option>
          <option value="v1.2.3">v1.2.3</option>
          <option value="v1.2.4">v1.2.4</option>
          <option value="v1.2.5">v1.2.5</option>
        </select>
        <button onClick={handleSubmit} type="submit">Create</button>
        <Link to="/">
          <button>Return</button>
        </Link>
      </div>
      {isLoading ? <Loading /> : <CalOutputTable output={output}/>}
   </div>
  );
};

export default CalibrateOutput;