import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";

interface Game {
    id: number;
    name: String;
  }
  
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }

const useGames=()=>{
    const [games, setgames] = useState<Game[]>([]);
  const [error, seterror] = useState("");

  useEffect(() => {
    const controller=new AbortController();
    apiClient
      .get<FetchGameResponse>("/games",{signal:controller.signal})
      .then((res) => setgames(res.data.results))
      .catch((err) => {
      
        if(err instanceof cancelIdleCallback) return
      seterror(err.message)
    });

      return ()=> controller.abort();
  },[]);
   
  return { games,error};

}

export default useGames;