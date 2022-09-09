<%--
  Created by IntelliJ IDEA.
  User: wangziteng
  Date: 2021/7/17
  Time: 1:27 下午
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

  <head>
    <title>票二代电影订票系统</title>
    <link rel="stylesheet" href="css/daohang.css">
    <script language="javascript" src="js/area.js"></script>
  </head>
  <body>
  <div class="w">
    <!-- 标志模块 -->
    <div class="logo">
      <img src="image/logoi.jpg" width="170px" height="60px" border=none>
    </div>
    <!-- 文字导航栏模块 -->

    <div class="nav">
      <ul>
        <li class="didian">
          <a href="#">城市</a>
              <form id="form1" name="form1" method="post" action="">
                <select name="province" id="province"></select>
                <select name="city" id="city"></select>
                <select name="area" id="area"></select>
                <input onClick="promptinfo()" type="submit" name="submit" id="submit" value="提交" />
              </form>
              <script type="text/javascript">
                BindProvince("province","city","area");   //调用外部文件area.js中的BindProvince函数，传递实在参数"province","city","area"（省、市、区）
                function promptinfo(){   //输入用户选择的省市区信息
                  var getProv = document.getElementById('province');   //获取province（省）对象
                  var selProv = getProv.options[getProv.selectedIndex].text;   //获取用户选择的省或直辖市名称
                  var getCity = document.getElementById('city');   //获取city（市）对象
                  var selCite = getCity.options[getCity.selectedIndex].text;   //获取用户选择的城市信息
                  var getArea = document.getElementById('area');   //获取area（区）对象
                  var selArea = getArea.options[getArea.selectedIndex].text;   //获取用户选择的区(或县)信息
                  if(selProv.charAt(2)=="市"){ //根据第三个字判断是否是直辖市（北京市、上海市、天津市和重庆市）
                    alert(selProv+selArea);  //输出直辖市（市和区）信息
                  }else{
                    alert(selProv+selCite+selArea);   //输出省市区（县）信息
                  }
                }
                </script>
        </li>
        <li>
          <a href="#">首页</a>
        </li>

        <li>
          <a href="#">电影</a>
        </li>
        <li>
          <a href="#">影院</a>
        </li>
        <li>
          <a href="#">榜单</a>
        </li>
      </ul>
    </div>
    <!-- 搜索模块 -->
    <div class="search">
      <input type="text" placeholder="找电影、找影院" ></input>
      <button>搜索</button>
    </div>
    <!-- 用户模块 -->
    <div class="user">
      <button>登录</button>
      <button>注册</button>
    </div>
 </div>
  </body>
</html>
