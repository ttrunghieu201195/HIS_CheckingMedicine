//  const listHoatChat = [];
//x = 0;
// chrome.runtime.onMessage.addListener(function(msg, sender, sendresponse) {


//     const hoatchatTest = document.getElementById("hoatchat").value;
//     const test1 = listHoatChat.find(item => item === hoatchatTest);
//     console.log(test1);
//     if (test1) {
//         var result = 'inputs: ' + test1;
//         result += '<br /> output: ' + 'dữ liệu' + ' ' + test1 + ' ' + 'đã tồn tại vui lòng nhập lại';
//     } else {
//         listHoatChat[x] = hoatchatTest;
//         const inputFields = document.getElementById("hoatchat").value;
//         var result = 'inputs: ' + inputFields;
//         const test = document.getElementById('hoatchat1').innerHTML;
//         result += '<br /> output: ' + test;
//     }

//     sendresponse(result);


// });


// var html = document.createElement('div');
// html.innerHTML = '<input type="button" id="appendButton" name="button" class="button button1" value="Thêm" onclick="insertNewRecord()">';
// document.body.appendChild(html);
const listHoatChat = [];
x = 0;
document.getElementById('appendButton').addEventListener('click', function(Response) {
    chrome.runtime.sendMessage({ text: "hey" }, function(Response) {
        const hoatchatTest = document.getElementById("hoatchat").value;
        const test1 = listHoatChat.find(item => item === hoatchatTest);
        if (test1) {
            popup.classList.add("open-popup");
            var result = 'inputs: ' + test1 + '\n';
            result += 'output: ' + 'dữ liệu' + ' ' + test1;
            document.getElementById('gan').innerHTML = result + ' ' + Response;
        } else {
            listHoatChat[x] = hoatchatTest;
            chrome.runtime.onMessage.addListener(function(msg, sender, sendresponse) {
                const inputFields = document.getElementById("hoatchat").value;
                var result = 'inputs: ' + inputFields;
                const test = document.getElementById('hoatchat1').innerHTML;
                result += '<br /> output: ' + test;
                sendresponse(result);
            });
        }

    });
});