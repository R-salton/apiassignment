import React, { useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
 
} from "@material-tailwind/react";
import axios from 'axios';
import styled  from 'styled-components';
import { Link } from 'react-router-dom';


 

export default function Cards() {

const [data,setData] = useState([]);
 
// Fetch all Beers

useEffect(() => {
  async function fetchData(){
    try {
      const response = await axios.get("https://api.punkapi.com/v2/beers");
     
      setData(response.data)
     
      
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();
  
}, [data]);



// console.log(data);

  return (<>

<Link to="/search">
  
          <Button size="sm" className="!absolute right-1 top-1 rounded" type='submit'>
            Search
          </Button>
</Link>
     
        
          

    <MainContent>
     
    {data.map((data) =>{
      return(
       

       
    <Card key={data.id} className="w-[400px] h-[300px] max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-[90px] shrink-0 rounded-r-none"
      >
        <img
          src={data.image_url}
          alt={data.tagline}
          className="h-[8x] w-[70px] object-cover  m-2"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          Beer
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {data.name}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-xs">
         {data.description}
        </Typography>
       
      </CardBody>
    </Card>
       
      )
    })}
  

      
    </MainContent>
  </>
  )
}

const MainContent =styled.div`

width: 100vw;

display: grid;
  
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(5, 1fr);
gap: 2rem;
padding: 45px 45px 20px 45px;
background-color: rgba(0,0,0,0.2);

@media(max-width: 768px){
  grid-template-columns: repeat(1, 1fr);
  margin-left:60px;
}

`;



