import React, { useState, useEffect } from 'react';

const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: null
}


const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: null, y: null});
  const [status, setStatus] = useState(navigator.onLine);
  const [{ latitude, longitude, speed }, setLocation] = useState(initialLocationState);

  let mounted = true;

  useEffect(() => {
    document.title = `Clicked ${count} times`
  }, [count])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeoLocation);
    const watchId = navigator.geolocation.watchPosition(handleGeoLocation);

    return () => {
      mounted = false;
      navigator.geolocation.clearWatch(watchId);
    };
  })

  const handleGeoLocation = (event) => {
    if (mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed
      })
    }
  }

  const handleOnline = () => {
    setStatus(true)
  }

  const handleOffline = () => {
    setStatus(false)
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn);
  }

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.pageX,
      y: e.pageY
    })
  }

  return (
    <React.Fragment>
      <h2>Button was clicked {count} times</h2>
      <button onClick={incrementCount}>Click Me</button>

      <h2>Toggle Light</h2>
      <img
        src={
          isOn
            ? 'https://icon.now.sh/highlight/fd0'
            : 'https://icon.now.sh/highlight/aaa'
        }

        style={{
          height: '50px',
          width: '50px',
        }}
        onClick={toggleLight}
      />

      <h2>Mouse Move</h2>
      {JSON.stringify(mousePosition, null, 2)}
      <p> x position: {mousePosition.x}</p>
      <p> y position: {mousePosition.y}</p>


      <h2>Network Status</h2>
      <p>You are <strong>{status ? 'online' : 'offline'}</strong></p>

      <h2>Geolocation</h2>
      <p>latitude: {latitude}</p>
      <p>longitude: {longitude}</p>
      <p>speed: {speed ? speed : '0'}</p>
    </React.Fragment>
  );
}

export default App;
