var a=document.getElementById("content").innerHTML;
/*var userArray = [
	{username: 'beebags', password: 'admin', fullname: 'BeeBags', address: 'XX/XXX ZZZ, Quận X, TPHCM', phone: '0123456789', datesignup: '21-12-2021'},
	{username: 'khach', password: 'khach', fullname: 'khach', address: 'XX/XXX ZZZ, Quận X, TPHCM', phone: '1212344523', datesignup: '25-12-2021'},
	{username: 'abc', password: 'abc', fullname: 'abc', address: 'XX/XXX ZZZ, Quận X, TPHCM', phone: '0234123523', datesignup: '30-12-2021'}
];
localStorage.setItem('user', JSON.stringify(userArray));*/
/*var productArray = [
	{productID:1, brand:'celine', img:'./img/products/1.jpg', name:'Horizontal Cabas In Textile With Triomphe Embroidery', price:64049250},
	{productID:2, brand:'celine', img:'./img/products/2.jpg', name:'Triomphe In Shiny Calfskin Shoulder Bag', price:61891562},
	{productID:3, brand:'celine', img:'./img/products/3.jpg', name:'16 Teen Soft Tweed And Calfskin Crossbody Bag', price:57191400},
	{productID:4, brand:'celine', img:'./img/products/4.jpg', name:'Belt Pico Grained Calfskin Bag', price:41336750},
	{productID:5, brand:'celine', img:'./img/products/5.jpg', name:'Cabas Mini In Canvas With Celine Print And Calfskin Vertical Tote', price:33046687},
	{productID:6, brand:'celine', img:'./img/products/6.jpg', name:'Cabas Large Thais Mohair With Triomphe Print And Calfskin Tote Bag', price:40428250},
	{productID:7, brand:'celine', img:'./img/products/7.jpg', name:'16 Teen Tweed And Calfskin Bucket Bag', price:48831875},
	{productID:8, brand:'celine', img:'./img/products/8.jpg', name:'16 Teen Soft Supple Grained Calfskin Crossbody Bag', price:59961000},
	{productID:9, brand:'celine', img:'./img/products/9.jpg', name:'Cabas Phantom Small In Soft Grained Calfskin Tote', price:45652125},
	{productID:10, brand:'celine', img:'./img/products/10.jpg', name:'Classic Small Calfskin Box Bag', price:80629375},
	{productID:11, brand:'lv', img:'./img/products/12.jpg', name:'Neo Monceau Epi White Shoulder Bag', price:47014875},
	{productID:12, brand:'lv', img:'./img/products/13.jpg', name:'My Lockme Two Tone Shoulder Bag', price:45425000},
	{productID:13, brand:'lv', img:'./img/products/14.jpg', name:'ALMA BB Handbag', price:38611250},
	{productID:14, brand:'lv', img:'./img/products/15.jpg', name:'Pallas Monogram Canvas Grained Leather Handbag', price:79221200},
	{productID:15, brand:'lv', img:'./img/products/16.jpg', name:'Vavin PM Emboss Monogram Empreinte leather Shoulder Bag', price:67001875},
	{productID:16, brand:'lv', img:'./img/products/17.jpg', name:'Blanche BB Monogram Shoulder Bag', price:46106375},
	{productID:17, brand:'lv', img:'./img/products/18.jpg', name:'Beaubourg MM Damier Ebene Canvas Shoulder bag', price:46560625},
	{productID:18, brand:'gucci', img:'./img/products/19.jpg', name:'GG Marmont Matelassé Leather Wallet on Chain', price:35431500},
	{productID:19, brand:'gucci', img:'./img/products/20.jpg', name:'Ophidia GG Messenger Bag', price:36340000},
	{productID:20, brand:'gucci', img:'./img/products/21.jpg', name:'Ophidia GG Ball Shape Mini Shoulder Bag', price:38270562},
	{productID:21, brand:'gucci', img:'./img/products/22.jpg', name:'Jackie 1961 Small Washed GG Jacquard Denim Shoulder Bag', price:54737125},
	{productID:22, brand:'gucci', img:'./img/products/23.jpg', name:'Jackie 1961 Small Corduroy Shoulder Bag', price:63367875},
];
localStorage.setItem('product',JSON.stringify(productArray));*/
var p=0;
function createProduct(){
	if(p==0){
		p=1;
		var productArray = [
			{productID:1, brand:'celine', img:'./img/products/1.jpg', name:'Horizontal Cabas In Textile With Triomphe Embroidery', price:64049250},
			{productID:2, brand:'celine', img:'./img/products/2.jpg', name:'Triomphe In Shiny Calfskin Shoulder Bag', price:61891562},
			{productID:3, brand:'celine', img:'./img/products/3.jpg', name:'16 Teen Soft Tweed And Calfskin Crossbody Bag', price:57191400},
			{productID:4, brand:'celine', img:'./img/products/4.jpg', name:'Belt Pico Grained Calfskin Bag', price:41336750},
			{productID:5, brand:'celine', img:'./img/products/5.jpg', name:'Cabas Mini In Canvas With Celine Print And Calfskin Vertical Tote', price:33046687},
			{productID:6, brand:'celine', img:'./img/products/6.jpg', name:'Cabas Large Thais Mohair With Triomphe Print And Calfskin Tote Bag', price:40428250},
			{productID:7, brand:'celine', img:'./img/products/7.jpg', name:'16 Teen Tweed And Calfskin Bucket Bag', price:48831875},
			{productID:8, brand:'celine', img:'./img/products/8.jpg', name:'16 Teen Soft Supple Grained Calfskin Crossbody Bag', price:59961000},
			{productID:9, brand:'celine', img:'./img/products/9.jpg', name:'Cabas Phantom Small In Soft Grained Calfskin Tote', price:45652125},
			{productID:10, brand:'celine', img:'./img/products/10.jpg', name:'Classic Small Calfskin Box Bag', price:80629375},
			{productID:11, brand:'lv', img:'./img/products/12.jpg', name:'Neo Monceau Epi White Shoulder Bag', price:47014875},
			{productID:12, brand:'lv', img:'./img/products/13.jpg', name:'My Lockme Two Tone Shoulder Bag', price:45425000},
			{productID:13, brand:'lv', img:'./img/products/14.jpg', name:'ALMA BB Handbag', price:38611250},
			{productID:14, brand:'lv', img:'./img/products/15.jpg', name:'Pallas Monogram Canvas Grained Leather Handbag', price:79221200},
			{productID:15, brand:'lv', img:'./img/products/16.jpg', name:'Vavin PM Emboss Monogram Empreinte leather Shoulder Bag', price:67001875},
			{productID:16, brand:'lv', img:'./img/products/17.jpg', name:'Blanche BB Monogram Shoulder Bag', price:46106375},
			{productID:17, brand:'lv', img:'./img/products/18.jpg', name:'Beaubourg MM Damier Ebene Canvas Shoulder bag', price:46560625},
			{productID:18, brand:'gucci', img:'./img/products/19.jpg', name:'GG Marmont Matelassé Leather Wallet on Chain', price:35431500},
			{productID:19, brand:'gucci', img:'./img/products/20.jpg', name:'Ophidia GG Messenger Bag', price:36340000},
			{productID:20, brand:'gucci', img:'./img/products/21.jpg', name:'Ophidia GG Ball Shape Mini Shoulder Bag', price:38270562},
			{productID:21, brand:'gucci', img:'./img/products/22.jpg', name:'Jackie 1961 Small Washed GG Jacquard Denim Shoulder Bag', price:54737125},
			{productID:22, brand:'gucci', img:'./img/products/23.jpg', name:'Jackie 1961 Small Corduroy Shoulder Bag', price:63367875},
		];
		localStorage.setItem('product',JSON.stringify(productArray));
	}
}
function hienthi(s){
    switch(s.id){
        case "sanpham":{
            showproduct();
            break;
        }
        case "donhang":{
            donhang();
            break;
        }
        case "them":{
            document.getElementById("content").innerHTML=a;
            break;
        }
		case "user":{
			showUserList();
			break;
		}
		case "thoat":{
			document.getElementById('co').style.display = 'none';
			break;
		}
    }
}
function showproduct(){	
	productArray = JSON.parse(localStorage.getItem('product'));
	var tr='<table><tr style="background-color:bisque;"><th>STT</th><th>THƯƠNG HIỆU</th><th>HÌNH ẢNH</th><th>TÊN SẢN PHẨM</th><th>GIÁ TIỀN(VNĐ)</th><th>XÓA/SỬA</th></tr><br>';
	for(var i=0; i<productArray.length;i++){
		tr+= '<tr><td>'+(i+1)+'</td><td>'+productArray[i].brand+'</td><td><img src='+productArray[i].img+' style="width:150px; height:150px;">'+'</td><td>'+productArray[i].name+'</td><td>'+ productArray[i].price+'</td><td><button onClick="xoa('+productArray[i].productID+')">Xóa</button><br><br><button onClick="showchangeproductbox(\''+productArray[i].productID+'\')">Sửa</button></td></tr>';
	}
    tr+='</table>';
	document.getElementById('content').innerHTML=tr;
}
function ktthem(){
    if(document.themsanpham.name.value=="")
		{
			alert("Chưa nhập tên sản phẩm");
			document.getElementById('name').focus();
			return false;
		}
	if(document.getElementById('tien').value=="")
		{
			alert("Chưa nhập giá sản phẩm");
			document.getElementById('tien').focus();
			return false;
		}
    let productArray = JSON.parse(localStorage.getItem('product'));
    let pro1 = {brand:document.getElementById('brand').value, img:document.getElementById('hinh').src, name: document.getElementById('name').value, price: document.getElementById("tien").value };
    productArray.push(pro1);
    localStorage.setItem('product',JSON.stringify(productArray));
    showproduct();
	return true;
}
function xoa(productID){
	var productArray = JSON.parse(localStorage.getItem('product'));
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productID == productID){
			if(confirm('Bạn có muốn xóa sản phẩm này?')){
				productArray.splice(i, 1);
			}
		}
	}
	localStorage.setItem('product',JSON.stringify(productArray));
	showproduct();
}
/*function createAdmin() {
    if (localStorage.getItem('user') === null) {
        var userArray = [];
        var user = [
			{username: 'beebags', password: 'admin', fullname: 'BeeBags', address: 'XX/XXX ZZZ, Quận X, TPHCM', phone: '0123456789', datesignup: '21-12-2021'},
			{username: 'khach', password: 'khach', fullname: 'khach', address: 'XX/XXX ZZZ, Quận X, TPHCM', phone: '1212344523', datesignup: '25-12-2021'},
			{username: 'abc', password: 'abc', fullname: 'abc', address: 'XX/XXX ZZZ, Quận X, TPHCM', phone: '0234123523', datesignup: '30-12-2021'}
		];
        userArray.push(user);
        localStorage.setItem('user', JSON.stringify(userArray));
    }
}*/

