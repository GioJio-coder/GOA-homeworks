

function Component() {
const [count, setCount] = useState(0); 

const handleClick = () => {
    setCount(count + 1);
};

return (
    <div>
    <hr />

    <p>ამ ღილაკზე დაჭერით გათვლილია: {count}</p>

    <button 
        style={{ backgroundColor: count % 2 === 0 ? "lightblue" : "lightgreen" }}
        onClick={handleClick} 
        >
    </button>
    </div>
);
}


const profile = (
<div>
    <h1>John Smith</h1>
    <img src="images/john.png" />
    <article>
    My name is John Smith.
    <br />
    I am a software developer.
    <br />
    I specialize in creating React applications.
    </article>
</div>
);

const container = document.getElementById('app');
const root = createRoot(container);
const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

root.render(gooseImg);

