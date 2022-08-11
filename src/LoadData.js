var current_time = new Date()
var ExHour
var ExMinute
//树脂、任务、周本
ExHour = ~~(data.resin_recovery_time / 3600 % 60)
ExMinute = ~~(data.resin_recovery_time / 60 % 60)
document.getElementById("resin").innerHTML = data.current_resin + '/' + data.max_resin
document.getElementById("resin_time").innerHTML = ExHour + '时' + ExMinute + '分'
document.getElementById("task").innerHTML = data.finished_task_num + '/' + data.total_task_num
document.getElementById("discount").innerHTML = data.remain_resin_discount_num + '/' + data.resin_discount_num_limit
//参量质变仪
if (data.transformer.obtained == true) {
    if (data.transformer.recovery_time.Day > 0)
        document.getElementById("transformer").innerHTML = data.transformer.recovery_time.Day + '天'
    else
        document.getElementById("transformer").innerHTML = data.transformer.recovery_time.Hour + ':' + data.transformer.recovery_time.Minute + ':' + data.transformer.recovery_time.Second
    if (data.transformer.recovery_time.reached == false)
        document.getElementById("transformer-0").innerHTML = "提醒关"
    else
        document.getElementById("transformer-0").innerHTML = "提醒开"
}
else {
    document.getElementById("transformer").innerHTML = "已领取"
}
//尘歌壶
document.getElementById("coin").innerHTML = data.current_home_coin + '/' + data.max_home_coin
ExHour = ~~(data.home_coin_recovery_time / 3600)
ExMinute = ~~(data.home_coin_recovery_time / 60 % 60)
document.getElementById("coin_time").innerHTML = ExHour + '时' + ExMinute + '分'
//探险
for (i = 0; i < data.expeditions.length; i++) {
    let newspan = document.createElement("span");
    let newimg = document.createElement("img");
    newspan.setAttribute("id", "status_" + i)
    newimg.setAttribute("name", "icon")
    document.getElementById(i).appendChild(newimg)
    document.getElementById(i).appendChild(newspan)
}
var icon = document.getElementsByName("icon")
for (i = 0; i < data.expeditions.length; i++) {
    icon[i].src = data.expeditions[i].avatar_side_icon
    if (data.expeditions[i].status == "Finished") {
        document.getElementById("status_" + i).innerHTML = "已完成"
    }
    else if (data.expeditions[i].status == "Ongoing") {
        ExHour = ~~(data.expeditions[i].remained_time / 3600)
        ExMinute = ~~(data.expeditions[i].remained_time / 60 % 60)
        document.getElementById("status_" + i).innerHTML = ExHour + "时" + ExMinute + "分"
    }
    else
        document.getElementById("status_" + i).innerHTML = "前面的区域以后再探索吧！"
}
