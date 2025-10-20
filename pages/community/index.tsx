import withLayoutBasic from "@/libs/components/layouts/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Community: NextPage = () => {

   const device = useDeviceDetect();
   if(device === "mobile") {
       return <Stack>COMMUNITY MOBILE</Stack>
   } else 
   {
      
      return (
         <div style={{margin: "20px 0"}}>
         <Stack className="container">
            COMMUNITY
         </Stack>
      </div>
   )
}
};

export default withLayoutBasic(Community);