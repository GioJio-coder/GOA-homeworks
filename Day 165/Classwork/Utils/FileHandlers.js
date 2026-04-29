import { readFile, writeFile } from "fs/promises";

export const ReadFile = async (DB) => {
    try {
        const data = await readFile(DB, "utf8");
        return JSON.parse(data);
    } catch (err) {
        return { err: err.message };
    }
};

export const WriteFile = async (DB) => {
    try {
        await writeFile(DB, JSON.stringify(data, null, 2), "utf8");
        return { success: true };
    } catch (err) {
        return { err: err.message };
    }
};