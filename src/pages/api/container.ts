export default async (req, res) => {

    // const dev = process.env.NODE_ENV !== 'production';
    // let container = "";
    // if (!dev) {
        let container = process.env.HOSTNAME
    // } else {
    //     container = "development"
    // }

    res.statusCode = 200;
    res.json({container})

}