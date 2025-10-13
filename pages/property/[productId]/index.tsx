import { useState } from "react";

const Community = () => { 
   console.log("COMMUNITY COMPONENT - PAGES ROUTER");
   const [title, setTitle] = useState<string>("hello");
   return <div> <button onClick={ () => alert("Hello STEIN")} style={{ margin: "15px"}}> COMMUNITY This!</button> </div>
};

export default Community;