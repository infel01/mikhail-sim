var partsData = {
    main:{  id: 0,
            rarity: 3,
            op:[{opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "-", group: 0, value: "0"}],},
    sub:{   id: 0,
            rarity: 3,
            op:[{opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "-", group: 0, value: "0"}],},
    r_spare:{   id: 0,
            rarity: 3,
            op:[{opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "-", group: 0, value: "0"}],},
    l_spare:{   id: 0,
            rarity: 3,
            op:[{opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "-", group: 0, value: "0"}],},
    head:{  id: 0,
            rarity: 3,
            op:[{opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "-", group: 0, value: "0"}],},
    body:{  id: 0,
            rarity: 3,
            op:[{opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "-", group: 0, value: "0"}],},
    r_arm:{ id: 0,
            rarity: 3,
            op:[{opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "-", group: 0, value: "0"}],},
    l_arm:{ id: 0,
            rarity: 3,
            op:[{opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "-", group: 0, value: "0"}],},
    leg:{   id: 0,
            rarity: 3,
            op:[{opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "-", group: 0, value: "0"}],},
    jump:{   id: 0,
            rarity: 3,
            op:[{opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "-", group: 0, value: "0"}],},
    os:{    id: 0,
            rarity: 3,
            op:[{opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "-", group: 0, value: "0"}],},
    assist:{id: 0,
            rarity: 3,
            op:[{opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "A", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "B", group: 0, value: "0"},
                {opid : 0, type: "-", group: 0, value: "0"}],}
};

var partsId = [
    "main",
    "sub",
    "r_spare",
    "l_spare",
    "head",
    "body",
    "r_arm",
    "l_arm",
    "leg",
    "jump",
    "os",
    "assist"
];

var total_option_value = [
    { id: 1, value: 0, count: 0},
    { id: 2, value: 0, count: 0},
    { id: 3, value: 0, count: 0},
    { id: 4, value: 0, count: 0},
    { id: 5, value: 0, count: 0},
    { id: 6, value: 0, count: 0},
    { id: 7, value: 0, count: 0},
    { id: 8, value: 0, count: 0},
    { id: 9, value: 0, count: 0},
    { id: 10, value: 0, count: 0},
    { id: 11, value: 0, count: 0},
    { id: 12, value: 0, count: 0},
    { id: 13, value: 0, count: 0},
    { id: 14, value: 0, count: 0},
    { id: 15, value: 0, count: 0},
    { id: 16, value: 0, count: 0},
    { id: 17, value: 0, count: 0},
    { id: 18, value: 0, count: 0},
    { id: 19, value: 0, count: 0},
    { id: 20, value: 0, count: 0},
    { id: 21, value: 0, count: 0},
    { id: 22, value: 0, count: 0},
    { id: 23, value: 0, count: 0},
    { id: 24, value: 0, count: 0},
    { id: 25, value: 0, count: 0},
    { id: 26, value: 0, count: 0},
    { id: 27, value: 0, count: 0},
    { id: 28, value: 0, count: 0},
    { id: 29, value: 0, count: 0},
    { id: 30, value: 0, count: 0},
    { id: 31, value: 0, count: 0},
    { id: 32, value: 0, count: 0},
    { id: 33, value: 0, count: 0},
    { id: 34, value: 0, count: 0},
    { id: 35, value: 0, count: 0},
    { id: 36, value: 0, count: 0},
    { id: 37, value: 0, count: 0},
    { id: 38, value: 0, count: 0},
    { id: 39, value: 0, count: 0},
    { id: 40, value: 0, count: 0},
    { id: 41, value: 0, count: 0},
    { id: 42, value: 0, count: 0},
    { id: 43, value: 0, count: 0},
    { id: 44, value: 0, count: 0},
    { id: 45, value: 0, count: 0},
    { id: 46, value: 0, count: 0},
    { id: 47, value: 0, count: 0},
    { id: 48, value: 0, count: 0},
    { id: 49, value: 0, count: 0},
    { id: 50, value: 0, count: 0},
    { id: 51, value: 0, count: 0},
    { id: 52, value: 0, count: 0},
    { id: 53, value: 0, count: 0},
    { id: 54, value: 0, count: 0},
    { id: 55, value: 0, count: 0},
    { id: 56, value: 0, count: 0},
    { id: 57, value: 0, count: 0},
    { id: 58, value: 0, count: 0},
    { id: 59, value: 0, count: 0},
    { id: 60, value: 0, count: 0},
    { id: 61, value: 0, count: 0},
    { id: 62, value: 0, count: 0},
    { id: 63, value: 0, count: 0},
    { id: 64, value: 0, count: 0},
    { id: 65, value: 0, count: 0},
    { id: 66, value: 0, count: 0},
    { id: 67, value: 0, count: 0},
    { id: 68, value: 0, count: 0},
    { id: 69, value: 0, count: 0},
    { id: 70, value: 0, count: 0},
    { id: 71, value: 0, count: 0},
    { id: 72, value: 0, count: 0},
    { id: 73, value: 0, count: 0},
    { id: 74, value: 0, count: 0},
    { id: 75, value: 0, count: 0},
    { id: 76, value: 0, count: 0},
    { id: 77, value: 0, count: 0},
    { id: 78, value: 0, count: 0},
    { id: 79, value: 0, count: 0},
    { id: 80, value: 0, count: 0},
    { id: 81, value: 0, count: 0},
    { id: 82, value: 0, count: 0},
    { id: 83, value: 0, count: 0}
];

