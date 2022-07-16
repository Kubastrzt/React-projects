import React from 'react';
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
import '../index.css';

function Search(props) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 50.041187, lng: () => 21.999121 },
      radius: 50 * 1000
    }
  });
  let className = 'search-bar';
  if (props.switch) {
    className += '-active';
  }
  return (
    <Combobox
      onSelect={(address) => {
        console.log(address);
      }}
      className="search-box"
    >
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={ready}
        className={className}
      />
      <ComboboxPopover>
        {status === 'OK' &&
          data.map(({ id, description }) => {
            <ComboboxOption key={id} value={description}></ComboboxOption>;
          })}
      </ComboboxPopover>
    </Combobox>
  );
}

export default Search;
