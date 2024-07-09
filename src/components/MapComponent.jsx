import  { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import axios from 'axios';



const RecenterMap = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position, map.getZoom(), { animate: true });
  }, [position, map]);
  return null;
};

const MapComponent = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default coordinates (London)
  const [locationData, setLocationData] = useState(''); 
  const [ip, setIp] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGeolocation = async () => {
      if (!ip) return;

      try {
        const response = await axios.get(`http://ip-api.com/json/${ip}`);
        const data = response.data;
        console.log(data);
        if (data.status === "success") {
          setPosition([data.lat, data.lon]);
          setLocationData(data)
          setError(null);
        } else {
          setError("Unable to fetch location. Please check the IP address.");
        }
      } catch (error) {
        setError("Error fetching geolocation data.");
      }
    };

    fetchGeolocation();
  }, [ip]);

  const handleSearch = (event) => {
    event.preventDefault();
    setIp(event.target.ip.value);
  };

  return (
    <div className='h-screen bg-topBg bg-cover flex flex-col items-center  '>
       <h1 className='pt-20 text-2xl text-white' >IP Address Tracker</h1>
        <div className=''>
        <form onSubmit={handleSearch} className=' pb-24 pt-6 flex flex-col justify-center items-center w-screen px-10 '>

        <div className='bg-Very-Dark-Gray rounded-lg w-full desktop:w-[90%] flex justify-between'>
        <input type="text" name="ip" required className='rounded-s-lg h-12 w-full text-center '/>
       
       <button type="submit" className='px-4  w-20 flex justify-center items-center rounded-e-lg'>
           <img src="/images/icon-arrow.svg" alt="search" />
       </button>
        </div>
      </form>
      {error && <p className='text-red-500 absolute top-52  w-full text-center'>{error}</p>}
        </div>
      
        <div className='bg-white  absolute desktop:min-h-16 font-bold tracking-widest flex flex-col desktop:flex-row  gap-4 desktop:gap-20 justify-center items-center z-10   top-52  desktop:top-60 px-12 py-4 w-[80%] rounded-lg shadow-md'>
            <div className='text-center'>
            <p className='text-Dark-Gray text-xs '>IP ADDRESS</p>
            <p>{locationData.query ? locationData.query: ""}</p> 
            </div>
            <div className='text-center'>
            <p className='text-Dark-Gray text-xs font-bold'>LOCATION</p>
            <p>{locationData.countryCode && locationData.city ? locationData.countryCode+ ' , '+ locationData.city: ""} </p>
            </div>
            <div className='text-center'>
            <p className='text-Dark-Gray text-xs font-bold'>TIMEZONE</p>
            <p>{locationData.timezone? locationData.timezone: ""}</p>

            </div>
           <div className='text-center'>
           <p className='text-Dark-Gray text-xs font-bold'>ISP</p>
            <p>{locationData.isp? locationData.isp: ""}</p>

           </div>
          
           
            
        </div>
        <div className='z-0 w-full h-screen '>
       
      <MapContainer center={position}  zoom={13} style={{ height: "600px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Coordinates: {position[0]}, {position[1]}
          </Popup>
        </Marker>
        <RecenterMap position={position} />
      </MapContainer>
        </div>
     
      
    </div>
  );
};

export default MapComponent;
