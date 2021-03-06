import React, {useState, useEffect} from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'



const ProjectSummary = ( props) => {
  const {stock} = props;
  

  const[price, setPrice] =  useState(null)
  

  useEffect(() => {
    fetchStock();
  }, []);

  const fetchStock = async () => {
    const API_KEY = "VY6AH13MRIO266VC";
    let StockSymbol = stock.stockSymbol;
    
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    

    fetch(API_Call)
      .then(function(response) {
        return response.json();
      })
      .then( await function(data) {
        console.log(data);
        const lastrefreshed = data["Meta Data"]["3. Last Refreshed"].slice(0, 10);
        setPrice(data["Time Series (Daily)"][lastrefreshed]["1. open"]) 
      });
    }

  return (
    
    <div className="col s12 m6">
    <div className="card blue-grey darken-1 z-depth-0 project-summary">
      <div className="card-content white-text">
        <span className="card-title ">{stock.stockName}</span>
        <span className="card-body Heading h3">{Number(price).toFixed(2)} USD</span>
        <p className="grey-text Heading h6">{stock.authorFirstName} {stock.authorLastName}</p>
        <p className="grey-text Heading h6">{moment(stock.createdAt.toDate()).calendar()}</p>
        <Link className='secondary-content' to="/" onClick={()=>props.handleDelete(stock.id)}>
              <i className=' material-icons' style={{color:"red"}}>delete</i>
        </Link>
      </div>
    </div>
    </div>
    
  )
}

export default ProjectSummary
