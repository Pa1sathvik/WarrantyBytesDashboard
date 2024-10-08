import { useContext, useEffect, useState } from 'react';
import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import ChartThree from '../../components/ChartThree.tsx';
import ChartTwo from '../../components/ChartTwo.tsx';
import ChatCard from '../../components/ChatCard.tsx';
import MapOne from '../../components/MapOne.tsx';
import TableOne from '../../components/TableOne.tsx';
import { UserDetailsContext } from '../../contexts/userContext/UserDetailsContext.jsx';
import { Link ,Navigate} from 'react-router-dom';

const HomePage = () => {
  const {userDetails} = useContext(UserDetailsContext)
  const[warrantyDetails,setWarrantyDetails] = useState(["ee"]);
  const[isEmptyProducts,setIsEmptyProducts] = useState(false)
  const[isLoading,setIsLoading] = useState(false)

  useEffect(()=>{
  
    getWarranties();
  },[userDetails?.userId])
 
  const getWarranties = async () =>{
    let userId = userDetails?.userId;
    if(userId){
      setIsLoading(true)
    try{

      const response = await fetch(`http://localhost:8080/api/v1/warranties/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
    
      const json =  await response.json();
      let warranties = json.data;
     
      console.log(warranties);
      setIsLoading(false)
    
    }catch(error){
      setIsLoading(false)
      console.error(error.message);
    }
  }
  }

  return (
    <>

{!userDetails?.userId && (<Navigate to={'/signin'} replace={true} />)}
{(warrantyDetails.length === 0 && !isEmptyProducts) && <div className="flex items-center justify-center h-screen">
    <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
        </div>
    </div>
</div>
}
   {warrantyDetails.length !==0 && (<><div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div></>)}
    </>
  );
};

export default HomePage;