function type_check(option_list, element, flg) {
    var filtering_option_list = option_list.filter(param => param.type === partsData[element].op[flg].type || param.type === 'nodata');

    return filtering_option_list;
}

function radio_check(element) {
    let elements = document.getElementsByName(element);
    let len = elements.length;
    let checkValue = '';

    for (let i = 0; i < len; i++){
        if (elements.item(i).checked){
            checkValue = elements.item(i).value;
        }
    }
    return checkValue;
}

function page_load() {
//????????????
    let windowSize = 0; 

    if(navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        windowSize = window.innerHeight;
        if(windowSize > 800) windowSize = 800;
        document.getElementById("mainframe1").style.height = windowSize + 'px';
        document.getElementById("mainframe2").style.height = (windowSize -170) + 'px';
    } else {
        windowSize = window.innerHeight - 100;
        document.getElementById("mainframe1").style.height = windowSize + 'px';
        document.getElementById("mainframe2").style.height = (windowSize - 170) + 'px';
    }

    sessionStorage.setItem('start_flg', 1);

    for(let i = 0 ; i < partsId.length ; i++) {
        parts_table_draw(partsId[i]);
        page_loading(partsId[i]);
    }

    partsChangeEvent();
    updateInfomation();

    sessionStorage.setItem('start_flg', 0);

}

