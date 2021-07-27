module.exports.index = (req, res) => {
    const scoringInfoPanes = [
        {
            img: '/images/screenshots/ScoresheetMidShoot.png',
            smlImg: '/images/screenshots/ScoresheetMidShoot_crop.png',
            alt: 'scoresheet screenshot',
            header: 'During Scoring',
            paras: [
                "Record your scores, arrow by arrow and see your end, dozen, running and distance totals",
                "See the classification you’ve achieved, and what’s needed for the next",
                "Add notes to record location, weather, bow setup, competition status and comments"
            ]
        },
        {
            img: '/images/screenshots/ScoresheetEndShoot.png',
            smlImg: '/images/screenshots/ScoresheetEndShoot_crop.png',
            alt: 'completed scoring screenshot',
            header: 'Scoring Complete',
            paras: [
                "Shoot any of the 100 built-in rounds, or your own custom rounds.",
                "When done, see your arrow stats, final Classification (if applicable) and Handicap",
                "You can also see if you’ve shot a new PB",
            ]
        },
        {
            img: '/images/screenshots/LoadRound.png',
            smlImg: '/images/screenshots/LoadRound_crop.png',
            alt: 'Load Round Screenshot',
            header: 'Load Previous Scoresheets',
            paras: [
                "At any time, you can load up previously recorded score sheets",
                "Score sheets can be exported in CSV form via email - invaluable for further analysing your performance",
            ]
        },
        {
            img: '/images/screenshots/CustomRound.png',
            smlImg: '/images/screenshots/CustomRound_crop.png',
            alt: 'Custom Round Screenshot',
            header: 'Custom Rounds',
            paras: [
                "Create your own custom club or personal rounds in iArcher",
                "Indoor or outdoor, imperial or metric rounds, with from 1 to 6 arrows per end",
                "Choose up to 4 different distances, each with different target faces and number of ends",
            ]
        },
        {
            img: '/images/screenshots/NewRoundDetails.png',
            smlImg: '/images/screenshots/NewRoundDetails_crop.png',
            alt: 'Round Details screenshot',
            header: 'Round Details',
            paras: [
                "iArcher now includes a screen that lists all of the details of any configured round",
                "Details include the distances, target faces, scoring, numbers of ends/arrows and Classifications if applicable",
            ]
        },
    ];

    const sightmarksInfoPanes = [
        {
            img: '/images/screenshots/SightMarks.png',
            smlImg: '/images/screenshots/SightMarks_crop.png',
            alt: 'Sightmarks screenshot',
            header: 'Sight Marks',
            paras: [
                "Maintain your sight marks, keeping Imperial and Metric marks separate",
                "View your sightmarks from the scoresheet whilst shooting and get prompted when you change distances",
                "Export your sight marks via email in CSV form, to always ensure you have a backup",
            ]
        },
        {
            img: '/images/screenshots/SightMarkDetails.png',
            smlImg: '/images/screenshots/SightMarkDetails_crop.png',
            alt: 'Sight Mark Details screenshot',
            header: 'Sight Mark Details',
            paras: [
                "For each sight mark, record the distance (in Yards or Metres), the sight bar notch (in/out) and the sight pin position (up/down)",
                "Existing sight marks can be easily tweaked and saved whenever required"
            ]
        },
        {
            img: '/images/screenshots/SightMarkGroups.png',
            smlImg: '/images/screenshots/SightMarkGroups_crop.png',
            alt: 'Sight Mark Groups screenshot',
            header: 'Sight Mark Groups',
            paras: [
                "Shoot different bow-types, or have different set-ups for indoors and outdoors?",
                "No problem, iArcher lets you keep different sight mark groups",
                "Copy groups, rename them, select them for use or delete them easily",
            ]
        },
    ];

    const pbInfoPanes = [
        {
            img: '/images/screenshots/PersonalBests.png',
            smlImg: '/images/screenshots/PersonalBests_crop.png',
            alt: 'Personal Bests screenshot',
            header: 'Personal Bests',
            paras: [
                "Record your Personal Bests",
                "Personal Bests are kept separately for each bow type - great for those multi-disciplined archers out there",
                "PBs are updated automatically when you shoot a higher score, but you can add them manually too",
            ]
        },
        {
            img: '/images/screenshots/PersonalBestDetails.png',
            smlImg: '/images/screenshots/PersonalBestDetails_crop.png',
            alt: 'Personal Best Details screenshot',
            header: 'Personal Best Details',
            paras: [
                "Each PB records the round, score, bow type used and date shot",
                "If a PB was recorded whilst scoring a round, the Details also include a link to the actual scoresheet"
            ]
        },
    ];

    res.render('home', { scoringInfoPanes, sightmarksInfoPanes, pbInfoPanes, route: 'home' });
}