import fs from `fs/promises`;

export const WriteFile = async (filepath, data) => {
    try {
        const jsonData = JSON.stringify(data);

        await fs.WriteFile(filepath, jsonData, `utf-8`);

        return {
            message: "Data saved successfully"
        };
    } catch (error) {
        return {message: error.message};
    }
};