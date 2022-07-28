import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import React from 'react';
import './index.css';
import '@reach/combobox/styles.css';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from '@reach/combobox';
import mapStyle from './mapStyle';
import { nanoid } from 'nanoid';

const libraries = ['places'];

function App() {
  const [markers, setMarkers] = React.useState([]);
  const [selectedPlace, setSelectedPlace] = React.useState(null);
  const [toggle, setToggle] = React.useState(false);
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [size, setSize] = React.useState(-450);

  let classNameMenu = 'menu';
  if (toggleMenu) {
    classNameMenu += ' expand';
  }

  let markerDetails = {
    width: '100vw',
    height: '450px',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    boxShadow: 'inset 0px 2px 45px 1px black',
    backgroundColor: '#333333f1',
    zIndex: '1000'
  };
  if (toggle) {
    markerDetails = {
      ...markerDetails,
      transform: `translateY(${size}px)`,
      transitionDuration: '0.3s'
    };
  }
  const handleMouseDown = (e) => {
    const onMouseMove = (eMove) => {
      console.log(window.innerHeight - eMove.changedTouches[0].screenY);
      const regulatedSize =
        window.innerHeight - eMove.changedTouches[0].screenY;
      if (regulatedSize < 440 && regulatedSize > 190) {
        setSize(-100);
      } else setSize(-450);
    };
    const onMouseUp = () => {
      document.body.removeEventListener('touchmove', onMouseMove);
      document.body.removeEventListener('touchcancel', onMouseUp);
    };
    document.body.addEventListener('touchmove', onMouseMove);
    document.body.addEventListener('touchend', onMouseUp, { once: true });
    document.body.addEventListener('touchcancel', onMouseUp, { once: true });
  };

  const [center, setCenter] = React.useState({
    lat: 50.041187,
    lng: 21.999121
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_KEY,
    libraries
  });
  if (!isLoaded) return <div>Loading</div>;
  return (
    <div className="container">
      <nav className={classNameMenu}>
        {/*Pójdzie w osobny komponent*/}
        <header>
          <h1>Radar.</h1>
        </header>
        <nav className="main-menu">
          <div className="menu-item">
            <i className="fa-solid fa-house"></i>
            <p>Home</p>
          </div>
          <div
            className="menu-item"
            onClick={() => setToggleMenu((prev) => !prev)}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            <p>Search</p>
          </div>
          <div className="menu-item">
            <i className="fa-solid fa-circle-info"></i>
            <p>Support</p>
          </div>
        </nav>
        <div className="menu-item-set">
          <i className="fa-solid fa-gear"></i>
          <p>Settings</p>
        </div>
        <Search switch={toggleMenu} panTo={panTo} />
      </nav>
      <main className="action-wrapper">
        <div className="map-outer-wrapper">
          <GoogleMap
            zoom={13}
            options={{ styles: mapStyle, disableDefaultUI: true }}
            mapContainerClassName="map"
            center={center}
            onLoad={onMapLoad}
            onClick={(event) => {
              setMarkers((current) => [
                ...current,
                {
                  uid: nanoid(),
                  lat: event.latLng.lat(),
                  lng: event.latLng.lng(),
                  date: new Date()
                }
              ]);
            }}
          >
            {markers.map((marker) => (
              <Marker
                key={marker.uid}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => {
                  setSelectedPlace(marker);
                  setToggle(true);
                  setCenter({ lat: marker.lat - 0.025, lng: marker.lng });
                }}
              />
            ))}
          </GoogleMap>
        </div>
        <div style={markerDetails}>
          <div className="slider-holder" onTouchStart={handleMouseDown}>
            <span onTouchStart={handleMouseDown}></span>
          </div>
          <div className="current-marked">
            <h2 className="place-name">{selectedPlace?.city}</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

function Search(props) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = getLatLng(results[0]);
      props.panTo({ lat, lng });
    } catch (err) {
      console.log(err);
    }
  };
  let className = 'search-bar';
  if (props.switch) {
    className += ' activef';
  }
  return (
    <Combobox
      onSelect={handleSelect}
      aria-labelledby="demo"
      className="search-box"
    >
      <ComboboxInput
        value={value}
        onChange={handleInput}
        disabled={!ready}
        className={className}
      />
      <ComboboxPopover className="search-list">
        <ComboboxList>
          {status === 'OK' &&
            data.map(({ place_id, description }) => {
              return <ComboboxOption key={place_id} value={description} />;
            })}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
export default App;
