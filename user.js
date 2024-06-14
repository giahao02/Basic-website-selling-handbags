var dangnhap=0;
createAdmin();
/*var userArray = [];
        var user = {username: 'admin', password: 'admin', fullname: 'BeeBags', address: 'XX/XXX ZZZ, Quận X, TPHCM', phone: '0123456789', datesignup: '21-12-2021'};
        userArray.push(user);
        localStorage.setItem('user', JSON.stringify(userArray));*/
function createAdmin() {
    if (localStorage.getItem('user') === null) {
        var userArray = [];
        var user = {username: 'admin', password: 'admin', fullname: 'BeeBags', address: 'XX/XXX ZZZ, Quận X, TPHCM', phone: '0123456789', datesignup: '21-12-2021'};
        userArray.push(user);
        localStorage.setItem('user', JSON.stringify(userArray));
    }
}
function show(){
    if(dangnhap==0){
        showform();

    }
  /*  else{
        if(dangnhap==2){
        //document.getElementById('uss').style.display = 'block';
     
       // document.getElementById("us").innerHTML=admin;
       document.getElementById('us').setAttribute('onclick', href='./admin/admin.html');
        }
        else{
        
        document.getElementById('us').setAttribute('onClick', 'logout()');
     
        }
}*/
}
function showform() {
    var userform = document.getElementById('user');
    userform.style.display = 'block';
}
function closeform() {
    var userform = document.getElementById('user');
    userform.style.display = 'none';
}
function showSignUp() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'block';
}
function showLogin() {
    document.getElementById('signup').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}
$(document).ready(function () {
            document.getElementById('signupform').addEventListener('submit', createUser);
            document.getElementById('loginform').addEventListener('submit', login);
        });
function createUser(e) {
    e.preventDefault();
    var fullname = document.getElementById('fullname');
    var address = document.getElementById('address');
    var phone = document.getElementById('phone');
    var username = document.getElementById('usernameSignUp');
    var password = document.getElementById('passwordSignUp');
    var password2 = document.getElementById('passwordSignUp2');
    var flag = true;
    if (!fullname.value) {
        document.getElementById('fullnameerror').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('fullnameerror').style.display = 'none';
    }
    if (!address.value) {
        document.getElementById('addresserror').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('addresserror').style.display = 'none';
    }
    if (!phone.value) {
        document.getElementById('phoneerror').style.display = 'block';
        flag = false;
    } else {
        if (isNaN(Number(phone.value))) {
            document.getElementById('phoneerror').style.display = 'block';
            document.getElementById('phoneerror').innerHTML = 'Số điện thoại không hợp lệ';
            flag = false;
        } else {
            if (Number(phone.value) < 100000000 || Number(phone.value) > 999999999) {
                document.getElementById('phoneerror').style.display = 'block';
                document.getElementById('phoneerror').innerHTML = 'Số điện thoại không đúng';
                flag = false;
            } else {
                document.getElementById('phoneerror').style.display = 'none';
            }
        }
    }
    if (!username.value) {
        document.getElementById('usererror').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('usererror').style.display = 'none';
    }
    if (!password.value) {
        document.getElementById('passworderror').style.display = 'block';
        flag = false;
    } else {
        if (password.value.length < 8) {
            document.getElementById('passworderror').style.display = 'block';
            document.getElementById('passworderror').innerHTML = 'Mật khẩu phải trên 8 ký tự';
            flag = false;
        } else {
            document.getElementById('passworderror').style.display = 'none';
        }
    }
    if (password2.value != password.value) {
        document.getElementById('password2error').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('password2error').style.display = 'none';
    }
    if (flag == false) {
        return false;
    }
    var d = new Date();
    var datesignup = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
    var user = {username: username.value, password: password.value, fullname: fullname.value, address: address.value, phone: phone.value, datesignup: datesignup};
    userArray = JSON.parse(localStorage.getItem('user'));
    for (var i = 0; i < userArray.length; i++) {
        if (user.username == userArray[i].username) {
            document.getElementById('usererror').style.display = 'block';
            document.getElementById('usererror').innerHTML = 'Tên đăng nhập đã có người sử dụng';
            username.focus();
            return false;
        }
    }
    userArray.push(user);
    localStorage.setItem('user', JSON.stringify(userArray));
//    customAlert('Bạn đã đăng ký thành công!', 'success');
    alert("Bạn đã đăng ký thành công!");
    showLogin();
}
function moveToAdminMgmt(){
    window.location.href = "http://127.0.0.1:5500/bruh/admin/admin.html";
}
function login(e) {
    e.preventDefault();
    var username = document.getElementById('usernameLogin').value;
    var password = document.getElementById('passwordLogin').value;
    var flag = true;
    if (!username) {
        document.getElementById('usernameerror').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('usernameerror').style.display = 'none';
    }
    if (!password) {
        document.getElementById('passwordloginerror').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('passwordloginerror').style.display = 'none';
    }
    if (flag == false) {
        return false;
    }
    userArray = JSON.parse(localStorage.getItem('user'));
    for (var i = 0; i < userArray.length; i++) {
        if (username == userArray[i].username) {
            if (password == userArray[i].password) {
                if(userArray[i].username=='admin'){
                    closeform();
                    alert("Đăng nhập thành công!");
                    document.getElementById("us").innerHTML='<a id="q">'+userArray[i].username+'</a>';
                    document.getElementById("us").innerHTML="<label>ADMIN</label>";
        document.getElementById('us').setAttribute('onclick', 'moveToAdminMgmt()');
                  ///  document.getElementById('q').setAttribute(href, window.location.href='./admin/admin.html');
                    dangnhap=2;
                   // show();
                    break;
                }
                closeform();
                alert("Đăng nhập thành công!");
               // localStorage.setItem('userlogin', JSON.stringify(userArray[i]));
               // window.location.reload(true);
               document.getElementById("us").innerHTML=userArray[i].username;
              // document.getElementById('us').setAttribute(onclick, logout());
               
                dangnhap=1;
                break;
            }
        }
    }
    document.getElementById('passwordloginerror').style.display = 'block';
    document.getElementById('passwordloginerror').innerHTML = 'Sai thông tin đăng nhập';
    return false;
}
function logout(url) {
    localStorage.removeItem('userlogin');
    localStorage.removeItem('cart');
    dangnhap=0;
    location.href = url;
}

