function rarity_draw (element, num, flg) {
    if(flg == "true") {
        document.getElementById(element + "-opvalue" + num).style.backgroundColor = "#FFFFFF";
        document.getElementById(element + "-opname" + num).style.backgroundColor = "#FFFFFF";
        document.getElementById(element + "-op" + num).style.display = "inline";
        document.getElementById(element + "-value" + num).disabled = "";
    } else {
        document.getElementById(element + "-value" + num).value = "";
        document.getElementById(element + "-opvalue" + num).style.backgroundColor = "#D3D3D3";
        document.getElementById(element + "-opname" + num).style.backgroundColor = "#D3D3D3";
        document.getElementById(element + "-op" + num).style.display = "none";
        document.getElementById(element + "-value" + num).disabled = "disabled";
    }
}

function page_loading(element) {
    let temp_data;
    let lsflg = 0;
    parts_load(element);

    if(localStorage.hasOwnProperty(element + "-partsData")) {
        temp_data = localStorage.getItem(element + "-partsData");
        temp_data = JSON.parse(temp_data);
        partsData[element].id = temp_data["id"];
        partsData[element].rarity = temp_data["rarity"];
        lsflg = 1;
    }

    document.getElementById(element).value = partsData[element].id;
    document.getElementById(element + "-r" + partsData[element].rarity).checked = "checked";
    rarity_select(element);

    for(let i = 0 ; i <= 4 ; i++) {
        if(lsflg == 1) {
            partsData[element].op[i].opid = parseInt(temp_data["op"][i]["opid"], 10);
            partsData[element].op[i].type = temp_data["op"][i]["type"];
            partsData[element].op[i].group = parseInt(temp_data["op"][i]["group"], 10);
            partsData[element].op[i].value = temp_data["op"][i]["value"];
            document.getElementById(element + "-value" + i).value = partsData[element].op[i].value;
            document.getElementById(element + "-op" + i).value = partsData[element].op[i].opid;
        }
    }

    option_select(element, '-1');

}

function getPartsType (list) {
    let option_list;

    if(list.value != "nodata") {
        option_list = master_option_list.filter(param => param[list.value] === 1);
    } else {
        option_list = master_option_list.filter(param => param.type === 'nodata');
    }

    return option_list;
}