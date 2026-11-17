import { CustomClient } from "../core/customClient.js";

export default {
    notification: {
        token: "--", // ضع التوكن بنفسك
        channel: "1572089367483387984",
        role: "1572089791774724126",
        dm: {
            enabled: true,
            dmRoles: ["1572090238874943640"],
        }
    },

    bypassLimit: [
        "1559267406415798373",
        "1559796085906743337"
    ],

    durationQuests: [
        "WATCH_VIDEO",
        "PLAY_ON_DESKTOP",
        "STREAM_ON_DESKTOP",
        "PLAY_ACTIVITY",
        "WATCH_VIDEO_ON_MOBILE",
        "PLAY_ON_XBOX",
        "PLAY_ON_PLAYSTATION"
    ],

    image: {
        channelId: "1572088849629315192",
        guildId: "1558582455215194252",
    },

    serverId: "1558582455215194252",

    completedQuestsChannel: "",

    voice: {
        channel: "",
        role: ""
    },

    logStrings: [],
    childProcessCount: 1,
    questsPerChildProcess: 15,

    useProxy: true,
    proxyType: "http",

    buttons: [
        {
            url: "https://youtu.be/eJoa4obHhng",
            emoji: (e: CustomClient) =>
                e.getEmoji("youtube", false) ?? "▶️",
        }
    ],

    customRewardsImage: {},

    customRewardsEmoji: {},

    inviteUrl: "",

    joinMessage: `## انت مو داخل السيرفر
- **عشان تستعمل البوت لازم تدخل السيرفر بالحساب المطلوب**
- **ملاحظة البوت مجاني 100%**

## You are not in the server
- **To use the bot, you need to join the server with the required account.**
- **Note: The bot is 100% free.**`
}
