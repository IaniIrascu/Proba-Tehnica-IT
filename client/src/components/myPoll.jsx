import "../componentStyles/myPoll.css"
import { useState } from "react";

function Poll ( { pollTitle, pollOptions, pollId, isMyPoll, accessToken }) {

const [selectedOption, setSelectedOption] = useState(null);
const [hasVoted, setHasVoted] = useState(false);
const [isDeleting, setIsDeleting] = useState(false);

const handleVote = () => {
    console.log('Voting for option:', selectedOption);
    setHasVoted(true);
  };

const handleDeletePoll = async () => {
            try {
              setIsDeleting(true);
              const response = await fetch(`http://localhost:3000/delete-poll`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({ title: pollTitle }),
              });
          
              if (response.ok) {
                console.log('Poll deleted successfully');
              } else {
                console.error('Failed to delete poll');
              }
            } catch (error) {
              console.error('Error:', error);
            } finally {
              window.alert("Poll deleted successfully!");
              setIsDeleting(false);
            };
    }

    if(!pollTitle)
         pollTitle = "Ce animal se afla pe tricourile departamentului de IT?"
    if(!pollOptions)
        pollOptions = ["Un lenes", "O testoasa", "Un elefant"]
    const uniqueName = `radio_${pollId}`;
    return(
            <div className="myPerfectPoll">
                <h1 className="textStyle">{pollTitle}</h1>
                <h5>Make a choice:</h5>
                {pollOptions.map((option, index) => (
                    <label key={index} className="radioContainer">
                    <input
                        type="radio"
                        name={uniqueName}
                        checked={index === selectedOption}
                        onChange={() => !hasVoted && setSelectedOption(index)}
                        disabled={hasVoted}
                    />
                    <span className="checkmark" /> {option}
                    </label>
                ))}
                <div style={{marginBottom:"25%"}}/>
               
                <div className="divPoll">
                {isMyPoll ? (
                    <button onClick={handleDeletePoll}>
                        <div className="deleteButton">{isDeleting ? "Deleting..." : "Delete"}</div>
                    </button>     
                     ) : (<></>)}
                      {selectedOption !== null && (
                    <button 
                      className="delete"
                      onClick={handleVote}
                      style={{
                        marginLeft: "auto",
                        marginRight: "10%"
                      }}
                      disabled={hasVoted}
                    >
                      <div className="deleteButton">Vote</div>
                    </button>
                  )}
                </div>
            </div>
)}

export default Poll;