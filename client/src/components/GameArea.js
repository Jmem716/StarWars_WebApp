import placeholderData from "../data/placeholderData.json";
import {ChallengeCheck} from "../components/ChallengeCheck";
import {ChallengeChoice} from "../components/ChallengeChoice";
import {Exposition} from "../components/Exposition";
import { useNavigate } from "react-router-dom";


export const GameArea = ({ campaignIndex, handleCampaignIndex }) => {
    const navigate = useNavigate();
    const content = placeholderData.views[campaignIndex].content;

    var view = null;
    if(content.hasOwnProperty("exposition")) {
        view = <Exposition content={content} handleCampaignIndex={handleCampaignIndex}/>;
    } else {
        if(content.challenge.type === "check") {
            view = <ChallengeCheck content={content.challenge} handleCampaignIndex={handleCampaignIndex} />
        } else {
            view = <ChallengeChoice content={content.challenge} handleCampaignIndex={handleCampaignIndex} />
        }
    }

    return (
        <div className="gameAreaParent">
            <div className="gameAreaExit">
                <button onClick={() => navigate("/home")}>Exit Campaign</button>
            </div>
            <div className="gameArea">
                {view}
            </div>
        </div>
    )
}