function send(){
    var arr = document.getElementsByTagName('input');
    var account = arr[1].value;
    var pass = arr[2].value;
    var checkpass = arr[3].value;
    var name = arr[4].value;
    var email= arr[5].value;
    var sdt = arr[6].value;
    var address = arr[7].value;
    var address1 = arr[8].value;
    var address2 = arr[9].value;
    var address3 = arr[10].value;
    var birthdate = arr[11].value;
    var gioitinh = arr[12].checked;
    var gioitinh1 = arr[13].checked;
    var gender ="";

    if(arr[12].checked){
        // gender === arr[12].value;
        gender ="Nam";
    }
    else {
        gender ="Nữ";
    }


    if(account === "" || pass === ""|| checkpass ===""||name ===""|| email===""||sdt ==="" ||gioitinh===""){
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
    else if(pass !== checkpass){
        alert("mật khẩu và xác nhận mật khẩu chưa giống nhau");
        return;
    }
    else if(isNaN(sdt)){//không phải số
        alert("Số điện thoại phải là số");
        return;
    }
    else if(gioitinh || gioitinh1){

    }
    else {
        alert("Vui lòng chọn mục giới tính")
        return;
    }
    var choice = confirm("Thông tin của bạn: \n"+account+"\n"+name+"\n"+email+"\n"+sdt+"\n"+gender+"\n"+birthdate);

    if(choice === true){
        alert("Thông tin của bạn đã được lưu \n"+"Cám ơn bạn đã quan tâm đến Enlish Online");
    }

}