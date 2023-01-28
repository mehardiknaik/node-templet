export const test = async (req, res) => {
    const { body, method } = req;
    res.status(201).json({ method, data: JSON.stringify(body) });
}