function rarity_select(element) {
    partsData[element].rarity = radio_check(element + "-r");
    const r = partsData[element].rarity;
    const rarity_table_normal = {
        1: [{type: "A", opid: "", group: "", drawflg: -1},
            {type: "B", opid: "", group: "", drawflg: -1},
            {type: "", opid: 0, group: 0, drawflg: 0},
            {type: "", opid: 0, group: 0, drawflg: 0},],

        2: [{type: "A", opid: "", group: "", drawflg: -1},
            {type: "A", opid: "", group: "", drawflg: -1},
            {type: "B", opid: 0, group: 0, drawflg: 1},
            {type: "", opid: 0, group: 0, drawflg: 0},],

        3: [{type: "A", opid: "", group: "", drawflg: -1},
            {type: "A", opid: "", group: "", drawflg: -1},
            {type: "B", opid: 0, group: 0, drawflg: 1},
            {type: "B", opid: 0, group: 0, drawflg: 1},],
    };

    const rarity_table_os = {
        1: [{type: "A", opid: "", group: "", drawflg: -1},
            {type: "A", opid: "", group: "", drawflg: -1},
            {type: "", opid: 0, group: 0, drawflg: 0},
            {type: "", opid: 0, group: 0, drawflg: 0},],

        2: [{type: "A", opid: "", group: "", drawflg: -1},
            {type: "A", opid: "", group: "", drawflg: -1},
            {type: "A", opid: 0, group: 0, drawflg: 1},
            {type: "", opid: 0, group: 0, drawflg: 0},],

        3: [{type: "A", opid: "", group: "", drawflg: -1},
            {type: "A", opid: "", group: "", drawflg: -1},
            {type: "A", opid: 0, group: 0, drawflg: 1},
            {type: "A", opid: 0, group: 0, drawflg: 1},],
    };

    const rarity_table_assist = {
        1: [{type: "B", opid: "", group: "", drawflg: -1},
            {type: "B", opid: "", group: "", drawflg: -1},
            {type: "", opid: 0, group: 0, drawflg: 0},
            {type: "", opid: 0, group: 0, drawflg: 0},],

        2: [{type: "B", opid: "", group: "", drawflg: -1},
            {type: "B", opid: "", group: "", drawflg: -1},
            {type: "B", opid: 0, group: 0, drawflg: 1},
            {type: "", opid: 0, group: 0, drawflg: 0},],

        3: [{type: "B", opid: "", group: "", drawflg: -1},
            {type: "B", opid: "", group: "", drawflg: -1},
            {type: "B", opid: 0, group: 0, drawflg: 1},
            {type: "B", opid: 0, group: 0, drawflg: 1},],
    };
    switch(element) {
        case 'os':
            rarity_table = rarity_table_os;
            break;
        case 'assist':
            rarity_table = rarity_table_assist;
            break;
        default:
            rarity_table = rarity_table_normal;
            break;
    }

    var rarity_table;

    for(let i = 0 ; i <= 3 ; i++) {
        if(rarity_table[r][i].drawflg == 1) {
            rarity_draw(element, i, "true");
            if(partsData[element].op[i].opid == "") document.getElementById(element + "-op" + i).value = '0';
        };
        partsData[element].op[i].type = rarity_table[r][i].type;
        if(rarity_table[r][i].drawflg == 0) {
            document.getElementById(element + "-op" + i).value = '0';
            partsData[element].op[i].group = rarity_table[r][i].group;
            rarity_draw(element, i, "false");
        };
    }

    option_select(element, "-1");
}

function option_select(element, num) {
    const option_list = getPartsType(master_parts_list[document.getElementById(element).value]);
    let set_option = [5];
    let add_option;
    let skip_flg;
    let start_flg = sessionStorage.getItem("start_flg");

    if(start_flg == 0) partsChangeEvent();

    //??????ID?????????
    for(let i = 0 ; i <= 4 ; i++) {
        let set_flg = 0;
        let opid = document.getElementById(element + "-op" + i).value;
        for(let x = 0 ; x < option_list.length ; x++) {
            if(opid == option_list[x].id) set_flg = 1;

        }
        if(opid == "") opid = "0";
        if(set_flg == 1)  {
            partsData[element].op[i].opid = opid;
            partsData[element].op[i].group = master_option_list[opid].group;
            set_option[i] = master_option_list[opid].group;
        } else if(set_flg == 0) {
            partsData[element].op[i].opid = '0';
            partsData[element].op[i].group = '0';
            set_option[i] = '0';
        }
    }

    if(num != "-1") {
        partsData[element].op[num].value = "";
        document.getElementById(element + "-value" + num).value = "";
    } else if(num == "-1") {
        if(start_flg == 0) partsData[element].id = document.getElementById(element).value;
    }


    for(let x = 0 ; x <= 4 ; x++) {
        let select_delete = document.getElementById(element + "-op" + x);
        let reset_flg = 1;

        for(let y = select_delete.length ; y >= 0 ; y--) {
            select_delete.remove(y);
        }

        add_option = option_list;

        if(x != 4)  add_option = type_check(option_list, element, x);

        for(let i = 0 ; i < add_option.length ; i++) {
            skip_flg = 0;
            let add_select = document.createElement("option");

            for(let y = 0 ; y <= 4 ; y++) {
                if(y != x && set_option[y] == add_option[i].group && add_option[i].type != 'nodata') skip_flg = 1;
            }
            if(skip_flg != 1) {
                add_select.value = add_option[i].id;
                add_select.textContent = add_option[i].name;
                document.getElementById(element + "-op" + x).appendChild(add_select);
            }
            if(partsData[element].op[x].opid == add_option[i].id) reset_flg = 0;
        }
        if(reset_flg == 0) {
            document.getElementById(element + "-op" + x).value = partsData[element].op[x].opid;
        }else if(reset_flg == 1) {
            document.getElementById(element + "-op" + x).value = '0';
            document.getElementById(element + "-value" + x).value = "";
            partsData[element].op[x].opid = 0;
            partsData[element].op[x].value = 0;
        }


    }
    percent_input(element);
}

