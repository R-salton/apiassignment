import React from 'react';
import  { useEffect, useState } from 'react'
import {
 
  Button,
  Input,
  Card,
  CardHeader,
  CardBody,
  Typography,
  Alert,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import axios from 'axios';


function Search() {

    const [beerId, setBeerId] = useState('');
    const [beerInfo,setBeerdata] = useState(null)
    
   

const handleSearch = async(e)=>{

    e.preventDefault();
    try {
        const beer = await axios.get(`https://api.punkapi.com/v2/beers/${beerId}`);
        const data = await beer.data
        
      setBeerdata(data[0]);
      console.log(beerInfo);
       
      
      
        
 
        
        
    } catch (error) {
        console.log(error);
    }
}
 
useEffect(()=>{

    // Clear Beer Data
    setBeerdata(null)
},[beerId])

 
 



  return (
    <div>
    <Link to="/">
  
  <Button size="sm" className="!absolute left-1 top-1 rounded ">
    Home
  </Button>
</Link>
<form onSubmit={handleSearch}>


     <div className="relative flex w-full gap-2 md:w-max m-auto mt-16 justify-center">
          <Input
            type="search"
            label="Beer Id..."
            className="pr-20"
            value={beerId}
            containerProps={{
              className: "min-w-[288px]",
            }}
            onChange={(e) =>setBeerId(e.target.value)}
          />
          <Button size="sm" className="!absolute right-1 top-1 rounded" type='submit'>
            Search
          </Button>
          </div>
</form>

<br />
{beerInfo ? 
<>

    <Alert color="green" className='w-[30rem] mx-auto sm:w-[600px]'>We Got Your favorite Beer!...</Alert>
    <Card className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={beerInfo.image_url}
          alt="##"
          className="h-[350px] w-[90px] object-cover mx-auto"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
         Beer
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
  {beerInfo.name}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {beerInfo.description}
        </Typography>
        
      </CardBody>
    </Card>
    </>


: <Alert color="red" className='w-[30rem] mx-auto'>Type Beer Id we can Find it for you....</Alert>}



    </div>
  )
}

export default Search