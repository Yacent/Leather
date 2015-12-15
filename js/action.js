var dic = ["#lailiaojiagong","#piciguanli","#gongxuguanli","#chuchangchanpin","#kucunchanpin","#jingxiaojilu","#chejianguanli", "#gongrenguanli","#shangjiaguanli","#xitongguanli"];

function changeMB(e) {
  $(".mianban").hide();
  $(dic[e]).fadeIn(300);
}
