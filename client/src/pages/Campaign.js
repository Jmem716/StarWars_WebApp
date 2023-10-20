import { GameArea } from "../components/GameArea";
import React, { useState } from 'react';

export const Campaign = () => {

    const [campaignIndex, setCampaignIndex] = useState(0);
    function handleCampaignIndex(index) {
        setCampaignIndex(index - 1);
    }

    return (
        <div className="home">
            <GameArea campaignIndex={campaignIndex} handleCampaignIndex={handleCampaignIndex} />
        </div>
    )
}