function percent_input(element) {
    for(i = 0 ; i <= 4 ; i++) {
        opid = partsData[element].op[i].opid;
        if(master_option_list[opid].percent_flg == '1') {
            document.getElementById(element + "-txt" + i).innerHTML = "%";
        } else if(document.getElementById(element + "-op" + i).value == 47) {
            document.getElementById(element + "-txt" + i).innerHTML = "00";
        } else {
            document.getElementById(element + "-txt" + i).innerHTML = "";
        }
    }
    total_option_calc();
}

function option_value(element) {
    for(let i = 0 ; i <= 4 ; i++) {
        let value_data = document.getElementById(element + "-value" + i);
        if(partsData[element].op[i].opid != 0 && value_data.value >= master_option_list[partsData[element].op[i].opid].parts_limit) value_data.value = master_option_list[partsData[element].op[i].opid].parts_limit;
        partsData[element].op[i].value = value_data.value;
    }
    total_option_calc();
}

function total_option_calc() {
    const partsDraw = [
        "assist",
        "os",
        "main",
        "sub",
        "r_spare",
        "l_spare",
        "head",
        "body",
        "r_arm",
        "l_arm",
        "leg",
        "jump"
    ]
    let eTF = document.getElementById("effectTextOn").checked;
    let partsEffectStat;
    let percent_draw = '';
    let total_option_code = '<table><tr><th style="width: 250px;">????????????</th>' +
    '<th style="width: 50px;">??????</th><th style="width: 50px;">??????</th><th style="width: 50px;">?????????</th>';
    if(eTF == true) total_option_code = total_option_code + '<th style="width: 600px;">??????</th>';
    total_option_code = total_option_code + '</tr>'

    for(let i = 0 ; i < total_option_value.length ; i++) {
        total_option_value[i].value = 0;
        total_option_value[i].count = 0;
    }
    
    for(let i = 0 ; i < partsDraw.length ; i ++) {
        if(partsData[partsDraw[i]].id == 0) continue;
        partsEffectStat = null;
        for(let x = 0 ; x < PRE_list.length ; x++) {
            if(PRE_list[x].id == partsData[partsDraw[i]].id) {
                partsEffectStat = PRE_list[x];
            }
        }
        if(i == 0) {
            switch(partsData[partsDraw[i]].id) {
                case '16':
                    total_option_code = total_option_code + '<tr><td style="width: 250px;">??????????????????????????????????????????</td>' +
                    '<td style="width: 50px; text-align: right;">5.0%</td>' +
                    '<td style="width: 50px;"></td>' +
                    '<td style="width: 50px;"></td>';
                    break;
                case '17':
                    total_option_code = total_option_code + '<tr><td style="width: 250px;">??????????????????????????????????????????&?????????</td>' +
                    '<td style="width: 50px; text-align: right;">7.5%</td>' +
                    '<td style="width: 50px;"></td>' +
                    '<td style="width: 50px;"></td>';
                    break;
                case '18':
                    total_option_code = total_option_code + '<tr><td style="width: 250px;">??????????????????????????????????????????</td>' +
                    '<td style="width: 50px; text-align: right;">10.0%</td>' +
                    '<td style="width: 50px;"></td>' +
                    '<td style="width: 50px;"></td>';
                    break;
            }
            if(eTF == true) total_option_code = total_option_code + '<td style="width: 600px;">??????????????????????????????????????????????????????????????????????????????????????????</td>';
            total_option_code = total_option_code + '</tr>';
        } else if(i == 1) {
            if(eTF == true) {
                for(let j = 0 ; j <= 6 ; j++) {
                    if(partsEffectStat["effectId" + j] == 0) break;
                    let line = '';
                    if(partsEffectStat["effectId" + (j + 1)] == 0) {
                        line = '???';
                    } else {
                        line = '???';
                    }

                    percent_draw = '';
                    if(master_option_list[partsEffectStat["effectId" + j]].percent_flg == 1) {
                        percent_draw = '%';
                    } else if(partsEffectStat["effectId" + j] == 47) {
                        percent_draw = '00';
                    };

                    if(j == 0) {
                        total_option_code = total_option_code + '<tr><td style="width: 250px;">' + partsEffectStat.effectName + '</td>';
                    } else {
                        total_option_code = total_option_code + '<tr><td style="width: 250px;">' + line + '</td>';
                        console.log(j);
                    }
                    total_option_code = total_option_code + '<td style="width: 50px; text-align: right;">' + partsEffectStat["effectValue" + j] + percent_draw + '</td>' +
                    '<td style="width: 50px; text-align: right;">' + master_option_list[partsEffectStat["effectId" + j]].effect_limit + percent_draw + '</td>' +
                    '<td style="width: 50px;"></td>' + '<td style="width: 600px;">??????????????????' + master_option_list[partsEffectStat["effectId" + j]].name + '</td></tr>';

                    if(master_option_list[partsData[partsDraw[i]].id].add_flg == 0) {
                        if(total_option_value[partsEffectStat["effectId" + j] - 1].value < Number(partsEffectStat["effectValue" + j])) total_option_value[partsEffectStat["effectId" + j] - 1].value = Number(partsEffectStat["effectValue" + j]);
                        total_option_value[partsEffectStat["effectId" + j] - 1].count += 1;
                    } else {
                        total_option_value[partsEffectStat["effectId" + j] - 1].value += Number(partsEffectStat["effectValue" + j]);
                        total_option_value[partsEffectStat["effectId" + j] - 1].count += 1;
                    }
                }
            } else {
                total_option_code = total_option_code + '<tr><td style="width: 250px;">' + partsEffectStat.effectName + '</td><td style="width: 50px;"></td><td style="width: 50px;"></td><td style="width: 50px;"></td></tr>' ;

                for(let j = 0 ; j <= 6 ; j++) {
                    if(partsEffectStat["effectId" + j] == 0) break;
                    if(master_option_list[partsData[partsDraw[i]].id].add_flg == 0) {
                        if(total_option_value[partsEffectStat["effectId" + j] - 1].value < Number(partsEffectStat["effectValue" + j])) total_option_value[partsEffectStat["effectId" + j] - 1].value = Number(partsEffectStat["effectValue" + j]);
                        total_option_value[partsEffectStat["effectId" + j] - 1].count += 1;
                    } else {
                        total_option_value[partsEffectStat["effectId" + j] - 1].value += Number(partsEffectStat["effectValue" + j]);
                        total_option_value[partsEffectStat["effectId" + j] - 1].count += 1;
                    }
                }
            }
        } else {
            if(partsData[partsDraw[i]].rarity != 3) continue;
            if(eTF == true) {
                for(let j = 0 ; j <= 6 ; j++) {
                    if(partsEffectStat["effectId" + j] == 0) break;
                    let line = '';
                    if(partsEffectStat["effectId" + (j + 1)] == 0) {
                        line = '???';
                    } else {
                        line = '???';
                    }

                    percent_draw = '';
                    if(master_option_list[partsEffectStat["effectId" + j]].percent_flg == 1) {
                        percent_draw = '%';
                    } else if(partsEffectStat["effectId" + j] == 47) {
                        percent_draw = '00';
                    };

                    if(j == 0) {
                        total_option_code = total_option_code + '<tr><td style="width: 250px; font-weight: bold; color: #FF6E00;">' + partsEffectStat.effectName + '</td>';
                    } else {
                        total_option_code = total_option_code + '<tr><td style="width: 250px;">' + line + '</td>';
                    }
                    total_option_code = total_option_code + '<td style="width: 50px; text-align: right;">' + partsEffectStat["effectValue" + j] + percent_draw + '</td>' +
                    '<td style="width: 50px; text-align: right;">' + master_option_list[partsEffectStat["effectId" + j]].effect_limit + percent_draw + '</td>' +
                    '<td style="width: 50px;"></td><td style="width: 600px;">??????????????????' + master_option_list[partsEffectStat["effectId" + j]].name + '</td></tr>';

                    if(master_option_list[partsEffectStat["effectId" + j]].add_flg == 0) {
                        if(total_option_value[partsEffectStat["effectId" + j] - 1].value < Number(partsEffectStat["effectValue" + j])) total_option_value[partsEffectStat["effectId" + j] - 1].value = Number(partsEffectStat["effectValue" + j]);
                        total_option_value[partsEffectStat["effectId" + j] - 1].count += 1;
                    } else {
                        total_option_value[partsEffectStat["effectId" + j] - 1].value += Number(partsEffectStat["effectValue" + j]);
                        total_option_value[partsEffectStat["effectId" + j] - 1].count += 1;
                    }
                }
            } else {
                total_option_code = total_option_code + '<tr><td style="width: 250px;  font-weight: bold; color: #FF6E00;">' + partsEffectStat.effectName + '</td><td style="width: 50px;"></td><td style="width: 50px;"></td><td style="width: 50px;"></td></tr>' ;
                for(let j = 0 ; j <= 6 ; j++) {
                    if(partsEffectStat["effectId" + j] == 0) break;
                    if(master_option_list[partsEffectStat["effectId" + j]].add_flg == 0) {
                        if(total_option_value[partsEffectStat["effectId" + j] - 1].value < Number(partsEffectStat["effectValue" + j])) total_option_value[partsEffectStat["effectId" + j] - 1].value = Number(partsEffectStat["effectValue" + j]);
                        total_option_value[partsEffectStat["effectId" + j] - 1].count += 1;
                        console.log("a");
                    } else {
                        total_option_value[partsEffectStat["effectId" + j] - 1].value += Number(partsEffectStat["effectValue" + j]);
                        total_option_value[partsEffectStat["effectId" + j] - 1].count += 1;
                        console.log("b");
                    }
                }
            }
        }
    }

    for(let i = 0 ; i < partsId.length ; i++) {
        for(let j = 0 ; j <= 4 ; j++) {
            let DataBox = partsData[partsId[i]].op[j];
            if(Number(DataBox.value) > 0 && DataBox.opid != '0') {
                for(let x = 0 ; x < total_option_value.length ; x++) {
                    if(total_option_value[x].id == DataBox.opid) {
                        if(master_option_list[DataBox.opid].add_flg == 0) {
                            if(total_option_value[x].value < Number(DataBox.value)) total_option_value[x].value = Number(DataBox.value);
                            total_option_value[x].count += 1;
                            break;
                        } else {
                            total_option_value[x].value += Number(DataBox.value);
                            total_option_value[x].count += 1;
                            break;
                        }
                    }
                }
            }
        }
    }

    for(let i = 0 ; i < total_option_value.length ; i++) {
        if(total_option_value[i].value > 0 && total_option_value[i].id != 1 && total_option_value[i].id != 10 && total_option_value[i].id != 47 && total_option_value[i].id != 48 && total_option_value[i].id != 50) {
            total_option_code = total_option_code + total_option_table_draw(total_option_value[i]);
        }
    }
    total_option_code = total_option_code + '</table>';

    document.getElementById("total-option").innerHTML = total_option_code;
}

