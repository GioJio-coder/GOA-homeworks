import ReadFile from "../Utils/ReadFile.js";
import catchAsync from "../Utils/catchAsync.js";
import AppError from "../Utils/AppError.js";
import fs from "fs/promises"; 

export const getPhones = catchAsync(async (req, res, next) => {
    const result = await ReadFile(process.env.PHONES_DB);

    res.status(200).json(result);
});

export const getPhone = catchAsync(async (req, res, next) => {
    const allPhone = await ReadFile(process.env.PHONES_DB);

    if (!phone) {
        return next(new AppError("ტელეფონი ამ ID-ით ვერ მოიძებნა", 404));
    }

    res.status(200).json(phone);
});

export const createPhone = catchAsync(async (req, res, next) => {
    const allPhone = await ReadFile(process.env.PHONES_DB);

    allPhone.push(newPhone);

    await fs.writeFile(process.env.PHONES_DB, JSON.stringify(allPhone));

    res.status(201).json(newPhone);
});