
import app0 from "./Components/app0.jsx";

function InfoCard() {
return (
    <div>
        <h1>Welcome to My Website</h1>
        <p>This is a simple React functional component displaying a heading and a paragraph.</p>
    </div>
);
}

export default InfoCard;


function ItemList() {
  return (
    <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
      <li>Fourth item</li>
    </ul>
  );
}


function TwoSections() {
  return (
    <div>
      <div >
        <h2>Section 1</h2>
        <p>This is the content of the first section.</p>
      </div>

      <div>
        <h2>Section 2</h2>
        <p>This is the content of the second section.</p>
      </div>
    </div>
  );
}