function partsChangeEvent() {
    let genData = { gen1: 0, gen2: 0, gen3: 0, gen4: 0, gen5: 0};
    const SE_parts_list = [ "head", "body", "r_arm", "l_arm", "leg", "jump"];
    const gen_effect_list = {
        gen1: [0, 0, 0, 0, 0, 0, 0],
        gen2: [0, 0.4, 0.8, 1.2, 1.7, 2.1, 2.5],
        gen3: [0, 0.8, 1.7, 2.5, 3.3, 4.2, 5.0],
        gen4: [0, 1.2, 2.5, 3.8, 5.0, 6.2, 7.5],
        gen5: [0, 1.7, 3.3, 5.0, 6.7, 8.3, 10.0]
    }
    let gen_total = 0;
    
    
    for(let j = 0 ; j < SE_parts_list.length ; j++) {
        let selectParts = document.getElementById(SE_parts_list[j]).value;
        
        for(let i = 0 ; i < PSE_list.length ; i++) {
            if(master_parts_list[selectParts].text == PSE_list[i].name && i != 0) genData["gen" + PSE_list[i].gen]++;
        }
    }
    for(let i = 1 ; i <= 5 ; i++) {
        document.getElementById("gen" + i).innerHTML = genData["gen" + i];
        gen_total = gen_total + Math.floor(gen_effect_list["gen" + i][genData["gen" + i]]*10)/10;
    }
    
    document.getElementById("g-total").innerHTML = Math.floor(gen_total * 10) / 10 + "%";
}

