export default function Challenge() {

    const prompts = ["Take a picture with all the groomsmen wearing a woman's hat", 
                     "Capture a moment with the bride and groom in a funny pose",
                     "Get a group photo with everyone making silly faces",
                     "Snap a picture of the couple's first dance",
                     "Take a candid shot of guests enjoying the reception",
                     "Capture a moment of the bride and groom cutting the cake",
                     "Get a photo of the couple with their parents",
                     "Take a picture of the couple with their siblings",
                     "Capture a moment of the couple sharing a laugh",
                     "Get a photo of the couple with their grandparents",
                     "Take a picture of the couple with their best friends",
                     "Capture a moment of the couple sharing a quiet moment",
                     "Get a photo of the couple with their wedding party",
                     "Take a picture of the couple with their pets",
                     "Capture a moment of the couple sharing a kiss",
                     "Get a photo of the couple with their favorite drink",
                     "Take a picture of the couple with their favorite food",
                     "Capture a moment of the couple sharing a dance with their parents",
                     "Get a photo of the couple with their favorite music playing",
                     "Take a picture of the couple with their favorite book",
                     "Capture a moment of the couple sharing a toast",
                     "Get a photo of the couple with their favorite hobby",
                     "Take a picture of the couple with their favorite vacation spot",
                     "Capture a moment of the couple sharing a joke",
                     "Get a photo of the couple with their favorite movie",];

    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

    return (
        <>
            <div className="challenge-container">
            <h2>Photo Challenge</h2>
            <p>{randomPrompt}</p>
            </div>
        </>
    )
}