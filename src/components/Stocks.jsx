import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Stocks = () => {
    const [data, setData] = useState(null);
    const [info, setInfo] = useState(null);
  
    useEffect(() => {
      axios.get('https://financialmodelingprep.com/api/v3/stock-screener?apikey=fxfHmOhxNXVX5ibWiRZ7KZdVmkhCz42g ')
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    // useEffect(() => {
    //   axios.get('https://financialmodelingprep.com/api/v3/quote-order/AAPL?apikey=fxfHmOhxNXVX5ibWiRZ7KZdVmkhCz42g')
    //     .then((response) => {
    //       console.log(response.data);
    //       setInfo(response.data);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }, []);
  
    return (
      <div>
        {
          data && data.map((item, index) => (
            <div key={index}>
              <h1>{item.companyName}</h1>
              <span>Country: {item.country}</span>
              <br />
              <span>Sector: {item.sector}</span>
              <br />
              <b><span>Price: ${item.price}</span></b>
              <br />
              <span>Market Capitalisation: ${item.marketCap}</span>
              <button> View insights </button>
              <hr />
            </div>
          ))
        }
        {/* {
          info && info.map((item, index) => (
            <div key={index}>
              {item.name}
            </div>
          ))
        } */}
      </div>
    );
  
}

export default Stocks
