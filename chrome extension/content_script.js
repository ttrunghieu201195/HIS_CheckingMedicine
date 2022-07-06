
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
                var result = 'hoatchat: ' + inputFields;
                const test = document.getElementById('hienthi').innerHTML;
                result += '<br /> output: ' + test;
                sendresponse(result);
            });
        }

    });
});
