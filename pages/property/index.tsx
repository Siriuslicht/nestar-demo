import withLayoutBasic from "@/libs/components/layouts/LayoutBasic";
import { Container } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
   console.log("PROPERTY LIST COMPONENT - PAGES ROUTER");
   return (
      <>
         <Container> PROPERTY LIST</Container>
      </>
   )
};

export default withLayoutBasic(PropertyList);