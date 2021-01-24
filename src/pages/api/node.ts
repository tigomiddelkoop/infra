export default async (req, res) => {

    // const dev = process.env.NODE_ENV !== 'production';
    // let node = "";
    // if (!dev) {
        let node = process.env.NODENAME
    // } else {
    //     node = "development"
    // }

    res.statusCode = 200;
    res.json({node})

}