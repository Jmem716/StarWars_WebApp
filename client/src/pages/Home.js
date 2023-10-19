import { Header } from "../components/Header";
import { useCookies } from "react-cookie";

export const Home = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null);

    const signOut = () => {
        removeCookie('username');
        removeCookie('accessToken');
    }
    return (
        <div className="home">
            <Header />
            <div className="home-menu">
                <div className="container-header">
                     <div className="container-header-outline">
                        <h2>Home</h2> <p className="aurebesh-font">Home</p>
                    </div>
                </div>
                <div className="btn-container">
                    <div className="col">
                    <button>Campaign</button>
                    <button>Saves</button>
                </div>
                <div className="col">
                    <button>Characters</button>
                    <button onClick={signOut}>Log Out</button>
                </div>
                </div>
            </div>
        </div>
    )
}