/*function checklogin(){
	if(localStorage.getItem('userlogin')){
		var user = JSON.parse(localStorage.getItem('userlogin'));
		var s='';
		if(user.username ==='admin'){
			s = '<li><button onClick="window.location.href=\'admin/admin.html\'"><i class="fa fa-gear"></i></button></li>' +
				'<li><button>'+user.fullname+'</button><button id="btnlogout" onClick="logout(\'index.html\')">LOGOUT</button></li>'+
				'<li><button onClick="location.href=\'file/cart.html\'"><a class="fas fa-shopping-cart" href="" ></a></button></li>'+
				'<li><button onClick="showSearch()"><i class="fas fa-search"></i></button></li>';
		}else{
			s = '<li><button>'+user.fullname+'</button><button id="btnlogout" onClick="logout(\'index.html\')">LOGOUT</button></li>' +
				'<li><button onClick="location.href=\'file/cart.html\'"><a class="fas fa-shopping-cart" href="" ></a></button></li>'+
				'<li><button onClick="showSearch()"><i class="fas fa-search"></i></button></li>';
		}
		document.querySelector('#nav .topnav ul.right').innerHTML = s;
	}
}
function checklogin2(){
	if(localStorage.getItem('userlogin')){
		var user = JSON.parse(localStorage.getItem('userlogin'));
		var s='';
		if(user.username ==='admin'){
			s = '<li><button onClick="window.location.href=\'admin/admin.html\'"><i class="fa fa-gear"></i></button></li>'+
				'<li><button>'+user.fullname+'</button><button id="btnlogout" onClick="logout(\'index.html\')">LOGOUT</button></li>' +
				'<li><button onClick="location.href=\'file/cart.html\'"><a class="fas fa-shopping-cart" href="" ></a></button></li>'+
				'<li><button onClick="showSearch()"><i class="fas fa-search"></i></button></li>';
		}else{
			s = '<li><button>'+user.fullname+'</button><button id="btnlogout" onClick="logout(\'index.html\')">LOGOUT</button></li>' +
				'<li><button onClick="location.href=\'file/cart.html\'"><a class="fas fa-shopping-cart" href="" ></a></button></li>'+
				'<li><button onClick="showSearch()"><i class="fas fa-search"></i></button></li>';
		}
		document.querySelector('#nav .topnav ul.right').innerHTML = s;
            }
	}
*/


    function xoa(productId){
        cartArray = JSON.parse(localStorage.getItem('cart'));
        for(var i=0;i<cartArray.length;i++){
            if(cartArray[i].productID == productId){
               // if(confirm('Bạn có muốn xóa sản phẩm này?')){
                    cartArray.splice(i,1);
                    break;
               // }
            }
        }
        localStorage.setItem('cart',JSON.stringify(cartArray));
        confirm('Xóa thành công!');
        showchangeproductbox();
    }
    function showchangeproductbox(){
        document.getElementById('modal1').style.display = 'block';
        
        cartArray = JSON.parse(localStorage.getItem('cart'));
        var q=0;
        var tr='<table><tr style="background-color:bisque;"><th>STT</th><th>HÌNH ẢNH</th><th>TÊN SẢN PHẨM</th><th>SỐ LƯỢNG</th><th>GIÁ TIỀN(VNĐ)</th><th>XÓA</th></tr><br>';
        for(var i=0; i<cartArray.length;i++){
            tr+= '<tr><td>'+(i+1)+'</td><td><img src='+cartArray[i].img+' style="width:150px; height:150px;">'+'</td><td>'+cartArray[i].name+'</td><td>'+ cartArray[i].quantity+'</td><td>'+ cartArray[i].totalprice+'</td><td><button onClick="xoa('+cartArray[i].productID+')">Xóa</button></td></tr>';
            q+=cartArray[i].totalprice;
        }
        tr+='</table>';
        tr+='<h1>Tổng tiền: '+q+'<h1>';
        document.getElementById('cont').innerHTML=tr;
    }
  
    function closechangebox(){

        document.getElementById('modal1').style.display = 'none';
    }
    function showproduct(){	
        cartArray = JSON.parse(localStorage.getItem('cart'));
        var tr='<table><tr style="background-color:bisque;"><th>STT</th><th>THƯƠNG HIỆU</th><th>HÌNH ẢNH</th><th>TÊN SẢN PHẨM</th><th>GIÁ TIỀN(VNĐ)</th><th>XÓA/SỬA</th></tr><br>';
        for(var i=0; i<producttemp.length;i++){
            tr+= '<tr><td>'+(i+1)+'</td><td>'+producttemp[i].brand+'</td><td><img src='+producttemp[i].img+' style="width:150px; height:150px;">'+'</td><td>'+producttemp[i].name+'</td><td>'+ producttemp[i].price+'</td><td><button onClick="xoa('+productArray[i].productId+')">Xóa</button><br><br><button onClick="showchangeproductbox(\''+productArray[i].productId+'\')">Sửa</button></td></tr>';
        }
        tr+='</table>';
        document.getElementById('cont').innerHTML=tr;
    }
    function chotdon(){
        if(localStorage.getItem('hang') === null){
            var listdon = [];
            cartArray = JSON.parse(localStorage.getItem('cart'));
            listdon.push(cartArray);
            localStorage.setItem('hang', JSON.stringify(listdon));
            var cartArray = [];
            localStorage.setItem('cart', JSON.stringify(cartArray));
            closechangebox();
        }
        else {
            listdon=JSON.parse(localStorage.getItem('hang'));
            cartArray = JSON.parse(localStorage.getItem('cart'));
            listdon.push(cartArray);
            localStorage.setItem('hang', JSON.stringify(listdon));
            var cartArray = [];
            localStorage.setItem('cart', JSON.stringify(cartArray));
            closechangebox();
        }
    }
    function kiem(){
        if(dangnhap=0){
            alert("Phải đăng nhập để mua hàng!");
        }

    }
    
    