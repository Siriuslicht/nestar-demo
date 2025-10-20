import TrendProperties from "@/libs/components/homepage/TrendProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";
import PopularProperties from "@/libs/components/homepage/PopularProperty";
import TopProperties from "@/libs/components/homepage/TopProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
import withLayoutMain from "@/libs/components/layouts/LayoutHome";
import { Box, Container, Stack } from "@mui/material"
import { NextPage } from "next";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { GET_PROPERTIES } from "@/apollo/user/query";
import { useQuery } from "@apollo/client";

const Home: NextPage = () => {
  const device = useDeviceDetect();

   const {
    loading: getPropertiesLoading,
    data: getPropertiesData,
    error: getPropertiesError,
    refetch: getPropertiesRefetch
   } = useQuery(GET_PROPERTIES, {
    fetchPolicy: "network-only",
    variables: {
      input: {
        page: 1,
        limit: 5,
        sort: 'createdAt',
        direction: "DESC",
        search: {

        },
      },
    },
   });
   console.log("getPropertiesData =>", getPropertiesData);

  if(device === "mobile") {
    return <Stack>HOMEPAGE MOBILE</Stack>
  } else {
      return ( 
        // DEVICE: MOBILE &   PS
        <Stack>
          <Stack className={"home-page"}>
              <TrendProperties />
              <PopularProperties />
              <Advertisement />
              <TopProperties />
              <TopAgents />
            </Stack>
        </Stack>
    
      ); 
  }

}

export default withLayoutMain(Home);
 