function optionOnChangeEvent(id_num, value) {
    option_select(partsId[id_num], value);
}

function rarityOnChangeEvent(id_num) {
    rarity_select(partsId[id_num]);
}

function textOnChangeEvent(id_num) {
    option_value(partsId[id_num]);   
}



function local_storage_save() {
    let result = window.confirm("??????????????????????????????????????????????????????");

    if(result) {
        for(let i = 0 ; i < partsId.length ; i++) {
            localStorage.setItem(partsId[i] + "-partsData" , JSON.stringify(partsData[partsId[i]]));
        }
        alert("??????????????????????????????");
    } 
}

function local_storage_delete() {
    let result = window.confirm("?????????????????????????????????????????????\r\n????????????????????????????????????");

    if(result) {
        localStorage.clear();

        alert("???????????????????????????????????????");
    }

    window.location.reload();
}

function local_storage_load() {
    let result = window.confirm("??????????????????????????????????????????????????????\r\n????????????????????????");

    if(result) {
        alert("????????????????????????????????????");
        window.location.reload();
    }
}

window.onload = page_load;

window.onresize = function() {
    let timer = '';
    if(timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        let windowSize;
        if(navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
            windowSize = window.innerHeight;
            if(windowSize > 800) windowSize = 800;
            document.getElementById("mainframe1").style.height = windowSize + 'px';
            document.getElementById("mainframe2").style.height = (windowSize -170) + 'px';
        } else {
            windowSize = window.innerHeight - 100;
            document.getElementById("mainframe1").style.height = windowSize + 'px';
            document.getElementById("mainframe2").style.height = (windowSize - 170) + 'px';
        }
    }, 200);
};