/**
 * Client Settings
 * @param { Client } client 
 */

 module.exports = (client) => {

    //General Settings
    client.settings = {

        Prefix: ".",
        Token: "MTE0MzQ5NDgzMzk0ODg2MDUwNg.Ge74Pi.2CC4h9Bf9PpsxiaaxUDY5L8Ipx7Y3nXjJ3780g",
        Owners: [1067432825898414130],
        OtherBots: [],
        VoiceChannel: "1143519732201435186",
        Activity: "LISTENING",
        Status: "idle",
        MongoURL: "mongodb+srv://efe:2TdhzBETOdgoHNlN@cluster0.7awxx.mongodb.net/",
        Footer: "#MekangibiMekanbahama",
        DisableCooldownsForAdmins: true,

    };

    //Activity Messages
    client.statusMessages = [

        "Bikerecik Gülermisin :)",
        "İran Dinarının Amını s-",
        "Burdan Soyak Abiye Selamlar!"

    ];

    //Emojis
    client.systemEmojis = [

        ///System
        { emojiName: 'developer', emojiUrl: 'https://cdn.discordapp.com/emojis/853642013332865035.gif?v=1' },
        { emojiName: 'loading', emojiUrl: 'https://cdn.discordapp.com/emojis/857935194203226118.gif?v=1' },
        { emojiName: 'arrow', emojiUrl: 'https://cdn.discordapp.com/emojis/821298641863442442.gif?v=1' },
        { emojiName: 'crown', emojiUrl: 'https://cdn.discordapp.com/emojis/876942324909871114.gif?v=1' },
        { emojiName: 'crown2', emojiUrl: 'https://cdn.discordapp.com/emojis/876929331572662323.gif?v=1' },
        { emojiName: 'mark', emojiUrl: 'https://cdn.discordapp.com/emojis/876153262796079115.gif?v=1' },
        { emojiName: 'mark2', emojiUrl: 'https://cdn.discordapp.com/emojis/853641429146140684.png?v=1' },
        { emojiName: 'cross', emojiUrl: 'https://cdn.discordapp.com/emojis/876153078863253514.gif?v=1' },
        { emojiName: 'cross2', emojiUrl: 'https://cdn.discordapp.com/emojis/853641452227264522.png?v=1' },
        { emojiName: 'success', emojiUrl: 'https://cdn.discordapp.com/emojis/793774156067373066.gif?v=1' },

        ///Status
        { emojiName: 'online', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950275698692.png?v=1' },
        { emojiName: 'dnd', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950355390545.png?v=1' },
        { emojiName: 'idle', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950069915667.png?v=1' },
        { emojiName: 'offline', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950686609420.png?v=1' },
        { emojiName: 'web', emojiUrl: 'https://cdn.discordapp.com/emojis/825429354707288065.png?v=1' },

        ///Penal
        { emojiName: 'banned', emojiUrl: 'https://cdn.discordapp.com/emojis/748618263071555645.gif?v=1' },
        { emojiName: 'jailed', emojiUrl: 'https://cdn.discordapp.com/emojis/878303820181024788.png?v=1' },
        { emojiName: 'chatMuted', emojiUrl: 'https://cdn.discordapp.com/emojis/878303318743609384.png?v=1' },
        { emojiName: 'warned', emojiUrl: 'https://cdn.discordapp.com/emojis/826369282942042112.png?v=1' },

        ///Voice
        { emojiName: 'joined', emojiUrl: 'https://cdn.discordapp.com/emojis/742688545977794560.gif?v=1' },   
        { emojiName: 'leaved', emojiUrl: 'https://cdn.discordapp.com/emojis/742688545168293968.gif?v=1' },
        { emojiName: 'unMuted', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450633564271.png?v=1' },
        { emojiName: 'muted', emojiUrl: 'https://cdn.discordapp.com/emojis/871710451086524416.png?v=1' },
        { emojiName: 'unDeafen', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450243502091.png?v=1' },
        { emojiName: 'deafen', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450138619915.png?v=1' },
        { emojiName: 'camera', emojiUrl: 'https://cdn.discordapp.com/emojis/839043294717542400.png?v=1' }

    ];

    //Guild Settings     
    client.guildSettings = {

        ///General
        guildID: "1143161343021686816",
        guildTags: [],
        guildDiscriminator: "",
        guildTeams: [],
        meetRole: "",
        meetChannel: "",
        nameTag: "-",
        dmMessages: true,
        unAuthorizedMessages: true,

        ///Staffs
        staffRoles: [1143202858418851952],
        transporterSpears: [],
        registerSpears: [],
        staffGiver: "",
        botYt: "",

        ///Penals
        penals: {

            ///Ban
            ban: {
                staffs: [1067432825898414130],
                penalPoint: 40,
                penalLimit: 5,
                log: "1143513384956993576",
                banGifs: ['https://media1.tenor.com/images/ed33599ac8db8867ee23bae29b20b0ec/tenor.gif?itemid=14760307', 'https://media.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif', 'https://media1.tenor.com/images/4732faf454006e370fa9ec6e53dbf040/tenor.gif?itemid=14678194'],
                unbanGifs: ['https://data.whicdn.com/images/192611812/original.gif'],
            },

            ///Jail
            jail: {
                staffs: [1067432825898414130],
                jailRoles: [],
                jailChannel: "",
                penalPoint: 30,
                penalLimit: 5,
                log: "1143513384956993576",
            },

            ///Chat Mute
            chatMute: {
                staffs: [1067432825898414130],
                cmuteRoles: [],
                penalPoint: 20,
                penalLimit: 5,
                log: "1143513384956993576",
            },

            ///Voice Mute
            voiceMute: {
                staffs: [1067432825898414130],
                vmuteRoles: [],
                penalPoint: 20,
                penalLimit: 5,
                log: "1143513384956993576",
            },

            ///Warn
            warn: {
                staffs: [1067432825898414130],
                warnRoles: [{
                    warnCount: 1,
                    warnRole: "1143514098097729596", 
                }],
                penalPoint: 10,
                log: "1143513384956993576",
            },

        },

        ///Registration
        registration: {
            unregisterName: "",
            unregisterRoles: [],
            unregisterChannel: "",
            quarantineRole: "",
            familyRole: "",
        },

        ///Forbidden Tag
        forbiddenTag: {
            forbidRoles: [],
            forbidChannel: "",
            forbidLog: "",
        },

        ///Logs
        logs: {
            pointLog: "1143513295970631861",
            voiceLog: "1143513327427919952",
            messageLog: "1143513366745317477",
            securityLog: "1143513384956993576",
        },

    };

};