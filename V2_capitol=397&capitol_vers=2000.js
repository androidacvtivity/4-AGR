// main.js

const fields = {};

const readonlyFields = [
    "R001", "R007", "R014", "R021", "R036", "R038", "R039",
    "R056", "R062", "R066", "R093", "R150", "R161"
];

const formulas = {
    R066: ["R067", "R069", "R070", "R071", "R072", "R073", "R074",
        "R075", "R076", "R077", "R078", "R079", "R080",
        "R081", "R082"],
    R056: ["R057", "R059"],
    R062: ["R063", "R066", "R085", "R087", "R088", "R089", "R090", "R092"],
    R014: ["R015", "R017", "R018", "R019"],
    R007: ["R008", "R009", "R010", "R011", "R012"],
    R036: ["R031", "R032", "R033", "R034", "R035"],
    R021: ["R022", "R023", "R024", "R026", "R027", "R028", "R029",
        "R031", "R032", "R033", "R034", "R035", "R037"],
    R001: ["R002", "R003", "R004", "R005", "R006"],
    R038: ["R014", "R021"],
    R039: ["R040", "R041", "R044", "R047", "R049", "R050", "R051",
        "R054", "R056", "R060", "R061"],
    R093: ["R020", "R094", "R095", "R097", "R098", "R100", "R102",
        "R103", "R109", "R141"],
    R150: ["R038", "R039", "R062", "R093"],
    R161: ["R150", "-R151", "-R152", "R190"]
};

$(document).ready(() => {
    const allKeys = new Set([...Object.keys(formulas), ...Object.values(formulas).flat().map(k => k.replace('-', ''))]);
    allKeys.forEach(key => {
        const $el = $(`#43_397_${mapSuffix(key)}_1`);
        if ($el.length) {
            fields[key] = $el;
        } else {
            console.warn(`Missing field in DOM: ${key}`);
        }
    });

    readonlyFields.forEach(id => fields[id]?.prop("readonly", true));

    $("input:not([type='button']):not([readonly]):not([disabled])")
        .on("change", () => CAP1());

    CAP1();
});

function CAP1() {
    const sortedKeys = topoSort(formulas);

    sortedKeys.forEach((target) => {
        const sources = formulas[target];
        const precision = 1; // Updated: always show 1 decimal place
        let total = 0;

        sources.forEach((id) => {
            const sign = id.startsWith('-') ? -1 : 1;
            const key = id.replace('-', '');
            const $el = fields[key];

            const rawVal = $el?.val();
            const val = parseFloat(rawVal) || 0;

            console.log(`Field ${key} raw='${rawVal}', parsed=${val}`);

            total += sign * val;
        });

        console.log(`Setting ${target} = ${total.toFixed(precision)}`);
        fields[target]?.val(Number(total.toFixed(precision)));
    });
}

function mapSuffix(code) {
    const map = {
        R001: "18300_001", R002: "18301_002", R003: "18302_003", R004: "18303_004", R005: "18304_005",
        R006: "18305_006", R007: "18306_007", R008: "18307_008", R009: "18308_009", R010: "18309_010",
        R011: "18310_011", R012: "18311_012", R013: "18312_013", R014: "18313_014", R015: "18314_015",
        R017: "18316_017", R018: "18317_018", R019: "18318_019", R020: "18319_020", R021: "18320_021",
        R022: "18321_022", R023: "18322_023", R024: "18323_024", R026: "18325_026", R027: "18326_027",
        R028: "18327_028", R029: "18328_029", R031: "18330_031", R032: "18331_032", R033: "18332_033",
        R034: "18333_034", R035: "18334_035", R036: "18335_036", R037: "18336_037", R038: "18337_038",
        R039: "18338_039", R040: "18339_040", R041: "18340_041", R044: "18342_044", R047: "18343_047",
        R049: "18344_049", R050: "18345_050", R051: "18346_051", R054: "18347_054", R056: "18348_056",
        R057: "18349_057", R059: "18350_059", R060: "40650_060", R061: "40651_061", R062: "18353_062",
        R063: "18354_063", R066: "18355_066", R067: "18356_067", R069: "18357_069", R070: "18358_070",
        R071: "18359_071", R072: "18360_072", R073: "18361_073", R074: "18362_074", R075: "18363_075",
        R076: "18364_076", R077: "18365_077", R078: "18366_078", R079: "18367_079", R080: "18368_080",
        R081: "18369_081", R082: "18370_082", R085: "18371_085", R087: "18373_087", R088: "18374_088",
        R089: "18375_089", R090: "18376_090", R092: "18377_092", R093: "18378_093", R094: "18379_094",
        R095: "18380_095", R097: "18381_097", R098: "18382_098", R100: "18383_100", R102: "18384_102",
        R103: "18385_103", R109: "18386_109", R141: "18389_141", R150: "18390_150", R151: "18391_151",
        R152: "18392_152", R161: "18395_161", R190: "18404_190"
    };
    return map[code] || "";
}

function topoSort(formulas) {
    const visited = new Set();
    const sorted = [];

    function visit(node) {
        if (visited.has(node)) return;
        visited.add(node);
        (formulas[node] || []).forEach(dep => {
            const key = dep.replace('-', '');
            if (formulas[key]) visit(key);
        });
        sorted.push(node);
    }

    Object.keys(formulas).forEach(visit);
    return sorted;
}
