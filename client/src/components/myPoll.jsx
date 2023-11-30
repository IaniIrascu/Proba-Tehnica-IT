import "../componentStyles/myPoll.css"
import { useState } from "react";

function Poll ( { pollTitle, pollOptions, pollId, isMyPoll, accessToken }) {

const [selectedOption, setSelectedOption] = useState(null);

const handleVote = () => {
    console.log('Voting for option:', selectedOption);
  };

const handleDeletePoll = async () => {
            try {
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
            };
    }

    if(!pollTitle)
         pollTitle = "Ce animal se afla pe tricourile departamentului de IT?"
    if(!pollOptions)
        pollOptions = ["Un lenes", "O testoasa", "Un elefant"]
    const uniqueName = `radio_${pollId}`;
    return(
            <p className="myPerfectPoll">
                <h1 className="textStyle">{pollTitle}</h1>
                <h5>Make a choice:</h5>
                {pollOptions.map((option, index) => (
                    <label key={index} className="radioContainer">
                    <input
                        type="radio"
                        name={uniqueName}
                        checked={index === selectedOption}
                        onChange={() => setSelectedOption(index)}
                    />
                    <span className="checkmark" /> {option}
                    </label>
                ))}
                <div style={{marginBottom:"30%"}}/>
               
                <div style={{display:"flex", flexDirection:"row"}}>
                {isMyPoll ? (
                    <button onClick={handleDeletePoll}>
                        <p className="deleteButton">Delete</p>
                    </button>     
                     ) : (<></>)}
                    <button 
                    onClick={handleVote} 
                    disabled={selectedOption === null}>
                        <p className="deleteButton">Vote</p>
                    </button>
                   
                </div>
            </p>
)}

export default Poll;