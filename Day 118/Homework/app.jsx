function Friend() {
    let friend = friend[0];
return (
    <div>
        <h1>{friend.title}</h1>
        <img src={friend.src} />
    </div>
);
}

function TodaysPlan() {
    let task;
    let apocalypse = false;
    if (!apocalypse) {
        task = 'learn React.js'
    } else {
        task = 'run around'
    }
    return <h1>Today I am going to {task}!</h1>;
}



function SubmitButton() {
function handleClick() {
    alert('Submission Successful.');
}
    return <button onClick={handleClick}>Submit</button>;
}