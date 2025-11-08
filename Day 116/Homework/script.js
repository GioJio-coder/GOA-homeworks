
{hasNotification && <p>New Notification</p>}

{email && <p>{email}</p>}

{discount > 0 && <p>Discount Available!</p>}


const container = document.getElementById('app');
const root = createRoot(container);
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map(person =>
<li>{person}</li>
);


const greatestDivEver = React.createElement(
	'div',
null,
'i am div'
);

