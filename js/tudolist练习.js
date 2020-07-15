$(function () {
    $('#title').on('keydown', function (event) {
        if (event.keyCode === 13) {
            var local = getDate();
        } else {

        }
    })
    // 读取本地存储的数据 
    function getDate() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
            return JSON.parse(data);
        } else {
            return [];
        }
    }












































































})