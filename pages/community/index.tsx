import withLayoutBasic from "@/libs/components/layouts/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Community: NextPage = () => {
   return (
      <div style={{margin: "20px 0"}}>
         <Stack className="container">
            COMMUNITY
         </Stack>
      </div>
   )
};

export default withLayoutBasic(Community);