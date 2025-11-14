    const App = () => {
    const mainObj = {
        siteName: "project-react",
        mainText: "Welcome to our website",
        footerText: "Thanks for visiting our website"
    }

    return (
        <>
        <header>
            <h1>Welcome to: {mainObj.siteName}</h1>
            <br />
        </header>

        <main>
            <p>{mainObj.mainText}</p>
            <br />
        </main>

        <footer>
            <b>{mainObj.footerText}</b>
        </footer>
        </>
    )
    };

export default App;