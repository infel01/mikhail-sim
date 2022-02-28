function parts_table_draw(parts_id) {
    const parts_num =  {main: 0, sub: 1, r_spare: 2, l_spare: 3, head: 4, body: 5, r_arm: 6, l_arm: 7, leg: 8, jump: 9, os: 10, assist: 11};
    const parts_name = {main: "主武装", sub: "副武装", r_spare: "右兵装担架", l_spare: "左兵装担架", head: "頭部装甲", body: "胸部装甲", r_arm: "右主腕装甲", l_arm: "左主腕装甲", leg: "主脚装甲", jump: "跳躍ユニット", os: "OSプラグイン", assist: "機体制御補助装置"};
    const option_text = ["特性①","特性②","特性③","特性④","追加特性枠"];
    const rarity = ["レア","エピック","レジェンド"];

    let htm_cd1;
    let htm_cd2 = new Array(3);
    let htm_cd3;
    let htm_cd4 = new Array(5);
    let htm_cd5;
    
    htm_cd1 =   '<table class="main-table"><tr><td>'+ parts_name[parts_id] +
                '<table class="parts-table"><tr>'+
                '<th>武装名</th><td><select id="' + parts_id + '" onChange="optionOnChangeEvent(' + parts_num[parts_id] + ', -1)"><option value="0">パーツを選択してください</option></select></td></tr><tr>' +
                '<th>レア度</th><td>';

    for(let i = 0 ; i <= 2 ; i++) {
        htm_cd2[i] = '<label><input type="radio" id="' + parts_id + '-r' + (i + 1) + '" name="' + parts_id + '-r" value="' + (i + 1) + '" onChange="rarityOnChangeEvent(' + parts_num[parts_id] + ')">' + rarity[i] + '</label>';
    }

    htm_cd3 =   '</td></tr></table></td></tr><tr><td>' +
                '<table class="option-table"><tr><th id="' + parts_id + '-head"></th><th id="' + parts_id + '-opname">特性名称</th><th id="' + parts_id + '-opvalue">数値</th></tr>';

    for(let i = 0 ; i <= 4 ; i++) {
        htm_cd4[i] =    '<tr><th id="' + parts_id + '-head">' + option_text[i] + '</th>' +
                        '<td id="' + parts_id + '-opname' + i + '"><select id="' + parts_id + '-op' + i + '" onChange="optionOnChangeEvent(' + parts_num[parts_id] + ',' + i + ')">' +
                        '<option value="0">特性を選択してください</option></select></td>' +
                        '<td id="' + parts_id + '-opvalue' + i + '"><input type="text" inputmode="demical" type="number" id="' + parts_id + '-value' + i + '" value="" onChange="textOnChangeEvent(' + parts_num[parts_id] + ')"><div id="' + parts_id + '-txt' + i + '"></div></td></tr>';
    }

    htm_cd5 = '</table></td></tr></table>';

    document.getElementById(parts_id + "_table").innerHTML = htm_cd1 + htm_cd2[0] + htm_cd2[1] + htm_cd2[2] + htm_cd3 + htm_cd4[0] + htm_cd4[1] + htm_cd4[2] + htm_cd4[3] + htm_cd4[4] + htm_cd5;

}

function total_option_table_draw(DataBox) {
    const color = ["white", "yellow", "red"];
    const fontcolor = ["black", "black", "white"];
    let htm_cd1;
    let percent_draw = "";
    let color_flg = 0;

    let re_calc = Math.floor(DataBox.value * 100) / 100;

    if(master_option_list[DataBox.id].percent_flg == 1) {
        percent_draw = '%';
    } else if(DataBox.id == 47) {
        percent_draw = '00';
    };

    let color_value = re_calc - master_option_list[DataBox.id].effect_limit;

    if(color_value <= 0) {
        color_flg = 0;
    } else if(color_value <= 20) {
        color_flg = 1;
    } else if(color_value > 20) {
        color_flg = 2;
    }

    htm_cd1 =   '<tr><td style="width: 200px; color: ' + fontcolor[color_flg] + '; background-color: ' + color[color_flg] + ';">'+ master_option_list[DataBox.id].name +'</td>' +
                '<td style="width: 50px; text-align: right; ' + fontcolor[color_flg] + '; background-color: ' + color[color_flg] + ';">' + re_calc + percent_draw + '</td>' +
                '<td style="width: 50px; text-align: right; ' + fontcolor[color_flg] + '; background-color: ' + color[color_flg] + ';">' + master_option_list[DataBox.id].effect_limit + percent_draw + '</td>';
    if(document.getElementById("effectTextOn").checked == true) htm_cd1 = htm_cd1 + '<td style="width: 500px; ' + fontcolor[color_flg] + '; background-color: ' + color[color_flg] + ';">' + master_option_list[DataBox.id].effectText + '</td></tr>';
    return htm_cd1;
}

function updateInfomation () {
    updateTime = [
        "2022/02/28 23:33",
        "2022/02/26 12:30",
        "2022/02/26 10:24"
        
    ];
    updateInfo = [
        "特性一覧に「効果文を表示する」のチェックボックスを追加",
        "更新情報表示を実装",
        "本ページ公開"
    ];

    let htm_cd = "";

    for(let i = 0 ; i < updateTime.length ; i++) {
        htm_cd = htm_cd + '<div style="width: 150px; display:inline-block; padding: 2px 0px;">' + updateTime[i] + '</div><div style="width: 500px; display: inline-block; padding: 2px 0px;">' + updateInfo[i] + '</div><br>'
    }
    document.getElementById("update-info").innerHTML = htm_cd;

}