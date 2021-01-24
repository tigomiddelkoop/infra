import * as fs from "fs";

export default async (req, res) => {
    const dev = process.env.NODE_ENV !== 'production';
    let buildId = "";
    if (!dev) {

        const filePath = process.cwd() + "/.next/BUILD_ID"
        try {
            buildId = await fs.readFileSync(filePath, "utf8");
        } catch (e) {
            console.log(e)

            res.statusCode = 200;
            res.json({"buildId": "Something went wrong"})
            return;
        }
    } else {
        buildId = "development"
    }

    res.statusCode = 200;
    res.json({buildId})

}