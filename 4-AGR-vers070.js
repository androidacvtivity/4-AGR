(function ($) {

    var activity_options_default_value = '';
    var caem_sorted = false;

    Drupal.behaviors.agr4 = {
        attach: function (context, settings) {
            jQuery('input.numeric').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });

            jQuery('input.float').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });
        }
    }

    /*webform.afterLoad.bns_split_tables = function() {
      if (Drupal.settings.mywebform.preview) {
        if (typeof(split_tables) == "function") {
          split_tables();
        }
      }
    }*/
})(jQuery)

webform.validators.agr4 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;

    if (!isNaN(Number(values.CAP1_R001_C1))) {
        var r001 = Number(values.CAP1_R001_C1);
    }
    if (!isNaN(Number(values.CAP1_R002_C1))) {
        var r002 = Number(values.CAP1_R002_C1);
    }
    if (!isNaN(Number(values.CAP1_R003_C1))) {
        var r003 = Number(values.CAP1_R003_C1);
    }
    if (!isNaN(Number(values.CAP1_R004_C1))) {
        var r004 = Number(values.CAP1_R004_C1);
    }
    if (!isNaN(Number(values.CAP1_R005_C1))) {
        var r005 = Number(values.CAP1_R005_C1);
    }
    if (!isNaN(Number(values.CAP1_R006_C1))) {
        var r006 = Number(values.CAP1_R006_C1);
    }
    if (!isNaN(Number(values.CAP1_R007_C1))) {
        var r007 = Number(values.CAP1_R007_C1);
    }
    if (!isNaN(Number(values.CAP1_R008_C1))) {
        var r008 = Number(values.CAP1_R008_C1);
    }
    if (!isNaN(Number(values.CAP1_R009_C1))) {
        var r009 = Number(values.CAP1_R009_C1);
    }
    if (!isNaN(Number(values.CAP1_R010_C1))) {
        var r010 = Number(values.CAP1_R010_C1);
    }
    if (!isNaN(Number(values.CAP1_R011_C1))) {
        var r011 = Number(values.CAP1_R011_C1);
    }
    if (!isNaN(Number(values.CAP1_R012_C1))) {
        var r012 = Number(values.CAP1_R012_C1);
    }
    if (!isNaN(Number(values.CAP1_R013_C1))) {
        var r013 = Number(values.CAP1_R013_C1);
    }
    if (!isNaN(Number(values.CAP1_R014_C1))) {
        var r014 = Number(values.CAP1_R014_C1);
    }
    if (!isNaN(Number(values.CAP1_R015_C1))) {
        var r015 = Number(values.CAP1_R015_C1);
    }
    if (!isNaN(Number(values.CAP1_R016_C1))) {
        var r016 = Number(values.CAP1_R016_C1);
    }
    if (!isNaN(Number(values.CAP1_R017_C1))) {
        var r017 = Number(values.CAP1_R017_C1);
    }
    if (!isNaN(Number(values.CAP1_R018_C1))) {
        var r018 = Number(values.CAP1_R018_C1);
    }
    if (!isNaN(Number(values.CAP1_R019_C1))) {
        var r019 = Number(values.CAP1_R019_C1);
    }
    if (!isNaN(Number(values.CAP1_R020_C1))) {
        var r020 = Number(values.CAP1_R020_C1);
    }
    if (!isNaN(Number(values.CAP1_R021_C1))) {
        var r021 = Number(values.CAP1_R021_C1);
    }
    if (!isNaN(Number(values.CAP1_R022_C1))) {
        var r022 = Number(values.CAP1_R022_C1);
    }
    if (!isNaN(Number(values.CAP1_R023_C1))) {
        var r023 = Number(values.CAP1_R023_C1);
    }
    if (!isNaN(Number(values.CAP1_R024_C1))) {
        var r024 = Number(values.CAP1_R024_C1);
    }
    if (!isNaN(Number(values.CAP1_R025_C1))) {
        var r025 = Number(values.CAP1_R025_C1);
    }
    if (!isNaN(Number(values.CAP1_R026_C1))) {
        var r026 = Number(values.CAP1_R026_C1);
    }
    if (!isNaN(Number(values.CAP1_R027_C1))) {
        var r027 = Number(values.CAP1_R027_C1);
    }
    if (!isNaN(Number(values.CAP1_R028_C1))) {
        var r028 = Number(values.CAP1_R028_C1);
    }
    if (!isNaN(Number(values.CAP1_R029_C1))) {
        var r029 = Number(values.CAP1_R029_C1);
    }
    if (!isNaN(Number(values.CAP1_R030_C1))) {
        var r030 = Number(values.CAP1_R030_C1);
    }
    if (!isNaN(Number(values.CAP1_R031_C1))) {
        var r031 = Number(values.CAP1_R031_C1);
    }
    if (!isNaN(Number(values.CAP1_R032_C1))) {
        var r032 = Number(values.CAP1_R032_C1);
    }
    if (!isNaN(Number(values.CAP1_R033_C1))) {
        var r033 = Number(values.CAP1_R033_C1);
    }
    if (!isNaN(Number(values.CAP1_R034_C1))) {
        var r034 = Number(values.CAP1_R034_C1);
    }
    if (!isNaN(Number(values.CAP1_R035_C1))) {
        var r035 = Number(values.CAP1_R035_C1);
    }
    if (!isNaN(Number(values.CAP1_R036_C1))) {
        var r036 = Number(values.CAP1_R036_C1);
    }
    if (!isNaN(Number(values.CAP1_R037_C1))) {
        var r037 = Number(values.CAP1_R037_C1);
    }
    if (!isNaN(Number(values.CAP1_R038_C1))) {
        var r038 = Number(values.CAP1_R038_C1);
    }
    if (!isNaN(Number(values.CAP1_R039_C1))) {
        var r039 = Number(values.CAP1_R039_C1);
    }
    if (!isNaN(Number(values.CAP1_R040_C1))) {
        var r040 = Number(values.CAP1_R040_C1);
    }
    if (!isNaN(Number(values.CAP1_R041_C1))) {
        var r041 = Number(values.CAP1_R041_C1);
    }
    if (!isNaN(Number(values.CAP1_R042_C1))) {
        var r042 = Number(values.CAP1_R042_C1);
    }
    if (!isNaN(Number(values.CAP1_R044_C1))) {
        var r044 = Number(values.CAP1_R044_C1);
    }
    if (!isNaN(Number(values.CAP1_R047_C1))) {
        var r047 = Number(values.CAP1_R047_C1);
    }
    if (!isNaN(Number(values.CAP1_R049_C1))) {
        var r049 = Number(values.CAP1_R049_C1);
    }
    if (!isNaN(Number(values.CAP1_R050_C1))) {
        var r050 = Number(values.CAP1_R050_C1);
    }
    if (!isNaN(Number(values.CAP1_R051_C1))) {
        var r051 = Number(values.CAP1_R051_C1);
    }
    if (!isNaN(Number(values.CAP1_R052_C1))) {
        var r052 = Number(values.CAP1_R052_C1);
    }
    if (!isNaN(Number(values.CAP1_R054_C1))) {
        var r054 = Number(values.CAP1_R054_C1);
    }
    if (!isNaN(Number(values.CAP1_R056_C1))) {
        var r056 = Number(values.CAP1_R056_C1);
    }
    if (!isNaN(Number(values.CAP1_R057_C1))) {
        var r057 = Number(values.CAP1_R057_C1);
    }
    if (!isNaN(Number(values.CAP1_R059_C1))) {
        var r059 = Number(values.CAP1_R059_C1);
    }
    if (!isNaN(Number(values.CAP1_R060_C1))) {
        var r060 = Number(values.CAP1_R060_C1);
    }
    if (!isNaN(Number(values.CAP1_R061_C1))) {
        var r061 = Number(values.CAP1_R061_C1);
    }
    if (!isNaN(Number(values.CAP1_R062_C1))) {
        var r062 = Number(values.CAP1_R062_C1);
    }
    if (!isNaN(Number(values.CAP1_R063_C1))) {
        var r063 = Number(values.CAP1_R063_C1);
    }
    if (!isNaN(Number(values.CAP1_R066_C1))) {
        var r066 = Number(values.CAP1_R066_C1);
    }
    if (!isNaN(Number(values.CAP1_R067_C1))) {
        var r067 = Number(values.CAP1_R067_C1);
    }
    if (!isNaN(Number(values.CAP1_R069_C1))) {
        var r069 = Number(values.CAP1_R069_C1);
    }
    if (!isNaN(Number(values.CAP1_R070_C1))) {
        var r070 = Number(values.CAP1_R070_C1);
    }
    if (!isNaN(Number(values.CAP1_R071_C1))) {
        var r071 = Number(values.CAP1_R071_C1);
    }
    if (!isNaN(Number(values.CAP1_R072_C1))) {
        var r072 = Number(values.CAP1_R072_C1);
    }
    if (!isNaN(Number(values.CAP1_R073_C1))) {
        var r073 = Number(values.CAP1_R073_C1);
    }
    if (!isNaN(Number(values.CAP1_R074_C1))) {
        var r074 = Number(values.CAP1_R074_C1);
    }
    if (!isNaN(Number(values.CAP1_R075_C1))) {
        var r075 = Number(values.CAP1_R075_C1);
    }
    if (!isNaN(Number(values.CAP1_R076_C1))) {
        var r076 = Number(values.CAP1_R076_C1);
    }
    if (!isNaN(Number(values.CAP1_R077_C1))) {
        var r077 = Number(values.CAP1_R077_C1);
    }
    if (!isNaN(Number(values.CAP1_R078_C1))) {
        var r078 = Number(values.CAP1_R078_C1);
    }
    if (!isNaN(Number(values.CAP1_R079_C1))) {
        var r079 = Number(values.CAP1_R079_C1);
    }
    if (!isNaN(Number(values.CAP1_R080_C1))) {
        var r080 = Number(values.CAP1_R080_C1);
    }
    if (!isNaN(Number(values.CAP1_R081_C1))) {
        var r081 = Number(values.CAP1_R081_C1);
    }
    if (!isNaN(Number(values.CAP1_R082_C1))) {
        var r082 = Number(values.CAP1_R082_C1);
    }
    if (!isNaN(Number(values.CAP1_R085_C1))) {
        var r085 = Number(values.CAP1_R085_C1);
    }
    if (!isNaN(Number(values.CAP1_R086_C1))) {
        var r086 = Number(values.CAP1_R086_C1);
    }
    if (!isNaN(Number(values.CAP1_R087_C1))) {
        var r087 = Number(values.CAP1_R087_C1);
    }
    if (!isNaN(Number(values.CAP1_R088_C1))) {
        var r088 = Number(values.CAP1_R088_C1);
    }
    if (!isNaN(Number(values.CAP1_R089_C1))) {
        var r089 = Number(values.CAP1_R089_C1);
    }
    if (!isNaN(Number(values.CAP1_R090_C1))) {
        var r090 = Number(values.CAP1_R090_C1);
    }
    if (!isNaN(Number(values.CAP1_R092_C1))) {
        var r092 = Number(values.CAP1_R092_C1);
    }
    if (!isNaN(Number(values.CAP1_R093_C1))) {
        var r093 = Number(values.CAP1_R093_C1);
    }
    if (!isNaN(Number(values.CAP1_R094_C1))) {
        var r094 = Number(values.CAP1_R094_C1);
    }
    if (!isNaN(Number(values.CAP1_R095_C1))) {
        var r095 = Number(values.CAP1_R095_C1);
    }
    if (!isNaN(Number(values.CAP1_R097_C1))) {
        var r097 = Number(values.CAP1_R097_C1);
    }
    if (!isNaN(Number(values.CAP1_R098_C1))) {
        var r098 = Number(values.CAP1_R098_C1);
    }
    if (!isNaN(Number(values.CAP1_R100_C1))) {
        var r100 = Number(values.CAP1_R100_C1);
    }
    if (!isNaN(Number(values.CAP1_R102_C1))) {
        var r102 = Number(values.CAP1_R102_C1);
    }
    if (!isNaN(Number(values.CAP1_R103_C1))) {
        var r103 = Number(values.CAP1_R103_C1);
    }
    if (!isNaN(Number(values.CAP1_R109_C1))) {
        var r109 = Number(values.CAP1_R109_C1);
    }
    if (!isNaN(Number(values.CAP1_R115_C1))) {
        var r115 = Number(values.CAP1_R115_C1);
    }
    if (!isNaN(Number(values.CAP1_R141_C1))) {
        var r141 = Number(values.CAP1_R141_C1);
    }
    if (!isNaN(Number(values.CAP1_R150_C1))) {
        var r150 = Number(values.CAP1_R150_C1);
    }
    if (!isNaN(Number(values.CAP1_R151_C1))) {
        var r151 = Number(values.CAP1_R151_C1);
    }
    if (!isNaN(Number(values.CAP1_R152_C1))) {
        var r152 = Number(values.CAP1_R152_C1);
    }
    if (!isNaN(Number(values.CAP1_R158_C1))) {
        var r158 = Number(values.CAP1_R158_C1);
    }
    if (!isNaN(Number(values.CAP1_R161_C1))) {
        var r161 = Number(values.CAP1_R161_C1);
    }
    if (!isNaN(Number(values.CAP1_R170_C1))) {
        var r170 = Number(values.CAP1_R170_C1);
    }
    if (!isNaN(Number(values.CAP1_R171_C1))) {
        var r171 = Number(values.CAP1_R171_C1);
    }
    if (!isNaN(Number(values.CAP1_R172_C1))) {
        var r172 = Number(values.CAP1_R172_C1);
    }
    if (!isNaN(Number(values.CAP1_R173_C1))) {
        var r173 = Number(values.CAP1_R173_C1);
    }
    if (!isNaN(Number(values.CAP1_R190_C1))) {
        var r190 = Number(values.CAP1_R190_C1);
    }
    if (!isNaN(Number(values.CAP1_R191_C1))) {
        var r191 = Number(values.CAP1_R191_C1);
    }

    var r007_047 = r007 + r013 + r014 + r020 + r047;
    if (r001 != r007_047 ) {
      webform.errors.push({
        'fieldName': 'CAP1_R001_C1',
        'weight': 1,
        'msg': Drupal.t('Cod eroare: 43-001 (Cap.1). Rind.001=Rind.007+013+014+020+047 [@r001 <> @r007_047]', {'@r001': Number(values["CAP1_R001_C1"]), '@r007_047': r007_047})
      });
    }

    var r002_006 = r002 + r003 + r004 + r005 + r006;
    if (r001 != r002_006) {
        webform.errors.push({
            'fieldName': 'CAP1_R001_C1',
            'weight': 2,
            'msg': Drupal.t('Cod eroare: 43-002 (Cap.1). Rind.001=Rind.002+003+004+005+006 [@r001 <> @r002_006]', { '@r001': Number(values["CAP1_R001_C1"]), '@r002_006': r002_006 })
        });
    }

    var r008_012 = r008 + r009 + r010 + r011 + r012;
    if (r007 != r008_012) {
        webform.errors.push({
            'fieldName': 'CAP1_R007_C1',
            'weight': 3,
            'msg': Drupal.t('Cod eroare: 43-003 (Cap.1). Rind.007=Rind.008+009+010+011+012 [@r007 <> @r008_012]', { '@r007': Number(values["CAP1_R007_C1"]), '@r008_012': r008_012 })
        });
    }

    if (r007 < r115) {
        webform.errors.push({
            'fieldName': 'CAP1_R007_C1',
            'weight': 4,
            'msg': Drupal.t('Cod eroare: 43-004 (Cap.1). Rind.007>=Rind.115 [@r007 < @r115]', { '@r007': Number(values["CAP1_R007_C1"]), '@r115': r115 })
        });
    }

    var r015_019 = r015 + r017 + r018 + r019;
    if (r014 != r015_019) {
        webform.errors.push({
            'fieldName': 'CAP1_R014_C1',
            'weight': 5,
            'msg': Drupal.t('Cod eroare: 43-005 (Cap.1). Rind.014=Rind.015+017+018+019 [@r014 <> @r015_019]', { '@r014': Number(values["CAP1_R014_C1"]), '@r015_019': r015_019 })
        });
    }

    if (r015 < r016) {
        webform.errors.push({
            'fieldName': 'CAP1_R015_C1',
            'weight': 6,
            'msg': Drupal.t('Cod eroare: 43-006 (Cap.1). Rind.015>=Rind.016 [@r015 < @r016]', { '@r015': Number(values["CAP1_R015_C1"]), '@r016': r016 })
        });
    }

    var r022_037 = r022 + r023 + r024 + r026 + r027 + r028 + r029 + r031 + r032 + r033 + r034 + r035 + r037;
    if (r021 != r022_037) {
        webform.errors.push({
            'fieldName': 'CAP1_R021_C1',
            'weight': 7,
            'msg': Drupal.t('Cod eroare: 43-007 (Cap.1). Rind.021=Rind.022+023+024+026+027+028+029+031+032+033+034+035+037 [@r021 <> @r022_037]', { '@r021': Number(values["CAP1_R021_C1"]), '@r022_037': r022_037 })
        });
    }

    if (r024 < r025) {
        webform.errors.push({
            'fieldName': 'CAP1_R024_C1',
            'weight': 8,
            'msg': Drupal.t('Cod eroare: 43-008 (Cap.1). Rind.024>=Rind.025 [@r024 < @r025]', { '@r024': Number(values["CAP1_R024_C1"]), '@r025': r025 })
        });
    }

    if (r029 < r030) {
        webform.errors.push({
            'fieldName': 'CAP1_R029_C1',
            'weight': 9,
            'msg': Drupal.t('Cod eroare: 43-009 (Cap.1). Rind.029>=Rind.030 [@r029 < @r030]', { '@r029': Number(values["CAP1_R029_C1"]), '@r030': r030 })
        });
    }

    var r031_035 = r031 + r032 + r033 + r034 + r035;
    if (r036 != r031_035) {
        webform.errors.push({
            'fieldName': 'CAP1_R036_C1',
            'weight': 10,
            'msg': Drupal.t('Cod eroare: 43-010 (Cap.1). Rind.036=Rind.031+032+033+034+035 [@r036 <> @r031_035]', { '@r036': Number(values["CAP1_R036_C1"]), '@r031_035': r031_035 })
        });
    }

    var r014_021 = r014 + r021;
    if (r038 != r014_021) {
        webform.errors.push({
            'fieldName': 'CAP1_R038_C1',
            'weight': 11,
            'msg': Drupal.t('Cod eroare: 43-011 (Cap.1). Rind.038=Rind.031+032+033+034+035 [@r038 <> @r014_021]', { '@r038': Number(values["CAP1_R038_C1"]), '@r014_021': r014_021 })
        });
    }

    var r040_061 = r040 + r041 + r044 + r047 + r049 + r050 + r051 + r054 + r056 + r060 + r061;
    if (r039 != r040_061) {
        webform.errors.push({
            'fieldName': 'CAP1_R039_C1',
            'weight': 12,
            'msg': Drupal.t('Cod eroare: 43-012 (Cap.1). Rind.039=Rind.040+041+044+047+049+050+051+054+056+060+061 [@r039 <> @r040_061]', { '@r039': Number(values["CAP1_R039_C1"]), '@r040_061': r040_061 })
        });
    }

    if (r041 < r042) {
        webform.errors.push({
            'fieldName': 'CAP1_R041_C1',
            'weight': 13,
            'msg': Drupal.t('Cod eroare: 43-013 (Cap.1). Rind.041>=Rind.042 [@r041 <> @r042]', { '@r041': Number(values["CAP1_R041_C1"]), '@r042': r042 })
        });
    }

    var r057_059 = r057 + r059;
    if (r056 != r057_059) {
        webform.errors.push({
            'fieldName': 'CAP1_R056_C1',
            'weight': 14,
            'msg': Drupal.t('Cod eroare: 43-014 (Cap.1). Rind.056=Rind.057+059 [@r056 <> @r057_059]', { '@r056': Number(values["CAP1_R056_C1"]), '@r057_059': r057_059 })
        });
    }

    var r063_092 = r063 + r066 + r085 + r087 + r088 + r089 + r090 + r092;
    if (r062 != r063_092) {
        webform.errors.push({
            'fieldName': 'CAP1_R062_C1',
            'weight': 16,
            'msg': Drupal.t('Cod eroare: 43-016 (Cap.1). Rind.062=Rind.063+066+085+087+088+089+090+092 [@r062 <> @r063_092]', { '@r062': Number(values["CAP1_R062_C1"]), '@r063_092': r063_092 })
        });
    }

    var r067_082 = r067 + r069 + r070 + r071 + r072 + r073 + r074 + r075 + r076 + r077 + r078 + r079 + r080 + r081 + r082;
    if (r066 != r067_082) {
        webform.errors.push({
            'fieldName': 'CAP1_R066_C1',
            'weight': 17,
            'msg': Drupal.t('Cod eroare: 43-017 (Cap.1). Rind.066=Rind.067+069+070+071+072+073+074+075+076+077+078+079+080+081+082 [@r066 <> @r067_082]', { '@r066': Number(values["CAP1_R066_C1"]), '@r067_082': r067_082 })
        });
    }

    if (r085 < r086) {
        webform.errors.push({
            'fieldName': 'CAP1_R085_C1',
            'weight': 18,
            'msg': Drupal.t('Cod eroare: 43-018 (Cap.1). Rind.085>=Rind.086 [@r085 < @r086]', { '@r085': Number(values["CAP1_R085_C1"]), '@r086': r086 })
        });
    }

    var r020_141 = r020 + r094 + r095 + r097 + r098 + r100 + r102 + r103 + r109 + r141;
    if (r093 != r020_141) {
        webform.errors.push({
            'fieldName': 'CAP1_R093_C1',
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 43-019 (Cap.1). Rind.093=Rind.020+094+095+097+098+100+102+103+109+141 [@r093 <> @r020_141]', { '@r093': Number(values["CAP1_R093_C1"]), '@r020_141': r020_141 })
        });
    }

    var r038_093 = r038 + r039 + r062 + r093;
    if (r150 != r038_093) {
        webform.errors.push({
            'fieldName': 'CAP1_R150_C1',
            'weight': 21,
            'msg': Drupal.t('Cod eroare: 43-021 (Cap.1). Rind.150=Rind.038+039+062+093 [@r150 <> @r038_093]', { '@r150': Number(values["CAP1_R150_C1"]), '@r038_093': r038_093 })
        });
    }

    var r151_152 = r151 + r152;
    if (r150 < r151_152) {
        webform.errors.push({
            'fieldName': 'CAP1_R150_C1',
            'weight': 22,
            'msg': Drupal.t('Cod eroare: 43-022 (Cap.1). Rind.150>=Rind.151+152 [@r150 < @r151_152]', { '@r150': Number(values["CAP1_R150_C1"]), '@r151_152': r151_152 })
        });
    }

    var r150_190 = r150 - r151 - r152 + r190;
    if (r161 != r150_190) {
        webform.errors.push({
            'fieldName': 'CAP1_R161_C1',
            'weight': 23,
            'msg': Drupal.t('Cod eroare: 43-023 (Cap.1). Rind.161=Rind.150-151-152+190 [@r161 <> @r150_190]', { '@r161': Number(values["CAP1_R161_C1"]), '@r150_190': r150_190 })
        });
    }

    if (r109 < r158) {
        webform.errors.push({
            'fieldName': 'CAP1_R109_C1',
            'weight': 24,
            'msg': Drupal.t('Cod eroare: 43-024 (Cap.1). Rind.109>=Rind.158 [@r109 < @r158]', { '@r109': Number(values["CAP1_R109_C1"]), '@r158': r158 })
        });
    }

    if (r190 < r191) {
        webform.errors.push({
            'fieldName': 'CAP1_R190_C1',
            'weight': 25,
            'msg': Drupal.t('Cod eroare: 43-025 (Cap.1). Rind.190>=Rind.191 [@r190 < @r191]', { '@r190': Number(values["CAP1_R190_C1"]), '@r191': r191 })
        });
    }

    var r170_173 = r170 + r171 + r172 + r173;
    if (r161 < r170_173) {
        webform.errors.push({
            'fieldName': 'CAP1_R161_C1',
            'weight': 26,
            'msg': Drupal.t('Cod eroare: 43-026 (Cap.1). Rind.161>=Rind.170+171+172+173 [@r161 < @r170_173]', { '@r161': Number(values["CAP1_R161_C1"]), '@r170_173': r170_173 })
        });
    }

    // Start dynamic validations ----------------------------------------------------------------------------------------------
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        if (!isNaN(String(values.CAP_CUATM_FILIAL[j]))) {
            var CAP_CUATM_FILIAL = String(values.CAP_CUATM_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R001_C1_FILIAL))) {
            var r001 = Number(values.CAP1_R001_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R002_C1_FILIAL))) {
            var r002 = Number(values.CAP1_R002_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R003_C1_FILIAL))) {
            var r003 = Number(values.CAP1_R003_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R004_C1_FILIAL))) {
            var r004 = Number(values.CAP1_R004_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R005_C1_FILIAL))) {
            var r005 = Number(values.CAP1_R005_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R006_C1_FILIAL))) {
            var r006 = Number(values.CAP1_R006_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R007_C1_FILIAL))) {
            var r007 = Number(values.CAP1_R007_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R008_C1_FILIAL))) {
            var r008 = Number(values.CAP1_R008_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R009_C1_FILIAL))) {
            var r009 = Number(values.CAP1_R009_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R010_C1_FILIAL))) {
            var r010 = Number(values.CAP1_R010_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R011_C1_FILIAL))) {
            var r011 = Number(values.CAP1_R011_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R012_C1_FILIAL))) {
            var r012 = Number(values.CAP1_R012_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R013_C1_FILIAL))) {
            var r013 = Number(values.CAP1_R013_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R014_C1_FILIAL))) {
            var r014 = Number(values.CAP1_R014_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R015_C1_FILIAL))) {
            var r015 = Number(values.CAP1_R015_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R016_C1_FILIAL))) {
            var r016 = Number(values.CAP1_R016_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R017_C1_FILIAL))) {
            var r017 = Number(values.CAP1_R017_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R018_C1_FILIAL))) {
            var r018 = Number(values.CAP1_R018_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R019_C1_FILIAL))) {
            var r019 = Number(values.CAP1_R019_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R020_C1_FILIAL))) {
            var r020 = Number(values.CAP1_R020_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R021_C1_FILIAL))) {
            var r021 = Number(values.CAP1_R021_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R022_C1_FILIAL))) {
            var r022 = Number(values.CAP1_R022_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R023_C1_FILIAL))) {
            var r023 = Number(values.CAP1_R023_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R024_C1_FILIAL))) {
            var r024 = Number(values.CAP1_R024_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R025_C1_FILIAL))) {
            var r025 = Number(values.CAP1_R025_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R026_C1_FILIAL))) {
            var r026 = Number(values.CAP1_R026_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R027_C1_FILIAL))) {
            var r027 = Number(values.CAP1_R027_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R028_C1_FILIAL))) {
            var r028 = Number(values.CAP1_R028_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R029_C1_FILIAL))) {
            var r029 = Number(values.CAP1_R029_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R030_C1_FILIAL))) {
            var r030 = Number(values.CAP1_R030_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R031_C1_FILIAL))) {
            var r031 = Number(values.CAP1_R031_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R032_C1_FILIAL))) {
            var r032 = Number(values.CAP1_R032_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R033_C1_FILIAL))) {
            var r033 = Number(values.CAP1_R033_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R034_C1_FILIAL))) {
            var r034 = Number(values.CAP1_R034_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R035_C1_FILIAL))) {
            var r035 = Number(values.CAP1_R035_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R036_C1_FILIAL))) {
            var r036 = Number(values.CAP1_R036_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R037_C1_FILIAL))) {
            var r037 = Number(values.CAP1_R037_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R038_C1_FILIAL))) {
            var r038 = Number(values.CAP1_R038_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R039_C1_FILIAL))) {
            var r039 = Number(values.CAP1_R039_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R040_C1_FILIAL))) {
            var r040 = Number(values.CAP1_R040_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R041_C1_FILIAL))) {
            var r041 = Number(values.CAP1_R041_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R042_C1_FILIAL))) {
            var r042 = Number(values.CAP1_R042_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R044_C1_FILIAL))) {
            var r044 = Number(values.CAP1_R044_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R047_C1_FILIAL))) {
            var r047 = Number(values.CAP1_R047_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R049_C1_FILIAL))) {
            var r049 = Number(values.CAP1_R049_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R050_C1_FILIAL))) {
            var r050 = Number(values.CAP1_R050_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R051_C1_FILIAL))) {
            var r051 = Number(values.CAP1_R051_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R052_C1_FILIAL))) {
            var r052 = Number(values.CAP1_R052_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R054_C1_FILIAL))) {
            var r054 = Number(values.CAP1_R054_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R056_C1_FILIAL))) {
            var r056 = Number(values.CAP1_R056_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R057_C1_FILIAL))) {
            var r057 = Number(values.CAP1_R057_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R059_C1_FILIAL))) {
            var r059 = Number(values.CAP1_R059_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R060_C1_FILIAL))) {
            var r060 = Number(values.CAP1_R060_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R061_C1_FILIAL))) {
            var r061 = Number(values.CAP1_R061_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R062_C1_FILIAL))) {
            var r062 = Number(values.CAP1_R062_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R063_C1_FILIAL))) {
            var r063 = Number(values.CAP1_R063_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R066_C1_FILIAL))) {
            var r066 = Number(values.CAP1_R066_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R067_C1_FILIAL))) {
            var r067 = Number(values.CAP1_R067_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R069_C1_FILIAL))) {
            var r069 = Number(values.CAP1_R069_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R070_C1_FILIAL))) {
            var r070 = Number(values.CAP1_R070_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R071_C1_FILIAL))) {
            var r071 = Number(values.CAP1_R071_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R072_C1_FILIAL))) {
            var r072 = Number(values.CAP1_R072_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R073_C1_FILIAL))) {
            var r073 = Number(values.CAP1_R073_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R074_C1_FILIAL))) {
            var r074 = Number(values.CAP1_R074_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R075_C1_FILIAL))) {
            var r075 = Number(values.CAP1_R075_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R076_C1_FILIAL))) {
            var r076 = Number(values.CAP1_R076_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R077_C1_FILIAL))) {
            var r077 = Number(values.CAP1_R077_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R078_C1_FILIAL))) {
            var r078 = Number(values.CAP1_R078_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R079_C1_FILIAL))) {
            var r079 = Number(values.CAP1_R079_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R080_C1_FILIAL))) {
            var r080 = Number(values.CAP1_R080_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R081_C1_FILIAL))) {
            var r081 = Number(values.CAP1_R081_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R082_C1_FILIAL))) {
            var r082 = Number(values.CAP1_R082_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R085_C1_FILIAL))) {
            var r085 = Number(values.CAP1_R085_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R086_C1_FILIAL))) {
            var r086 = Number(values.CAP1_R086_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R087_C1_FILIAL))) {
            var r087 = Number(values.CAP1_R087_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R088_C1_FILIAL))) {
            var r088 = Number(values.CAP1_R088_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R089_C1_FILIAL))) {
            var r089 = Number(values.CAP1_R089_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R090_C1_FILIAL))) {
            var r090 = Number(values.CAP1_R090_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R092_C1_FILIAL))) {
            var r092 = Number(values.CAP1_R092_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R093_C1_FILIAL))) {
            var r093 = Number(values.CAP1_R093_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R094_C1_FILIAL))) {
            var r094 = Number(values.CAP1_R094_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R095_C1_FILIAL))) {
            var r095 = Number(values.CAP1_R095_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R097_C1_FILIAL))) {
            var r097 = Number(values.CAP1_R097_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R098_C1_FILIAL))) {
            var r098 = Number(values.CAP1_R098_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R100_C1_FILIAL))) {
            var r100 = Number(values.CAP1_R100_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R102_C1_FILIAL))) {
            var r102 = Number(values.CAP1_R102_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R103_C1_FILIAL))) {
            var r103 = Number(values.CAP1_R103_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R109_C1_FILIAL))) {
            var r109 = Number(values.CAP1_R109_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R115_C1_FILIAL))) {
            var r115 = Number(values.CAP1_R115_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R141_C1_FILIAL))) {
            var r141 = Number(values.CAP1_R141_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R150_C1_FILIAL))) {
            var r150 = Number(values.CAP1_R150_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R151_C1_FILIAL))) {
            var r151 = Number(values.CAP1_R151_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R152_C1_FILIAL))) {
            var r152 = Number(values.CAP1_R152_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R158_C1_FILIAL))) {
            var r158 = Number(values.CAP1_R158_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R161_C1_FILIAL))) {
            var r161 = Number(values.CAP1_R161_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R170_C1_FILIAL))) {
            var r170 = Number(values.CAP1_R170_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R171_C1_FILIAL))) {
            var r171 = Number(values.CAP1_R171_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R172_C1_FILIAL))) {
            var r172 = Number(values.CAP1_R172_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R173_C1_FILIAL))) {
            var r173 = Number(values.CAP1_R173_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R190_C1_FILIAL))) {
            var r190 = Number(values.CAP1_R190_C1_FILIAL);
        }
        if (!isNaN(Number(values.CAP1_R191_C1_FILIAL))) {
            var r191 = Number(values.CAP1_R191_C1_FILIAL);
        }

        var r007_047 = r007 + r013 + r014 + r020 + r047;
        if (r001 != r007_047) {
          webform.errors.push({
            'fieldName': 'CAP1_R001_C1_FILIAL' ,
            'weight': 1,
            'index': j,
            'msg': Drupal.t('Cod eroare: 43-001 (Cap.1). Rind.001=Rind.007+013+014+020+047 [@r001 <> @r007_047]', {'@r001': Number(values["CAP1_R001_C1_FILIAL"]), '@r007_047': r007_047})
          });
        }

        var r002_006 = r002 + r003 + r004 + r005 + r006;
        if (r001 != r002_006) {
            webform.errors.push({
                'fieldName': 'CAP1_R001_C1_FILIAL',
                'weight': 2,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-002 (Cap.1). Rind.001=Rind.002+003+004+005+006 [@r001 <> @r002_006]', { '@r001': Number(values["CAP1_R001_C1_FILIAL"]), '@r002_006': r002_006 })
            });
        }

        var r008_012 = r008 + r009 + r010 + r011 + r012;
        if (r007 != r008_012) {
            webform.errors.push({
                'fieldName': 'CAP1_R007_C1_FILIAL',
                'weight': 3,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-003 (Cap.1). Rind.007=Rind.008+009+010+011+012 [@r007 <> @r008_012]', { '@r007': Number(values["CAP1_R007_C1_FILIAL"]), '@r008_012': r008_012 })
            });
        }

        if (r007 < r115) {
            webform.errors.push({
                'fieldName': 'CAP1_R007_C1_FILIAL',
                'weight': 4,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-004 (Cap.1). Rind.007>=Rind.115 [@r007 < @r115]', { '@r007': Number(values["CAP1_R007_C1_FILIAL"]), '@r115': r115 })
            });
        }

        var r015_019 = r015 + r017 + r018 + r019;
        if (r014 != r015_019) {
            webform.errors.push({
                'fieldName': 'CAP1_R014_C1_FILIAL',
                'weight': 5,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-005 (Cap.1). Rind.014=Rind.015+017+018+019 [@r014 <> @r015_019]', { '@r014': Number(values["CAP1_R014_C1_FILIAL"]), '@r015_019': r015_019 })
            });
        }

        if (r015 < r016) {
            webform.errors.push({
                'fieldName': 'CAP1_R015_C1_FILIAL',
                'weight': 6,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-006 (Cap.1). Rind.015>=Rind.016 [@r015 < @r016]', { '@r015': Number(values["CAP1_R015_C1_FILIAL"]), '@r016': r016 })
            });
        }

        var r022_037 = r022 + r023 + r024 + r026 + r027 + r028 + r029 + r031 + r032 + r033 + r034 + r035 + r037;
        if (r021 != r022_037) {
            webform.errors.push({
                'fieldName': 'CAP1_R021_C1_FILIAL',
                'weight': 7,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-007 (Cap.1). Rind.021=Rind.022+023+024+026+027+028+029+031+032+033+034+035+037 [@r021 <> @r022_037]', { '@r021': Number(values["CAP1_R021_C1_FILIAL"]), '@r022_037': r022_037 })
            });
        }

        if (r024 < r025) {
            webform.errors.push({
                'fieldName': 'CAP1_R024_C1_FILIAL',
                'weight': 8,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-008 (Cap.1). Rind.024>=Rind.025 [@r024 < @r025]', { '@r024': Number(values["CAP1_R024_C1_FILIAL"]), '@r025': r025 })
            });
        }

        if (r029 < r030) {
            webform.errors.push({
                'fieldName': 'CAP1_R029_C1_FILIAL',
                'weight': 9,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-009 (Cap.1). Rind.029>=Rind.030 [@r029 < @r030]', { '@r029': Number(values["CAP1_R029_C1_FILIAL"]), '@r030': r030 })
            });
        }

        var r031_035 = r031 + r032 + r033 + r034 + r035;
        if (r036 != r031_035) {
            webform.errors.push({
                'fieldName': 'CAP1_R036_C1_FILIAL',
                'weight': 10,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-010 (Cap.1). Rind.036=Rind.031+032+033+034+035 [@r036 <> @r031_035]', { '@r036': Number(values["CAP1_R036_C1_FILIAL"]), '@r031_035': r031_035 })
            });
        }

        var r014_021 = r014 + r021;
        if (r038 != r014_021) {
            webform.errors.push({
                'fieldName': 'CAP1_R038_C1_FILIAL',
                'weight': 11,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-011 (Cap.1). Rind.038=Rind.031+032+033+034+035 [@r038 <> @r014_021]', { '@r038': Number(values["CAP1_R038_C1_FILIAL"]), '@r014_021': r014_021 })
            });
        }

        var r040_061 = r040 + r041 + r044 + r047 + r049 + r050 + r051 + r054 + r056 + r060 + r061;
        if (r039 != r040_061) {
            webform.errors.push({
                'fieldName': 'CAP1_R039_C1_FILIAL',
                'weight': 12,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-012 (Cap.1). Rind.039=Rind.040+041+044+047+049+050+051+054+056+060+061 [@r039 <> @r040_061]', { '@r039': Number(values["CAP1_R039_C1_FILIAL"]), '@r040_061': r040_061 })
            });
        }

        if (r041 < r042) {
            webform.errors.push({
                'fieldName': 'CAP1_R041_C1_FILIAL',
                'weight': 13,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-013 (Cap.1). Rind.041>=Rind.042 [@r041 < @r042]', { '@r041': Number(values["CAP1_R041_C1_FILIAL"]), '@r042': r042 })
            });
        }

        var r057_059 = r057 + r059;
        if (r056 != r057_059) {
            webform.errors.push({
                'fieldName': 'CAP1_R056_C1_FILIAL',
                'weight': 14,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-014 (Cap.1). Rind.056=Rind.057+059 [@r056 <> @r057_059]', { '@r056': Number(values["CAP1_R056_C1_FILIAL"]), '@r057_059': r057_059 })
            });
        }

        var r063_092 = r063 + r066 + r085 + r087 + r088 + r089 + r090 + r092;
        if (r062 != r063_092) {
            webform.errors.push({
                'fieldName': 'CAP1_R062_C1_FILIAL',
                'weight': 16,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-016 (Cap.1). Rind.062=Rind.063+066+085+087+088+089+090+092 [@r062 <> @r063_092]', { '@r062': Number(values["CAP1_R062_C1_FILIAL"]), '@r063_092': r063_092 })
            });
        }

        var r067_082 = r067 + r069 + r070 + r071 + r072 + r073 + r074 + r075 + r076 + r077 + r078 + r079 + r080 + r081 + r082;
        if (r066 != r067_082) {
            webform.errors.push({
                'fieldName': 'CAP1_R066_C1_FILIAL',
                'weight': 17,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-017 (Cap.1). Rind.066=Rind.067+069+070+071+072+073+074+075+076+077+078+079+080+081+082 [@r066 <> @r067_082]', { '@r066': Number(values["CAP1_R066_C1_FILIAL"]), '@r067_082': r067_082 })
            });
        }

        if (r085 < r086) {
            webform.errors.push({
                'fieldName': 'CAP1_R085_C1_FILIAL',
                'weight': 18,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-018 (Cap.1). Rind.085>=Rind.086 [@r085 < @r086]', { '@r085': Number(values["CAP1_R085_C1_FILIAL"]), '@r086': r086 })
            });
        }

        var r020_141 = r020 + r094 + r095 + r097 + r098 + r100 + r102 + r103 + r109 + r141;
        if (r093 != r020_141) {
            webform.errors.push({
                'fieldName': 'CAP1_R093_C1_FILIAL',
                'weight': 19,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-019 (Cap.1). Rind.093=Rind.020+094+095+097+098+100+102+103+109+141 [@r093 <> @r020_141]', { '@r093': Number(values["CAP1_R093_C1_FILIAL"]), '@r020_141': r020_141 })
            });
        }

        if (r109 < r158) {
            webform.errors.push({
                'fieldName': 'CAP1_R109_C1_FILIAL',
                'weight': 20,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-020 (Cap.1). Rind.109>=Rind.158 [@r109 < @r158]', { '@r109': Number(values["CAP1_R109_C1_FILIAL"]), '@r158': r158 })
            });
        }

        var r038_093 = r038 + r039 + r062 + r093;
        if (r150 != r038_093) {
            webform.errors.push({
                'fieldName': 'CAP1_R150_C1_FILIAL',
                'weight': 21,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-021 (Cap.1). Rind.150=Rind.038+039+062+093 [@r150 <> @r038_093]', { '@r150': Number(values["CAP1_R150_C1_FILIAL"]), '@r038_093': r038_093 })
            });
        }

        var r151_152 = r151 + r152;
        if (r150 < r151_152) {
            webform.errors.push({
                'fieldName': 'CAP1_R150_C1_FILIAL',
                'weight': 22,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-022 (Cap.1). Rind.150>=Rind.151+152 [@r150 < @r151_152]', { '@r150': Number(values["CAP1_R150_C1_FILIAL"]), '@r151_152': r151_152 })
            });
        }

        var r150_190 = r150 - r151 - r152 + r190;
        if (r161 != r150_190) {
            webform.errors.push({
                'fieldName': 'CAP1_R161_C1_FILIAL',
                'weight': 23, 
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-023 (Cap.1). Rind.161=Rind.150-151-152+190 [@r161 <> @r150_190]', { '@r161': Number(values["CAP1_R161_C1_FILIAL"]), '@r150_190': r150_190 })
            });
        }

        if (r109 < r158) {
            webform.errors.push({
                'fieldName': 'CAP1_R109_C1_FILIAL',
                'weight': 24,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-024 (Cap.1). Rind.109>=Rind.158 [@r109 < @r158]', { '@r109': Number(values["CAP1_R109_C1_FILIAL"]), '@r158': r158 })
            });
        }

        if (r190 < r191) {
            webform.errors.push({
                'fieldName': 'CAP1_R190_C1_FILIAL',
                'weight': 25,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-025 (Cap.1). Rind.190>=Rind.191 [@r190 < @r191]', { '@r190': Number(values["CAP1_R190_C1_FILIAL"]), '@r191': r191 })
            });
        }

        var r170_173 = r170 + r171 + r172 + r173;
        if (r161 < r170_173) {
            webform.errors.push({
                'fieldName': 'CAP1_R161_C1_FILIAL',
                'weight': 26,
                'index': j,
                'msg': Drupal.t('Cod eroare: 43-026 (Cap.1). Rind.161>=Rind.170+171+172+173 [@r161 < @r170_173]', { '@r161': Number(values["CAP1_R161_C1_FILIAL"]), '@r170_173': r170_173 })
            });
        }
    }
    // End dynamic validations ----------------------------------------------------------------------------------------------


    //Sort warnings & errors
    webform.warnings.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.errors.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.validatorsStatus['agr4'] = 1;
    validateWebform();

}

function sort_errors_warinings(a, b) {
    if (!a.hasOwnProperty('weight')) {
        a.error_code = 9999;
    }

    if (!b.hasOwnProperty('weight')) {
        b.error_code = 9999;
    }

    return toFloat(a.error_code) - toFloat(b.error_code);
}