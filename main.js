var x = 1;

function addInput() {
    var str = '<div class="input-holder"><span>+38</span> <input type="text" maxlength="10" required onkeypress="return event.charCode >= 48 && event.charCode <= 57;" placeholder="Номер телефона"> <input id="sum'
     + (x + 1) + '" onkeypress="return event.charCode >= 48 && event.charCode <= 57;" onchange="if (this.value > 100) this.value = 100" type="number" placeholder="Сумма"></div>';
    document.getElementById('form').innerHTML += str;
    x++;
}
function checkSum(){
    var sum = 0;
    for (var i = 1; i <= x; i++){
        sum += +document.getElementById("sum" + i).value;
     }
    if(sum != 100){
            alert('сума поповнення має бути 100 грн.');
            addInput();
        } else {
            alert("сума введена вірно");
        }
}
