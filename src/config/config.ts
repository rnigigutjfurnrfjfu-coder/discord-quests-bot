import { SupportedDatabaseTypes } from "../core/databaseConfig.js";
import { config as dotenvConfig } from "dotenv";
import { Config } from "../interface/config.js";

dotenvConfig();

export default {
    token: process.env.Token,

    embedColor: "#06c2fb",
    defaultLanguage: "en",
    debugMode: true,

    allowedServers: ["1558582455215194252"],

    prefix: "!",

    developers: ["1558582455215194252"],

    database: {
        type: SupportedDatabaseTypes.MongoDB,
        url: "mongodb+srv://rnigigutjfurnrfjfu_db_user:<db_password>@cluster0.f1mvi2u.mongodb.net/badge2?retryWrites=true&w=majority",
    },

} as Config;
