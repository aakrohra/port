import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const musicBar = [{to: "/music/inf", label: "In Framings"},
                  {to: "/music/mache", label: "mâché"},
                  {to: "/music/derwin", label: "Derwin"}]

function Music() {
    return (
        <>
            <NavBar navlinks={musicBar} />
            <Outlet />
        </>
    )
}

export default Music;