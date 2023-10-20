
export const ChallengeCheck = ({content, handleCampaignIndex}) => {

    const getRandomInRange = (max) => {
        return Math.floor(Math.random() * (max + 1));
    }

    function skillCheck(action) {
        let rolledValue = getRandomInRange(action.max);
        console.log(rolledValue);
        if(rolledValue >= action.min) {
            handleCampaignIndex(action.pass);
        } else {
            handleCampaignIndex(action.fail);
        }
    }

    return (
        <div className="challenge-check">
            <p>{content.text}</p>
            <div className="buttonActionsContainer">
                {content.actions.map((action) => (
                    <button onClick={() => skillCheck(action)}>{action.label}</button>
                ))}
            </div>
        </div>
    )
}