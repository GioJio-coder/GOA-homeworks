

const element = (
  <div className="container">
    <section>
      <h2>1</h2>
    </section>

    <article className="contentbox">
      <p>article</p>
      <input type="text" placeholder="შეიყვანე ტექსტი" /> 
    </article>

    <footer>
      <p>name: Giorgi</p>
      <br />
    </footer>
  </div>
);


const person = {
  name: "Giorgi",
  lastName: "Jioshvili",
  hobby: "Programming"
};

const element1 = (
  <div>
    <p>{person.name}</p>
    <p>{person.city}</p>
    <p>{person.hobby}</p>
  </div>
);

