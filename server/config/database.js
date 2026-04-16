const mongoose = require("mongoose");
const dns = require("dns");
require("dotenv").config();

exports.connect = () => {
    // On some Windows setups Node's default DNS resolver returns querySrv ECONNREFUSED
    // for mongodb+srv (Atlas). Public DNS servers fix SRV lookups used by the driver.
    try {
        dns.setServers(["8.8.8.8", "1.1.1.1"]);
    } catch (_) {
        /* ignore */
    }

    const mongoUri = process.env.MONGODB_URL || process.env.MONGODB_URl;
    if (!mongoUri) {
        console.error("DB Connection Failed: set MONGODB_URL in server/.env");
        process.exit(1);
    }

    mongoose
        .connect(mongoUri, {
            serverSelectionTimeoutMS: 15000,
        })
        .then(() => console.log("DB Connected Successfully"))
        .catch((error) => {
            console.log("DB Connection Failed");
            console.error(error);
            process.exit(1);
        });
};