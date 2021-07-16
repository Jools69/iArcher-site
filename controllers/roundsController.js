const roundList = require('../rounds.json');

const roundSections = [
    {
        name: 'Outdoor Imperial',
        type: 'Outdoor',
        system: 'Imperial',
        id: 'outdoorImperial'
    },
    {
        name: 'Outdoor Metric',
        type: 'Outdoor',
        system: 'Metric',
        id: 'outdoorMetric'
    },
    {
        name: 'Indoor Imperial',
        type: 'Indoor',
        system: 'Imperial',
        id: 'indoorImperial'
    },
    {
        name: 'Indoor Metric',
        type: 'Indoor',
        system: 'Metric',
        id: 'indoorMetric'
    },
];

module.exports.allRounds = (req, res) => {

    res.render('rounds', { roundList, roundSections, route: 'rounds' });
}