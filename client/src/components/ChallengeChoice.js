
export const ChallengeChoice = ({content, handleCampaignIndex}) => {


    return (
        <div className="challenge-choice">
            <p>{content.text}</p>
            <div className="buttonActionsContainer">
                {content.actions.map((action) => (
                    <button onClick={() => handleCampaignIndex(action.next)}>{action.label}</button>
                ))}
            </div>
        </div>
    )
}