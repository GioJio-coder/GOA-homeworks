export const editPhone = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const updates = req.body;
    const allPhones = await ReadFile(process.env.PHONES_DB);
    const phone = allPhones.find(item => item.id === id);

    if (!phone) return next(new AppError(`Phone not found with id: ${id}`, 404));

    const schema = {
        productName: "string", brand: "string", model: "string",
        releaseYear: "number", price: "number", currency: "string",
        inStock: "boolean", rating: "number", createdAt: "string"
    };

    let updated = false;

    for (const key in schema) {
        if (key in updates && typeof updates[key] === schema[key]) {
        phone[key] = updates[key];
        updated = true;
        }
    }

    if (updates.specs && typeof updates.specs === "object") {
        const specSchema = { display: "string", processor: "string", ram: "number", storage: "number", camera: "number", battery: "number" };
        for (const key in specSchema) {
        if (key in updates.specs && typeof updates.specs[key] === specSchema[key]) {
            phone.specs[key] = updates.specs[key];
            updated = true;
        }
        }
    }

    if (Array.isArray(updates.options) && updates.options.length > 0) {
        phone.options = updates.options;
        updated = true;
    }

    if (!updated) return next(new AppError("There is no new data to update phone", 400));

    await WriteFile(process.env.PHONES_DB, allPhones);
    res.status(200).json(phone);
    });

    export const deletePhone = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    let allPhones = await ReadFile(process.env.PHONES_DB);
    const foundPhone = allPhones.filter(item => item.id === id);

    if (foundPhone.length === 0) return next(new AppError(`Phone not found with id: ${id}`, 404));

    allPhones = allPhones.filter(item => item.id !== id);
    await WriteFile(process.env.PHONES_DB, allPhones);

    res.status(204).json(null);
});