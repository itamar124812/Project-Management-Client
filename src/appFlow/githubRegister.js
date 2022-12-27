import { useEffect,useRef } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { serverAddress } from "../constants";

export  function GithubUserToServer() {
    const effectCalled = useRef(false);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    const navigate = useNavigate();
    console.log(code)
    useEffect(() => {
        if (effectCalled.current) return;
        effectCalled.current = true;
        async function fetchData() {
            try{
          const response = await fetch(`${serverAddress}/registerWithGithub?code=${code}`);
            if (response.ok){
                const token=await response.text();
                localStorage.setItem("token",token)
                navigate("/")
            }
            else {
                window.alert("An error occurred while trying to connect to github.")
                navigate("/register")
            }
        }catch(e){
            window.alert("There is a problem sending the request, you are probably offline or the server is down.")
            navigate("/register")
        }

        }
        if(code) fetchData();
      }, [code]);
}
