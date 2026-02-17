import fs from "fs/promises";

async function JsonFile() {
    try {
        const data = await fs.readFile("./Classwork.json", "utf-8")
        const Data = Jsonparse(data)
        console.log(Data)
    } catch (error) {
        console.log("Error: ", error)
    }
}

JsonFile;