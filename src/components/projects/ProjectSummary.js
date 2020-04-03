import React, {useState, useEffect} from 'react'


const ProjectSummary = ({stock}) => {
  const[price, setPrice] =  useState(null)

  useEffect(() => {
    fetchStock();
  }, []);

  const fetchStock = () => {
    const API_KEY = "VY6AH13MRIO266VC";
    let StockSymbol = stock.stockSymbol;
    console.log(StockSymbol);
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    

    fetch(API_Call)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        const lastRefreshed = data['Meta Data']['3. Last Refreshed'].slice(0, 10);
        console.log(lastRefreshed)
        setPrice(data["Time Series (Daily)"][lastRefreshed]["1. open"]) 
      });
    }

  return (
    
    <div className="col s12 m6">
    <div className="card blue-grey darken-1 z-depth-0 project-summary">
      <div className="card-content white-text">
        <span className="card-title ">{stock.stockName}</span>
        <span className="card-body Heading h3">{Number(price).toFixed(2)} USD</span>
        <p className="grey-text Heading h6">{stock.authorFirstName} {stock.authorLastName}</p>
        <p className="grey-text Heading h6">3rd September, 2am</p>
      </div>
    </div>
    </div>
    
  )
}

export default ProjectSummary
