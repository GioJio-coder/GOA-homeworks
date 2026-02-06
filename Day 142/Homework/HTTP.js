/*Frontend და backend ერთმანეთს უკავშირდებიან HTTP და HTTPS პროტოკოლით.
Request – frontend-ში, აგზავნის სერვერზე მონაცემებს ან ითხოვს ინფორმაციას მაგ.. ავტორიზაციას.

Response – backend-ში ამუშავებს მოთხოვნას და აბრუნებს შედეგს მაგ.. წარმატებას ან შეცდომას.


GET – გამოიყენება მონაცემების მისაღებად სერვერიდან.
POST – აგზავნის ახალ მონაცემებს სერვერზე მაგ.. რეგისტრაციას.
PUT – მთლიანად ანახლებს არსებულ მონაცემს.
PATCH – ნაწილობრივ ცვლის მონაცემს.
DELETE – შლის მონაცემს სერვერიდან. */


const http = require('http');

const server = http.createServer((req, res) => {
    const data = ["Apple", "Car", "Book"];
    
    res.writeHead(200);
    res.end(JSON.stringify(data));
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
