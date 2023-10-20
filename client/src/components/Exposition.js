


export const Exposition = ({content, handleCampaignIndex}) => {

    return (
        <div className="exposition">
            <p>{content.exposition}</p>
            <div className="buttonActionsContainer">
                <button onClick={() => handleCampaignIndex(content.next)}>Next</button>
            </div>
        </div>
    )
}