function showUserList(){
	/*if(localStorage.getItem('user')===null){
		var userArray = [];
        var user = [
			{username: 'admin', password: 'admin', fullname: 'BeeBags', address: 'XX/XXX ZZZ, Quận X, TPHCM', phone: '0123456789', datesignup: '21-12-2021'},
			{username: 'khach', password: 'khach', fullname: 'khach', address: 'XX/XXX ZZZ, Quận X, TPHCM', phone: '1212344523', datesignup: '25-12-2021'},
			{username: 'abc', password: 'abc', fullname: 'abc', address: 'XX/XXX ZZZ, Quận X, TPHCM', phone: '0234123523', datesignup: '30-12-2021'}
		];
        userArray.push(user);
        localStorage.setItem('user', JSON.stringify(userArray));
	}*/
    userArray = JSON.parse(localStorage.getItem('user'));
	var tr='<table><tr style="background-color:bisque;"><th>STT</th><th>Tên đầy đủ</th><th>TÊN ĐĂNG NHẬP</th><th>Mật Khẩu</th><th>NGÀY ĐĂNG KÝ</th><th>XÓA</th></tr>';
	for(var i=0; i<userArray.length;i++){
		tr+='<tr><td>'+(i+1)+'</td><td>'+userArray[i].fullname+'</td><td>'+userArray[i].username+'</td><td>'+userArray[i].password+'</td><td>'+ userArray[i].datesignup +'</td><td><button class="delete" onClick="deleteuser(\''+userArray[i].username+'\')">&times;</button></td></tr>';
	}
	tr+='</table>';
	document.getElementById('content').innerHTML=tr;
}
function deleteuser(usernamedelete){
    userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(userArray[i].username == usernamedelete){
			if(confirm('Bạn có muốn xóa tài khoản này?')){
				userArray.splice(i, 1);
			}
		}
	}
	localStorage.setItem('user',JSON.stringify(userArray));
	showUserList();
}
/*var listdon = [
	{name: 'Nguyen Van An',phone:'0137485939', product: 'ALMA BB Handbag x1', price:38611250, tinhtrang: 't' },
	{name: 'Tran Dieu Huong', phone:'0912362819', product: 'My Lockme Two Tone Shoulder Bag', price:45425000, tinhtrang: 'f' },
	{name: 'Mai Van Dung', phone:'0621748294', product: 'GG Marmont Matelassé Leather Wallet on Chain', price:35431500, tinhtrang: 't' },
	{name: 'Dang Van Duoc', phone:'0712329428', product: 'Cabas Large Thais Mohair With Triomphe Print And Calfskin Tote Bag', price:40428250, tinhtrang: 't' },
	{name: '123', phone:'0909192302', product: 'Cabas Large Thais Mohair With Triomphe Print And Calfskin Tote Bag', price:40428250, tinhtrang: 'f' }
];
localStorage.setItem('hang', JSON.stringify(listdon));*/
function doimau(id){
	listdon = JSON.parse(localStorage.getItem('hang'));
	listdon[id].tinhtrang='t';
	localStorage.setItem('hang', JSON.stringify(listdon));
	document.getElementById(id).style.backgroundColor = "lightgreen";
}
function doimau1(id){
	listdon = JSON.parse(localStorage.getItem('hang'));
	listdon[id].tinhtrang='f';
	localStorage.setItem('hang', JSON.stringify(listdon));
	document.getElementById(id).style.backgroundColor = "lightcoral ";
}
function xoadonhang(phone){
	listdon = JSON.parse(localStorage.getItem('hang'));
	for(var i=0;i<listdon.length;i++){
		if(listdon[i].phone == phone){
			if(confirm('Bạn có muốn xóa đơn hàng này?')){
				listdon.splice(i, 1);
			}
		}
	}
	listdon.splice(5, 1);
	localStorage.setItem('hang',JSON.stringify(listdon));
	donhang();
}
function donhang(){
	if(localStorage.getItem('hang')===null){
		var listdon = {};
		var don = {name: 'Nguyen Van A', product: 'ALMA BB Handbag x1', price:38611250 };
        listdon.push(don);
        localStorage.setItem('hang', JSON.stringify(listdon));
	}
	listdon = JSON.parse(localStorage.getItem('hang'));
	var tr='<table><tr style="background-color:bisque;"><th>STT</th><th>TÊN KHÁCH HÀNG</th><th>SỐ ĐIỆN THOẠI</th><th>ĐƠN HÀNG</th><th>TỔNG TIỀN</th><th>TÌNH TRẠNG ĐƠN HÀNG</th><th>XÓA</th></tr>';
	for(var i=0; i<listdon.length;i++){
		if(listdon[i].tinhtrang=='f'){
		tr+= '<tr style="background-color:lightcoral" id='+i+'><td>'+(i+1)+'</td><td>'+listdon[i].name+'</td><td>'+listdon[i].phone+'</td><td>'+listdon[i].product+'</td><td>'+ listdon[i].price+'</td><td><label for=f'+i+'> Chưa Xác Nhận</label><input id=f'+i+' onclick="doimau1('+i+')"  type="radio"  name='+i+' checked="checked" value=f'+i+'><br><label for=t'+i+'> Đã Xác Nhận</label><input id=t'+i+' value=t'+i+' onclick="doimau('+i+')"  type="radio" name='+i+'></td><td><button class="delete" onClick="xoadonhang(\''+listdon[i].phone+'\')">&times;</button></td></tr>';
		}
		else{
			tr+= '<tr style="background-color:lightgreen" id='+i+'><td>'+(i+1)+'</td><td>'+listdon[i].name+'</td><td>'+listdon[i].phone+'</td><td>'+listdon[i].product+'</td><td>'+ listdon[i].price+'</td><td><label for=f'+i+'> Chưa Xác Nhận</label><input id=f'+i+' onclick="doimau1('+i+')"  type="radio"  name='+i+'  value=f'+i+'><br><label for=t'+i+'> Đã Xác Nhận</label><input id=t'+i+' value=t'+i+' onclick="doimau('+i+')"  type="radio" name='+i+' checked="checked"></td><td><button class="delete" onClick="xoadonhang(\''+listdon[i].phone+'\')">&times;</button></td></tr>';
		}
	}
    tr+='</table>';
	document.getElementById('content').innerHTML=tr;
}
function showchangeproductbox(productID){
	document.getElementById('modal1').style.display = 'block';

	productArray = JSON.parse(localStorage.getItem('product'));
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productID== productID){
			document.getElementById('imgbefore').src=productArray[i].img;
			//document.getElementById('imgafter').src="./img/pic01.jpg";
			document.getElementById('name').value=productArray[i].name;
			document.getElementById('brand').value=productArray[i].brand;
			document.getElementById('price').value=productArray[i].price;
			document.getElementById('save').setAttribute('onClick', 'changeproduct('+productArray[i].productID+')');
		}
	}// <img id="imgafter" src="./img/pic01.jpg" style="width:200px;">
}
function changeproduct(productID){
	document.getElementById('modal1').style.display = 'none';
	productArray = JSON.parse(localStorage.getItem('product'));
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productID == productID){
			productArray[i].img=document.getElementById('imgbefore').src;
			productArray[i].name=document.getElementById('name').value;
			productArray[i].brand=document.getElementById('brand').value;
			productArray[i].price=document.getElementById('price').value;
		}
	}
	localStorage.setItem('product', JSON.stringify(productArray));
	confirm('Sửa thành công!');
	showproduct();
	//document.getElementById("content").innerHTML=a;
}
function changeimg(input){
    var reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('imgafter').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
}
function changeimgadd(input){
    var reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('hinh').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
}
function closechangebox(){

	document.getElementById('modal1').style.display = 'none';
}
