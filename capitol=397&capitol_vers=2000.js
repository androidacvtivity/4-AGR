var from = "";

$(document).ready(function () {
    form = $("#formDenShort").val();
    CAP1();
});

$(function () {
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", function (e) {
        CAP1();
    });
});

function CAP1() {

    //------------------------------- Rind -----------------------------------------------------

    var R001_C1 = $("#43_397_18300_001_1");
    var R002_C1 = $("#43_397_18301_002_1");
    var R003_C1 = $("#43_397_18302_003_1");
    var R004_C1 = $("#43_397_18303_004_1");
    var R005_C1 = $("#43_397_18304_005_1");
    var R006_C1 = $("#43_397_18305_006_1");
    var R007_C1 = $("#43_397_18306_007_1");
    var R008_C1 = $("#43_397_18307_008_1");
    var R009_C1 = $("#43_397_18308_009_1");
    var R010_C1 = $("#43_397_18309_010_1");
    var R011_C1 = $("#43_397_18310_011_1");
    var R012_C1 = $("#43_397_18311_012_1");
    var R013_C1 = $("#43_397_18312_013_1");
    var R014_C1 = $("#43_397_18313_014_1");
    var R015_C1 = $("#43_397_18314_015_1");
    var R017_C1 = $("#43_397_18316_017_1");
    var R018_C1 = $("#43_397_18317_018_1");
    var R019_C1 = $("#43_397_18318_019_1");
    var R020_C1 = $("#43_397_18319_020_1");
    var R021_C1 = $("#43_397_18320_021_1");
    var R022_C1 = $("#43_397_18321_022_1");
    var R023_C1 = $("#43_397_18322_023_1");
    var R024_C1 = $("#43_397_18323_024_1");
    var R026_C1 = $("#43_397_18325_026_1");
    var R027_C1 = $("#43_397_18326_027_1");
    var R028_C1 = $("#43_397_18327_028_1");
    var R029_C1 = $("#43_397_18328_029_1");
    var R031_C1 = $("#43_397_18330_031_1");
    var R032_C1 = $("#43_397_18331_032_1");
    var R033_C1 = $("#43_397_18332_033_1");
    var R034_C1 = $("#43_397_18333_034_1");
    var R035_C1 = $("#43_397_18334_035_1");
    var R036_C1 = $("#43_397_18335_036_1");
    var R037_C1 = $("#43_397_18336_037_1");
    var R038_C1 = $("#43_397_18337_038_1");
    var R039_C1 = $("#43_397_18338_039_1");
    var R040_C1 = $("#43_397_18339_040_1");
    var R041_C1 = $("#43_397_18340_041_1");
    var R044_C1 = $("#43_397_18342_044_1");
    var R047_C1 = $("#43_397_18343_047_1");
    var R049_C1 = $("#43_397_18344_049_1");
    var R050_C1 = $("#43_397_18345_050_1");
    var R051_C1 = $("#43_397_18346_051_1");
    var R054_C1 = $("#43_397_18347_054_1");
    var R056_C1 = $("#43_397_18348_056_1");
    var R057_C1 = $("#43_397_18349_057_1");
    var R059_C1 = $("#43_397_18350_059_1");
    var R060_C1 = $("#43_397_40650_060_1");
    var R061_C1 = $("#43_397_40651_061_1");
    var R062_C1 = $("#43_397_18353_062_1");
    var R063_C1 = $("#43_397_18354_063_1");
    var R066_C1 = $("#43_397_18355_066_1");
    var R067_C1 = $("#43_397_18356_067_1");
    var R069_C1 = $("#43_397_18357_069_1");
    var R070_C1 = $("#43_397_18358_070_1");
    var R071_C1 = $("#43_397_18359_071_1");
    var R072_C1 = $("#43_397_18360_072_1");
    var R073_C1 = $("#43_397_18361_073_1");
    var R074_C1 = $("#43_397_18362_074_1");
    var R075_C1 = $("#43_397_18363_075_1");
    var R076_C1 = $("#43_397_18364_076_1");
    var R077_C1 = $("#43_397_18365_077_1");
    var R078_C1 = $("#43_397_18366_078_1");
    var R079_C1 = $("#43_397_18367_079_1");
    var R080_C1 = $("#43_397_18368_080_1");
    var R081_C1 = $("#43_397_18369_081_1");
    var R082_C1 = $("#43_397_18370_082_1");
    var R085_C1 = $("#43_397_18371_085_1");
    var R087_C1 = $("#43_397_18373_087_1");
    var R088_C1 = $("#43_397_18374_088_1");
    var R089_C1 = $("#43_397_18375_089_1");
    var R090_C1 = $("#43_397_18376_090_1");
    var R092_C1 = $("#43_397_18377_092_1");
    var R093_C1 = $("#43_397_18378_093_1");
    var R094_C1 = $("#43_397_18379_094_1");
    var R095_C1 = $("#43_397_18380_095_1");
    var R097_C1 = $("#43_397_18381_097_1");
    var R098_C1 = $("#43_397_18382_098_1");
    var R100_C1 = $("#43_397_18383_100_1");
    var R102_C1 = $("#43_397_18384_102_1");
    var R103_C1 = $("#43_397_18385_103_1");
    var R109_C1 = $("#43_397_18386_109_1");
    var R141_C1 = $("#43_397_18389_141_1");
    var R150_C1 = $("#43_397_18390_150_1");
    var R151_C1 = $("#43_397_18391_151_1");
    var R152_C1 = $("#43_397_18392_152_1");
    var R161_C1 = $("#43_397_18395_161_1");
    var R190_C1 = $("#43_397_18404_190_1");

    //---------- readOnly input -----------------------  

    R001_C1.prop("readonly", true);

    R007_C1.prop("readonly", true);

    R014_C1.prop("readonly", true);

    R021_C1.prop("readonly", true);

    R036_C1.prop("readonly", true);

    R038_C1.prop("readonly", true);

    R039_C1.prop("readonly", true);

    R056_C1.prop("readonly", true);

    R062_C1.prop("readonly", true);

    R066_C1.prop("readonly", true);

    R093_C1.prop("readonly", true);

    R150_C1.prop("readonly", true);

    R161_C1.prop("readonly", true);

    //------------------------------- Rind -----------------------------------------------------

    R001_C1.val(Number(parseFloat(Number(R007_C1.val())) +
        parseFloat(Number(R013_C1.val())) +
        parseFloat(Number(R014_C1.val())) +
        parseFloat(Number(R020_C1.val())) +
        parseFloat(Number(R047_C1.val()))).toFixed(0));

    R001_C1.val(Number(parseFloat(Number(R002_C1.val())) +
        parseFloat(Number(R003_C1.val())) +
        parseFloat(Number(R004_C1.val())) +
        parseFloat(Number(R005_C1.val())) +
        parseFloat(Number(R006_C1.val()))).toFixed(0));

    R007_C1.val(Number(parseFloat(Number(R008_C1.val())) +
        parseFloat(Number(R009_C1.val())) +
        parseFloat(Number(R010_C1.val())) +
        parseFloat(Number(R011_C1.val())) +
        parseFloat(Number(R012_C1.val()))).toFixed(0));

    R014_C1.val(Number(parseFloat(Number(R015_C1.val())) +
        parseFloat(Number(R017_C1.val())) +
        parseFloat(Number(R018_C1.val())) +
        parseFloat(Number(R019_C1.val()))).toFixed(0));

    R021_C1.val(Number(parseFloat(Number(R022_C1.val())) +
        parseFloat(Number(R023_C1.val())) +
        parseFloat(Number(R024_C1.val())) +
        parseFloat(Number(R026_C1.val())) +
        parseFloat(Number(R027_C1.val())) +
        parseFloat(Number(R028_C1.val())) +
        parseFloat(Number(R029_C1.val())) +
        parseFloat(Number(R031_C1.val())) +
        parseFloat(Number(R032_C1.val())) +
        parseFloat(Number(R033_C1.val())) +
        parseFloat(Number(R034_C1.val())) +
        parseFloat(Number(R035_C1.val())) +
        parseFloat(Number(R037_C1.val()))).toFixed(0));

    R036_C1.val(Number(parseFloat(Number(R031_C1.val())) +
        parseFloat(Number(R032_C1.val())) +
        parseFloat(Number(R033_C1.val())) +
        parseFloat(Number(R034_C1.val())) +
        parseFloat(Number(R035_C1.val()))).toFixed(0));

    R038_C1.val(Number(parseFloat(Number(R014_C1.val())) +
        parseFloat(Number(R021_C1.val()))).toFixed(0));

    R039_C1.val(Number(parseFloat(Number(R040_C1.val())) +
        parseFloat(Number(R041_C1.val())) +
        parseFloat(Number(R044_C1.val())) +
        parseFloat(Number(R047_C1.val())) +
        parseFloat(Number(R049_C1.val())) +
        parseFloat(Number(R050_C1.val())) +
        parseFloat(Number(R051_C1.val())) +
        parseFloat(Number(R054_C1.val())) +
        parseFloat(Number(R056_C1.val())) +
        parseFloat(Number(R060_C1.val())) +
        parseFloat(Number(R061_C1.val()))).toFixed(0));

    R056_C1.val(Number(parseFloat(Number(R057_C1.val())) +
        parseFloat(Number(R059_C1.val()))).toFixed(0));

        // Here  but not calculated imediat row 66 becouse r66 is sum of many rows 

    R062_C1.val(Number(parseFloat(Number(R063_C1.val())) +
        parseFloat(Number(R066_C1.val())) +
        parseFloat(Number(R085_C1.val())) +
        parseFloat(Number(R087_C1.val())) +
        parseFloat(Number(R088_C1.val())) +
        parseFloat(Number(R089_C1.val())) +
        parseFloat(Number(R090_C1.val())) +
        parseFloat(Number(R092_C1.val()))).toFixed(1));

    R066_C1.val(Number(parseFloat(Number(R067_C1.val())) +
        parseFloat(Number(R069_C1.val())) +
        parseFloat(Number(R070_C1.val())) +
        parseFloat(Number(R071_C1.val())) +
        parseFloat(Number(R072_C1.val())) +
        parseFloat(Number(R073_C1.val())) +
        parseFloat(Number(R074_C1.val())) +
        parseFloat(Number(R075_C1.val())) +
        parseFloat(Number(R076_C1.val())) +
        parseFloat(Number(R077_C1.val())) +
        parseFloat(Number(R078_C1.val())) +
        parseFloat(Number(R079_C1.val())) +
        parseFloat(Number(R080_C1.val())) +
        parseFloat(Number(R081_C1.val())) +
        parseFloat(Number(R082_C1.val()))).toFixed(1));

    R093_C1.val(Number(parseFloat(Number(R020_C1.val())) +
        parseFloat(Number(R094_C1.val())) +
        parseFloat(Number(R095_C1.val())) +
        parseFloat(Number(R097_C1.val())) +
        parseFloat(Number(R098_C1.val())) +
        parseFloat(Number(R100_C1.val())) +
        parseFloat(Number(R102_C1.val())) +
        parseFloat(Number(R103_C1.val())) +
        parseFloat(Number(R109_C1.val())) +
        parseFloat(Number(R141_C1.val()))).toFixed(0));

    R150_C1.val(Number(parseFloat(Number(R038_C1.val())) +
        parseFloat(Number(R039_C1.val())) +
        parseFloat(Number(R062_C1.val())) +
        parseFloat(Number(R093_C1.val()))).toFixed(1));

    R161_C1.val(Number(parseFloat(Number(R150_C1.val())) -
        parseFloat(Number(R151_C1.val())) -
        parseFloat(Number(R152_C1.val())) +
        parseFloat(Number(R190_C1.val()))).toFixed(1));
}