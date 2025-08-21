export default function Challenge() {

    const prompts = ["Take a picture with all the groomsmen wearing a woman's hat", 
                     "Capture a moment with the bride and groom in a funny pose",
                     "Get a group photo with everyone making silly faces",
                     "Snap a picture of the couple's first dance",
                     "Take a candid shot of guests enjoying the reception"];
                     
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

    return (
        <>
            <div className="challenge-container">
            <h2>Picture Challenge</h2>
            <p>{randomPrompt}</p>
            </div>
        </>
    )
}