import "../componentStyles/myPoll.css"

function Poll ( { pollTitle, pollOptions, pollId, isMyPoll, accessToken }) {

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
                <label class="radioContainer">
                    <input type="radio" name={uniqueName}/>
                    <span class="checkmark"/> {pollOptions[0]}
                    </label>
                    <label class="radioContainer"> 
                    <input type="radio" name={uniqueName}/>
                    <span class="checkmark"/> {pollOptions[1]}
                    </label>
                    <label class="radioContainer">
                    <input type="radio" name={uniqueName}/>
                    <span class="checkmark"/> {pollOptions[2]}
                </label>
                {isMyPoll ? (
                <div>
                <button
                onClick={handleDeletePoll}>
                    <p className="deleteButton">
                        Delete
                    </p>
                </button>
                </div>
                ) : (<></>)}
            </p>
)}

export default Poll;