

// 说明：省市区联动JS脚本

	function BindProvince(ProvinceObjId, CityObjId, AreaObjId) {   //绑定省，把html文件中的实在参数province,city,area分别传递给形式参数ProvinceObjId,CityObjId,AreaObjId
		var pobj = document.getElementById(ProvinceObjId);   //获取省对象
		for (var i = 0; i < province.length; i++) {   //添加省份列表
			pobj.options[i] = new Option(province[i].name, province[i].id);
		}
		if (arguments.length == 2) {   //用于设计省市二级联动，arguments是Javascript的特殊对象，引用属性arguments.length检测函数的参数个数。
			ProvinceChange(ProvinceObjId, CityObjId);
			if (window.addEventListener) {   //添加监听事件,如果省份发生变化调用ProvinceChange函数。
				pobj.addEventListener('change', function () {
					ProvinceChange(ProvinceObjId, CityObjId);
				}, false);
			} else {
				pobj.attachEvent('onchange', function () {
					ProvinceChange(ProvinceObjId, CityObjId);
				});
			}
		}
		if (arguments.length == 3) {   //用于设计省市区三级联动，省市区三级联动时调用此段代码。
			ProvinceChange(ProvinceObjId, CityObjId);
			if (window.addEventListener) {   //添加监听事件,如果省份发生变化调用ProvinceChange函数。
				pobj.addEventListener('change', function () {
					ProvinceChange(ProvinceObjId, CityObjId, AreaObjId);
				}, false);
			} else {
				pobj.attachEvent('onchange', function () {
					ProvinceChange(ProvinceObjId, CityObjId, AreaObjId);
				});
			}
			CityChange(CityObjId, AreaObjId);
			var cobj = document.getElementById(CityObjId);
			if (window.addEventListener) {   //添加监听事件,如果城市发生变化调CityChange函数。
				cobj.addEventListener('change', function () {
					CityChange(CityObjId, AreaObjId);
				}, false);
			} else {
				cobj.attachEvent('onchange', function () {
					CityChange(CityObjId, AreaObjId);
				});
			}
		}
	}

	function ProvinceChange(ProvinceObjId, CityObjId, AreaObjId) {   //省市区三级联动
		var pobj = document.getElementById(ProvinceObjId);
		var pid = pobj.value;
		var cobj = document.getElementById(CityObjId);
		var count = 0;
		for (var i = 0; i < city.length; i++) {
			if (city[i].topid == pid) {   //根据id添加对应省份的城市列表
				cobj.options[count] = new Option(city[i].name, city[i].id);
				count++;
			}
		}
		cobj.length = count;
		if (arguments.length == 3) {   //如何有区（或县），调用CityChange函数，实现三级联动。
			CityChange(CityObjId, AreaObjId);
		}
	}

	function CityChange(CityObjId, AreaObjId) {   //市区（或县）联动
		var cobj = document.getElementById(CityObjId);
		var cid = cobj.value;
		var aobj = document.getElementById(AreaObjId);
		var count = 0;
		for (var i = 0; i < areas.length; i++) {
			if (areas[i].topid == cid) {   //根据id添加对应城市的区、县列表。
				aobj.options[count] = new Option(areas[i].name, areas[i].id);
				count++;
			}
		}
		aobj.length = count;
	}

	var province = [{id: 11, name: "北京市"}, {id: 12, name: "天津市"}, {id: 13, name: "河北省"}, {id: 14, name: "山西省"}, {
		id: 15,
		name: "内蒙古自治区"
	}, {id: 21, name: "辽宁省"}, {id: 22, name: "吉林省"}, {id: 23, name: "黑龙江省"}, {id: 31, name: "上海市"}, {
		id: 32,
		name: "江苏省"
	}, {id: 33, name: "浙江省"}, {id: 34, name: "安徽省"}, {id: 35, name: "福建省"}, {id: 36, name: "江西省"}, {
		id: 37,
		name: "山东省"
	}, {id: 41, name: "河南省"}, {id: 42, name: "湖北省"}, {id: 43, name: "湖南省"}, {id: 44, name: "广东省"}, {
		id: 45,
		name: "广西壮族自治区"
	}, {id: 46, name: "海南省"}, {id: 50, name: "重庆市"}, {id: 51, name: "四川省"}, {id: 52, name: "贵州省"}, {
		id: 53,
		name: "云南省"
	}, {id: 54, name: "西藏自治区"}, {id: 61, name: "陕西省"}, {id: 62, name: "甘肃省"}, {id: 63, name: "青海省"}, {
		id: 64,
		name: "宁夏回族自治区"
	}, {id: 65, name: "新疆维吾尔自治区"}];
	var city = [{id: 1101, topid: 11, name: "市辖区"}, {id: 1102, topid: 11, name: "县"}, {
		id: 1201,
		topid: 12,
		name: "市辖区"
	}, {id: 1202, topid: 12, name: "县"}, {id: 1301, topid: 13, name: "石家庄市"}, {
		id: 1302,
		topid: 13,
		name: "唐山市"
	}, {id: 1303, topid: 13, name: "秦皇岛市"}, {id: 1304, topid: 13, name: "邯郸市"}, {
		id: 1305,
		topid: 13,
		name: "邢台市"
	}, {id: 1306, topid: 13, name: "保定市"}, {id: 1307, topid: 13, name: "张家口市"}, {
		id: 1308,
		topid: 13,
		name: "承德市"
	}, {id: 1309, topid: 13, name: "沧州市"}, {id: 1310, topid: 13, name: "廊坊市"}, {
		id: 1311,
		topid: 13,
		name: "衡水市"
	}, {id: 1401, topid: 14, name: "太原市"}, {id: 1402, topid: 14, name: "大同市"}, {
		id: 1403,
		topid: 14,
		name: "阳泉市"
	}, {id: 1404, topid: 14, name: "长治市"}, {id: 1405, topid: 14, name: "晋城市"}, {
		id: 1406,
		topid: 14,
		name: "朔州市"
	}, {id: 1407, topid: 14, name: "晋中市"}, {id: 1408, topid: 14, name: "运城市"}, {
		id: 1409,
		topid: 14,
		name: "忻州市"
	}, {id: 1410, topid: 14, name: "临汾市"}, {id: 1411, topid: 14, name: "吕梁市"}, {
		id: 1501,
		topid: 15,
		name: "呼和浩特市"
	}, {id: 1502, topid: 15, name: "包头市"}, {id: 1503, topid: 15, name: "乌海市"}, {
		id: 1504,
		topid: 15,
		name: "赤峰市"
	}, {id: 1505, topid: 15, name: "通辽市"}, {id: 1506, topid: 15, name: "鄂尔多斯市"}, {
		id: 1507,
		topid: 15,
		name: "呼伦贝尔市"
	}, {id: 1508, topid: 15, name: "巴彦淖尔市"}, {id: 1509, topid: 15, name: "乌兰察布市"}, {
		id: 1522,
		topid: 15,
		name: "兴安盟"
	}, {id: 1525, topid: 15, name: "锡林郭勒盟"}, {id: 1529, topid: 15, name: "阿拉善盟"}, {
		id: 2101,
		topid: 21,
		name: "沈阳市"
	}, {id: 2102, topid: 21, name: "大连市"}, {id: 2103, topid: 21, name: "鞍山市"}, {
		id: 2104,
		topid: 21,
		name: "抚顺市"
	}, {id: 2105, topid: 21, name: "本溪市"}, {id: 2106, topid: 21, name: "丹东市"}, {
		id: 2107,
		topid: 21,
		name: "锦州市"
	}, {id: 2108, topid: 21, name: "营口市"}, {id: 2109, topid: 21, name: "阜新市"}, {
		id: 2110,
		topid: 21,
		name: "辽阳市"
	}, {id: 2111, topid: 21, name: "盘锦市"}, {id: 2112, topid: 21, name: "铁岭市"}, {
		id: 2113,
		topid: 21,
		name: "朝阳市"
	}, {id: 2114, topid: 21, name: "葫芦岛市"}, {id: 2201, topid: 22, name: "长春市"}, {
		id: 2202,
		topid: 22,
		name: "吉林市"
	}, {id: 2203, topid: 22, name: "四平市"}, {id: 2204, topid: 22, name: "辽源市"}, {
		id: 2205,
		topid: 22,
		name: "通化市"
	}, {id: 2206, topid: 22, name: "白山市"}, {id: 2207, topid: 22, name: "松原市"}, {
		id: 2208,
		topid: 22,
		name: "白城市"
	}, {id: 2224, topid: 22, name: "延边朝鲜族自治州"}, {id: 2301, topid: 23, name: "哈尔滨市"}, {
		id: 2302,
		topid: 23,
		name: "齐齐哈尔市"
	}, {id: 2303, topid: 23, name: "鸡西市"}, {id: 2304, topid: 23, name: "鹤岗市"}, {
		id: 2305,
		topid: 23,
		name: "双鸭山市"
	}, {id: 2306, topid: 23, name: "大庆市"}, {id: 2307, topid: 23, name: "伊春市"}, {
		id: 2308,
		topid: 23,
		name: "佳木斯市"
	}, {id: 2309, topid: 23, name: "七台河市"}, {id: 2310, topid: 23, name: "牡丹江市"}, {
		id: 2311,
		topid: 23,
		name: "黑河市"
	}, {id: 2312, topid: 23, name: "绥化市"}, {id: 2327, topid: 23, name: "大兴安岭地区"}, {
		id: 3101,
		topid: 31,
		name: "市辖区"
	}, {id: 3102, topid: 31, name: "县"}, {id: 3201, topid: 32, name: "南京市"}, {
		id: 3202,
		topid: 32,
		name: "无锡市"
	}, {id: 3203, topid: 32, name: "徐州市"}, {id: 3204, topid: 32, name: "常州市"}, {
		id: 3205,
		topid: 32,
		name: "苏州市"
	}, {id: 3206, topid: 32, name: "南通市"}, {id: 3207, topid: 32, name: "连云港市"}, {
		id: 3208,
		topid: 32,
		name: "淮安市"
	}, {id: 3209, topid: 32, name: "盐城市"}, {id: 3210, topid: 32, name: "扬州市"}, {
		id: 3211,
		topid: 32,
		name: "镇江市"
	}, {id: 3212, topid: 32, name: "泰州市"}, {id: 3213, topid: 32, name: "宿迁市"}, {
		id: 3301,
		topid: 33,
		name: "杭州市"
	}, {id: 3302, topid: 33, name: "宁波市"}, {id: 3303, topid: 33, name: "温州市"}, {
		id: 3304,
		topid: 33,
		name: "嘉兴市"
	}, {id: 3305, topid: 33, name: "湖州市"}, {id: 3306, topid: 33, name: "绍兴市"}, {
		id: 3307,
		topid: 33,
		name: "金华市"
	}, {id: 3308, topid: 33, name: "衢州市"}, {id: 3309, topid: 33, name: "舟山市"}, {
		id: 3310,
		topid: 33,
		name: "台州市"
	}, {id: 3311, topid: 33, name: "丽水市"}, {id: 3401, topid: 34, name: "合肥市"}, {
		id: 3402,
		topid: 34,
		name: "芜湖市"
	}, {id: 3403, topid: 34, name: "蚌埠市"}, {id: 3404, topid: 34, name: "淮南市"}, {
		id: 3405,
		topid: 34,
		name: "马鞍山市"
	}, {id: 3406, topid: 34, name: "淮北市"}, {id: 3407, topid: 34, name: "铜陵市"}, {
		id: 3408,
		topid: 34,
		name: "安庆市"
	}, {id: 3410, topid: 34, name: "黄山市"}, {id: 3411, topid: 34, name: "滁州市"}, {
		id: 3412,
		topid: 34,
		name: "阜阳市"
	}, {id: 3413, topid: 34, name: "宿州市"}, {id: 3414, topid: 34, name: "巢湖市"}, {
		id: 3415,
		topid: 34,
		name: "六安市"
	}, {id: 3416, topid: 34, name: "亳州市"}, {id: 3417, topid: 34, name: "池州市"}, {
		id: 3418,
		topid: 34,
		name: "宣城市"
	}, {id: 3501, topid: 35, name: "福州市"}, {id: 3502, topid: 35, name: "厦门市"}, {
		id: 3503,
		topid: 35,
		name: "莆田市"
	}, {id: 3504, topid: 35, name: "三明市"}, {id: 3505, topid: 35, name: "泉州市"}, {
		id: 3506,
		topid: 35,
		name: "漳州市"
	}, {id: 3507, topid: 35, name: "南平市"}, {id: 3508, topid: 35, name: "龙岩市"}, {
		id: 3509,
		topid: 35,
		name: "宁德市"
	}, {id: 3601, topid: 36, name: "南昌市"}, {id: 3602, topid: 36, name: "景德镇市"}, {
		id: 3603,
		topid: 36,
		name: "萍乡市"
	}, {id: 3604, topid: 36, name: "九江市"}, {id: 3605, topid: 36, name: "新余市"}, {
		id: 3606,
		topid: 36,
		name: "鹰潭市"
	}, {id: 3607, topid: 36, name: "赣州市"}, {id: 3608, topid: 36, name: "吉安市"}, {
		id: 3609,
		topid: 36,
		name: "宜春市"
	}, {id: 3610, topid: 36, name: "抚州市"}, {id: 3611, topid: 36, name: "上饶市"}, {
		id: 3701,
		topid: 37,
		name: "济南市"
	}, {id: 3702, topid: 37, name: "青岛市"}, {id: 3703, topid: 37, name: "淄博市"}, {
		id: 3704,
		topid: 37,
		name: "枣庄市"
	}, {id: 3705, topid: 37, name: "东营市"}, {id: 3706, topid: 37, name: "烟台市"}, {
		id: 3707,
		topid: 37,
		name: "潍坊市"
	}, {id: 3708, topid: 37, name: "济宁市"}, {id: 3709, topid: 37, name: "泰安市"}, {
		id: 3710,
		topid: 37,
		name: "威海市"
	}, {id: 3711, topid: 37, name: "日照市"}, {id: 3712, topid: 37, name: "莱芜市"}, {
		id: 3713,
		topid: 37,
		name: "临沂市"
	}, {id: 3714, topid: 37, name: "德州市"}, {id: 3715, topid: 37, name: "聊城市"}, {
		id: 3716,
		topid: 37,
		name: "滨州市"
	}, {id: 3717, topid: 37, name: "菏泽市"}, {id: 4101, topid: 41, name: "郑州市"}, {
		id: 4102,
		topid: 41,
		name: "开封市"
	}, {id: 4103, topid: 41, name: "洛阳市"}, {id: 4104, topid: 41, name: "平顶山市"}, {
		id: 4105,
		topid: 41,
		name: "安阳市"
	}, {id: 4106, topid: 41, name: "鹤壁市"}, {id: 4107, topid: 41, name: "新乡市"}, {
		id: 4108,
		topid: 41,
		name: "焦作市"
	}, {id: 4109, topid: 41, name: "濮阳市"}, {id: 4110, topid: 41, name: "许昌市"}, {
		id: 4111,
		topid: 41,
		name: "漯河市"
	}, {id: 4112, topid: 41, name: "三门峡市"}, {id: 4113, topid: 41, name: "南阳市"}, {
		id: 4114,
		topid: 41,
		name: "商丘市"
	}, {id: 4115, topid: 41, name: "信阳市"}, {id: 4116, topid: 41, name: "周口市"}, {
		id: 4117,
		topid: 41,
		name: "驻马店市"
	}, {id: 4201, topid: 42, name: "武汉市"}, {id: 4202, topid: 42, name: "黄石市"}, {
		id: 4203,
		topid: 42,
		name: "十堰市"
	}, {id: 4205, topid: 42, name: "宜昌市"}, {id: 4206, topid: 42, name: "襄樊市"}, {
		id: 4207,
		topid: 42,
		name: "鄂州市"
	}, {id: 4208, topid: 42, name: "荆门市"}, {id: 4209, topid: 42, name: "孝感市"}, {
		id: 4210,
		topid: 42,
		name: "荆州市"
	}, {id: 4211, topid: 42, name: "黄冈市"}, {id: 4212, topid: 42, name: "咸宁市"}, {
		id: 4213,
		topid: 42,
		name: "随州市"
	}, {id: 4228, topid: 42, name: "恩施土家族苗族自治州"}, {id: 4290, topid: 42, name: "省直辖行政单位"}, {
		id: 4301,
		topid: 43,
		name: "长沙市"
	}, {id: 4302, topid: 43, name: "株洲市"}, {id: 4303, topid: 43, name: "湘潭市"}, {
		id: 4304,
		topid: 43,
		name: "衡阳市"
	}, {id: 4305, topid: 43, name: "邵阳市"}, {id: 4306, topid: 43, name: "岳阳市"}, {
		id: 4307,
		topid: 43,
		name: "常德市"
	}, {id: 4308, topid: 43, name: "张家界市"}, {id: 4309, topid: 43, name: "益阳市"}, {
		id: 4310,
		topid: 43,
		name: "郴州市"
	}, {id: 4311, topid: 43, name: "永州市"}, {id: 4312, topid: 43, name: "怀化市"}, {
		id: 4313,
		topid: 43,
		name: "娄底市"
	}, {id: 4331, topid: 43, name: "湘西土家族苗族自治州"}, {id: 4401, topid: 44, name: "广州市"}, {
		id: 4402,
		topid: 44,
		name: "韶关市"
	}, {id: 4403, topid: 44, name: "深圳市"}, {id: 4404, topid: 44, name: "珠海市"}, {
		id: 4405,
		topid: 44,
		name: "汕头市"
	}, {id: 4406, topid: 44, name: "佛山市"}, {id: 4407, topid: 44, name: "江门市"}, {
		id: 4408,
		topid: 44,
		name: "湛江市"
	}, {id: 4409, topid: 44, name: "茂名市"}, {id: 4412, topid: 44, name: "肇庆市"}, {
		id: 4413,
		topid: 44,
		name: "惠州市"
	}, {id: 4414, topid: 44, name: "梅州市"}, {id: 4415, topid: 44, name: "汕尾市"}, {
		id: 4416,
		topid: 44,
		name: "河源市"
	}, {id: 4417, topid: 44, name: "阳江市"}, {id: 4418, topid: 44, name: "清远市"}, {
		id: 4419,
		topid: 44,
		name: "东莞市"
	}, {id: 4420, topid: 44, name: "中山市"}, {id: 4451, topid: 44, name: "潮州市"}, {
		id: 4452,
		topid: 44,
		name: "揭阳市"
	}, {id: 4453, topid: 44, name: "云浮市"}, {id: 4501, topid: 45, name: "南宁市"}, {
		id: 4502,
		topid: 45,
		name: "柳州市"
	}, {id: 4503, topid: 45, name: "桂林市"}, {id: 4504, topid: 45, name: "梧州市"}, {
		id: 4505,
		topid: 45,
		name: "北海市"
	}, {id: 4506, topid: 45, name: "防城港市"}, {id: 4507, topid: 45, name: "钦州市"}, {
		id: 4508,
		topid: 45,
		name: "贵港市"
	}, {id: 4509, topid: 45, name: "玉林市"}, {id: 4510, topid: 45, name: "百色市"}, {
		id: 4511,
		topid: 45,
		name: "贺州市"
	}, {id: 4512, topid: 45, name: "河池市"}, {id: 4513, topid: 45, name: "来宾市"}, {
		id: 4514,
		topid: 45,
		name: "崇左市"
	}, {id: 4601, topid: 46, name: "海口市"}, {id: 4602, topid: 46, name: "三亚市"}, {
		id: 4690,
		topid: 46,
		name: "省直辖县级行政单位"
	}, {id: 5001, topid: 50, name: "市辖区"}, {id: 5002, topid: 50, name: "县"}, {
		id: 5101,
		topid: 51,
		name: "成都市"
	}, {id: 5103, topid: 51, name: "自贡市"}, {id: 5104, topid: 51, name: "攀枝花市"}, {
		id: 5105,
		topid: 51,
		name: "泸州市"
	}, {id: 5106, topid: 51, name: "德阳市"}, {id: 5107, topid: 51, name: "绵阳市"}, {
		id: 5108,
		topid: 51,
		name: "广元市"
	}, {id: 5109, topid: 51, name: "遂宁市"}, {id: 5110, topid: 51, name: "内江市"}, {
		id: 5111,
		topid: 51,
		name: "乐山市"
	}, {id: 5113, topid: 51, name: "南充市"}, {id: 5114, topid: 51, name: "眉山市"}, {
		id: 5115,
		topid: 51,
		name: "宜宾市"
	}, {id: 5116, topid: 51, name: "广安市"}, {id: 5117, topid: 51, name: "达州市"}, {
		id: 5118,
		topid: 51,
		name: "雅安市"
	}, {id: 5119, topid: 51, name: "巴中市"}, {id: 5120, topid: 51, name: "资阳市"}, {
		id: 5132,
		topid: 51,
		name: "阿坝藏族羌族自治州"
	}, {id: 5133, topid: 51, name: "甘孜藏族自治州"}, {id: 5134, topid: 51, name: "凉山彝族自治州"}, {
		id: 5201,
		topid: 52,
		name: "贵阳市"
	}, {id: 5202, topid: 52, name: "六盘水市"}, {id: 5203, topid: 52, name: "遵义市"}, {
		id: 5204,
		topid: 52,
		name: "安顺市"
	}, {id: 5222, topid: 52, name: "铜仁地区"}, {id: 5223, topid: 52, name: "黔西南布依族苗族自治州"}, {
		id: 5224,
		topid: 52,
		name: "毕节地区"
	}, {id: 5226, topid: 52, name: "黔东南苗族侗族自治州"}, {id: 5227, topid: 52, name: "黔南布依族苗族自治州"}, {
		id: 5301,
		topid: 53,
		name: "昆明市"
	}, {id: 5303, topid: 53, name: "曲靖市"}, {id: 5304, topid: 53, name: "玉溪市"}, {
		id: 5305,
		topid: 53,
		name: "保山市"
	}, {id: 5306, topid: 53, name: "昭通市"}, {id: 5307, topid: 53, name: "丽江市"}, {
		id: 5308,
		topid: 53,
		name: "思茅市"
	}, {id: 5309, topid: 53, name: "临沧市"}, {id: 5323, topid: 53, name: "楚雄彝族自治州"}, {
		id: 5325,
		topid: 53,
		name: "红河哈尼族彝族自治州"
	}, {id: 5326, topid: 53, name: "文山壮族苗族自治州"}, {id: 5328, topid: 53, name: "西双版纳傣族自治州"}, {
		id: 5329,
		topid: 53,
		name: "大理白族自治州"
	}, {id: 5331, topid: 53, name: "德宏傣族景颇族自治州"}, {id: 5333, topid: 53, name: "怒江傈僳族自治州"}, {
		id: 5334,
		topid: 53,
		name: "迪庆藏族自治州"
	}, {id: 5401, topid: 54, name: "拉萨市"}, {id: 5421, topid: 54, name: "昌都地区"}, {
		id: 5422,
		topid: 54,
		name: "山南地区"
	}, {id: 5423, topid: 54, name: "日喀则地区"}, {id: 5424, topid: 54, name: "那曲地区"}, {
		id: 5425,
		topid: 54,
		name: "阿里地区"
	}, {id: 5426, topid: 54, name: "林芝地区"}, {id: 6101, topid: 61, name: "西安市"}, {
		id: 6102,
		topid: 61,
		name: "铜川市"
	}, {id: 6103, topid: 61, name: "宝鸡市"}, {id: 6104, topid: 61, name: "咸阳市"}, {
		id: 6105,
		topid: 61,
		name: "渭南市"
	}, {id: 6106, topid: 61, name: "延安市"}, {id: 6107, topid: 61, name: "汉中市"}, {
		id: 6108,
		topid: 61,
		name: "榆林市"
	}, {id: 6109, topid: 61, name: "安康市"}, {id: 6110, topid: 61, name: "商洛市"}, {
		id: 6201,
		topid: 62,
		name: "兰州市"
	}, {id: 6202, topid: 62, name: "嘉峪关市"}, {id: 6203, topid: 62, name: "金昌市"}, {
		id: 6204,
		topid: 62,
		name: "白银市"
	}, {id: 6205, topid: 62, name: "天水市"}, {id: 6206, topid: 62, name: "武威市"}, {
		id: 6207,
		topid: 62,
		name: "张掖市"
	}, {id: 6208, topid: 62, name: "平凉市"}, {id: 6209, topid: 62, name: "酒泉市"}, {
		id: 6210,
		topid: 62,
		name: "庆阳市"
	}, {id: 6211, topid: 62, name: "定西市"}, {id: 6212, topid: 62, name: "陇南市"}, {
		id: 6229,
		topid: 62,
		name: "临夏回族自治州"
	}, {id: 6230, topid: 62, name: "甘南藏族自治州"}, {id: 6301, topid: 63, name: "西宁市"}, {
		id: 6321,
		topid: 63,
		name: "海东地区"
	}, {id: 6322, topid: 63, name: "海北藏族自治州"}, {id: 6323, topid: 63, name: "黄南藏族自治州"}, {
		id: 6325,
		topid: 63,
		name: "海南藏族自治州"
	}, {id: 6326, topid: 63, name: "果洛藏族自治州"}, {id: 6327, topid: 63, name: "玉树藏族自治州"}, {
		id: 6328,
		topid: 63,
		name: "海西蒙古族藏族自治州"
	}, {id: 6401, topid: 64, name: "银川市"}, {id: 6402, topid: 64, name: "石嘴山市"}, {
		id: 6403,
		topid: 64,
		name: "吴忠市"
	}, {id: 6404, topid: 64, name: "固原市"}, {id: 6405, topid: 64, name: "中卫市"}, {
		id: 6501,
		topid: 65,
		name: "乌鲁木齐市"
	}, {id: 6502, topid: 65, name: "克拉玛依市"}, {id: 6521, topid: 65, name: "吐鲁番地区"}, {
		id: 6522,
		topid: 65,
		name: "哈密地区"
	}, {id: 6523, topid: 65, name: "昌吉回族自治州"}, {id: 6527, topid: 65, name: "博尔塔拉蒙古自治州"}, {
		id: 6528,
		topid: 65,
		name: "巴音郭楞蒙古自治州"
	}, {id: 6529, topid: 65, name: "阿克苏地区"}, {id: 6530, topid: 65, name: "克孜勒苏柯尔克孜自治州"}, {
		id: 6531,
		topid: 65,
		name: "喀什地区"
	}, {id: 6532, topid: 65, name: "和田地区"}, {id: 6540, topid: 65, name: "伊犁哈萨克自治州"}, {
		id: 6542,
		topid: 65,
		name: "塔城地区"
	}, {id: 6543, topid: 65, name: "阿勒泰地区"}, {id: 6590, topid: 65, name: "省直辖行政单位"}];
	var areas = [{id: 442001, topid: 4420, name: "五桂山"}, {id: 442002, topid: 4420, name: "火炬开发区"}, {
		id: 442003,
		topid: 4420,
		name: "石岐区"
	}, {id: 442004, topid: 4420, name: "东区"}, {id: 442005, topid: 4420, name: "西区"}, {
		id: 442006,
		topid: 4420,
		name: "南区"
	}, {id: 441901, topid: 4419, name: "市辖区"}, {id: 110101, topid: 1101, name: "东城区"}, {
		id: 110102,
		topid: 1101,
		name: "西城区"
	}, {id: 110103, topid: 1101, name: "崇文区"}, {id: 110104, topid: 1101, name: "宣武区"}, {
		id: 110105,
		topid: 1101,
		name: "朝阳区"
	}, {id: 110106, topid: 1101, name: "丰台区"}, {id: 110107, topid: 1101, name: "石景山区"}, {
		id: 110108,
		topid: 1101,
		name: "海淀区"
	}, {id: 110109, topid: 1101, name: "门头沟区"}, {id: 110111, topid: 1101, name: "房山区"}, {
		id: 110112,
		topid: 1101,
		name: "通州区"
	}, {id: 110113, topid: 1101, name: "顺义区"}, {id: 110114, topid: 1101, name: "昌平区"}, {
		id: 110115,
		topid: 1101,
		name: "大兴区"
	}, {id: 110116, topid: 1101, name: "怀柔区"}, {id: 110117, topid: 1101, name: "平谷区"}, {
		id: 110228,
		topid: 1102,
		name: "密云县"
	}, {id: 110229, topid: 1102, name: "延庆县"}, {id: 120101, topid: 1201, name: "和平区"}, {
		id: 120102,
		topid: 1201,
		name: "河东区"
	}, {id: 120103, topid: 1201, name: "河西区"}, {id: 120104, topid: 1201, name: "南开区"}, {
		id: 120105,
		topid: 1201,
		name: "河北区"
	}, {id: 120106, topid: 1201, name: "红桥区"}, {id: 120107, topid: 1201, name: "塘沽区"}, {
		id: 120108,
		topid: 1201,
		name: "汉沽区"
	}, {id: 120109, topid: 1201, name: "大港区"}, {id: 120110, topid: 1201, name: "东丽区"}, {
		id: 120111,
		topid: 1201,
		name: "西青区"
	}, {id: 120112, topid: 1201, name: "津南区"}, {id: 120113, topid: 1201, name: "北辰区"}, {
		id: 120114,
		topid: 1201,
		name: "武清区"
	}, {id: 120115, topid: 1201, name: "宝坻区"}, {id: 120221, topid: 1202, name: "宁河县"}, {
		id: 120223,
		topid: 1202,
		name: "静海县"
	}, {id: 120225, topid: 1202, name: "蓟县"}, {id: 130101, topid: 1301, name: "市辖区"}, {
		id: 130102,
		topid: 1301,
		name: "长安区"
	}, {id: 130103, topid: 1301, name: "桥东区"}, {id: 130104, topid: 1301, name: "桥西区"}, {
		id: 130105,
		topid: 1301,
		name: "新华区"
	}, {id: 130107, topid: 1301, name: "井陉矿区"}, {id: 130108, topid: 1301, name: "裕华区"}, {
		id: 130121,
		topid: 1301,
		name: "井陉县"
	}, {id: 130123, topid: 1301, name: "正定县"}, {id: 130124, topid: 1301, name: "栾城县"}, {
		id: 130125,
		topid: 1301,
		name: "行唐县"
	}, {id: 130126, topid: 1301, name: "灵寿县"}, {id: 130127, topid: 1301, name: "高邑县"}, {
		id: 130128,
		topid: 1301,
		name: "深泽县"
	}, {id: 130129, topid: 1301, name: "赞皇县"}, {id: 130130, topid: 1301, name: "无极县"}, {
		id: 130131,
		topid: 1301,
		name: "平山县"
	}, {id: 130132, topid: 1301, name: "元氏县"}, {id: 130133, topid: 1301, name: "赵县"}, {
		id: 130181,
		topid: 1301,
		name: "辛集市"
	}, {id: 130182, topid: 1301, name: "藁城市"}, {id: 130183, topid: 1301, name: "晋州市"}, {
		id: 130184,
		topid: 1301,
		name: "新乐市"
	}, {id: 130185, topid: 1301, name: "鹿泉市"}, {id: 130201, topid: 1302, name: "市辖区"}, {
		id: 130202,
		topid: 1302,
		name: "路南区"
	}, {id: 130203, topid: 1302, name: "路北区"}, {id: 130204, topid: 1302, name: "古冶区"}, {
		id: 130205,
		topid: 1302,
		name: "开平区"
	}, {id: 130207, topid: 1302, name: "丰南区"}, {id: 130208, topid: 1302, name: "丰润区"}, {
		id: 130223,
		topid: 1302,
		name: "滦县"
	}, {id: 130224, topid: 1302, name: "滦南县"}, {id: 130225, topid: 1302, name: "乐亭县"}, {
		id: 130227,
		topid: 1302,
		name: "迁西县"
	}, {id: 130229, topid: 1302, name: "玉田县"}, {id: 130230, topid: 1302, name: "唐海县"}, {
		id: 130281,
		topid: 1302,
		name: "遵化市"
	}, {id: 130283, topid: 1302, name: "迁安市"}, {id: 130301, topid: 1303, name: "市辖区"}, {
		id: 130302,
		topid: 1303,
		name: "海港区"
	}, {id: 130303, topid: 1303, name: "山海关区"}, {id: 130304, topid: 1303, name: "北戴河区"}, {
		id: 130321,
		topid: 1303,
		name: "青龙满族自治县"
	}, {id: 130322, topid: 1303, name: "昌黎县"}, {id: 130323, topid: 1303, name: "抚宁县"}, {
		id: 130324,
		topid: 1303,
		name: "卢龙县"
	}, {id: 130401, topid: 1304, name: "市辖区"}, {id: 130402, topid: 1304, name: "邯山区"}, {
		id: 130403,
		topid: 1304,
		name: "丛台区"
	}, {id: 130404, topid: 1304, name: "复兴区"}, {id: 130406, topid: 1304, name: "峰峰矿区"}, {
		id: 130421,
		topid: 1304,
		name: "邯郸县"
	}, {id: 130423, topid: 1304, name: "临漳县"}, {id: 130424, topid: 1304, name: "成安县"}, {
		id: 130425,
		topid: 1304,
		name: "大名县"
	}, {id: 130426, topid: 1304, name: "涉县"}, {id: 130427, topid: 1304, name: "磁县"}, {
		id: 130428,
		topid: 1304,
		name: "肥乡县"
	}, {id: 130429, topid: 1304, name: "永年县"}, {id: 130430, topid: 1304, name: "邱县"}, {
		id: 130431,
		topid: 1304,
		name: "鸡泽县"
	}, {id: 130432, topid: 1304, name: "广平县"}, {id: 130433, topid: 1304, name: "馆陶县"}, {
		id: 130434,
		topid: 1304,
		name: "魏县"
	}, {id: 130435, topid: 1304, name: "曲周县"}, {id: 130481, topid: 1304, name: "武安市"}, {
		id: 130501,
		topid: 1305,
		name: "市辖区"
	}, {id: 130502, topid: 1305, name: "桥东区"}, {id: 130503, topid: 1305, name: "桥西区"}, {
		id: 130521,
		topid: 1305,
		name: "邢台县"
	}, {id: 130522, topid: 1305, name: "临城县"}, {id: 130523, topid: 1305, name: "内丘县"}, {
		id: 130524,
		topid: 1305,
		name: "柏乡县"
	}, {id: 130525, topid: 1305, name: "隆尧县"}, {id: 130526, topid: 1305, name: "任县"}, {
		id: 130527,
		topid: 1305,
		name: "南和县"
	}, {id: 130528, topid: 1305, name: "宁晋县"}, {id: 130529, topid: 1305, name: "巨鹿县"}, {
		id: 130530,
		topid: 1305,
		name: "新河县"
	}, {id: 130531, topid: 1305, name: "广宗县"}, {id: 130532, topid: 1305, name: "平乡县"}, {
		id: 130533,
		topid: 1305,
		name: "威县"
	}, {id: 130534, topid: 1305, name: "清河县"}, {id: 130535, topid: 1305, name: "临西县"}, {
		id: 130581,
		topid: 1305,
		name: "南宫市"
	}, {id: 130582, topid: 1305, name: "沙河市"}, {id: 130601, topid: 1306, name: "市辖区"}, {
		id: 130602,
		topid: 1306,
		name: "新市区"
	}, {id: 130603, topid: 1306, name: "北市区"}, {id: 130604, topid: 1306, name: "南市区"}, {
		id: 130621,
		topid: 1306,
		name: "满城县"
	}, {id: 130622, topid: 1306, name: "清苑县"}, {id: 130623, topid: 1306, name: "涞水县"}, {
		id: 130624,
		topid: 1306,
		name: "阜平县"
	}, {id: 130625, topid: 1306, name: "徐水县"}, {id: 130626, topid: 1306, name: "定兴县"}, {
		id: 130627,
		topid: 1306,
		name: "唐县"
	}, {id: 130628, topid: 1306, name: "高阳县"}, {id: 130629, topid: 1306, name: "容城县"}, {
		id: 130630,
		topid: 1306,
		name: "涞源县"
	}, {id: 130631, topid: 1306, name: "望都县"}, {id: 130632, topid: 1306, name: "安新县"}, {
		id: 130633,
		topid: 1306,
		name: "易县"
	}, {id: 130634, topid: 1306, name: "曲阳县"}, {id: 130635, topid: 1306, name: "蠡县"}, {
		id: 130636,
		topid: 1306,
		name: "顺平县"
	}, {id: 130637, topid: 1306, name: "博野县"}, {id: 130638, topid: 1306, name: "雄县"}, {
		id: 130681,
		topid: 1306,
		name: "涿州市"
	}, {id: 130682, topid: 1306, name: "定州市"}, {id: 130683, topid: 1306, name: "安国市"}, {
		id: 130684,
		topid: 1306,
		name: "高碑店市"
	}, {id: 130701, topid: 1307, name: "市辖区"}, {id: 130702, topid: 1307, name: "桥东区"}, {
		id: 130703,
		topid: 1307,
		name: "桥西区"
	}, {id: 130705, topid: 1307, name: "宣化区"}, {id: 130706, topid: 1307, name: "下花园区"}, {
		id: 130721,
		topid: 1307,
		name: "宣化县"
	}, {id: 130722, topid: 1307, name: "张北县"}, {id: 130723, topid: 1307, name: "康保县"}, {
		id: 130724,
		topid: 1307,
		name: "沽源县"
	}, {id: 130725, topid: 1307, name: "尚义县"}, {id: 130726, topid: 1307, name: "蔚县"}, {
		id: 130727,
		topid: 1307,
		name: "阳原县"
	}, {id: 130728, topid: 1307, name: "怀安县"}, {id: 130729, topid: 1307, name: "万全县"}, {
		id: 130730,
		topid: 1307,
		name: "怀来县"
	}, {id: 130731, topid: 1307, name: "涿鹿县"}, {id: 130732, topid: 1307, name: "赤城县"}, {
		id: 130733,
		topid: 1307,
		name: "崇礼县"
	}, {id: 130801, topid: 1308, name: "市辖区"}, {id: 130802, topid: 1308, name: "双桥区"}, {
		id: 130803,
		topid: 1308,
		name: "双滦区"
	}, {id: 130804, topid: 1308, name: "鹰手营子矿区"}, {id: 130821, topid: 1308, name: "承德县"}, {
		id: 130822,
		topid: 1308,
		name: "兴隆县"
	}, {id: 130823, topid: 1308, name: "平泉县"}, {id: 130824, topid: 1308, name: "滦平县"}, {
		id: 130825,
		topid: 1308,
		name: "隆化县"
	}, {id: 130826, topid: 1308, name: "丰宁满族自治县"}, {id: 130827, topid: 1308, name: "宽城满族自治县"}, {
		id: 130828,
		topid: 1308,
		name: "围场满族蒙古族自治县"
	}, {id: 130901, topid: 1309, name: "市辖区"}, {id: 130902, topid: 1309, name: "新华区"}, {
		id: 130903,
		topid: 1309,
		name: "运河区"
	}, {id: 130921, topid: 1309, name: "沧县"}, {id: 130922, topid: 1309, name: "青县"}, {
		id: 130923,
		topid: 1309,
		name: "东光县"
	}, {id: 130924, topid: 1309, name: "海兴县"}, {id: 130925, topid: 1309, name: "盐山县"}, {
		id: 130926,
		topid: 1309,
		name: "肃宁县"
	}, {id: 130927, topid: 1309, name: "南皮县"}, {id: 130928, topid: 1309, name: "吴桥县"}, {
		id: 130929,
		topid: 1309,
		name: "献县"
	}, {id: 130930, topid: 1309, name: "孟村回族自治县"}, {id: 130981, topid: 1309, name: "泊头市"}, {
		id: 130982,
		topid: 1309,
		name: "任丘市"
	}, {id: 130983, topid: 1309, name: "黄骅市"}, {id: 130984, topid: 1309, name: "河间市"}, {
		id: 131001,
		topid: 1310,
		name: "市辖区"
	}, {id: 131002, topid: 1310, name: "安次区"}, {id: 131003, topid: 1310, name: "广阳区"}, {
		id: 131022,
		topid: 1310,
		name: "固安县"
	}, {id: 131023, topid: 1310, name: "永清县"}, {id: 131024, topid: 1310, name: "香河县"}, {
		id: 131025,
		topid: 1310,
		name: "大城县"
	}, {id: 131026, topid: 1310, name: "文安县"}, {id: 131028, topid: 1310, name: "大厂回族自治县"}, {
		id: 131081,
		topid: 1310,
		name: "霸州市"
	}, {id: 131082, topid: 1310, name: "三河市"}, {id: 131101, topid: 1311, name: "市辖区"}, {
		id: 131102,
		topid: 1311,
		name: "桃城区"
	}, {id: 131121, topid: 1311, name: "枣强县"}, {id: 131122, topid: 1311, name: "武邑县"}, {
		id: 131123,
		topid: 1311,
		name: "武强县"
	}, {id: 131124, topid: 1311, name: "饶阳县"}, {id: 131125, topid: 1311, name: "安平县"}, {
		id: 131126,
		topid: 1311,
		name: "故城县"
	}, {id: 131127, topid: 1311, name: "景县"}, {id: 131128, topid: 1311, name: "阜城县"}, {
		id: 131181,
		topid: 1311,
		name: "冀州市"
	}, {id: 131182, topid: 1311, name: "深州市"}, {id: 140101, topid: 1401, name: "市辖区"}, {
		id: 140105,
		topid: 1401,
		name: "小店区"
	}, {id: 140106, topid: 1401, name: "迎泽区"}, {id: 140107, topid: 1401, name: "杏花岭区"}, {
		id: 140108,
		topid: 1401,
		name: "尖草坪区"
	}, {id: 140109, topid: 1401, name: "万柏林区"}, {id: 140110, topid: 1401, name: "晋源区"}, {
		id: 140121,
		topid: 1401,
		name: "清徐县"
	}, {id: 140122, topid: 1401, name: "阳曲县"}, {id: 140123, topid: 1401, name: "娄烦县"}, {
		id: 140181,
		topid: 1401,
		name: "古交市"
	}, {id: 140201, topid: 1402, name: "市辖区"}, {id: 140202, topid: 1402, name: "城区"}, {
		id: 140203,
		topid: 1402,
		name: "矿区"
	}, {id: 140211, topid: 1402, name: "南郊区"}, {id: 140212, topid: 1402, name: "新荣区"}, {
		id: 140221,
		topid: 1402,
		name: "阳高县"
	}, {id: 140222, topid: 1402, name: "天镇县"}, {id: 140223, topid: 1402, name: "广灵县"}, {
		id: 140224,
		topid: 1402,
		name: "灵丘县"
	}, {id: 140225, topid: 1402, name: "浑源县"}, {id: 140226, topid: 1402, name: "左云县"}, {
		id: 140227,
		topid: 1402,
		name: "大同县"
	}, {id: 140301, topid: 1403, name: "市辖区"}, {id: 140302, topid: 1403, name: "城区"}, {
		id: 140303,
		topid: 1403,
		name: "矿区"
	}, {id: 140311, topid: 1403, name: "郊区"}, {id: 140321, topid: 1403, name: "平定县"}, {
		id: 140322,
		topid: 1403,
		name: "盂县"
	}, {id: 140401, topid: 1404, name: "市辖区"}, {id: 140402, topid: 1404, name: "城区"}, {
		id: 140411,
		topid: 1404,
		name: "郊区"
	}, {id: 140421, topid: 1404, name: "长治县"}, {id: 140423, topid: 1404, name: "襄垣县"}, {
		id: 140424,
		topid: 1404,
		name: "屯留县"
	}, {id: 140425, topid: 1404, name: "平顺县"}, {id: 140426, topid: 1404, name: "黎城县"}, {
		id: 140427,
		topid: 1404,
		name: "壶关县"
	}, {id: 140428, topid: 1404, name: "长子县"}, {id: 140429, topid: 1404, name: "武乡县"}, {
		id: 140430,
		topid: 1404,
		name: "沁县"
	}, {id: 140431, topid: 1404, name: "沁源县"}, {id: 140481, topid: 1404, name: "潞城市"}, {
		id: 140501,
		topid: 1405,
		name: "市辖区"
	}, {id: 140502, topid: 1405, name: "城区"}, {id: 140521, topid: 1405, name: "沁水县"}, {
		id: 140522,
		topid: 1405,
		name: "阳城县"
	}, {id: 140524, topid: 1405, name: "陵川县"}, {id: 140525, topid: 1405, name: "泽州县"}, {
		id: 140581,
		topid: 1405,
		name: "高平市"
	}, {id: 140601, topid: 1406, name: "市辖区"}, {id: 140602, topid: 1406, name: "朔城区"}, {
		id: 140603,
		topid: 1406,
		name: "平鲁区"
	}, {id: 140621, topid: 1406, name: "山阴县"}, {id: 140622, topid: 1406, name: "应县"}, {
		id: 140623,
		topid: 1406,
		name: "右玉县"
	}, {id: 140624, topid: 1406, name: "怀仁县"}, {id: 140701, topid: 1407, name: "市辖区"}, {
		id: 140702,
		topid: 1407,
		name: "榆次区"
	}, {id: 140721, topid: 1407, name: "榆社县"}, {id: 140722, topid: 1407, name: "左权县"}, {
		id: 140723,
		topid: 1407,
		name: "和顺县"
	}, {id: 140724, topid: 1407, name: "昔阳县"}, {id: 140725, topid: 1407, name: "寿阳县"}, {
		id: 140726,
		topid: 1407,
		name: "太谷县"
	}, {id: 140727, topid: 1407, name: "祁县"}, {id: 140728, topid: 1407, name: "平遥县"}, {
		id: 140729,
		topid: 1407,
		name: "灵石县"
	}, {id: 140781, topid: 1407, name: "介休市"}, {id: 140801, topid: 1408, name: "市辖区"}, {
		id: 140802,
		topid: 1408,
		name: "盐湖区"
	}, {id: 140821, topid: 1408, name: "临猗县"}, {id: 140822, topid: 1408, name: "万荣县"}, {
		id: 140823,
		topid: 1408,
		name: "闻喜县"
	}, {id: 140824, topid: 1408, name: "稷山县"}, {id: 140825, topid: 1408, name: "新绛县"}, {
		id: 140826,
		topid: 1408,
		name: "绛县"
	}, {id: 140827, topid: 1408, name: "垣曲县"}, {id: 140828, topid: 1408, name: "夏县"}, {
		id: 140829,
		topid: 1408,
		name: "平陆县"
	}, {id: 140830, topid: 1408, name: "芮城县"}, {id: 140881, topid: 1408, name: "永济市"}, {
		id: 140882,
		topid: 1408,
		name: "河津市"
	}, {id: 140901, topid: 1409, name: "市辖区"}, {id: 140902, topid: 1409, name: "忻府区"}, {
		id: 140921,
		topid: 1409,
		name: "定襄县"
	}, {id: 140922, topid: 1409, name: "五台县"}, {id: 140923, topid: 1409, name: "代县"}, {
		id: 140924,
		topid: 1409,
		name: "繁峙县"
	}, {id: 140925, topid: 1409, name: "宁武县"}, {id: 140926, topid: 1409, name: "静乐县"}, {
		id: 140927,
		topid: 1409,
		name: "神池县"
	}, {id: 140928, topid: 1409, name: "五寨县"}, {id: 140929, topid: 1409, name: "岢岚县"}, {
		id: 140930,
		topid: 1409,
		name: "河曲县"
	}, {id: 140931, topid: 1409, name: "保德县"}, {id: 140932, topid: 1409, name: "偏关县"}, {
		id: 140981,
		topid: 1409,
		name: "原平市"
	}, {id: 141001, topid: 1410, name: "市辖区"}, {id: 141002, topid: 1410, name: "尧都区"}, {
		id: 141021,
		topid: 1410,
		name: "曲沃县"
	}, {id: 141022, topid: 1410, name: "翼城县"}, {id: 141023, topid: 1410, name: "襄汾县"}, {
		id: 141024,
		topid: 1410,
		name: "洪洞县"
	}, {id: 141025, topid: 1410, name: "古县"}, {id: 141026, topid: 1410, name: "安泽县"}, {
		id: 141027,
		topid: 1410,
		name: "浮山县"
	}, {id: 141028, topid: 1410, name: "吉县"}, {id: 141029, topid: 1410, name: "乡宁县"}, {
		id: 141030,
		topid: 1410,
		name: "大宁县"
	}, {id: 141031, topid: 1410, name: "隰县"}, {id: 141032, topid: 1410, name: "永和县"}, {
		id: 141033,
		topid: 1410,
		name: "蒲县"
	}, {id: 141034, topid: 1410, name: "汾西县"}, {id: 141081, topid: 1410, name: "侯马市"}, {
		id: 141082,
		topid: 1410,
		name: "霍州市"
	}, {id: 141101, topid: 1411, name: "市辖区"}, {id: 141102, topid: 1411, name: "离石区"}, {
		id: 141121,
		topid: 1411,
		name: "文水县"
	}, {id: 141122, topid: 1411, name: "交城县"}, {id: 141123, topid: 1411, name: "兴县"}, {
		id: 141124,
		topid: 1411,
		name: "临县"
	}, {id: 141125, topid: 1411, name: "柳林县"}, {id: 141126, topid: 1411, name: "石楼县"}, {
		id: 141127,
		topid: 1411,
		name: "岚县"
	}, {id: 141128, topid: 1411, name: "方山县"}, {id: 141129, topid: 1411, name: "中阳县"}, {
		id: 141130,
		topid: 1411,
		name: "交口县"
	}, {id: 141181, topid: 1411, name: "孝义市"}, {id: 141182, topid: 1411, name: "汾阳市"}, {
		id: 150101,
		topid: 1501,
		name: "市辖区"
	}, {id: 150102, topid: 1501, name: "新城区"}, {id: 150103, topid: 1501, name: "回民区"}, {
		id: 150104,
		topid: 1501,
		name: "玉泉区"
	}, {id: 150105, topid: 1501, name: "赛罕区"}, {id: 150121, topid: 1501, name: "土默特左旗"}, {
		id: 150122,
		topid: 1501,
		name: "托克托县"
	}, {id: 150123, topid: 1501, name: "和林格尔县"}, {id: 150124, topid: 1501, name: "清水河县"}, {
		id: 150125,
		topid: 1501,
		name: "武川县"
	}, {id: 150201, topid: 1502, name: "市辖区"}, {id: 150202, topid: 1502, name: "东河区"}, {
		id: 150203,
		topid: 1502,
		name: "昆都仑区"
	}, {id: 150204, topid: 1502, name: "青山区"}, {id: 150205, topid: 1502, name: "石拐区"}, {
		id: 150206,
		topid: 1502,
		name: "白云矿区"
	}, {id: 150207, topid: 1502, name: "九原区"}, {id: 150221, topid: 1502, name: "土默特右旗"}, {
		id: 150222,
		topid: 1502,
		name: "固阳县"
	}, {id: 150223, topid: 1502, name: "达尔罕茂明安联合旗"}, {id: 150301, topid: 1503, name: "市辖区"}, {
		id: 150302,
		topid: 1503,
		name: "海勃湾区"
	}, {id: 150303, topid: 1503, name: "海南区"}, {id: 150304, topid: 1503, name: "乌达区"}, {
		id: 150401,
		topid: 1504,
		name: "市辖区"
	}, {id: 150402, topid: 1504, name: "红山区"}, {id: 150403, topid: 1504, name: "元宝山区"}, {
		id: 150404,
		topid: 1504,
		name: "松山区"
	}, {id: 150421, topid: 1504, name: "阿鲁科尔沁旗"}, {id: 150422, topid: 1504, name: "巴林左旗"}, {
		id: 150423,
		topid: 1504,
		name: "巴林右旗"
	}, {id: 150424, topid: 1504, name: "林西县"}, {id: 150425, topid: 1504, name: "克什克腾旗"}, {
		id: 150426,
		topid: 1504,
		name: "翁牛特旗"
	}, {id: 150428, topid: 1504, name: "喀喇沁旗"}, {id: 150429, topid: 1504, name: "宁城县"}, {
		id: 150430,
		topid: 1504,
		name: "敖汉旗"
	}, {id: 150501, topid: 1505, name: "市辖区"}, {id: 150502, topid: 1505, name: "科尔沁区"}, {
		id: 150521,
		topid: 1505,
		name: "科尔沁左翼中旗"
	}, {id: 150522, topid: 1505, name: "科尔沁左翼后旗"}, {id: 150523, topid: 1505, name: "开鲁县"}, {
		id: 150524,
		topid: 1505,
		name: "库伦旗"
	}, {id: 150525, topid: 1505, name: "奈曼旗"}, {id: 150526, topid: 1505, name: "扎鲁特旗"}, {
		id: 150581,
		topid: 1505,
		name: "霍林郭勒市"
	}, {id: 150602, topid: 1506, name: "东胜区"}, {id: 150621, topid: 1506, name: "达拉特旗"}, {
		id: 150622,
		topid: 1506,
		name: "准格尔旗"
	}, {id: 150623, topid: 1506, name: "鄂托克前旗"}, {id: 150624, topid: 1506, name: "鄂托克旗"}, {
		id: 150625,
		topid: 1506,
		name: "杭锦旗"
	}, {id: 150626, topid: 1506, name: "乌审旗"}, {id: 150627, topid: 1506, name: "伊金霍洛旗"}, {
		id: 150701,
		topid: 1507,
		name: "市辖区"
	}, {id: 150702, topid: 1507, name: "海拉尔区"}, {id: 150721, topid: 1507, name: "阿荣旗"}, {
		id: 150722,
		topid: 1507,
		name: "莫力达瓦达斡尔族自治旗"
	}, {id: 150723, topid: 1507, name: "鄂伦春自治旗"}, {id: 150724, topid: 1507, name: "鄂温克族自治旗"}, {
		id: 150725,
		topid: 1507,
		name: "陈巴尔虎旗"
	}, {id: 150726, topid: 1507, name: "新巴尔虎左旗"}, {id: 150727, topid: 1507, name: "新巴尔虎右旗"}, {
		id: 150781,
		topid: 1507,
		name: "满洲里市"
	}, {id: 150782, topid: 1507, name: "牙克石市"}, {id: 150783, topid: 1507, name: "扎兰屯市"}, {
		id: 150784,
		topid: 1507,
		name: "额尔古纳市"
	}, {id: 150785, topid: 1507, name: "根河市"}, {id: 150801, topid: 1508, name: "市辖区"}, {
		id: 150802,
		topid: 1508,
		name: "临河区"
	}, {id: 150821, topid: 1508, name: "五原县"}, {id: 150822, topid: 1508, name: "磴口县"}, {
		id: 150823,
		topid: 1508,
		name: "乌拉特前旗"
	}, {id: 150824, topid: 1508, name: "乌拉特中旗"}, {id: 150825, topid: 1508, name: "乌拉特后旗"}, {
		id: 150826,
		topid: 1508,
		name: "杭锦后旗"
	}, {id: 150901, topid: 1509, name: "市辖区"}, {id: 150902, topid: 1509, name: "集宁区"}, {
		id: 150921,
		topid: 1509,
		name: "卓资县"
	}, {id: 150922, topid: 1509, name: "化德县"}, {id: 150923, topid: 1509, name: "商都县"}, {
		id: 150924,
		topid: 1509,
		name: "兴和县"
	}, {id: 150925, topid: 1509, name: "凉城县"}, {id: 150926, topid: 1509, name: "察哈尔右翼前旗"}, {
		id: 150927,
		topid: 1509,
		name: "察哈尔右翼中旗"
	}, {id: 150928, topid: 1509, name: "察哈尔右翼后旗"}, {id: 150929, topid: 1509, name: "四子王旗"}, {
		id: 150981,
		topid: 1509,
		name: "丰镇市"
	}, {id: 152201, topid: 1522, name: "乌兰浩特市"}, {id: 152202, topid: 1522, name: "阿尔山市"}, {
		id: 152221,
		topid: 1522,
		name: "科尔沁右翼前旗"
	}, {id: 152222, topid: 1522, name: "科尔沁右翼中旗"}, {id: 152223, topid: 1522, name: "扎赉特旗"}, {
		id: 152224,
		topid: 1522,
		name: "突泉县"
	}, {id: 152501, topid: 1525, name: "二连浩特市"}, {id: 152502, topid: 1525, name: "锡林浩特市"}, {
		id: 152522,
		topid: 1525,
		name: "阿巴嘎旗"
	}, {id: 152523, topid: 1525, name: "苏尼特左旗"}, {id: 152524, topid: 1525, name: "苏尼特右旗"}, {
		id: 152525,
		topid: 1525,
		name: "东乌珠穆沁旗"
	}, {id: 152526, topid: 1525, name: "西乌珠穆沁旗"}, {id: 152527, topid: 1525, name: "太仆寺旗"}, {
		id: 152528,
		topid: 1525,
		name: "镶黄旗"
	}, {id: 152529, topid: 1525, name: "正镶白旗"}, {id: 152530, topid: 1525, name: "正蓝旗"}, {
		id: 152531,
		topid: 1525,
		name: "多伦县"
	}, {id: 152921, topid: 1529, name: "阿拉善左旗"}, {id: 152922, topid: 1529, name: "阿拉善右旗"}, {
		id: 152923,
		topid: 1529,
		name: "额济纳旗"
	}, {id: 210101, topid: 2101, name: "市辖区"}, {id: 210102, topid: 2101, name: "和平区"}, {
		id: 210103,
		topid: 2101,
		name: "沈河区"
	}, {id: 210104, topid: 2101, name: "大东区"}, {id: 210105, topid: 2101, name: "皇姑区"}, {
		id: 210106,
		topid: 2101,
		name: "铁西区"
	}, {id: 210111, topid: 2101, name: "苏家屯区"}, {id: 210112, topid: 2101, name: "东陵区"}, {
		id: 210113,
		topid: 2101,
		name: "沈北新区*"
	}, {id: 210114, topid: 2101, name: "于洪区"}, {id: 210122, topid: 2101, name: "辽中县"}, {
		id: 210123,
		topid: 2101,
		name: "康平县"
	}, {id: 210124, topid: 2101, name: "法库县"}, {id: 210181, topid: 2101, name: "新民市"}, {
		id: 210201,
		topid: 2102,
		name: "市辖区"
	}, {id: 210202, topid: 2102, name: "中山区"}, {id: 210203, topid: 2102, name: "西岗区"}, {
		id: 210204,
		topid: 2102,
		name: "沙河口区"
	}, {id: 210211, topid: 2102, name: "甘井子区"}, {id: 210212, topid: 2102, name: "旅顺口区"}, {
		id: 210213,
		topid: 2102,
		name: "金州区"
	}, {id: 210224, topid: 2102, name: "长海县"}, {id: 210281, topid: 2102, name: "瓦房店市"}, {
		id: 210282,
		topid: 2102,
		name: "普兰店市"
	}, {id: 210283, topid: 2102, name: "庄河市"}, {id: 210301, topid: 2103, name: "市辖区"}, {
		id: 210302,
		topid: 2103,
		name: "铁东区"
	}, {id: 210303, topid: 2103, name: "铁西区"}, {id: 210304, topid: 2103, name: "立山区"}, {
		id: 210311,
		topid: 2103,
		name: "千山区"
	}, {id: 210321, topid: 2103, name: "台安县"}, {id: 210323, topid: 2103, name: "岫岩满族自治县"}, {
		id: 210381,
		topid: 2103,
		name: "海城市"
	}, {id: 210401, topid: 2104, name: "市辖区"}, {id: 210402, topid: 2104, name: "新抚区"}, {
		id: 210403,
		topid: 2104,
		name: "东洲区"
	}, {id: 210404, topid: 2104, name: "望花区"}, {id: 210411, topid: 2104, name: "顺城区"}, {
		id: 210421,
		topid: 2104,
		name: "抚顺县"
	}, {id: 210422, topid: 2104, name: "新宾满族自治县"}, {id: 210423, topid: 2104, name: "清原满族自治县"}, {
		id: 210501,
		topid: 2105,
		name: "市辖区"
	}, {id: 210502, topid: 2105, name: "平山区"}, {id: 210503, topid: 2105, name: "溪湖区"}, {
		id: 210504,
		topid: 2105,
		name: "明山区"
	}, {id: 210505, topid: 2105, name: "南芬区"}, {id: 210521, topid: 2105, name: "本溪满族自治县"}, {
		id: 210522,
		topid: 2105,
		name: "桓仁满族自治县"
	}, {id: 210601, topid: 2106, name: "市辖区"}, {id: 210602, topid: 2106, name: "元宝区"}, {
		id: 210603,
		topid: 2106,
		name: "振兴区"
	}, {id: 210604, topid: 2106, name: "振安区"}, {id: 210624, topid: 2106, name: "宽甸满族自治县"}, {
		id: 210681,
		topid: 2106,
		name: "东港市"
	}, {id: 210682, topid: 2106, name: "凤城市"}, {id: 210701, topid: 2107, name: "市辖区"}, {
		id: 210702,
		topid: 2107,
		name: "古塔区"
	}, {id: 210703, topid: 2107, name: "凌河区"}, {id: 210711, topid: 2107, name: "太和区"}, {
		id: 210726,
		topid: 2107,
		name: "黑山县"
	}, {id: 210727, topid: 2107, name: "义县"}, {id: 210781, topid: 2107, name: "凌海市"}, {
		id: 210782,
		topid: 2107,
		name: "北镇市"
	}, {id: 210801, topid: 2108, name: "市辖区"}, {id: 210802, topid: 2108, name: "站前区"}, {
		id: 210803,
		topid: 2108,
		name: "西市区"
	}, {id: 210804, topid: 2108, name: "鲅鱼圈区"}, {id: 210811, topid: 2108, name: "老边区"}, {
		id: 210881,
		topid: 2108,
		name: "盖州市"
	}, {id: 210882, topid: 2108, name: "大石桥市"}, {id: 210901, topid: 2109, name: "市辖区"}, {
		id: 210902,
		topid: 2109,
		name: "海州区"
	}, {id: 210903, topid: 2109, name: "新邱区"}, {id: 210904, topid: 2109, name: "太平区"}, {
		id: 210905,
		topid: 2109,
		name: "清河门区"
	}, {id: 210911, topid: 2109, name: "细河区"}, {id: 210921, topid: 2109, name: "阜新蒙古族自治县"}, {
		id: 210922,
		topid: 2109,
		name: "彰武县"
	}, {id: 211001, topid: 2110, name: "市辖区"}, {id: 211002, topid: 2110, name: "白塔区"}, {
		id: 211003,
		topid: 2110,
		name: "文圣区"
	}, {id: 211004, topid: 2110, name: "宏伟区"}, {id: 211005, topid: 2110, name: "弓长岭区"}, {
		id: 211011,
		topid: 2110,
		name: "太子河区"
	}, {id: 211021, topid: 2110, name: "辽阳县"}, {id: 211081, topid: 2110, name: "灯塔市"}, {
		id: 211101,
		topid: 2111,
		name: "市辖区"
	}, {id: 211102, topid: 2111, name: "双台子区"}, {id: 211103, topid: 2111, name: "兴隆台区"}, {
		id: 211121,
		topid: 2111,
		name: "大洼县"
	}, {id: 211122, topid: 2111, name: "盘山县"}, {id: 211201, topid: 2112, name: "市辖区"}, {
		id: 211202,
		topid: 2112,
		name: "银州区"
	}, {id: 211204, topid: 2112, name: "清河区"}, {id: 211221, topid: 2112, name: "铁岭县"}, {
		id: 211223,
		topid: 2112,
		name: "西丰县"
	}, {id: 211224, topid: 2112, name: "昌图县"}, {id: 211281, topid: 2112, name: "调兵山市"}, {
		id: 211282,
		topid: 2112,
		name: "开原市"
	}, {id: 211301, topid: 2113, name: "市辖区"}, {id: 211302, topid: 2113, name: "双塔区"}, {
		id: 211303,
		topid: 2113,
		name: "龙城区"
	}, {id: 211321, topid: 2113, name: "朝阳县"}, {id: 211322, topid: 2113, name: "建平县"}, {
		id: 211324,
		topid: 2113,
		name: "喀喇沁左翼蒙古族自治县"
	}, {id: 211381, topid: 2113, name: "北票市"}, {id: 211382, topid: 2113, name: "凌源市"}, {
		id: 211401,
		topid: 2114,
		name: "市辖区"
	}, {id: 211402, topid: 2114, name: "连山区"}, {id: 211403, topid: 2114, name: "龙港区"}, {
		id: 211404,
		topid: 2114,
		name: "南票区"
	}, {id: 211421, topid: 2114, name: "绥中县"}, {id: 211422, topid: 2114, name: "建昌县"}, {
		id: 211481,
		topid: 2114,
		name: "兴城市"
	}, {id: 220101, topid: 2201, name: "市辖区"}, {id: 220102, topid: 2201, name: "南关区"}, {
		id: 220103,
		topid: 2201,
		name: "宽城区"
	}, {id: 220104, topid: 2201, name: "朝阳区"}, {id: 220105, topid: 2201, name: "二道区"}, {
		id: 220106,
		topid: 2201,
		name: "绿园区"
	}, {id: 220112, topid: 2201, name: "双阳区"}, {id: 220122, topid: 2201, name: "农安县"}, {
		id: 220181,
		topid: 2201,
		name: "九台市"
	}, {id: 220182, topid: 2201, name: "榆树市"}, {id: 220183, topid: 2201, name: "德惠市"}, {
		id: 220201,
		topid: 2202,
		name: "市辖区"
	}, {id: 220202, topid: 2202, name: "昌邑区"}, {id: 220203, topid: 2202, name: "龙潭区"}, {
		id: 220204,
		topid: 2202,
		name: "船营区"
	}, {id: 220211, topid: 2202, name: "丰满区"}, {id: 220221, topid: 2202, name: "永吉县"}, {
		id: 220281,
		topid: 2202,
		name: "蛟河市"
	}, {id: 220282, topid: 2202, name: "桦甸市"}, {id: 220283, topid: 2202, name: "舒兰市"}, {
		id: 220284,
		topid: 2202,
		name: "磐石市"
	}, {id: 220301, topid: 2203, name: "市辖区"}, {id: 220302, topid: 2203, name: "铁西区"}, {
		id: 220303,
		topid: 2203,
		name: "铁东区"
	}, {id: 220322, topid: 2203, name: "梨树县"}, {id: 220323, topid: 2203, name: "伊通满族自治县"}, {
		id: 220381,
		topid: 2203,
		name: "公主岭市"
	}, {id: 220382, topid: 2203, name: "双辽市"}, {id: 220401, topid: 2204, name: "市辖区"}, {
		id: 220402,
		topid: 2204,
		name: "龙山区"
	}, {id: 220403, topid: 2204, name: "西安区"}, {id: 220421, topid: 2204, name: "东丰县"}, {
		id: 220422,
		topid: 2204,
		name: "东辽县"
	}, {id: 220501, topid: 2205, name: "市辖区"}, {id: 220502, topid: 2205, name: "东昌区"}, {
		id: 220503,
		topid: 2205,
		name: "二道江区"
	}, {id: 220521, topid: 2205, name: "通化县"}, {id: 220523, topid: 2205, name: "辉南县"}, {
		id: 220524,
		topid: 2205,
		name: "柳河县"
	}, {id: 220581, topid: 2205, name: "梅河口市"}, {id: 220582, topid: 2205, name: "集安市"}, {
		id: 220601,
		topid: 2206,
		name: "市辖区"
	}, {id: 220602, topid: 2206, name: "八道江区"}, {id: 220604, topid: 2206, name: "江源区"}, {
		id: 220621,
		topid: 2206,
		name: "抚松县"
	}, {id: 220622, topid: 2206, name: "靖宇县"}, {id: 220623, topid: 2206, name: "长白朝鲜族自治县"}, {
		id: 220681,
		topid: 2206,
		name: "临江市"
	}, {id: 220701, topid: 2207, name: "市辖区"}, {id: 220702, topid: 2207, name: "宁江区"}, {
		id: 220721,
		topid: 2207,
		name: "前郭尔罗斯蒙古族自治县"
	}, {id: 220722, topid: 2207, name: "长岭县"}, {id: 220723, topid: 2207, name: "乾安县"}, {
		id: 220724,
		topid: 2207,
		name: "扶余县"
	}, {id: 220801, topid: 2208, name: "市辖区"}, {id: 220802, topid: 2208, name: "洮北区"}, {
		id: 220821,
		topid: 2208,
		name: "镇赉县"
	}, {id: 220822, topid: 2208, name: "通榆县"}, {id: 220881, topid: 2208, name: "洮南市"}, {
		id: 220882,
		topid: 2208,
		name: "大安市"
	}, {id: 222401, topid: 2224, name: "延吉市"}, {id: 222402, topid: 2224, name: "图们市"}, {
		id: 222403,
		topid: 2224,
		name: "敦化市"
	}, {id: 222404, topid: 2224, name: "珲春市"}, {id: 222405, topid: 2224, name: "龙井市"}, {
		id: 222406,
		topid: 2224,
		name: "和龙市"
	}, {id: 222424, topid: 2224, name: "汪清县"}, {id: 222426, topid: 2224, name: "安图县"}, {
		id: 230101,
		topid: 2301,
		name: "市辖区"
	}, {id: 230102, topid: 2301, name: "道里区"}, {id: 230103, topid: 2301, name: "南岗区"}, {
		id: 230104,
		topid: 2301,
		name: "道外区"
	}, {id: 230108, topid: 2301, name: "平房区"}, {id: 230109, topid: 2301, name: "松北区"}, {
		id: 230110,
		topid: 2301,
		name: "香坊区"
	}, {id: 230111, topid: 2301, name: "呼兰区"}, {id: 230112, topid: 2301, name: "阿城区"}, {
		id: 230123,
		topid: 2301,
		name: "依兰县"
	}, {id: 230124, topid: 2301, name: "方正县"}, {id: 230125, topid: 2301, name: "宾县"}, {
		id: 230126,
		topid: 2301,
		name: "巴彦县"
	}, {id: 230127, topid: 2301, name: "木兰县"}, {id: 230128, topid: 2301, name: "通河县"}, {
		id: 230129,
		topid: 2301,
		name: "延寿县"
	}, {id: 230182, topid: 2301, name: "双城市"}, {id: 230183, topid: 2301, name: "尚志市"}, {
		id: 230184,
		topid: 2301,
		name: "五常市"
	}, {id: 230201, topid: 2302, name: "市辖区"}, {id: 230202, topid: 2302, name: "龙沙区"}, {
		id: 230203,
		topid: 2302,
		name: "建华区"
	}, {id: 230204, topid: 2302, name: "铁锋区"}, {id: 230205, topid: 2302, name: "昂昂溪区"}, {
		id: 230206,
		topid: 2302,
		name: "富拉尔基区"
	}, {id: 230207, topid: 2302, name: "碾子山区"}, {id: 230208, topid: 2302, name: "梅里斯达斡尔族区"}, {
		id: 230221,
		topid: 2302,
		name: "龙江县"
	}, {id: 230223, topid: 2302, name: "依安县"}, {id: 230224, topid: 2302, name: "泰来县"}, {
		id: 230225,
		topid: 2302,
		name: "甘南县"
	}, {id: 230227, topid: 2302, name: "富裕县"}, {id: 230229, topid: 2302, name: "克山县"}, {
		id: 230230,
		topid: 2302,
		name: "克东县"
	}, {id: 230231, topid: 2302, name: "拜泉县"}, {id: 230281, topid: 2302, name: "讷河市"}, {
		id: 230301,
		topid: 2303,
		name: "市辖区"
	}, {id: 230302, topid: 2303, name: "鸡冠区"}, {id: 230303, topid: 2303, name: "恒山区"}, {
		id: 230304,
		topid: 2303,
		name: "滴道区"
	}, {id: 230305, topid: 2303, name: "梨树区"}, {id: 230306, topid: 2303, name: "城子河区"}, {
		id: 230307,
		topid: 2303,
		name: "麻山区"
	}, {id: 230321, topid: 2303, name: "鸡东县"}, {id: 230381, topid: 2303, name: "虎林市"}, {
		id: 230382,
		topid: 2303,
		name: "密山市"
	}, {id: 230401, topid: 2304, name: "市辖区"}, {id: 230402, topid: 2304, name: "向阳区"}, {
		id: 230403,
		topid: 2304,
		name: "工农区"
	}, {id: 230404, topid: 2304, name: "南山区"}, {id: 230405, topid: 2304, name: "兴安区"}, {
		id: 230406,
		topid: 2304,
		name: "东山区"
	}, {id: 230407, topid: 2304, name: "兴山区"}, {id: 230421, topid: 2304, name: "萝北县"}, {
		id: 230422,
		topid: 2304,
		name: "绥滨县"
	}, {id: 230501, topid: 2305, name: "市辖区"}, {id: 230502, topid: 2305, name: "尖山区"}, {
		id: 230503,
		topid: 2305,
		name: "岭东区"
	}, {id: 230505, topid: 2305, name: "四方台区"}, {id: 230506, topid: 2305, name: "宝山区"}, {
		id: 230521,
		topid: 2305,
		name: "集贤县"
	}, {id: 230522, topid: 2305, name: "友谊县"}, {id: 230523, topid: 2305, name: "宝清县"}, {
		id: 230524,
		topid: 2305,
		name: "饶河县"
	}, {id: 230601, topid: 2306, name: "市辖区"}, {id: 230602, topid: 2306, name: "萨尔图区"}, {
		id: 230603,
		topid: 2306,
		name: "龙凤区"
	}, {id: 230604, topid: 2306, name: "让胡路区"}, {id: 230605, topid: 2306, name: "红岗区"}, {
		id: 230606,
		topid: 2306,
		name: "大同区"
	}, {id: 230621, topid: 2306, name: "肇州县"}, {id: 230622, topid: 2306, name: "肇源县"}, {
		id: 230623,
		topid: 2306,
		name: "林甸县"
	}, {id: 230624, topid: 2306, name: "杜尔伯特蒙古族自治县"}, {id: 230701, topid: 2307, name: "市辖区"}, {
		id: 230702,
		topid: 2307,
		name: "伊春区"
	}, {id: 230703, topid: 2307, name: "南岔区"}, {id: 230704, topid: 2307, name: "友好区"}, {
		id: 230705,
		topid: 2307,
		name: "西林区"
	}, {id: 230706, topid: 2307, name: "翠峦区"}, {id: 230707, topid: 2307, name: "新青区"}, {
		id: 230708,
		topid: 2307,
		name: "美溪区"
	}, {id: 230709, topid: 2307, name: "金山屯区"}, {id: 230710, topid: 2307, name: "五营区"}, {
		id: 230711,
		topid: 2307,
		name: "乌马河区"
	}, {id: 230712, topid: 2307, name: "汤旺河区"}, {id: 230713, topid: 2307, name: "带岭区"}, {
		id: 230714,
		topid: 2307,
		name: "乌伊岭区"
	}, {id: 230715, topid: 2307, name: "红星区"}, {id: 230716, topid: 2307, name: "上甘岭区"}, {
		id: 230722,
		topid: 2307,
		name: "嘉荫县"
	}, {id: 230781, topid: 2307, name: "铁力市"}, {id: 230801, topid: 2308, name: "市辖区"}, {
		id: 230803,
		topid: 2308,
		name: "向阳区"
	}, {id: 230804, topid: 2308, name: "前进区"}, {id: 230805, topid: 2308, name: "东风区"}, {
		id: 230811,
		topid: 2308,
		name: "郊区"
	}, {id: 230822, topid: 2308, name: "桦南县"}, {id: 230826, topid: 2308, name: "桦川县"}, {
		id: 230828,
		topid: 2308,
		name: "汤原县"
	}, {id: 230833, topid: 2308, name: "抚远县"}, {id: 230881, topid: 2308, name: "同江市"}, {
		id: 230882,
		topid: 2308,
		name: "富锦市"
	}, {id: 230901, topid: 2309, name: "市辖区"}, {id: 230902, topid: 2309, name: "新兴区"}, {
		id: 230903,
		topid: 2309,
		name: "桃山区"
	}, {id: 230904, topid: 2309, name: "茄子河区"}, {id: 230921, topid: 2309, name: "勃利县"}, {
		id: 231001,
		topid: 2310,
		name: "市辖区"
	}, {id: 231002, topid: 2310, name: "东安区"}, {id: 231003, topid: 2310, name: "阳明区"}, {
		id: 231004,
		topid: 2310,
		name: "爱民区"
	}, {id: 231005, topid: 2310, name: "西安区"}, {id: 231024, topid: 2310, name: "东宁县"}, {
		id: 231025,
		topid: 2310,
		name: "林口县"
	}, {id: 231081, topid: 2310, name: "绥芬河市"}, {id: 231083, topid: 2310, name: "海林市"}, {
		id: 231084,
		topid: 2310,
		name: "宁安市"
	}, {id: 231085, topid: 2310, name: "穆棱市"}, {id: 231101, topid: 2311, name: "市辖区"}, {
		id: 231102,
		topid: 2311,
		name: "爱辉区"
	}, {id: 231121, topid: 2311, name: "嫩江县"}, {id: 231123, topid: 2311, name: "逊克县"}, {
		id: 231124,
		topid: 2311,
		name: "孙吴县"
	}, {id: 231181, topid: 2311, name: "北安市"}, {id: 231182, topid: 2311, name: "五大连池市"}, {
		id: 231201,
		topid: 2312,
		name: "市辖区"
	}, {id: 231202, topid: 2312, name: "北林区"}, {id: 231221, topid: 2312, name: "望奎县"}, {
		id: 231222,
		topid: 2312,
		name: "兰西县"
	}, {id: 231223, topid: 2312, name: "青冈县"}, {id: 231224, topid: 2312, name: "庆安县"}, {
		id: 231225,
		topid: 2312,
		name: "明水县"
	}, {id: 231226, topid: 2312, name: "绥棱县"}, {id: 231281, topid: 2312, name: "安达市"}, {
		id: 231282,
		topid: 2312,
		name: "肇东市"
	}, {id: 231283, topid: 2312, name: "海伦市"}, {id: 232701, topid: 2327, name: "加格达奇区"}, {
		id: 232702,
		topid: 2327,
		name: "松岭区"
	}, {id: 232703, topid: 2327, name: "新林区"}, {id: 232704, topid: 2327, name: "呼中区"}, {
		id: 232721,
		topid: 2327,
		name: "呼玛县"
	}, {id: 232722, topid: 2327, name: "塔河县"}, {id: 232723, topid: 2327, name: "漠河县"}, {
		id: 310101,
		topid: 3101,
		name: "黄浦区"
	}, {id: 310103, topid: 3101, name: "卢湾区"}, {id: 310104, topid: 3101, name: "徐汇区"}, {
		id: 310105,
		topid: 3101,
		name: "长宁区"
	}, {id: 310106, topid: 3101, name: "静安区"}, {id: 310107, topid: 3101, name: "普陀区"}, {
		id: 310108,
		topid: 3101,
		name: "闸北区"
	}, {id: 310109, topid: 3101, name: "虹口区"}, {id: 310110, topid: 3101, name: "杨浦区"}, {
		id: 310112,
		topid: 3101,
		name: "闵行区"
	}, {id: 310113, topid: 3101, name: "宝山区"}, {id: 310114, topid: 3101, name: "嘉定区"}, {
		id: 310115,
		topid: 3101,
		name: "浦东新区"
	}, {id: 310116, topid: 3101, name: "金山区"}, {id: 310117, topid: 3101, name: "松江区"}, {
		id: 310118,
		topid: 3101,
		name: "青浦区"
	}, {id: 310119, topid: 3101, name: "南汇区"}, {id: 310120, topid: 3101, name: "奉贤区"}, {
		id: 310230,
		topid: 3102,
		name: "崇明县"
	}, {id: 320101, topid: 3201, name: "市辖区"}, {id: 320102, topid: 3201, name: "玄武区"}, {
		id: 320103,
		topid: 3201,
		name: "白下区"
	}, {id: 320104, topid: 3201, name: "秦淮区"}, {id: 320105, topid: 3201, name: "建邺区"}, {
		id: 320106,
		topid: 3201,
		name: "鼓楼区"
	}, {id: 320107, topid: 3201, name: "下关区"}, {id: 320111, topid: 3201, name: "浦口区"}, {
		id: 320113,
		topid: 3201,
		name: "栖霞区"
	}, {id: 320114, topid: 3201, name: "雨花台区"}, {id: 320115, topid: 3201, name: "江宁区"}, {
		id: 320116,
		topid: 3201,
		name: "六合区"
	}, {id: 320124, topid: 3201, name: "溧水县"}, {id: 320125, topid: 3201, name: "高淳县"}, {
		id: 320201,
		topid: 3202,
		name: "市辖区"
	}, {id: 320202, topid: 3202, name: "崇安区"}, {id: 320203, topid: 3202, name: "南长区"}, {
		id: 320204,
		topid: 3202,
		name: "北塘区"
	}, {id: 320205, topid: 3202, name: "锡山区"}, {id: 320206, topid: 3202, name: "惠山区"}, {
		id: 320211,
		topid: 3202,
		name: "滨湖区"
	}, {id: 320281, topid: 3202, name: "江阴市"}, {id: 320282, topid: 3202, name: "宜兴市"}, {
		id: 320301,
		topid: 3203,
		name: "市辖区"
	}, {id: 320302, topid: 3203, name: "鼓楼区"}, {id: 320303, topid: 3203, name: "云龙区"}, {
		id: 320304,
		topid: 3203,
		name: "九里区"
	}, {id: 320305, topid: 3203, name: "贾汪区"}, {id: 320311, topid: 3203, name: "泉山区"}, {
		id: 320321,
		topid: 3203,
		name: "丰县"
	}, {id: 320322, topid: 3203, name: "沛县"}, {id: 320323, topid: 3203, name: "铜山县"}, {
		id: 320324,
		topid: 3203,
		name: "睢宁县"
	}, {id: 320381, topid: 3203, name: "新沂市"}, {id: 320382, topid: 3203, name: "邳州市"}, {
		id: 320401,
		topid: 3204,
		name: "市辖区"
	}, {id: 320402, topid: 3204, name: "天宁区"}, {id: 320404, topid: 3204, name: "钟楼区"}, {
		id: 320405,
		topid: 3204,
		name: "戚墅堰区"
	}, {id: 320411, topid: 3204, name: "新北区"}, {id: 320412, topid: 3204, name: "武进区"}, {
		id: 320481,
		topid: 3204,
		name: "溧阳市"
	}, {id: 320482, topid: 3204, name: "金坛市"}, {id: 320501, topid: 3205, name: "市辖区"}, {
		id: 320502,
		topid: 3205,
		name: "沧浪区"
	}, {id: 320503, topid: 3205, name: "平江区"}, {id: 320504, topid: 3205, name: "金阊区"}, {
		id: 320505,
		topid: 3205,
		name: "虎丘区"
	}, {id: 320506, topid: 3205, name: "吴中区"}, {id: 320507, topid: 3205, name: "相城区"}, {
		id: 320581,
		topid: 3205,
		name: "常熟市"
	}, {id: 320582, topid: 3205, name: "张家港市"}, {id: 320583, topid: 3205, name: "昆山市"}, {
		id: 320584,
		topid: 3205,
		name: "吴江市"
	}, {id: 320585, topid: 3205, name: "太仓市"}, {id: 320601, topid: 3206, name: "市辖区"}, {
		id: 320602,
		topid: 3206,
		name: "崇川区"
	}, {id: 320611, topid: 3206, name: "港闸区"}, {id: 320621, topid: 3206, name: "海安县"}, {
		id: 320623,
		topid: 3206,
		name: "如东县"
	}, {id: 320681, topid: 3206, name: "启东市"}, {id: 320682, topid: 3206, name: "如皋市"}, {
		id: 320683,
		topid: 3206,
		name: "通州市"
	}, {id: 320684, topid: 3206, name: "海门市"}, {id: 320701, topid: 3207, name: "市辖区"}, {
		id: 320703,
		topid: 3207,
		name: "连云区"
	}, {id: 320705, topid: 3207, name: "新浦区"}, {id: 320706, topid: 3207, name: "海州区"}, {
		id: 320721,
		topid: 3207,
		name: "赣榆县"
	}, {id: 320722, topid: 3207, name: "东海县"}, {id: 320723, topid: 3207, name: "灌云县"}, {
		id: 320724,
		topid: 3207,
		name: "灌南县"
	}, {id: 320801, topid: 3208, name: "市辖区"}, {id: 320802, topid: 3208, name: "清河区"}, {
		id: 320803,
		topid: 3208,
		name: "楚州区"
	}, {id: 320804, topid: 3208, name: "淮阴区"}, {id: 320811, topid: 3208, name: "清浦区"}, {
		id: 320826,
		topid: 3208,
		name: "涟水县"
	}, {id: 320829, topid: 3208, name: "洪泽县"}, {id: 320830, topid: 3208, name: "盱眙县"}, {
		id: 320831,
		topid: 3208,
		name: "金湖县"
	}, {id: 320901, topid: 3209, name: "市辖区"}, {id: 320902, topid: 3209, name: "亭湖区"}, {
		id: 320903,
		topid: 3209,
		name: "盐都区"
	}, {id: 320921, topid: 3209, name: "响水县"}, {id: 320922, topid: 3209, name: "滨海县"}, {
		id: 320923,
		topid: 3209,
		name: "阜宁县"
	}, {id: 320924, topid: 3209, name: "射阳县"}, {id: 320925, topid: 3209, name: "建湖县"}, {
		id: 320981,
		topid: 3209,
		name: "东台市"
	}, {id: 320982, topid: 3209, name: "大丰市"}, {id: 321001, topid: 3210, name: "市辖区"}, {
		id: 321002,
		topid: 3210,
		name: "广陵区"
	}, {id: 321003, topid: 3210, name: "邗江区"}, {id: 321011, topid: 3210, name: "维扬区"}, {
		id: 321023,
		topid: 3210,
		name: "宝应县"
	}, {id: 321081, topid: 3210, name: "仪征市"}, {id: 321084, topid: 3210, name: "高邮市"}, {
		id: 321088,
		topid: 3210,
		name: "江都市"
	}, {id: 321101, topid: 3211, name: "市辖区"}, {id: 321102, topid: 3211, name: "京口区"}, {
		id: 321111,
		topid: 3211,
		name: "润州区"
	}, {id: 321112, topid: 3211, name: "丹徒区"}, {id: 321181, topid: 3211, name: "丹阳市"}, {
		id: 321182,
		topid: 3211,
		name: "扬中市"
	}, {id: 321183, topid: 3211, name: "句容市"}, {id: 321201, topid: 3212, name: "市辖区"}, {
		id: 321202,
		topid: 3212,
		name: "海陵区"
	}, {id: 321203, topid: 3212, name: "高港区"}, {id: 321281, topid: 3212, name: "兴化市"}, {
		id: 321282,
		topid: 3212,
		name: "靖江市"
	}, {id: 321283, topid: 3212, name: "泰兴市"}, {id: 321284, topid: 3212, name: "姜堰市"}, {
		id: 321301,
		topid: 3213,
		name: "市辖区"
	}, {id: 321302, topid: 3213, name: "宿城区"}, {id: 321311, topid: 3213, name: "宿豫区"}, {
		id: 321322,
		topid: 3213,
		name: "沭阳县"
	}, {id: 321323, topid: 3213, name: "泗阳县"}, {id: 321324, topid: 3213, name: "泗洪县"}, {
		id: 330101,
		topid: 3301,
		name: "市辖区"
	}, {id: 330102, topid: 3301, name: "上城区"}, {id: 330103, topid: 3301, name: "下城区"}, {
		id: 330104,
		topid: 3301,
		name: "江干区"
	}, {id: 330105, topid: 3301, name: "拱墅区"}, {id: 330106, topid: 3301, name: "西湖区"}, {
		id: 330108,
		topid: 3301,
		name: "滨江区"
	}, {id: 330109, topid: 3301, name: "萧山区"}, {id: 330110, topid: 3301, name: "余杭区"}, {
		id: 330122,
		topid: 3301,
		name: "桐庐县"
	}, {id: 330127, topid: 3301, name: "淳安县"}, {id: 330182, topid: 3301, name: "建德市"}, {
		id: 330183,
		topid: 3301,
		name: "富阳市"
	}, {id: 330185, topid: 3301, name: "临安市"}, {id: 330201, topid: 3302, name: "市辖区"}, {
		id: 330203,
		topid: 3302,
		name: "海曙区"
	}, {id: 330204, topid: 3302, name: "江东区"}, {id: 330205, topid: 3302, name: "江北区"}, {
		id: 330206,
		topid: 3302,
		name: "北仑区"
	}, {id: 330211, topid: 3302, name: "镇海区"}, {id: 330212, topid: 3302, name: "鄞州区"}, {
		id: 330225,
		topid: 3302,
		name: "象山县"
	}, {id: 330226, topid: 3302, name: "宁海县"}, {id: 330281, topid: 3302, name: "余姚市"}, {
		id: 330282,
		topid: 3302,
		name: "慈溪市"
	}, {id: 330283, topid: 3302, name: "奉化市"}, {id: 330301, topid: 3303, name: "市辖区"}, {
		id: 330302,
		topid: 3303,
		name: "鹿城区"
	}, {id: 330303, topid: 3303, name: "龙湾区"}, {id: 330304, topid: 3303, name: "瓯海区"}, {
		id: 330322,
		topid: 3303,
		name: "洞头县"
	}, {id: 330324, topid: 3303, name: "永嘉县"}, {id: 330326, topid: 3303, name: "平阳县"}, {
		id: 330327,
		topid: 3303,
		name: "苍南县"
	}, {id: 330328, topid: 3303, name: "文成县"}, {id: 330329, topid: 3303, name: "泰顺县"}, {
		id: 330381,
		topid: 3303,
		name: "瑞安市"
	}, {id: 330382, topid: 3303, name: "乐清市"}, {id: 330401, topid: 3304, name: "市辖区"}, {
		id: 330402,
		topid: 3304,
		name: "秀城区"
	}, {id: 330411, topid: 3304, name: "秀洲区"}, {id: 330421, topid: 3304, name: "嘉善县"}, {
		id: 330424,
		topid: 3304,
		name: "海盐县"
	}, {id: 330481, topid: 3304, name: "海宁市"}, {id: 330482, topid: 3304, name: "平湖市"}, {
		id: 330483,
		topid: 3304,
		name: "桐乡市"
	}, {id: 330501, topid: 3305, name: "市辖区"}, {id: 330502, topid: 3305, name: "吴兴区"}, {
		id: 330503,
		topid: 3305,
		name: "南浔区"
	}, {id: 330521, topid: 3305, name: "德清县"}, {id: 330522, topid: 3305, name: "长兴县"}, {
		id: 330523,
		topid: 3305,
		name: "安吉县"
	}, {id: 330601, topid: 3306, name: "市辖区"}, {id: 330602, topid: 3306, name: "越城区"}, {
		id: 330621,
		topid: 3306,
		name: "绍兴县"
	}, {id: 330624, topid: 3306, name: "新昌县"}, {id: 330681, topid: 3306, name: "诸暨市"}, {
		id: 330682,
		topid: 3306,
		name: "上虞市"
	}, {id: 330683, topid: 3306, name: "嵊州市"}, {id: 330701, topid: 3307, name: "市辖区"}, {
		id: 330702,
		topid: 3307,
		name: "婺城区"
	}, {id: 330703, topid: 3307, name: "金东区"}, {id: 330723, topid: 3307, name: "武义县"}, {
		id: 330726,
		topid: 3307,
		name: "浦江县"
	}, {id: 330727, topid: 3307, name: "磐安县"}, {id: 330781, topid: 3307, name: "兰溪市"}, {
		id: 330782,
		topid: 3307,
		name: "义乌市"
	}, {id: 330783, topid: 3307, name: "东阳市"}, {id: 330784, topid: 3307, name: "永康市"}, {
		id: 330801,
		topid: 3308,
		name: "市辖区"
	}, {id: 330802, topid: 3308, name: "柯城区"}, {id: 330803, topid: 3308, name: "衢江区"}, {
		id: 330822,
		topid: 3308,
		name: "常山县"
	}, {id: 330824, topid: 3308, name: "开化县"}, {id: 330825, topid: 3308, name: "龙游县"}, {
		id: 330881,
		topid: 3308,
		name: "江山市"
	}, {id: 330901, topid: 3309, name: "市辖区"}, {id: 330902, topid: 3309, name: "定海区"}, {
		id: 330903,
		topid: 3309,
		name: "普陀区"
	}, {id: 330921, topid: 3309, name: "岱山县"}, {id: 330922, topid: 3309, name: "嵊泗县"}, {
		id: 331001,
		topid: 3310,
		name: "市辖区"
	}, {id: 331002, topid: 3310, name: "椒江区"}, {id: 331003, topid: 3310, name: "黄岩区"}, {
		id: 331004,
		topid: 3310,
		name: "路桥区"
	}, {id: 331021, topid: 3310, name: "玉环县"}, {id: 331022, topid: 3310, name: "三门县"}, {
		id: 331023,
		topid: 3310,
		name: "天台县"
	}, {id: 331024, topid: 3310, name: "仙居县"}, {id: 331081, topid: 3310, name: "温岭市"}, {
		id: 331082,
		topid: 3310,
		name: "临海市"
	}, {id: 331101, topid: 3311, name: "市辖区"}, {id: 331102, topid: 3311, name: "莲都区"}, {
		id: 331121,
		topid: 3311,
		name: "青田县"
	}, {id: 331122, topid: 3311, name: "缙云县"}, {id: 331123, topid: 3311, name: "遂昌县"}, {
		id: 331124,
		topid: 3311,
		name: "松阳县"
	}, {id: 331125, topid: 3311, name: "云和县"}, {id: 331126, topid: 3311, name: "庆元县"}, {
		id: 331127,
		topid: 3311,
		name: "景宁畲族自治县"
	}, {id: 331181, topid: 3311, name: "龙泉市"}, {id: 340101, topid: 3401, name: "市辖区"}, {
		id: 340102,
		topid: 3401,
		name: "瑶海区"
	}, {id: 340103, topid: 3401, name: "庐阳区"}, {id: 340104, topid: 3401, name: "蜀山区"}, {
		id: 340111,
		topid: 3401,
		name: "包河区"
	}, {id: 340121, topid: 3401, name: "长丰县"}, {id: 340122, topid: 3401, name: "肥东县"}, {
		id: 340123,
		topid: 3401,
		name: "肥西县"
	}, {id: 340201, topid: 3402, name: "市辖区"}, {id: 340202, topid: 3402, name: "镜湖区"}, {
		id: 340203,
		topid: 3402,
		name: "弋江区"
	}, {id: 340207, topid: 3402, name: "鸠江区"}, {id: 340208, topid: 3402, name: "三山区"}, {
		id: 340221,
		topid: 3402,
		name: "芜湖县"
	}, {id: 340222, topid: 3402, name: "繁昌县"}, {id: 340223, topid: 3402, name: "南陵县"}, {
		id: 340301,
		topid: 3403,
		name: "市辖区"
	}, {id: 340302, topid: 3403, name: "龙子湖区"}, {id: 340303, topid: 3403, name: "蚌山区"}, {
		id: 340304,
		topid: 3403,
		name: "禹会区"
	}, {id: 340311, topid: 3403, name: "淮上区"}, {id: 340321, topid: 3403, name: "怀远县"}, {
		id: 340322,
		topid: 3403,
		name: "五河县"
	}, {id: 340323, topid: 3403, name: "固镇县"}, {id: 340401, topid: 3404, name: "市辖区"}, {
		id: 340402,
		topid: 3404,
		name: "大通区"
	}, {id: 340403, topid: 3404, name: "田家庵区"}, {id: 340404, topid: 3404, name: "谢家集区"}, {
		id: 340405,
		topid: 3404,
		name: "八公山区"
	}, {id: 340406, topid: 3404, name: "潘集区"}, {id: 340421, topid: 3404, name: "凤台县"}, {
		id: 340501,
		topid: 3405,
		name: "市辖区"
	}, {id: 340502, topid: 3405, name: "金家庄区"}, {id: 340503, topid: 3405, name: "花山区"}, {
		id: 340504,
		topid: 3405,
		name: "雨山区"
	}, {id: 340521, topid: 3405, name: "当涂县"}, {id: 340601, topid: 3406, name: "市辖区"}, {
		id: 340602,
		topid: 3406,
		name: "杜集区"
	}, {id: 340603, topid: 3406, name: "相山区"}, {id: 340604, topid: 3406, name: "烈山区"}, {
		id: 340621,
		topid: 3406,
		name: "濉溪县"
	}, {id: 340701, topid: 3407, name: "市辖区"}, {id: 340702, topid: 3407, name: "铜官山区"}, {
		id: 340703,
		topid: 3407,
		name: "狮子山区"
	}, {id: 340711, topid: 3407, name: "郊区"}, {id: 340721, topid: 3407, name: "铜陵县"}, {
		id: 340801,
		topid: 3408,
		name: "市辖区"
	}, {id: 340802, topid: 3408, name: "迎江区"}, {id: 340803, topid: 3408, name: "大观区"}, {
		id: 340811,
		topid: 3408,
		name: "宜秀区"
	}, {id: 340822, topid: 3408, name: "怀宁县"}, {id: 340823, topid: 3408, name: "枞阳县"}, {
		id: 340824,
		topid: 3408,
		name: "潜山县"
	}, {id: 340825, topid: 3408, name: "太湖县"}, {id: 340826, topid: 3408, name: "宿松县"}, {
		id: 340827,
		topid: 3408,
		name: "望江县"
	}, {id: 340828, topid: 3408, name: "岳西县"}, {id: 340881, topid: 3408, name: "桐城市"}, {
		id: 341001,
		topid: 3410,
		name: "市辖区"
	}, {id: 341002, topid: 3410, name: "屯溪区"}, {id: 341003, topid: 3410, name: "黄山区"}, {
		id: 341004,
		topid: 3410,
		name: "徽州区"
	}, {id: 341021, topid: 3410, name: "歙县"}, {id: 341022, topid: 3410, name: "休宁县"}, {
		id: 341023,
		topid: 3410,
		name: "黟县"
	}, {id: 341024, topid: 3410, name: "祁门县"}, {id: 341101, topid: 3411, name: "市辖区"}, {
		id: 341102,
		topid: 3411,
		name: "琅琊区"
	}, {id: 341103, topid: 3411, name: "南谯区"}, {id: 341122, topid: 3411, name: "来安县"}, {
		id: 341124,
		topid: 3411,
		name: "全椒县"
	}, {id: 341125, topid: 3411, name: "定远县"}, {id: 341126, topid: 3411, name: "凤阳县"}, {
		id: 341181,
		topid: 3411,
		name: "天长市"
	}, {id: 341182, topid: 3411, name: "明光市"}, {id: 341201, topid: 3412, name: "市辖区"}, {
		id: 341202,
		topid: 3412,
		name: "颍州区"
	}, {id: 341203, topid: 3412, name: "颍东区"}, {id: 341204, topid: 3412, name: "颍泉区"}, {
		id: 341221,
		topid: 3412,
		name: "临泉县"
	}, {id: 341222, topid: 3412, name: "太和县"}, {id: 341225, topid: 3412, name: "阜南县"}, {
		id: 341226,
		topid: 3412,
		name: "颍上县"
	}, {id: 341282, topid: 3412, name: "界首市"}, {id: 341301, topid: 3413, name: "市辖区"}, {
		id: 341302,
		topid: 3413,
		name: "埇桥区"
	}, {id: 341321, topid: 3413, name: "砀山县"}, {id: 341322, topid: 3413, name: "萧县"}, {
		id: 341323,
		topid: 3413,
		name: "灵璧县"
	}, {id: 341324, topid: 3413, name: "泗县"}, {id: 341401, topid: 3414, name: "市辖区"}, {
		id: 341402,
		topid: 3414,
		name: "居巢区"
	}, {id: 341421, topid: 3414, name: "庐江县"}, {id: 341422, topid: 3414, name: "无为县"}, {
		id: 341423,
		topid: 3414,
		name: "含山县"
	}, {id: 341424, topid: 3414, name: "和县"}, {id: 341501, topid: 3415, name: "市辖区"}, {
		id: 341502,
		topid: 3415,
		name: "金安区"
	}, {id: 341503, topid: 3415, name: "裕安区"}, {id: 341521, topid: 3415, name: "寿县"}, {
		id: 341522,
		topid: 3415,
		name: "霍邱县"
	}, {id: 341523, topid: 3415, name: "舒城县"}, {id: 341524, topid: 3415, name: "金寨县"}, {
		id: 341525,
		topid: 3415,
		name: "霍山县"
	}, {id: 341601, topid: 3416, name: "市辖区"}, {id: 341602, topid: 3416, name: "谯城区"}, {
		id: 341621,
		topid: 3416,
		name: "涡阳县"
	}, {id: 341622, topid: 3416, name: "蒙城县"}, {id: 341623, topid: 3416, name: "利辛县"}, {
		id: 341701,
		topid: 3417,
		name: "市辖区"
	}, {id: 341702, topid: 3417, name: "贵池区"}, {id: 341721, topid: 3417, name: "东至县"}, {
		id: 341722,
		topid: 3417,
		name: "石台县"
	}, {id: 341723, topid: 3417, name: "青阳县"}, {id: 341801, topid: 3418, name: "市辖区"}, {
		id: 341802,
		topid: 3418,
		name: "宣州区"
	}, {id: 341821, topid: 3418, name: "郎溪县"}, {id: 341822, topid: 3418, name: "广德县"}, {
		id: 341823,
		topid: 3418,
		name: "泾县"
	}, {id: 341824, topid: 3418, name: "绩溪县"}, {id: 341825, topid: 3418, name: "旌德县"}, {
		id: 341881,
		topid: 3418,
		name: "宁国市"
	}, {id: 350101, topid: 3501, name: "市辖区"}, {id: 350102, topid: 3501, name: "鼓楼区"}, {
		id: 350103,
		topid: 3501,
		name: "台江区"
	}, {id: 350104, topid: 3501, name: "仓山区"}, {id: 350105, topid: 3501, name: "马尾区"}, {
		id: 350111,
		topid: 3501,
		name: "晋安区"
	}, {id: 350121, topid: 3501, name: "闽侯县"}, {id: 350122, topid: 3501, name: "连江县"}, {
		id: 350123,
		topid: 3501,
		name: "罗源县"
	}, {id: 350124, topid: 3501, name: "闽清县"}, {id: 350125, topid: 3501, name: "永泰县"}, {
		id: 350128,
		topid: 3501,
		name: "平潭县"
	}, {id: 350181, topid: 3501, name: "福清市"}, {id: 350182, topid: 3501, name: "长乐市"}, {
		id: 350201,
		topid: 3502,
		name: "市辖区"
	}, {id: 350203, topid: 3502, name: "思明区"}, {id: 350205, topid: 3502, name: "海沧区"}, {
		id: 350206,
		topid: 3502,
		name: "湖里区"
	}, {id: 350211, topid: 3502, name: "集美区"}, {id: 350212, topid: 3502, name: "同安区"}, {
		id: 350213,
		topid: 3502,
		name: "翔安区"
	}, {id: 350301, topid: 3503, name: "市辖区"}, {id: 350302, topid: 3503, name: "城厢区"}, {
		id: 350303,
		topid: 3503,
		name: "涵江区"
	}, {id: 350304, topid: 3503, name: "荔城区"}, {id: 350305, topid: 3503, name: "秀屿区"}, {
		id: 350322,
		topid: 3503,
		name: "仙游县"
	}, {id: 350401, topid: 3504, name: "市辖区"}, {id: 350402, topid: 3504, name: "梅列区"}, {
		id: 350403,
		topid: 3504,
		name: "三元区"
	}, {id: 350421, topid: 3504, name: "明溪县"}, {id: 350423, topid: 3504, name: "清流县"}, {
		id: 350424,
		topid: 3504,
		name: "宁化县"
	}, {id: 350425, topid: 3504, name: "大田县"}, {id: 350426, topid: 3504, name: "尤溪县"}, {
		id: 350427,
		topid: 3504,
		name: "沙县"
	}, {id: 350428, topid: 3504, name: "将乐县"}, {id: 350429, topid: 3504, name: "泰宁县"}, {
		id: 350430,
		topid: 3504,
		name: "建宁县"
	}, {id: 350481, topid: 3504, name: "永安市"}, {id: 350501, topid: 3505, name: "市辖区"}, {
		id: 350502,
		topid: 3505,
		name: "鲤城区"
	}, {id: 350503, topid: 3505, name: "丰泽区"}, {id: 350504, topid: 3505, name: "洛江区"}, {
		id: 350505,
		topid: 3505,
		name: "泉港区"
	}, {id: 350521, topid: 3505, name: "惠安县"}, {id: 350524, topid: 3505, name: "安溪县"}, {
		id: 350525,
		topid: 3505,
		name: "永春县"
	}, {id: 350526, topid: 3505, name: "德化县"}, {id: 350527, topid: 3505, name: "金门县"}, {
		id: 350581,
		topid: 3505,
		name: "石狮市"
	}, {id: 350582, topid: 3505, name: "晋江市"}, {id: 350583, topid: 3505, name: "南安市"}, {
		id: 350601,
		topid: 3506,
		name: "市辖区"
	}, {id: 350602, topid: 3506, name: "芗城区"}, {id: 350603, topid: 3506, name: "龙文区"}, {
		id: 350622,
		topid: 3506,
		name: "云霄县"
	}, {id: 350623, topid: 3506, name: "漳浦县"}, {id: 350624, topid: 3506, name: "诏安县"}, {
		id: 350625,
		topid: 3506,
		name: "长泰县"
	}, {id: 350626, topid: 3506, name: "东山县"}, {id: 350627, topid: 3506, name: "南靖县"}, {
		id: 350628,
		topid: 3506,
		name: "平和县"
	}, {id: 350629, topid: 3506, name: "华安县"}, {id: 350681, topid: 3506, name: "龙海市"}, {
		id: 350701,
		topid: 3507,
		name: "市辖区"
	}, {id: 350702, topid: 3507, name: "延平区"}, {id: 350721, topid: 3507, name: "顺昌县"}, {
		id: 350722,
		topid: 3507,
		name: "浦城县"
	}, {id: 350723, topid: 3507, name: "光泽县"}, {id: 350724, topid: 3507, name: "松溪县"}, {
		id: 350725,
		topid: 3507,
		name: "政和县"
	}, {id: 350781, topid: 3507, name: "邵武市"}, {id: 350782, topid: 3507, name: "武夷山市"}, {
		id: 350783,
		topid: 3507,
		name: "建瓯市"
	}, {id: 350784, topid: 3507, name: "建阳市"}, {id: 350801, topid: 3508, name: "市辖区"}, {
		id: 350802,
		topid: 3508,
		name: "新罗区"
	}, {id: 350821, topid: 3508, name: "长汀县"}, {id: 350822, topid: 3508, name: "永定县"}, {
		id: 350823,
		topid: 3508,
		name: "上杭县"
	}, {id: 350824, topid: 3508, name: "武平县"}, {id: 350825, topid: 3508, name: "连城县"}, {
		id: 350881,
		topid: 3508,
		name: "漳平市"
	}, {id: 350901, topid: 3509, name: "市辖区"}, {id: 350902, topid: 3509, name: "蕉城区"}, {
		id: 350921,
		topid: 3509,
		name: "霞浦县"
	}, {id: 350922, topid: 3509, name: "古田县"}, {id: 350923, topid: 3509, name: "屏南县"}, {
		id: 350924,
		topid: 3509,
		name: "寿宁县"
	}, {id: 350925, topid: 3509, name: "周宁县"}, {id: 350926, topid: 3509, name: "柘荣县"}, {
		id: 350981,
		topid: 3509,
		name: "福安市"
	}, {id: 350982, topid: 3509, name: "福鼎市"}, {id: 360101, topid: 3601, name: "市辖区"}, {
		id: 360102,
		topid: 3601,
		name: "东湖区"
	}, {id: 360103, topid: 3601, name: "西湖区"}, {id: 360104, topid: 3601, name: "青云谱区"}, {
		id: 360105,
		topid: 3601,
		name: "湾里区"
	}, {id: 360111, topid: 3601, name: "青山湖区"}, {id: 360121, topid: 3601, name: "南昌县"}, {
		id: 360122,
		topid: 3601,
		name: "新建县"
	}, {id: 360123, topid: 3601, name: "安义县"}, {id: 360124, topid: 3601, name: "进贤县"}, {
		id: 360201,
		topid: 3602,
		name: "市辖区"
	}, {id: 360202, topid: 3602, name: "昌江区"}, {id: 360203, topid: 3602, name: "珠山区"}, {
		id: 360222,
		topid: 3602,
		name: "浮梁县"
	}, {id: 360281, topid: 3602, name: "乐平市"}, {id: 360301, topid: 3603, name: "市辖区"}, {
		id: 360302,
		topid: 3603,
		name: "安源区"
	}, {id: 360313, topid: 3603, name: "湘东区"}, {id: 360321, topid: 3603, name: "莲花县"}, {
		id: 360322,
		topid: 3603,
		name: "上栗县"
	}, {id: 360323, topid: 3603, name: "芦溪县"}, {id: 360401, topid: 3604, name: "市辖区"}, {
		id: 360402,
		topid: 3604,
		name: "庐山区"
	}, {id: 360403, topid: 3604, name: "浔阳区"}, {id: 360421, topid: 3604, name: "九江县"}, {
		id: 360423,
		topid: 3604,
		name: "武宁县"
	}, {id: 360424, topid: 3604, name: "修水县"}, {id: 360425, topid: 3604, name: "永修县"}, {
		id: 360426,
		topid: 3604,
		name: "德安县"
	}, {id: 360427, topid: 3604, name: "星子县"}, {id: 360428, topid: 3604, name: "都昌县"}, {
		id: 360429,
		topid: 3604,
		name: "湖口县"
	}, {id: 360430, topid: 3604, name: "彭泽县"}, {id: 360481, topid: 3604, name: "瑞昌市"}, {
		id: 360501,
		topid: 3605,
		name: "市辖区"
	}, {id: 360502, topid: 3605, name: "渝水区"}, {id: 360521, topid: 3605, name: "分宜县"}, {
		id: 360601,
		topid: 3606,
		name: "市辖区"
	}, {id: 360602, topid: 3606, name: "月湖区"}, {id: 360622, topid: 3606, name: "余江县"}, {
		id: 360681,
		topid: 3606,
		name: "贵溪市"
	}, {id: 360701, topid: 3607, name: "市辖区"}, {id: 360702, topid: 3607, name: "章贡区"}, {
		id: 360721,
		topid: 3607,
		name: "赣县"
	}, {id: 360722, topid: 3607, name: "信丰县"}, {id: 360723, topid: 3607, name: "大余县"}, {
		id: 360724,
		topid: 3607,
		name: "上犹县"
	}, {id: 360725, topid: 3607, name: "崇义县"}, {id: 360726, topid: 3607, name: "安远县"}, {
		id: 360727,
		topid: 3607,
		name: "龙南县"
	}, {id: 360728, topid: 3607, name: "定南县"}, {id: 360729, topid: 3607, name: "全南县"}, {
		id: 360730,
		topid: 3607,
		name: "宁都县"
	}, {id: 360731, topid: 3607, name: "于都县"}, {id: 360732, topid: 3607, name: "兴国县"}, {
		id: 360733,
		topid: 3607,
		name: "会昌县"
	}, {id: 360734, topid: 3607, name: "寻乌县"}, {id: 360735, topid: 3607, name: "石城县"}, {
		id: 360781,
		topid: 3607,
		name: "瑞金市"
	}, {id: 360782, topid: 3607, name: "南康市"}, {id: 360801, topid: 3608, name: "市辖区"}, {
		id: 360802,
		topid: 3608,
		name: "吉州区"
	}, {id: 360803, topid: 3608, name: "青原区"}, {id: 360821, topid: 3608, name: "吉安县"}, {
		id: 360822,
		topid: 3608,
		name: "吉水县"
	}, {id: 360823, topid: 3608, name: "峡江县"}, {id: 360824, topid: 3608, name: "新干县"}, {
		id: 360825,
		topid: 3608,
		name: "永丰县"
	}, {id: 360826, topid: 3608, name: "泰和县"}, {id: 360827, topid: 3608, name: "遂川县"}, {
		id: 360828,
		topid: 3608,
		name: "万安县"
	}, {id: 360829, topid: 3608, name: "安福县"}, {id: 360830, topid: 3608, name: "永新县"}, {
		id: 360881,
		topid: 3608,
		name: "井冈山市"
	}, {id: 360901, topid: 3609, name: "市辖区"}, {id: 360902, topid: 3609, name: "袁州区"}, {
		id: 360921,
		topid: 3609,
		name: "奉新县"
	}, {id: 360922, topid: 3609, name: "万载县"}, {id: 360923, topid: 3609, name: "上高县"}, {
		id: 360924,
		topid: 3609,
		name: "宜丰县"
	}, {id: 360925, topid: 3609, name: "靖安县"}, {id: 360926, topid: 3609, name: "铜鼓县"}, {
		id: 360981,
		topid: 3609,
		name: "丰城市"
	}, {id: 360982, topid: 3609, name: "樟树市"}, {id: 360983, topid: 3609, name: "高安市"}, {
		id: 361001,
		topid: 3610,
		name: "市辖区"
	}, {id: 361002, topid: 3610, name: "临川区"}, {id: 361021, topid: 3610, name: "南城县"}, {
		id: 361022,
		topid: 3610,
		name: "黎川县"
	}, {id: 361023, topid: 3610, name: "南丰县"}, {id: 361024, topid: 3610, name: "崇仁县"}, {
		id: 361025,
		topid: 3610,
		name: "乐安县"
	}, {id: 361026, topid: 3610, name: "宜黄县"}, {id: 361027, topid: 3610, name: "金溪县"}, {
		id: 361028,
		topid: 3610,
		name: "资溪县"
	}, {id: 361029, topid: 3610, name: "东乡县"}, {id: 361030, topid: 3610, name: "广昌县"}, {
		id: 361101,
		topid: 3611,
		name: "市辖区"
	}, {id: 361102, topid: 3611, name: "信州区"}, {id: 361121, topid: 3611, name: "上饶县"}, {
		id: 361122,
		topid: 3611,
		name: "广丰县"
	}, {id: 361123, topid: 3611, name: "玉山县"}, {id: 361124, topid: 3611, name: "铅山县"}, {
		id: 361125,
		topid: 3611,
		name: "横峰县"
	}, {id: 361126, topid: 3611, name: "弋阳县"}, {id: 361127, topid: 3611, name: "余干县"}, {
		id: 361128,
		topid: 3611,
		name: "鄱阳县"
	}, {id: 361129, topid: 3611, name: "万年县"}, {id: 361130, topid: 3611, name: "婺源县"}, {
		id: 361181,
		topid: 3611,
		name: "德兴市"
	}, {id: 370101, topid: 3701, name: "市辖区"}, {id: 370102, topid: 3701, name: "历下区"}, {
		id: 370103,
		topid: 3701,
		name: "市中区"
	}, {id: 370104, topid: 3701, name: "槐荫区"}, {id: 370105, topid: 3701, name: "天桥区"}, {
		id: 370112,
		topid: 3701,
		name: "历城区"
	}, {id: 370113, topid: 3701, name: "长清区"}, {id: 370124, topid: 3701, name: "平阴县"}, {
		id: 370125,
		topid: 3701,
		name: "济阳县"
	}, {id: 370126, topid: 3701, name: "商河县"}, {id: 370181, topid: 3701, name: "章丘市"}, {
		id: 370201,
		topid: 3702,
		name: "市辖区"
	}, {id: 370202, topid: 3702, name: "市南区"}, {id: 370203, topid: 3702, name: "市北区"}, {
		id: 370205,
		topid: 3702,
		name: "四方区"
	}, {id: 370211, topid: 3702, name: "黄岛区"}, {id: 370212, topid: 3702, name: "崂山区"}, {
		id: 370213,
		topid: 3702,
		name: "李沧区"
	}, {id: 370214, topid: 3702, name: "城阳区"}, {id: 370281, topid: 3702, name: "胶州市"}, {
		id: 370282,
		topid: 3702,
		name: "即墨市"
	}, {id: 370283, topid: 3702, name: "平度市"}, {id: 370284, topid: 3702, name: "胶南市"}, {
		id: 370285,
		topid: 3702,
		name: "莱西市"
	}, {id: 370301, topid: 3703, name: "市辖区"}, {id: 370302, topid: 3703, name: "淄川区"}, {
		id: 370303,
		topid: 3703,
		name: "张店区"
	}, {id: 370304, topid: 3703, name: "博山区"}, {id: 370305, topid: 3703, name: "临淄区"}, {
		id: 370306,
		topid: 3703,
		name: "周村区"
	}, {id: 370321, topid: 3703, name: "桓台县"}, {id: 370322, topid: 3703, name: "高青县"}, {
		id: 370323,
		topid: 3703,
		name: "沂源县"
	}, {id: 370401, topid: 3704, name: "市辖区"}, {id: 370402, topid: 3704, name: "市中区"}, {
		id: 370403,
		topid: 3704,
		name: "薛城区"
	}, {id: 370404, topid: 3704, name: "峄城区"}, {id: 370405, topid: 3704, name: "台儿庄区"}, {
		id: 370406,
		topid: 3704,
		name: "山亭区"
	}, {id: 370481, topid: 3704, name: "滕州市"}, {id: 370501, topid: 3705, name: "市辖区"}, {
		id: 370502,
		topid: 3705,
		name: "东营区"
	}, {id: 370503, topid: 3705, name: "河口区"}, {id: 370521, topid: 3705, name: "垦利县"}, {
		id: 370522,
		topid: 3705,
		name: "利津县"
	}, {id: 370523, topid: 3705, name: "广饶县"}, {id: 370601, topid: 3706, name: "市辖区"}, {
		id: 370602,
		topid: 3706,
		name: "芝罘区"
	}, {id: 370611, topid: 3706, name: "福山区"}, {id: 370612, topid: 3706, name: "牟平区"}, {
		id: 370613,
		topid: 3706,
		name: "莱山区"
	}, {id: 370634, topid: 3706, name: "长岛县"}, {id: 370681, topid: 3706, name: "龙口市"}, {
		id: 370682,
		topid: 3706,
		name: "莱阳市"
	}, {id: 370683, topid: 3706, name: "莱州市"}, {id: 370684, topid: 3706, name: "蓬莱市"}, {
		id: 370685,
		topid: 3706,
		name: "招远市"
	}, {id: 370686, topid: 3706, name: "栖霞市"}, {id: 370687, topid: 3706, name: "海阳市"}, {
		id: 370701,
		topid: 3707,
		name: "市辖区"
	}, {id: 370702, topid: 3707, name: "潍城区"}, {id: 370703, topid: 3707, name: "寒亭区"}, {
		id: 370704,
		topid: 3707,
		name: "坊子区"
	}, {id: 370705, topid: 3707, name: "奎文区"}, {id: 370724, topid: 3707, name: "临朐县"}, {
		id: 370725,
		topid: 3707,
		name: "昌乐县"
	}, {id: 370781, topid: 3707, name: "青州市"}, {id: 370782, topid: 3707, name: "诸城市"}, {
		id: 370783,
		topid: 3707,
		name: "寿光市"
	}, {id: 370784, topid: 3707, name: "安丘市"}, {id: 370785, topid: 3707, name: "高密市"}, {
		id: 370786,
		topid: 3707,
		name: "昌邑市"
	}, {id: 370801, topid: 3708, name: "市辖区"}, {id: 370802, topid: 3708, name: "市中区"}, {
		id: 370811,
		topid: 3708,
		name: "任城区"
	}, {id: 370826, topid: 3708, name: "微山县"}, {id: 370827, topid: 3708, name: "鱼台县"}, {
		id: 370828,
		topid: 3708,
		name: "金乡县"
	}, {id: 370829, topid: 3708, name: "嘉祥县"}, {id: 370830, topid: 3708, name: "汶上县"}, {
		id: 370831,
		topid: 3708,
		name: "泗水县"
	}, {id: 370832, topid: 3708, name: "梁山县"}, {id: 370881, topid: 3708, name: "曲阜市"}, {
		id: 370882,
		topid: 3708,
		name: "兖州市"
	}, {id: 370883, topid: 3708, name: "邹城市"}, {id: 370901, topid: 3709, name: "市辖区"}, {
		id: 370902,
		topid: 3709,
		name: "泰山区"
	}, {id: 370903, topid: 3709, name: "岱岳区"}, {id: 370921, topid: 3709, name: "宁阳县"}, {
		id: 370923,
		topid: 3709,
		name: "东平县"
	}, {id: 370982, topid: 3709, name: "新泰市"}, {id: 370983, topid: 3709, name: "肥城市"}, {
		id: 371001,
		topid: 3710,
		name: "市辖区"
	}, {id: 371002, topid: 3710, name: "环翠区"}, {id: 371081, topid: 3710, name: "文登市"}, {
		id: 371082,
		topid: 3710,
		name: "荣成市"
	}, {id: 371083, topid: 3710, name: "乳山市"}, {id: 371101, topid: 3711, name: "市辖区"}, {
		id: 371102,
		topid: 3711,
		name: "东港区"
	}, {id: 371103, topid: 3711, name: "岚山区"}, {id: 371121, topid: 3711, name: "五莲县"}, {
		id: 371122,
		topid: 3711,
		name: "莒县"
	}, {id: 371201, topid: 3712, name: "市辖区"}, {id: 371202, topid: 3712, name: "莱城区"}, {
		id: 371203,
		topid: 3712,
		name: "钢城区"
	}, {id: 371301, topid: 3713, name: "市辖区"}, {id: 371302, topid: 3713, name: "兰山区"}, {
		id: 371311,
		topid: 3713,
		name: "罗庄区"
	}, {id: 371312, topid: 3713, name: "河东区"}, {id: 371321, topid: 3713, name: "沂南县"}, {
		id: 371322,
		topid: 3713,
		name: "郯城县"
	}, {id: 371323, topid: 3713, name: "沂水县"}, {id: 371324, topid: 3713, name: "苍山县"}, {
		id: 371325,
		topid: 3713,
		name: "费县"
	}, {id: 371326, topid: 3713, name: "平邑县"}, {id: 371327, topid: 3713, name: "莒南县"}, {
		id: 371328,
		topid: 3713,
		name: "蒙阴县"
	}, {id: 371329, topid: 3713, name: "临沭县"}, {id: 371401, topid: 3714, name: "市辖区"}, {
		id: 371402,
		topid: 3714,
		name: "德城区"
	}, {id: 371421, topid: 3714, name: "陵县"}, {id: 371422, topid: 3714, name: "宁津县"}, {
		id: 371423,
		topid: 3714,
		name: "庆云县"
	}, {id: 371424, topid: 3714, name: "临邑县"}, {id: 371425, topid: 3714, name: "齐河县"}, {
		id: 371426,
		topid: 3714,
		name: "平原县"
	}, {id: 371427, topid: 3714, name: "夏津县"}, {id: 371428, topid: 3714, name: "武城县"}, {
		id: 371481,
		topid: 3714,
		name: "乐陵市"
	}, {id: 371482, topid: 3714, name: "禹城市"}, {id: 371501, topid: 3715, name: "市辖区"}, {
		id: 371502,
		topid: 3715,
		name: "东昌府区"
	}, {id: 371521, topid: 3715, name: "阳谷县"}, {id: 371522, topid: 3715, name: "莘县"}, {
		id: 371523,
		topid: 3715,
		name: "茌平县"
	}, {id: 371524, topid: 3715, name: "东阿县"}, {id: 371525, topid: 3715, name: "冠县"}, {
		id: 371526,
		topid: 3715,
		name: "高唐县"
	}, {id: 371581, topid: 3715, name: "临清市"}, {id: 371601, topid: 3716, name: "市辖区"}, {
		id: 371602,
		topid: 3716,
		name: "滨城区"
	}, {id: 371621, topid: 3716, name: "惠民县"}, {id: 371622, topid: 3716, name: "阳信县"}, {
		id: 371623,
		topid: 3716,
		name: "无棣县"
	}, {id: 371624, topid: 3716, name: "沾化县"}, {id: 371625, topid: 3716, name: "博兴县"}, {
		id: 371626,
		topid: 3716,
		name: "邹平县"
	}, {id: 371701, topid: 3717, name: "市辖区"}, {id: 371702, topid: 3717, name: "牡丹区"}, {
		id: 371721,
		topid: 3717,
		name: "曹县"
	}, {id: 371722, topid: 3717, name: "单县"}, {id: 371723, topid: 3717, name: "成武县"}, {
		id: 371724,
		topid: 3717,
		name: "巨野县"
	}, {id: 371725, topid: 3717, name: "郓城县"}, {id: 371726, topid: 3717, name: "鄄城县"}, {
		id: 371727,
		topid: 3717,
		name: "定陶县"
	}, {id: 371728, topid: 3717, name: "东明县"}, {id: 410101, topid: 4101, name: "市辖区"}, {
		id: 410102,
		topid: 4101,
		name: "中原区"
	}, {id: 410103, topid: 4101, name: "二七区"}, {id: 410104, topid: 4101, name: "管城回族区"}, {
		id: 410105,
		topid: 4101,
		name: "金水区"
	}, {id: 410106, topid: 4101, name: "上街区"}, {id: 410108, topid: 4101, name: "惠济区"}, {
		id: 410122,
		topid: 4101,
		name: "中牟县"
	}, {id: 410181, topid: 4101, name: "巩义市"}, {id: 410182, topid: 4101, name: "荥阳市"}, {
		id: 410183,
		topid: 4101,
		name: "新密市"
	}, {id: 410184, topid: 4101, name: "新郑市"}, {id: 410185, topid: 4101, name: "登封市"}, {
		id: 410201,
		topid: 4102,
		name: "市辖区"
	}, {id: 410202, topid: 4102, name: "龙亭区"}, {id: 410203, topid: 4102, name: "顺河回族区"}, {
		id: 410204,
		topid: 4102,
		name: "鼓楼区"
	}, {id: 410205, topid: 4102, name: "禹王台区"}, {id: 410211, topid: 4102, name: "金明区"}, {
		id: 410221,
		topid: 4102,
		name: "杞县"
	}, {id: 410222, topid: 4102, name: "通许县"}, {id: 410223, topid: 4102, name: "尉氏县"}, {
		id: 410224,
		topid: 4102,
		name: "开封县"
	}, {id: 410225, topid: 4102, name: "兰考县"}, {id: 410301, topid: 4103, name: "市辖区"}, {
		id: 410302,
		topid: 4103,
		name: "老城区"
	}, {id: 410303, topid: 4103, name: "西工区"}, {id: 410304, topid: 4103, name: "廛河回族区"}, {
		id: 410305,
		topid: 4103,
		name: "涧西区"
	}, {id: 410306, topid: 4103, name: "吉利区"}, {id: 410307, topid: 4103, name: "洛龙区"}, {
		id: 410322,
		topid: 4103,
		name: "孟津县"
	}, {id: 410323, topid: 4103, name: "新安县"}, {id: 410324, topid: 4103, name: "栾川县"}, {
		id: 410325,
		topid: 4103,
		name: "嵩县"
	}, {id: 410326, topid: 4103, name: "汝阳县"}, {id: 410327, topid: 4103, name: "宜阳县"}, {
		id: 410328,
		topid: 4103,
		name: "洛宁县"
	}, {id: 410329, topid: 4103, name: "伊川县"}, {id: 410381, topid: 4103, name: "偃师市"}, {
		id: 410401,
		topid: 4104,
		name: "市辖区"
	}, {id: 410402, topid: 4104, name: "新华区"}, {id: 410403, topid: 4104, name: "卫东区"}, {
		id: 410404,
		topid: 4104,
		name: "石龙区"
	}, {id: 410411, topid: 4104, name: "湛河区"}, {id: 410421, topid: 4104, name: "宝丰县"}, {
		id: 410422,
		topid: 4104,
		name: "叶县"
	}, {id: 410423, topid: 4104, name: "鲁山县"}, {id: 410425, topid: 4104, name: "郏县"}, {
		id: 410481,
		topid: 4104,
		name: "舞钢市"
	}, {id: 410482, topid: 4104, name: "汝州市"}, {id: 410501, topid: 4105, name: "市辖区"}, {
		id: 410502,
		topid: 4105,
		name: "文峰区"
	}, {id: 410503, topid: 4105, name: "北关区"}, {id: 410505, topid: 4105, name: "殷都区"}, {
		id: 410506,
		topid: 4105,
		name: "龙安区"
	}, {id: 410522, topid: 4105, name: "安阳县"}, {id: 410523, topid: 4105, name: "汤阴县"}, {
		id: 410526,
		topid: 4105,
		name: "滑县"
	}, {id: 410527, topid: 4105, name: "内黄县"}, {id: 410581, topid: 4105, name: "林州市"}, {
		id: 410601,
		topid: 4106,
		name: "市辖区"
	}, {id: 410602, topid: 4106, name: "鹤山区"}, {id: 410603, topid: 4106, name: "山城区"}, {
		id: 410611,
		topid: 4106,
		name: "淇滨区"
	}, {id: 410621, topid: 4106, name: "浚县"}, {id: 410622, topid: 4106, name: "淇县"}, {
		id: 410701,
		topid: 4107,
		name: "市辖区"
	}, {id: 410702, topid: 4107, name: "红旗区"}, {id: 410703, topid: 4107, name: "卫滨区"}, {
		id: 410704,
		topid: 4107,
		name: "凤泉区"
	}, {id: 410711, topid: 4107, name: "牧野区"}, {id: 410721, topid: 4107, name: "新乡县"}, {
		id: 410724,
		topid: 4107,
		name: "获嘉县"
	}, {id: 410725, topid: 4107, name: "原阳县"}, {id: 410726, topid: 4107, name: "延津县"}, {
		id: 410727,
		topid: 4107,
		name: "封丘县"
	}, {id: 410728, topid: 4107, name: "长垣县"}, {id: 410781, topid: 4107, name: "卫辉市"}, {
		id: 410782,
		topid: 4107,
		name: "辉县市"
	}, {id: 410801, topid: 4108, name: "市辖区"}, {id: 410802, topid: 4108, name: "解放区"}, {
		id: 410803,
		topid: 4108,
		name: "中站区"
	}, {id: 410804, topid: 4108, name: "马村区"}, {id: 410811, topid: 4108, name: "山阳区"}, {
		id: 410821,
		topid: 4108,
		name: "修武县"
	}, {id: 410822, topid: 4108, name: "博爱县"}, {id: 410823, topid: 4108, name: "武陟县"}, {
		id: 410825,
		topid: 4108,
		name: "温县"
	}, {id: 410881, topid: 4108, name: "济源市"}, {id: 410882, topid: 4108, name: "沁阳市"}, {
		id: 410883,
		topid: 4108,
		name: "孟州市"
	}, {id: 410901, topid: 4109, name: "市辖区"}, {id: 410902, topid: 4109, name: "华龙区"}, {
		id: 410922,
		topid: 4109,
		name: "清丰县"
	}, {id: 410923, topid: 4109, name: "南乐县"}, {id: 410926, topid: 4109, name: "范县"}, {
		id: 410927,
		topid: 4109,
		name: "台前县"
	}, {id: 410928, topid: 4109, name: "濮阳县"}, {id: 411001, topid: 4110, name: "市辖区"}, {
		id: 411002,
		topid: 4110,
		name: "魏都区"
	}, {id: 411023, topid: 4110, name: "许昌县"}, {id: 411024, topid: 4110, name: "鄢陵县"}, {
		id: 411025,
		topid: 4110,
		name: "襄城县"
	}, {id: 411081, topid: 4110, name: "禹州市"}, {id: 411082, topid: 4110, name: "长葛市"}, {
		id: 411101,
		topid: 4111,
		name: "市辖区"
	}, {id: 411102, topid: 4111, name: "源汇区"}, {id: 411103, topid: 4111, name: "郾城区"}, {
		id: 411104,
		topid: 4111,
		name: "召陵区"
	}, {id: 411121, topid: 4111, name: "舞阳县"}, {id: 411122, topid: 4111, name: "临颍县"}, {
		id: 411201,
		topid: 4112,
		name: "市辖区"
	}, {id: 411202, topid: 4112, name: "湖滨区"}, {id: 411221, topid: 4112, name: "渑池县"}, {
		id: 411222,
		topid: 4112,
		name: "陕县"
	}, {id: 411224, topid: 4112, name: "卢氏县"}, {id: 411281, topid: 4112, name: "义马市"}, {
		id: 411282,
		topid: 4112,
		name: "灵宝市"
	}, {id: 411301, topid: 4113, name: "市辖区"}, {id: 411302, topid: 4113, name: "宛城区"}, {
		id: 411303,
		topid: 4113,
		name: "卧龙区"
	}, {id: 411321, topid: 4113, name: "南召县"}, {id: 411322, topid: 4113, name: "方城县"}, {
		id: 411323,
		topid: 4113,
		name: "西峡县"
	}, {id: 411324, topid: 4113, name: "镇平县"}, {id: 411325, topid: 4113, name: "内乡县"}, {
		id: 411326,
		topid: 4113,
		name: "淅川县"
	}, {id: 411327, topid: 4113, name: "社旗县"}, {id: 411328, topid: 4113, name: "唐河县"}, {
		id: 411329,
		topid: 4113,
		name: "新野县"
	}, {id: 411330, topid: 4113, name: "桐柏县"}, {id: 411381, topid: 4113, name: "邓州市"}, {
		id: 411401,
		topid: 4114,
		name: "市辖区"
	}, {id: 411402, topid: 4114, name: "梁园区"}, {id: 411403, topid: 4114, name: "睢阳区"}, {
		id: 411421,
		topid: 4114,
		name: "民权县"
	}, {id: 411422, topid: 4114, name: "睢县"}, {id: 411423, topid: 4114, name: "宁陵县"}, {
		id: 411424,
		topid: 4114,
		name: "柘城县"
	}, {id: 411425, topid: 4114, name: "虞城县"}, {id: 411426, topid: 4114, name: "夏邑县"}, {
		id: 411481,
		topid: 4114,
		name: "永城市"
	}, {id: 411501, topid: 4115, name: "市辖区"}, {id: 411502, topid: 4115, name: "浉河区"}, {
		id: 411503,
		topid: 4115,
		name: "平桥区"
	}, {id: 411521, topid: 4115, name: "罗山县"}, {id: 411522, topid: 4115, name: "光山县"}, {
		id: 411523,
		topid: 4115,
		name: "新县"
	}, {id: 411524, topid: 4115, name: "商城县"}, {id: 411525, topid: 4115, name: "固始县"}, {
		id: 411526,
		topid: 4115,
		name: "潢川县"
	}, {id: 411527, topid: 4115, name: "淮滨县"}, {id: 411528, topid: 4115, name: "息县"}, {
		id: 411601,
		topid: 4116,
		name: "市辖区"
	}, {id: 411602, topid: 4116, name: "川汇区"}, {id: 411621, topid: 4116, name: "扶沟县"}, {
		id: 411622,
		topid: 4116,
		name: "西华县"
	}, {id: 411623, topid: 4116, name: "商水县"}, {id: 411624, topid: 4116, name: "沈丘县"}, {
		id: 411625,
		topid: 4116,
		name: "郸城县"
	}, {id: 411626, topid: 4116, name: "淮阳县"}, {id: 411627, topid: 4116, name: "太康县"}, {
		id: 411628,
		topid: 4116,
		name: "鹿邑县"
	}, {id: 411681, topid: 4116, name: "项城市"}, {id: 411701, topid: 4117, name: "市辖区"}, {
		id: 411702,
		topid: 4117,
		name: "驿城区"
	}, {id: 411721, topid: 4117, name: "西平县"}, {id: 411722, topid: 4117, name: "上蔡县"}, {
		id: 411723,
		topid: 4117,
		name: "平舆县"
	}, {id: 411724, topid: 4117, name: "正阳县"}, {id: 411725, topid: 4117, name: "确山县"}, {
		id: 411726,
		topid: 4117,
		name: "泌阳县"
	}, {id: 411727, topid: 4117, name: "汝南县"}, {id: 411728, topid: 4117, name: "遂平县"}, {
		id: 411729,
		topid: 4117,
		name: "新蔡县"
	}, {id: 420101, topid: 4201, name: "市辖区"}, {id: 420102, topid: 4201, name: "江岸区"}, {
		id: 420103,
		topid: 4201,
		name: "江汉区"
	}, {id: 420104, topid: 4201, name: "硚口区"}, {id: 420105, topid: 4201, name: "汉阳区"}, {
		id: 420106,
		topid: 4201,
		name: "武昌区"
	}, {id: 420107, topid: 4201, name: "青山区"}, {id: 420111, topid: 4201, name: "洪山区"}, {
		id: 420112,
		topid: 4201,
		name: "东西湖区"
	}, {id: 420113, topid: 4201, name: "汉南区"}, {id: 420114, topid: 4201, name: "蔡甸区"}, {
		id: 420115,
		topid: 4201,
		name: "江夏区"
	}, {id: 420116, topid: 4201, name: "黄陂区"}, {id: 420117, topid: 4201, name: "新洲区"}, {
		id: 420201,
		topid: 4202,
		name: "市辖区"
	}, {id: 420202, topid: 4202, name: "黄石港区"}, {id: 420203, topid: 4202, name: "西塞山区"}, {
		id: 420204,
		topid: 4202,
		name: "下陆区"
	}, {id: 420205, topid: 4202, name: "铁山区"}, {id: 420222, topid: 4202, name: "阳新县"}, {
		id: 420281,
		topid: 4202,
		name: "大冶市"
	}, {id: 420301, topid: 4203, name: "市辖区"}, {id: 420302, topid: 4203, name: "茅箭区"}, {
		id: 420303,
		topid: 4203,
		name: "张湾区"
	}, {id: 420321, topid: 4203, name: "郧县"}, {id: 420322, topid: 4203, name: "郧西县"}, {
		id: 420323,
		topid: 4203,
		name: "竹山县"
	}, {id: 420324, topid: 4203, name: "竹溪县"}, {id: 420325, topid: 4203, name: "房县"}, {
		id: 420381,
		topid: 4203,
		name: "丹江口市"
	}, {id: 420501, topid: 4205, name: "市辖区"}, {id: 420502, topid: 4205, name: "西陵区"}, {
		id: 420503,
		topid: 4205,
		name: "伍家岗区"
	}, {id: 420504, topid: 4205, name: "点军区"}, {id: 420505, topid: 4205, name: "猇亭区"}, {
		id: 420506,
		topid: 4205,
		name: "夷陵区"
	}, {id: 420525, topid: 4205, name: "远安县"}, {id: 420526, topid: 4205, name: "兴山县"}, {
		id: 420527,
		topid: 4205,
		name: "秭归县"
	}, {id: 420528, topid: 4205, name: "长阳土家族自治县"}, {id: 420529, topid: 4205, name: "五峰土家族自治县"}, {
		id: 420581,
		topid: 4205,
		name: "宜都市"
	}, {id: 420582, topid: 4205, name: "当阳市"}, {id: 420583, topid: 4205, name: "枝江市"}, {
		id: 420601,
		topid: 4206,
		name: "市辖区"
	}, {id: 420602, topid: 4206, name: "襄城区"}, {id: 420606, topid: 4206, name: "樊城区"}, {
		id: 420607,
		topid: 4206,
		name: "襄阳区"
	}, {id: 420624, topid: 4206, name: "南漳县"}, {id: 420625, topid: 4206, name: "谷城县"}, {
		id: 420626,
		topid: 4206,
		name: "保康县"
	}, {id: 420682, topid: 4206, name: "老河口市"}, {id: 420683, topid: 4206, name: "枣阳市"}, {
		id: 420684,
		topid: 4206,
		name: "宜城市"
	}, {id: 420701, topid: 4207, name: "市辖区"}, {id: 420702, topid: 4207, name: "梁子湖区"}, {
		id: 420703,
		topid: 4207,
		name: "华容区"
	}, {id: 420704, topid: 4207, name: "鄂城区"}, {id: 420801, topid: 4208, name: "市辖区"}, {
		id: 420802,
		topid: 4208,
		name: "东宝区"
	}, {id: 420804, topid: 4208, name: "掇刀区"}, {id: 420821, topid: 4208, name: "京山县"}, {
		id: 420822,
		topid: 4208,
		name: "沙洋县"
	}, {id: 420881, topid: 4208, name: "钟祥市"}, {id: 420901, topid: 4209, name: "市辖区"}, {
		id: 420902,
		topid: 4209,
		name: "孝南区"
	}, {id: 420921, topid: 4209, name: "孝昌县"}, {id: 420922, topid: 4209, name: "大悟县"}, {
		id: 420923,
		topid: 4209,
		name: "云梦县"
	}, {id: 420981, topid: 4209, name: "应城市"}, {id: 420982, topid: 4209, name: "安陆市"}, {
		id: 420984,
		topid: 4209,
		name: "汉川市"
	}, {id: 421001, topid: 4210, name: "市辖区"}, {id: 421002, topid: 4210, name: "沙市区"}, {
		id: 421003,
		topid: 4210,
		name: "荆州区"
	}, {id: 421022, topid: 4210, name: "公安县"}, {id: 421023, topid: 4210, name: "监利县"}, {
		id: 421024,
		topid: 4210,
		name: "江陵县"
	}, {id: 421081, topid: 4210, name: "石首市"}, {id: 421083, topid: 4210, name: "洪湖市"}, {
		id: 421087,
		topid: 4210,
		name: "松滋市"
	}, {id: 421101, topid: 4211, name: "市辖区"}, {id: 421102, topid: 4211, name: "黄州区"}, {
		id: 421121,
		topid: 4211,
		name: "团风县"
	}, {id: 421122, topid: 4211, name: "红安县"}, {id: 421123, topid: 4211, name: "罗田县"}, {
		id: 421124,
		topid: 4211,
		name: "英山县"
	}, {id: 421125, topid: 4211, name: "浠水县"}, {id: 421126, topid: 4211, name: "蕲春县"}, {
		id: 421127,
		topid: 4211,
		name: "黄梅县"
	}, {id: 421181, topid: 4211, name: "麻城市"}, {id: 421182, topid: 4211, name: "武穴市"}, {
		id: 421201,
		topid: 4212,
		name: "市辖区"
	}, {id: 421202, topid: 4212, name: "咸安区"}, {id: 421221, topid: 4212, name: "嘉鱼县"}, {
		id: 421222,
		topid: 4212,
		name: "通城县"
	}, {id: 421223, topid: 4212, name: "崇阳县"}, {id: 421224, topid: 4212, name: "通山县"}, {
		id: 421281,
		topid: 4212,
		name: "赤壁市"
	}, {id: 421301, topid: 4213, name: "市辖区"}, {id: 421302, topid: 4213, name: "曾都区"}, {
		id: 421381,
		topid: 4213,
		name: "广水市"
	}, {id: 422801, topid: 4228, name: "恩施市"}, {id: 422802, topid: 4228, name: "利川市"}, {
		id: 422822,
		topid: 4228,
		name: "建始县"
	}, {id: 422823, topid: 4228, name: "巴东县"}, {id: 422825, topid: 4228, name: "宣恩县"}, {
		id: 422826,
		topid: 4228,
		name: "咸丰县"
	}, {id: 422827, topid: 4228, name: "来凤县"}, {id: 422828, topid: 4228, name: "鹤峰县"}, {
		id: 429004,
		topid: 4290,
		name: "仙桃市"
	}, {id: 429005, topid: 4290, name: "潜江市"}, {id: 429006, topid: 4290, name: "天门市"}, {
		id: 429021,
		topid: 4290,
		name: "神农架林区"
	}, {id: 430101, topid: 4301, name: "市辖区"}, {id: 430102, topid: 4301, name: "芙蓉区"}, {
		id: 430103,
		topid: 4301,
		name: "天心区"
	}, {id: 430104, topid: 4301, name: "岳麓区"}, {id: 430105, topid: 4301, name: "开福区"}, {
		id: 430111,
		topid: 4301,
		name: "雨花区"
	}, {id: 430121, topid: 4301, name: "长沙县"}, {id: 430122, topid: 4301, name: "望城县"}, {
		id: 430124,
		topid: 4301,
		name: "宁乡县"
	}, {id: 430181, topid: 4301, name: "浏阳市"}, {id: 430201, topid: 4302, name: "市辖区"}, {
		id: 430202,
		topid: 4302,
		name: "荷塘区"
	}, {id: 430203, topid: 4302, name: "芦淞区"}, {id: 430204, topid: 4302, name: "石峰区"}, {
		id: 430211,
		topid: 4302,
		name: "天元区"
	}, {id: 430221, topid: 4302, name: "株洲县"}, {id: 430223, topid: 4302, name: "攸县"}, {
		id: 430224,
		topid: 4302,
		name: "茶陵县"
	}, {id: 430225, topid: 4302, name: "炎陵县"}, {id: 430281, topid: 4302, name: "醴陵市"}, {
		id: 430301,
		topid: 4303,
		name: "市辖区"
	}, {id: 430302, topid: 4303, name: "雨湖区"}, {id: 430304, topid: 4303, name: "岳塘区"}, {
		id: 430321,
		topid: 4303,
		name: "湘潭县"
	}, {id: 430381, topid: 4303, name: "湘乡市"}, {id: 430382, topid: 4303, name: "韶山市"}, {
		id: 430401,
		topid: 4304,
		name: "市辖区"
	}, {id: 430405, topid: 4304, name: "珠晖区"}, {id: 430406, topid: 4304, name: "雁峰区"}, {
		id: 430407,
		topid: 4304,
		name: "石鼓区"
	}, {id: 430408, topid: 4304, name: "蒸湘区"}, {id: 430412, topid: 4304, name: "南岳区"}, {
		id: 430421,
		topid: 4304,
		name: "衡阳县"
	}, {id: 430422, topid: 4304, name: "衡南县"}, {id: 430423, topid: 4304, name: "衡山县"}, {
		id: 430424,
		topid: 4304,
		name: "衡东县"
	}, {id: 430426, topid: 4304, name: "祁东县"}, {id: 430481, topid: 4304, name: "耒阳市"}, {
		id: 430482,
		topid: 4304,
		name: "常宁市"
	}, {id: 430501, topid: 4305, name: "市辖区"}, {id: 430502, topid: 4305, name: "双清区"}, {
		id: 430503,
		topid: 4305,
		name: "大祥区"
	}, {id: 430511, topid: 4305, name: "北塔区"}, {id: 430521, topid: 4305, name: "邵东县"}, {
		id: 430522,
		topid: 4305,
		name: "新邵县"
	}, {id: 430523, topid: 4305, name: "邵阳县"}, {id: 430524, topid: 4305, name: "隆回县"}, {
		id: 430525,
		topid: 4305,
		name: "洞口县"
	}, {id: 430527, topid: 4305, name: "绥宁县"}, {id: 430528, topid: 4305, name: "新宁县"}, {
		id: 430529,
		topid: 4305,
		name: "城步苗族自治县"
	}, {id: 430581, topid: 4305, name: "武冈市"}, {id: 430601, topid: 4306, name: "市辖区"}, {
		id: 430602,
		topid: 4306,
		name: "岳阳楼区"
	}, {id: 430603, topid: 4306, name: "云溪区"}, {id: 430611, topid: 4306, name: "君山区"}, {
		id: 430621,
		topid: 4306,
		name: "岳阳县"
	}, {id: 430623, topid: 4306, name: "华容县"}, {id: 430624, topid: 4306, name: "湘阴县"}, {
		id: 430626,
		topid: 4306,
		name: "平江县"
	}, {id: 430681, topid: 4306, name: "汨罗市"}, {id: 430682, topid: 4306, name: "临湘市"}, {
		id: 430701,
		topid: 4307,
		name: "市辖区"
	}, {id: 430702, topid: 4307, name: "武陵区"}, {id: 430703, topid: 4307, name: "鼎城区"}, {
		id: 430721,
		topid: 4307,
		name: "安乡县"
	}, {id: 430722, topid: 4307, name: "汉寿县"}, {id: 430723, topid: 4307, name: "澧县"}, {
		id: 430724,
		topid: 4307,
		name: "临澧县"
	}, {id: 430725, topid: 4307, name: "桃源县"}, {id: 430726, topid: 4307, name: "石门县"}, {
		id: 430781,
		topid: 4307,
		name: "津市市"
	}, {id: 430801, topid: 4308, name: "市辖区"}, {id: 430802, topid: 4308, name: "永定区"}, {
		id: 430811,
		topid: 4308,
		name: "武陵源区"
	}, {id: 430821, topid: 4308, name: "慈利县"}, {id: 430822, topid: 4308, name: "桑植县"}, {
		id: 430901,
		topid: 4309,
		name: "市辖区"
	}, {id: 430902, topid: 4309, name: "资阳区"}, {id: 430903, topid: 4309, name: "赫山区"}, {
		id: 430921,
		topid: 4309,
		name: "南县"
	}, {id: 430922, topid: 4309, name: "桃江县"}, {id: 430923, topid: 4309, name: "安化县"}, {
		id: 430981,
		topid: 4309,
		name: "沅江市"
	}, {id: 431001, topid: 4310, name: "市辖区"}, {id: 431002, topid: 4310, name: "北湖区"}, {
		id: 431003,
		topid: 4310,
		name: "苏仙区"
	}, {id: 431021, topid: 4310, name: "桂阳县"}, {id: 431022, topid: 4310, name: "宜章县"}, {
		id: 431023,
		topid: 4310,
		name: "永兴县"
	}, {id: 431024, topid: 4310, name: "嘉禾县"}, {id: 431025, topid: 4310, name: "临武县"}, {
		id: 431026,
		topid: 4310,
		name: "汝城县"
	}, {id: 431027, topid: 4310, name: "桂东县"}, {id: 431028, topid: 4310, name: "安仁县"}, {
		id: 431081,
		topid: 4310,
		name: "资兴市"
	}, {id: 431101, topid: 4311, name: "市辖区"}, {id: 431102, topid: 4311, name: "零陵区"}, {
		id: 431103,
		topid: 4311,
		name: "冷水滩区"
	}, {id: 431121, topid: 4311, name: "祁阳县"}, {id: 431122, topid: 4311, name: "东安县"}, {
		id: 431123,
		topid: 4311,
		name: "双牌县"
	}, {id: 431124, topid: 4311, name: "道县"}, {id: 431125, topid: 4311, name: "江永县"}, {
		id: 431126,
		topid: 4311,
		name: "宁远县"
	}, {id: 431127, topid: 4311, name: "蓝山县"}, {id: 431128, topid: 4311, name: "新田县"}, {
		id: 431129,
		topid: 4311,
		name: "江华瑶族自治县"
	}, {id: 431201, topid: 4312, name: "市辖区"}, {id: 431202, topid: 4312, name: "鹤城区"}, {
		id: 431221,
		topid: 4312,
		name: "中方县"
	}, {id: 431222, topid: 4312, name: "沅陵县"}, {id: 431223, topid: 4312, name: "辰溪县"}, {
		id: 431224,
		topid: 4312,
		name: "溆浦县"
	}, {id: 431225, topid: 4312, name: "会同县"}, {id: 431226, topid: 4312, name: "麻阳苗族自治县"}, {
		id: 431227,
		topid: 4312,
		name: "新晃侗族自治县"
	}, {id: 431228, topid: 4312, name: "芷江侗族自治县"}, {id: 431229, topid: 4312, name: "靖州苗族侗族自治县"}, {
		id: 431230,
		topid: 4312,
		name: "通道侗族自治县"
	}, {id: 431281, topid: 4312, name: "洪江市"}, {id: 431301, topid: 4313, name: "市辖区"}, {
		id: 431302,
		topid: 4313,
		name: "娄星区"
	}, {id: 431321, topid: 4313, name: "双峰县"}, {id: 431322, topid: 4313, name: "新化县"}, {
		id: 431381,
		topid: 4313,
		name: "冷水江市"
	}, {id: 431382, topid: 4313, name: "涟源市"}, {id: 433101, topid: 4331, name: "吉首市"}, {
		id: 433122,
		topid: 4331,
		name: "泸溪县"
	}, {id: 433123, topid: 4331, name: "凤凰县"}, {id: 433124, topid: 4331, name: "花垣县"}, {
		id: 433125,
		topid: 4331,
		name: "保靖县"
	}, {id: 433126, topid: 4331, name: "古丈县"}, {id: 433127, topid: 4331, name: "永顺县"}, {
		id: 433130,
		topid: 4331,
		name: "龙山县"
	}, {id: 440101, topid: 4401, name: "市辖区"}, {id: 440103, topid: 4401, name: "荔湾区"}, {
		id: 440104,
		topid: 4401,
		name: "越秀区"
	}, {id: 440105, topid: 4401, name: "海珠区"}, {id: 440106, topid: 4401, name: "天河区"}, {
		id: 440111,
		topid: 4401,
		name: "白云区"
	}, {id: 440112, topid: 4401, name: "黄埔区"}, {id: 440113, topid: 4401, name: "番禺区"}, {
		id: 440114,
		topid: 4401,
		name: "花都区"
	}, {id: 440115, topid: 4401, name: "南沙区"}, {id: 440116, topid: 4401, name: "萝岗区"}, {
		id: 440183,
		topid: 4401,
		name: "增城市"
	}, {id: 440184, topid: 4401, name: "从化市"}, {id: 440201, topid: 4402, name: "市辖区"}, {
		id: 440203,
		topid: 4402,
		name: "武江区"
	}, {id: 440204, topid: 4402, name: "浈江区"}, {id: 440205, topid: 4402, name: "曲江区"}, {
		id: 440222,
		topid: 4402,
		name: "始兴县"
	}, {id: 440224, topid: 4402, name: "仁化县"}, {id: 440229, topid: 4402, name: "翁源县"}, {
		id: 440232,
		topid: 4402,
		name: "乳源瑶族自治县"
	}, {id: 440233, topid: 4402, name: "新丰县"}, {id: 440281, topid: 4402, name: "乐昌市"}, {
		id: 440282,
		topid: 4402,
		name: "南雄市"
	}, {id: 440301, topid: 4403, name: "市辖区"}, {id: 440303, topid: 4403, name: "罗湖区"}, {
		id: 440304,
		topid: 4403,
		name: "福田区"
	}, {id: 440305, topid: 4403, name: "南山区"}, {id: 440306, topid: 4403, name: "宝安区"}, {
		id: 440307,
		topid: 4403,
		name: "龙岗区"
	}, {id: 440308, topid: 4403, name: "盐田区"}, {id: 440401, topid: 4404, name: "市辖区"}, {
		id: 440402,
		topid: 4404,
		name: "香洲区"
	}, {id: 440403, topid: 4404, name: "斗门区"}, {id: 440404, topid: 4404, name: "金湾区"}, {
		id: 440501,
		topid: 4405,
		name: "市辖区"
	}, {id: 440507, topid: 4405, name: "龙湖区"}, {id: 440511, topid: 4405, name: "金平区"}, {
		id: 440512,
		topid: 4405,
		name: "濠江区"
	}, {id: 440513, topid: 4405, name: "潮阳区"}, {id: 440514, topid: 4405, name: "潮南区"}, {
		id: 440515,
		topid: 4405,
		name: "澄海区"
	}, {id: 440523, topid: 4405, name: "南澳县"}, {id: 440601, topid: 4406, name: "市辖区"}, {
		id: 440604,
		topid: 4406,
		name: "禅城区"
	}, {id: 440605, topid: 4406, name: "南海区"}, {id: 440606, topid: 4406, name: "顺德区"}, {
		id: 440607,
		topid: 4406,
		name: "三水区"
	}, {id: 440608, topid: 4406, name: "高明区"}, {id: 440701, topid: 4407, name: "市辖区"}, {
		id: 440703,
		topid: 4407,
		name: "蓬江区"
	}, {id: 440704, topid: 4407, name: "江海区"}, {id: 440705, topid: 4407, name: "新会区"}, {
		id: 440781,
		topid: 4407,
		name: "台山市"
	}, {id: 440783, topid: 4407, name: "开平市"}, {id: 440784, topid: 4407, name: "鹤山市"}, {
		id: 440785,
		topid: 4407,
		name: "恩平市"
	}, {id: 440801, topid: 4408, name: "市辖区"}, {id: 440802, topid: 4408, name: "赤坎区"}, {
		id: 440803,
		topid: 4408,
		name: "霞山区"
	}, {id: 440804, topid: 4408, name: "坡头区"}, {id: 440811, topid: 4408, name: "麻章区"}, {
		id: 440823,
		topid: 4408,
		name: "遂溪县"
	}, {id: 440825, topid: 4408, name: "徐闻县"}, {id: 440881, topid: 4408, name: "廉江市"}, {
		id: 440882,
		topid: 4408,
		name: "雷州市"
	}, {id: 440883, topid: 4408, name: "吴川市"}, {id: 440901, topid: 4409, name: "市辖区"}, {
		id: 440902,
		topid: 4409,
		name: "茂南区"
	}, {id: 440903, topid: 4409, name: "茂港区"}, {id: 440923, topid: 4409, name: "电白县"}, {
		id: 440981,
		topid: 4409,
		name: "高州市"
	}, {id: 440982, topid: 4409, name: "化州市"}, {id: 440983, topid: 4409, name: "信宜市"}, {
		id: 441201,
		topid: 4412,
		name: "市辖区"
	}, {id: 441202, topid: 4412, name: "端州区"}, {id: 441203, topid: 4412, name: "鼎湖区"}, {
		id: 441223,
		topid: 4412,
		name: "广宁县"
	}, {id: 441224, topid: 4412, name: "怀集县"}, {id: 441225, topid: 4412, name: "封开县"}, {
		id: 441226,
		topid: 4412,
		name: "德庆县"
	}, {id: 441283, topid: 4412, name: "高要市"}, {id: 441284, topid: 4412, name: "四会市"}, {
		id: 441301,
		topid: 4413,
		name: "市辖区"
	}, {id: 441302, topid: 4413, name: "惠城区"}, {id: 441303, topid: 4413, name: "惠阳区"}, {
		id: 441322,
		topid: 4413,
		name: "博罗县"
	}, {id: 441323, topid: 4413, name: "惠东县"}, {id: 441324, topid: 4413, name: "龙门县"}, {
		id: 441401,
		topid: 4414,
		name: "市辖区"
	}, {id: 441402, topid: 4414, name: "梅江区"}, {id: 441421, topid: 4414, name: "梅县"}, {
		id: 441422,
		topid: 4414,
		name: "大埔县"
	}, {id: 441423, topid: 4414, name: "丰顺县"}, {id: 441424, topid: 4414, name: "五华县"}, {
		id: 441426,
		topid: 4414,
		name: "平远县"
	}, {id: 441427, topid: 4414, name: "蕉岭县"}, {id: 441481, topid: 4414, name: "兴宁市"}, {
		id: 441501,
		topid: 4415,
		name: "市辖区"
	}, {id: 441502, topid: 4415, name: "城区"}, {id: 441521, topid: 4415, name: "海丰县"}, {
		id: 441523,
		topid: 4415,
		name: "陆河县"
	}, {id: 441581, topid: 4415, name: "陆丰市"}, {id: 441601, topid: 4416, name: "市辖区"}, {
		id: 441602,
		topid: 4416,
		name: "源城区"
	}, {id: 441621, topid: 4416, name: "紫金县"}, {id: 441622, topid: 4416, name: "龙川县"}, {
		id: 441623,
		topid: 4416,
		name: "连平县"
	}, {id: 441624, topid: 4416, name: "和平县"}, {id: 441625, topid: 4416, name: "东源县"}, {
		id: 441701,
		topid: 4417,
		name: "市辖区"
	}, {id: 441702, topid: 4417, name: "江城区"}, {id: 441721, topid: 4417, name: "阳西县"}, {
		id: 441723,
		topid: 4417,
		name: "阳东县"
	}, {id: 441781, topid: 4417, name: "阳春市"}, {id: 441801, topid: 4418, name: "市辖区"}, {
		id: 441802,
		topid: 4418,
		name: "清城区"
	}, {id: 441821, topid: 4418, name: "佛冈县"}, {id: 441823, topid: 4418, name: "阳山县"}, {
		id: 441825,
		topid: 4418,
		name: "连山壮族瑶族自治县"
	}, {id: 441826, topid: 4418, name: "连南瑶族自治县"}, {id: 441827, topid: 4418, name: "清新县"}, {
		id: 441881,
		topid: 4418,
		name: "英德市"
	}, {id: 441882, topid: 4418, name: "连州市"}, {id: 445101, topid: 4451, name: "市辖区"}, {
		id: 445102,
		topid: 4451,
		name: "湘桥区"
	}, {id: 445121, topid: 4451, name: "潮安县"}, {id: 445122, topid: 4451, name: "饶平县"}, {
		id: 445201,
		topid: 4452,
		name: "市辖区"
	}, {id: 445202, topid: 4452, name: "榕城区"}, {id: 445221, topid: 4452, name: "揭东县"}, {
		id: 445222,
		topid: 4452,
		name: "揭西县"
	}, {id: 445224, topid: 4452, name: "惠来县"}, {id: 445281, topid: 4452, name: "普宁市"}, {
		id: 445301,
		topid: 4453,
		name: "市辖区"
	}, {id: 445302, topid: 4453, name: "云城区"}, {id: 445321, topid: 4453, name: "新兴县"}, {
		id: 445322,
		topid: 4453,
		name: "郁南县"
	}, {id: 445323, topid: 4453, name: "云安县"}, {id: 445381, topid: 4453, name: "罗定市"}, {
		id: 450101,
		topid: 4501,
		name: "市辖区"
	}, {id: 450102, topid: 4501, name: "兴宁区"}, {id: 450103, topid: 4501, name: "青秀区"}, {
		id: 450105,
		topid: 4501,
		name: "江南区"
	}, {id: 450107, topid: 4501, name: "西乡塘区"}, {id: 450108, topid: 4501, name: "良庆区"}, {
		id: 450109,
		topid: 4501,
		name: "邕宁区"
	}, {id: 450122, topid: 4501, name: "武鸣县"}, {id: 450123, topid: 4501, name: "隆安县"}, {
		id: 450124,
		topid: 4501,
		name: "马山县"
	}, {id: 450125, topid: 4501, name: "上林县"}, {id: 450126, topid: 4501, name: "宾阳县"}, {
		id: 450127,
		topid: 4501,
		name: "横县"
	}, {id: 450201, topid: 4502, name: "市辖区"}, {id: 450202, topid: 4502, name: "城中区"}, {
		id: 450203,
		topid: 4502,
		name: "鱼峰区"
	}, {id: 450204, topid: 4502, name: "柳南区"}, {id: 450205, topid: 4502, name: "柳北区"}, {
		id: 450221,
		topid: 4502,
		name: "柳江县"
	}, {id: 450222, topid: 4502, name: "柳城县"}, {id: 450223, topid: 4502, name: "鹿寨县"}, {
		id: 450224,
		topid: 4502,
		name: "融安县"
	}, {id: 450225, topid: 4502, name: "融水苗族自治县"}, {id: 450226, topid: 4502, name: "三江侗族自治县"}, {
		id: 450301,
		topid: 4503,
		name: "市辖区"
	}, {id: 450302, topid: 4503, name: "秀峰区"}, {id: 450303, topid: 4503, name: "叠彩区"}, {
		id: 450304,
		topid: 4503,
		name: "象山区"
	}, {id: 450305, topid: 4503, name: "七星区"}, {id: 450311, topid: 4503, name: "雁山区"}, {
		id: 450321,
		topid: 4503,
		name: "阳朔县"
	}, {id: 450322, topid: 4503, name: "临桂县"}, {id: 450323, topid: 4503, name: "灵川县"}, {
		id: 450324,
		topid: 4503,
		name: "全州县"
	}, {id: 450325, topid: 4503, name: "兴安县"}, {id: 450326, topid: 4503, name: "永福县"}, {
		id: 450327,
		topid: 4503,
		name: "灌阳县"
	}, {id: 450328, topid: 4503, name: "龙胜各族自治县"}, {id: 450329, topid: 4503, name: "资源县"}, {
		id: 450330,
		topid: 4503,
		name: "平乐县"
	}, {id: 450331, topid: 4503, name: "荔蒲县"}, {id: 450332, topid: 4503, name: "恭城瑶族自治县"}, {
		id: 450401,
		topid: 4504,
		name: "市辖区"
	}, {id: 450403, topid: 4504, name: "万秀区"}, {id: 450404, topid: 4504, name: "蝶山区"}, {
		id: 450405,
		topid: 4504,
		name: "长洲区"
	}, {id: 450421, topid: 4504, name: "苍梧县"}, {id: 450422, topid: 4504, name: "藤县"}, {
		id: 450423,
		topid: 4504,
		name: "蒙山县"
	}, {id: 450481, topid: 4504, name: "岑溪市"}, {id: 450501, topid: 4505, name: "市辖区"}, {
		id: 450502,
		topid: 4505,
		name: "海城区"
	}, {id: 450503, topid: 4505, name: "银海区"}, {id: 450512, topid: 4505, name: "铁山港区"}, {
		id: 450521,
		topid: 4505,
		name: "合浦县"
	}, {id: 450601, topid: 4506, name: "市辖区"}, {id: 450602, topid: 4506, name: "港口区"}, {
		id: 450603,
		topid: 4506,
		name: "防城区"
	}, {id: 450621, topid: 4506, name: "上思县"}, {id: 450681, topid: 4506, name: "东兴市"}, {
		id: 450701,
		topid: 4507,
		name: "市辖区"
	}, {id: 450702, topid: 4507, name: "钦南区"}, {id: 450703, topid: 4507, name: "钦北区"}, {
		id: 450721,
		topid: 4507,
		name: "灵山县"
	}, {id: 450722, topid: 4507, name: "浦北县"}, {id: 450801, topid: 4508, name: "市辖区"}, {
		id: 450802,
		topid: 4508,
		name: "港北区"
	}, {id: 450803, topid: 4508, name: "港南区"}, {id: 450804, topid: 4508, name: "覃塘区"}, {
		id: 450821,
		topid: 4508,
		name: "平南县"
	}, {id: 450881, topid: 4508, name: "桂平市"}, {id: 450901, topid: 4509, name: "市辖区"}, {
		id: 450902,
		topid: 4509,
		name: "玉州区"
	}, {id: 450921, topid: 4509, name: "容县"}, {id: 450922, topid: 4509, name: "陆川县"}, {
		id: 450923,
		topid: 4509,
		name: "博白县"
	}, {id: 450924, topid: 4509, name: "兴业县"}, {id: 450981, topid: 4509, name: "北流市"}, {
		id: 451001,
		topid: 4510,
		name: "市辖区"
	}, {id: 451002, topid: 4510, name: "右江区"}, {id: 451021, topid: 4510, name: "田阳县"}, {
		id: 451022,
		topid: 4510,
		name: "田东县"
	}, {id: 451023, topid: 4510, name: "平果县"}, {id: 451024, topid: 4510, name: "德保县"}, {
		id: 451025,
		topid: 4510,
		name: "靖西县"
	}, {id: 451026, topid: 4510, name: "那坡县"}, {id: 451027, topid: 4510, name: "凌云县"}, {
		id: 451028,
		topid: 4510,
		name: "乐业县"
	}, {id: 451029, topid: 4510, name: "田林县"}, {id: 451030, topid: 4510, name: "西林县"}, {
		id: 451031,
		topid: 4510,
		name: "隆林各族自治县"
	}, {id: 451101, topid: 4511, name: "市辖区"}, {id: 451102, topid: 4511, name: "八步区"}, {
		id: 451121,
		topid: 4511,
		name: "昭平县"
	}, {id: 451122, topid: 4511, name: "钟山县"}, {id: 451123, topid: 4511, name: "富川瑶族自治县"}, {
		id: 451201,
		topid: 4512,
		name: "市辖区"
	}, {id: 451202, topid: 4512, name: "金城江区"}, {id: 451221, topid: 4512, name: "南丹县"}, {
		id: 451222,
		topid: 4512,
		name: "天峨县"
	}, {id: 451223, topid: 4512, name: "凤山县"}, {id: 451224, topid: 4512, name: "东兰县"}, {
		id: 451225,
		topid: 4512,
		name: "罗城仫佬族自治县"
	}, {id: 451226, topid: 4512, name: "环江毛南族自治县"}, {id: 451227, topid: 4512, name: "巴马瑶族自治县"}, {
		id: 451228,
		topid: 4512,
		name: "都安瑶族自治县"
	}, {id: 451229, topid: 4512, name: "大化瑶族自治县"}, {id: 451281, topid: 4512, name: "宜州市"}, {
		id: 451301,
		topid: 4513,
		name: "市辖区"
	}, {id: 451302, topid: 4513, name: "兴宾区"}, {id: 451321, topid: 4513, name: "忻城县"}, {
		id: 451322,
		topid: 4513,
		name: "象州县"
	}, {id: 451323, topid: 4513, name: "武宣县"}, {id: 451324, topid: 4513, name: "金秀瑶族自治县"}, {
		id: 451381,
		topid: 4513,
		name: "合山市"
	}, {id: 451401, topid: 4514, name: "市辖区"}, {id: 451402, topid: 4514, name: "江洲区"}, {
		id: 451421,
		topid: 4514,
		name: "扶绥县"
	}, {id: 451422, topid: 4514, name: "宁明县"}, {id: 451423, topid: 4514, name: "龙州县"}, {
		id: 451424,
		topid: 4514,
		name: "大新县"
	}, {id: 451425, topid: 4514, name: "天等县"}, {id: 451481, topid: 4514, name: "凭祥市"}, {
		id: 460101,
		topid: 4601,
		name: "市辖区"
	}, {id: 460105, topid: 4601, name: "秀英区"}, {id: 460106, topid: 4601, name: "龙华区"}, {
		id: 460107,
		topid: 4601,
		name: "琼山区"
	}, {id: 460108, topid: 4601, name: "美兰区"}, {id: 460201, topid: 4602, name: "市辖区"}, {
		id: 469001,
		topid: 4690,
		name: "五指山市"
	}, {id: 469002, topid: 4690, name: "琼海市"}, {id: 469003, topid: 4690, name: "儋州市"}, {
		id: 469005,
		topid: 4690,
		name: "文昌市"
	}, {id: 469006, topid: 4690, name: "万宁市"}, {id: 469007, topid: 4690, name: "东方市"}, {
		id: 469025,
		topid: 4690,
		name: "定安县"
	}, {id: 469026, topid: 4690, name: "屯昌县"}, {id: 469027, topid: 4690, name: "澄迈县"}, {
		id: 469028,
		topid: 4690,
		name: "临高县"
	}, {id: 469030, topid: 4690, name: "白沙黎族自治县"}, {id: 469031, topid: 4690, name: "昌江黎族自治县"}, {
		id: 469033,
		topid: 4690,
		name: "乐东黎族自治县"
	}, {id: 469034, topid: 4690, name: "陵水黎族自治县"}, {id: 469035, topid: 4690, name: "保亭黎族苗族自治县"}, {
		id: 469036,
		topid: 4690,
		name: "琼中黎族苗族自治县"
	}, {id: 469037, topid: 4690, name: "西沙群岛"}, {id: 469038, topid: 4690, name: "南沙群岛"}, {
		id: 469039,
		topid: 4690,
		name: "中沙群岛的岛礁及其海域"
	}, {id: 500101, topid: 5001, name: "万州区"}, {id: 500102, topid: 5001, name: "涪陵区"}, {
		id: 500103,
		topid: 5001,
		name: "渝中区"
	}, {id: 500104, topid: 5001, name: "大渡口区"}, {id: 500105, topid: 5001, name: "江北区"}, {
		id: 500106,
		topid: 5001,
		name: "沙坪坝区"
	}, {id: 500107, topid: 5001, name: "九龙坡区"}, {id: 500108, topid: 5001, name: "南岸区"}, {
		id: 500109,
		topid: 5001,
		name: "北碚区"
	}, {id: 500110, topid: 5001, name: "万盛区"}, {id: 500111, topid: 5001, name: "双桥区"}, {
		id: 500112,
		topid: 5001,
		name: "渝北区"
	}, {id: 500113, topid: 5001, name: "巴南区"}, {id: 500114, topid: 5001, name: "黔江区"}, {
		id: 500115,
		topid: 5001,
		name: "长寿区"
	}, {id: 500116, topid: 5001, name: "江津区"}, {id: 500117, topid: 5001, name: "合川区"}, {
		id: 500118,
		topid: 5001,
		name: "永川区"
	}, {id: 500119, topid: 5001, name: "南川区"}, {id: 500222, topid: 5002, name: "綦江县"}, {
		id: 500223,
		topid: 5002,
		name: "潼南县"
	}, {id: 500224, topid: 5002, name: "铜梁县"}, {id: 500225, topid: 5002, name: "大足县"}, {
		id: 500226,
		topid: 5002,
		name: "荣昌县"
	}, {id: 500227, topid: 5002, name: "璧山县"}, {id: 500228, topid: 5002, name: "梁平县"}, {
		id: 500229,
		topid: 5002,
		name: "城口县"
	}, {id: 500230, topid: 5002, name: "丰都县"}, {id: 500231, topid: 5002, name: "垫江县"}, {
		id: 500232,
		topid: 5002,
		name: "武隆县"
	}, {id: 500233, topid: 5002, name: "忠县"}, {id: 500234, topid: 5002, name: "开县"}, {
		id: 500235,
		topid: 5002,
		name: "云阳县"
	}, {id: 500236, topid: 5002, name: "奉节县"}, {id: 500237, topid: 5002, name: "巫山县"}, {
		id: 500238,
		topid: 5002,
		name: "巫溪县"
	}, {id: 500240, topid: 5002, name: "石柱土家族自治县"}, {id: 500241, topid: 5002, name: "秀山土家族苗族自治县"}, {
		id: 500242,
		topid: 5002,
		name: "酉阳土家族苗族自治县"
	}, {id: 500243, topid: 5002, name: "彭水苗族土家族自治县"}, {id: 510101, topid: 5101, name: "市辖区"}, {
		id: 510104,
		topid: 5101,
		name: "锦江区"
	}, {id: 510105, topid: 5101, name: "青羊区"}, {id: 510106, topid: 5101, name: "金牛区"}, {
		id: 510107,
		topid: 5101,
		name: "武侯区"
	}, {id: 510108, topid: 5101, name: "成华区"}, {id: 510112, topid: 5101, name: "龙泉驿区"}, {
		id: 510113,
		topid: 5101,
		name: "青白江区"
	}, {id: 510114, topid: 5101, name: "新都区"}, {id: 510115, topid: 5101, name: "温江区"}, {
		id: 510121,
		topid: 5101,
		name: "金堂县"
	}, {id: 510122, topid: 5101, name: "双流县"}, {id: 510124, topid: 5101, name: "郫县"}, {
		id: 510129,
		topid: 5101,
		name: "大邑县"
	}, {id: 510131, topid: 5101, name: "蒲江县"}, {id: 510132, topid: 5101, name: "新津县"}, {
		id: 510181,
		topid: 5101,
		name: "都江堰市"
	}, {id: 510182, topid: 5101, name: "彭州市"}, {id: 510183, topid: 5101, name: "邛崃市"}, {
		id: 510184,
		topid: 5101,
		name: "崇州市"
	}, {id: 510301, topid: 5103, name: "市辖区"}, {id: 510302, topid: 5103, name: "自流井区"}, {
		id: 510303,
		topid: 5103,
		name: "贡井区"
	}, {id: 510304, topid: 5103, name: "大安区"}, {id: 510311, topid: 5103, name: "沿滩区"}, {
		id: 510321,
		topid: 5103,
		name: "荣县"
	}, {id: 510322, topid: 5103, name: "富顺县"}, {id: 510401, topid: 5104, name: "市辖区"}, {
		id: 510402,
		topid: 5104,
		name: "东区"
	}, {id: 510403, topid: 5104, name: "西区"}, {id: 510411, topid: 5104, name: "仁和区"}, {
		id: 510421,
		topid: 5104,
		name: "米易县"
	}, {id: 510422, topid: 5104, name: "盐边县"}, {id: 510501, topid: 5105, name: "市辖区"}, {
		id: 510502,
		topid: 5105,
		name: "江阳区"
	}, {id: 510503, topid: 5105, name: "纳溪区"}, {id: 510504, topid: 5105, name: "龙马潭区"}, {
		id: 510521,
		topid: 5105,
		name: "泸县"
	}, {id: 510522, topid: 5105, name: "合江县"}, {id: 510524, topid: 5105, name: "叙永县"}, {
		id: 510525,
		topid: 5105,
		name: "古蔺县"
	}, {id: 510601, topid: 5106, name: "市辖区"}, {id: 510603, topid: 5106, name: "旌阳区"}, {
		id: 510623,
		topid: 5106,
		name: "中江县"
	}, {id: 510626, topid: 5106, name: "罗江县"}, {id: 510681, topid: 5106, name: "广汉市"}, {
		id: 510682,
		topid: 5106,
		name: "什邡市"
	}, {id: 510683, topid: 5106, name: "绵竹市"}, {id: 510701, topid: 5107, name: "市辖区"}, {
		id: 510703,
		topid: 5107,
		name: "涪城区"
	}, {id: 510704, topid: 5107, name: "游仙区"}, {id: 510722, topid: 5107, name: "三台县"}, {
		id: 510723,
		topid: 5107,
		name: "盐亭县"
	}, {id: 510724, topid: 5107, name: "安县"}, {id: 510725, topid: 5107, name: "梓潼县"}, {
		id: 510726,
		topid: 5107,
		name: "北川羌族自治县"
	}, {id: 510727, topid: 5107, name: "平武县"}, {id: 510781, topid: 5107, name: "江油市"}, {
		id: 510801,
		topid: 5108,
		name: "市辖区"
	}, {id: 510802, topid: 5108, name: "市中区"}, {id: 510811, topid: 5108, name: "元坝区"}, {
		id: 510812,
		topid: 5108,
		name: "朝天区"
	}, {id: 510821, topid: 5108, name: "旺苍县"}, {id: 510822, topid: 5108, name: "青川县"}, {
		id: 510823,
		topid: 5108,
		name: "剑阁县"
	}, {id: 510824, topid: 5108, name: "苍溪县"}, {id: 510901, topid: 5109, name: "市辖区"}, {
		id: 510903,
		topid: 5109,
		name: "船山区"
	}, {id: 510904, topid: 5109, name: "安居区"}, {id: 510921, topid: 5109, name: "蓬溪县"}, {
		id: 510922,
		topid: 5109,
		name: "射洪县"
	}, {id: 510923, topid: 5109, name: "大英县"}, {id: 511001, topid: 5110, name: "市辖区"}, {
		id: 511002,
		topid: 5110,
		name: "市中区"
	}, {id: 511011, topid: 5110, name: "东兴区"}, {id: 511024, topid: 5110, name: "威远县"}, {
		id: 511025,
		topid: 5110,
		name: "资中县"
	}, {id: 511028, topid: 5110, name: "隆昌县"}, {id: 511101, topid: 5111, name: "市辖区"}, {
		id: 511102,
		topid: 5111,
		name: "市中区"
	}, {id: 511111, topid: 5111, name: "沙湾区"}, {id: 511112, topid: 5111, name: "五通桥区"}, {
		id: 511113,
		topid: 5111,
		name: "金口河区"
	}, {id: 511123, topid: 5111, name: "犍为县"}, {id: 511124, topid: 5111, name: "井研县"}, {
		id: 511126,
		topid: 5111,
		name: "夹江县"
	}, {id: 511129, topid: 5111, name: "沐川县"}, {id: 511132, topid: 5111, name: "峨边彝族自治县"}, {
		id: 511133,
		topid: 5111,
		name: "马边彝族自治县"
	}, {id: 511181, topid: 5111, name: "峨眉山市"}, {id: 511301, topid: 5113, name: "市辖区"}, {
		id: 511302,
		topid: 5113,
		name: "顺庆区"
	}, {id: 511303, topid: 5113, name: "高坪区"}, {id: 511304, topid: 5113, name: "嘉陵区"}, {
		id: 511321,
		topid: 5113,
		name: "南部县"
	}, {id: 511322, topid: 5113, name: "营山县"}, {id: 511323, topid: 5113, name: "蓬安县"}, {
		id: 511324,
		topid: 5113,
		name: "仪陇县"
	}, {id: 511325, topid: 5113, name: "西充县"}, {id: 511381, topid: 5113, name: "阆中市"}, {
		id: 511401,
		topid: 5114,
		name: "市辖区"
	}, {id: 511402, topid: 5114, name: "东坡区"}, {id: 511421, topid: 5114, name: "仁寿县"}, {
		id: 511422,
		topid: 5114,
		name: "彭山县"
	}, {id: 511423, topid: 5114, name: "洪雅县"}, {id: 511424, topid: 5114, name: "丹棱县"}, {
		id: 511425,
		topid: 5114,
		name: "青神县"
	}, {id: 511501, topid: 5115, name: "市辖区"}, {id: 511502, topid: 5115, name: "翠屏区"}, {
		id: 511521,
		topid: 5115,
		name: "宜宾县"
	}, {id: 511522, topid: 5115, name: "南溪县"}, {id: 511523, topid: 5115, name: "江安县"}, {
		id: 511524,
		topid: 5115,
		name: "长宁县"
	}, {id: 511525, topid: 5115, name: "高县"}, {id: 511526, topid: 5115, name: "珙县"}, {
		id: 511527,
		topid: 5115,
		name: "筠连县"
	}, {id: 511528, topid: 5115, name: "兴文县"}, {id: 511529, topid: 5115, name: "屏山县"}, {
		id: 511601,
		topid: 5116,
		name: "市辖区"
	}, {id: 511602, topid: 5116, name: "广安区"}, {id: 511621, topid: 5116, name: "岳池县"}, {
		id: 511622,
		topid: 5116,
		name: "武胜县"
	}, {id: 511623, topid: 5116, name: "邻水县"}, {id: 511681, topid: 5116, name: "华蓥市"}, {
		id: 511701,
		topid: 5117,
		name: "市辖区"
	}, {id: 511702, topid: 5117, name: "通川区"}, {id: 511721, topid: 5117, name: "达县"}, {
		id: 511722,
		topid: 5117,
		name: "宣汉县"
	}, {id: 511723, topid: 5117, name: "开江县"}, {id: 511724, topid: 5117, name: "大竹县"}, {
		id: 511725,
		topid: 5117,
		name: "渠县"
	}, {id: 511781, topid: 5117, name: "万源市"}, {id: 511801, topid: 5118, name: "市辖区"}, {
		id: 511802,
		topid: 5118,
		name: "雨城区"
	}, {id: 511821, topid: 5118, name: "名山县"}, {id: 511822, topid: 5118, name: "荥经县"}, {
		id: 511823,
		topid: 5118,
		name: "汉源县"
	}, {id: 511824, topid: 5118, name: "石棉县"}, {id: 511825, topid: 5118, name: "天全县"}, {
		id: 511826,
		topid: 5118,
		name: "芦山县"
	}, {id: 511827, topid: 5118, name: "宝兴县"}, {id: 511901, topid: 5119, name: "市辖区"}, {
		id: 511902,
		topid: 5119,
		name: "巴州区"
	}, {id: 511921, topid: 5119, name: "通江县"}, {id: 511922, topid: 5119, name: "南江县"}, {
		id: 511923,
		topid: 5119,
		name: "平昌县"
	}, {id: 512001, topid: 5120, name: "市辖区"}, {id: 512002, topid: 5120, name: "雁江区"}, {
		id: 512021,
		topid: 5120,
		name: "安岳县"
	}, {id: 512022, topid: 5120, name: "乐至县"}, {id: 512081, topid: 5120, name: "简阳市"}, {
		id: 513221,
		topid: 5132,
		name: "汶川县"
	}, {id: 513222, topid: 5132, name: "理县"}, {id: 513223, topid: 5132, name: "茂县"}, {
		id: 513224,
		topid: 5132,
		name: "松潘县"
	}, {id: 513225, topid: 5132, name: "九寨沟县"}, {id: 513226, topid: 5132, name: "金川县"}, {
		id: 513227,
		topid: 5132,
		name: "小金县"
	}, {id: 513228, topid: 5132, name: "黑水县"}, {id: 513229, topid: 5132, name: "马尔康县"}, {
		id: 513230,
		topid: 5132,
		name: "壤塘县"
	}, {id: 513231, topid: 5132, name: "阿坝县"}, {id: 513232, topid: 5132, name: "若尔盖县"}, {
		id: 513233,
		topid: 5132,
		name: "红原县"
	}, {id: 513321, topid: 5133, name: "康定县"}, {id: 513322, topid: 5133, name: "泸定县"}, {
		id: 513323,
		topid: 5133,
		name: "丹巴县"
	}, {id: 513324, topid: 5133, name: "九龙县"}, {id: 513325, topid: 5133, name: "雅江县"}, {
		id: 513326,
		topid: 5133,
		name: "道孚县"
	}, {id: 513327, topid: 5133, name: "炉霍县"}, {id: 513328, topid: 5133, name: "甘孜县"}, {
		id: 513329,
		topid: 5133,
		name: "新龙县"
	}, {id: 513330, topid: 5133, name: "德格县"}, {id: 513331, topid: 5133, name: "白玉县"}, {
		id: 513332,
		topid: 5133,
		name: "石渠县"
	}, {id: 513333, topid: 5133, name: "色达县"}, {id: 513334, topid: 5133, name: "理塘县"}, {
		id: 513335,
		topid: 5133,
		name: "巴塘县"
	}, {id: 513336, topid: 5133, name: "乡城县"}, {id: 513337, topid: 5133, name: "稻城县"}, {
		id: 513338,
		topid: 5133,
		name: "得荣县"
	}, {id: 513401, topid: 5134, name: "西昌市"}, {id: 513422, topid: 5134, name: "木里藏族自治县"}, {
		id: 513423,
		topid: 5134,
		name: "盐源县"
	}, {id: 513424, topid: 5134, name: "德昌县"}, {id: 513425, topid: 5134, name: "会理县"}, {
		id: 513426,
		topid: 5134,
		name: "会东县"
	}, {id: 513427, topid: 5134, name: "宁南县"}, {id: 513428, topid: 5134, name: "普格县"}, {
		id: 513429,
		topid: 5134,
		name: "布拖县"
	}, {id: 513430, topid: 5134, name: "金阳县"}, {id: 513431, topid: 5134, name: "昭觉县"}, {
		id: 513432,
		topid: 5134,
		name: "喜德县"
	}, {id: 513433, topid: 5134, name: "冕宁县"}, {id: 513434, topid: 5134, name: "越西县"}, {
		id: 513435,
		topid: 5134,
		name: "甘洛县"
	}, {id: 513436, topid: 5134, name: "美姑县"}, {id: 513437, topid: 5134, name: "雷波县"}, {
		id: 520101,
		topid: 5201,
		name: "市辖区"
	}, {id: 520102, topid: 5201, name: "南明区"}, {id: 520103, topid: 5201, name: "云岩区"}, {
		id: 520111,
		topid: 5201,
		name: "花溪区"
	}, {id: 520112, topid: 5201, name: "乌当区"}, {id: 520113, topid: 5201, name: "白云区"}, {
		id: 520114,
		topid: 5201,
		name: "小河区"
	}, {id: 520121, topid: 5201, name: "开阳县"}, {id: 520122, topid: 5201, name: "息烽县"}, {
		id: 520123,
		topid: 5201,
		name: "修文县"
	}, {id: 520181, topid: 5201, name: "清镇市"}, {id: 520201, topid: 5202, name: "钟山区"}, {
		id: 520203,
		topid: 5202,
		name: "六枝特区"
	}, {id: 520221, topid: 5202, name: "水城县"}, {id: 520222, topid: 5202, name: "盘县"}, {
		id: 520301,
		topid: 5203,
		name: "市辖区"
	}, {id: 520302, topid: 5203, name: "红花岗区"}, {id: 520303, topid: 5203, name: "汇川区"}, {
		id: 520321,
		topid: 5203,
		name: "遵义县"
	}, {id: 520322, topid: 5203, name: "桐梓县"}, {id: 520323, topid: 5203, name: "绥阳县"}, {
		id: 520324,
		topid: 5203,
		name: "正安县"
	}, {id: 520325, topid: 5203, name: "道真仡佬族苗族自治县"}, {id: 520326, topid: 5203, name: "务川仡佬族苗族自治县"}, {
		id: 520327,
		topid: 5203,
		name: "凤冈县"
	}, {id: 520328, topid: 5203, name: "湄潭县"}, {id: 520329, topid: 5203, name: "余庆县"}, {
		id: 520330,
		topid: 5203,
		name: "习水县"
	}, {id: 520381, topid: 5203, name: "赤水市"}, {id: 520382, topid: 5203, name: "仁怀市"}, {
		id: 520401,
		topid: 5204,
		name: "市辖区"
	}, {id: 520402, topid: 5204, name: "西秀区"}, {id: 520421, topid: 5204, name: "平坝县"}, {
		id: 520422,
		topid: 5204,
		name: "普定县"
	}, {id: 520423, topid: 5204, name: "镇宁布依族苗族自治县"}, {id: 520424, topid: 5204, name: "关岭布依族苗族自治县"}, {
		id: 520425,
		topid: 5204,
		name: "紫云苗族布依族自治县"
	}, {id: 522201, topid: 5222, name: "铜仁市"}, {id: 522222, topid: 5222, name: "江口县"}, {
		id: 522223,
		topid: 5222,
		name: "玉屏侗族自治县"
	}, {id: 522224, topid: 5222, name: "石阡县"}, {id: 522225, topid: 5222, name: "思南县"}, {
		id: 522226,
		topid: 5222,
		name: "印江土家族苗族自治县"
	}, {id: 522227, topid: 5222, name: "德江县"}, {id: 522228, topid: 5222, name: "沿河土家族自治县"}, {
		id: 522229,
		topid: 5222,
		name: "松桃苗族自治县"
	}, {id: 522230, topid: 5222, name: "万山特区"}, {id: 522301, topid: 5223, name: "兴义市"}, {
		id: 522322,
		topid: 5223,
		name: "兴仁县"
	}, {id: 522323, topid: 5223, name: "普安县"}, {id: 522324, topid: 5223, name: "晴隆县"}, {
		id: 522325,
		topid: 5223,
		name: "贞丰县"
	}, {id: 522326, topid: 5223, name: "望谟县"}, {id: 522327, topid: 5223, name: "册亨县"}, {
		id: 522328,
		topid: 5223,
		name: "安龙县"
	}, {id: 522401, topid: 5224, name: "毕节市"}, {id: 522422, topid: 5224, name: "大方县"}, {
		id: 522423,
		topid: 5224,
		name: "黔西县"
	}, {id: 522424, topid: 5224, name: "金沙县"}, {id: 522425, topid: 5224, name: "织金县"}, {
		id: 522426,
		topid: 5224,
		name: "纳雍县"
	}, {id: 522427, topid: 5224, name: "威宁彝族回族苗族自治县"}, {id: 522428, topid: 5224, name: "赫章县"}, {
		id: 522601,
		topid: 5226,
		name: "凯里市"
	}, {id: 522622, topid: 5226, name: "黄平县"}, {id: 522623, topid: 5226, name: "施秉县"}, {
		id: 522624,
		topid: 5226,
		name: "三穗县"
	}, {id: 522625, topid: 5226, name: "镇远县"}, {id: 522626, topid: 5226, name: "岑巩县"}, {
		id: 522627,
		topid: 5226,
		name: "天柱县"
	}, {id: 522628, topid: 5226, name: "锦屏县"}, {id: 522629, topid: 5226, name: "剑河县"}, {
		id: 522630,
		topid: 5226,
		name: "台江县"
	}, {id: 522631, topid: 5226, name: "黎平县"}, {id: 522632, topid: 5226, name: "榕江县"}, {
		id: 522633,
		topid: 5226,
		name: "从江县"
	}, {id: 522634, topid: 5226, name: "雷山县"}, {id: 522635, topid: 5226, name: "麻江县"}, {
		id: 522636,
		topid: 5226,
		name: "丹寨县"
	}, {id: 522701, topid: 5227, name: "都匀市"}, {id: 522702, topid: 5227, name: "福泉市"}, {
		id: 522722,
		topid: 5227,
		name: "荔波县"
	}, {id: 522723, topid: 5227, name: "贵定县"}, {id: 522725, topid: 5227, name: "瓮安县"}, {
		id: 522726,
		topid: 5227,
		name: "独山县"
	}, {id: 522727, topid: 5227, name: "平塘县"}, {id: 522728, topid: 5227, name: "罗甸县"}, {
		id: 522729,
		topid: 5227,
		name: "长顺县"
	}, {id: 522730, topid: 5227, name: "龙里县"}, {id: 522731, topid: 5227, name: "惠水县"}, {
		id: 522732,
		topid: 5227,
		name: "三都水族自治县"
	}, {id: 530101, topid: 5301, name: "市辖区"}, {id: 530102, topid: 5301, name: "五华区"}, {
		id: 530103,
		topid: 5301,
		name: "盘龙区"
	}, {id: 530111, topid: 5301, name: "官渡区"}, {id: 530112, topid: 5301, name: "西山区"}, {
		id: 530113,
		topid: 5301,
		name: "东川区"
	}, {id: 530121, topid: 5301, name: "呈贡县"}, {id: 530122, topid: 5301, name: "晋宁县"}, {
		id: 530124,
		topid: 5301,
		name: "富民县"
	}, {id: 530125, topid: 5301, name: "宜良县"}, {id: 530126, topid: 5301, name: "石林彝族自治县"}, {
		id: 530127,
		topid: 5301,
		name: "嵩明县"
	}, {id: 530128, topid: 5301, name: "禄劝彝族苗族自治县"}, {id: 530129, topid: 5301, name: "寻甸回族彝族自治县"}, {
		id: 530181,
		topid: 5301,
		name: "安宁市"
	}, {id: 530301, topid: 5303, name: "市辖区"}, {id: 530302, topid: 5303, name: "麒麟区"}, {
		id: 530321,
		topid: 5303,
		name: "马龙县"
	}, {id: 530322, topid: 5303, name: "陆良县"}, {id: 530323, topid: 5303, name: "师宗县"}, {
		id: 530324,
		topid: 5303,
		name: "罗平县"
	}, {id: 530325, topid: 5303, name: "富源县"}, {id: 530326, topid: 5303, name: "会泽县"}, {
		id: 530328,
		topid: 5303,
		name: "沾益县"
	}, {id: 530381, topid: 5303, name: "宣威市"}, {id: 530401, topid: 5304, name: "市辖区"}, {
		id: 530402,
		topid: 5304,
		name: "红塔区"
	}, {id: 530421, topid: 5304, name: "江川县"}, {id: 530422, topid: 5304, name: "澄江县"}, {
		id: 530423,
		topid: 5304,
		name: "通海县"
	}, {id: 530424, topid: 5304, name: "华宁县"}, {id: 530425, topid: 5304, name: "易门县"}, {
		id: 530426,
		topid: 5304,
		name: "峨山彝族自治县"
	}, {id: 530427, topid: 5304, name: "新平彝族傣族自治县"}, {id: 530428, topid: 5304, name: "元江哈尼族彝族傣族自治县"}, {
		id: 530501,
		topid: 5305,
		name: "市辖区"
	}, {id: 530502, topid: 5305, name: "隆阳区"}, {id: 530521, topid: 5305, name: "施甸县"}, {
		id: 530522,
		topid: 5305,
		name: "腾冲县"
	}, {id: 530523, topid: 5305, name: "龙陵县"}, {id: 530524, topid: 5305, name: "昌宁县"}, {
		id: 530601,
		topid: 5306,
		name: "市辖区"
	}, {id: 530602, topid: 5306, name: "昭阳区"}, {id: 530621, topid: 5306, name: "鲁甸县"}, {
		id: 530622,
		topid: 5306,
		name: "巧家县"
	}, {id: 530623, topid: 5306, name: "盐津县"}, {id: 530624, topid: 5306, name: "大关县"}, {
		id: 530625,
		topid: 5306,
		name: "永善县"
	}, {id: 530626, topid: 5306, name: "绥江县"}, {id: 530627, topid: 5306, name: "镇雄县"}, {
		id: 530628,
		topid: 5306,
		name: "彝良县"
	}, {id: 530629, topid: 5306, name: "威信县"}, {id: 530630, topid: 5306, name: "水富县"}, {
		id: 530701,
		topid: 5307,
		name: "市辖区"
	}, {id: 530702, topid: 5307, name: "古城区"}, {id: 530721, topid: 5307, name: "玉龙纳西族自治县"}, {
		id: 530722,
		topid: 5307,
		name: "永胜县"
	}, {id: 530723, topid: 5307, name: "华坪县"}, {id: 530724, topid: 5307, name: "宁蒗彝族自治县"}, {
		id: 530801,
		topid: 5308,
		name: "市辖区"
	}, {id: 530802, topid: 5308, name: "翠云区"}, {id: 530821, topid: 5308, name: "普洱哈尼族彝族自治县"}, {
		id: 530822,
		topid: 5308,
		name: "墨江哈尼族自治县"
	}, {id: 530823, topid: 5308, name: "景东彝族自治县"}, {id: 530824, topid: 5308, name: "景谷傣族彝族自治县"}, {
		id: 530825,
		topid: 5308,
		name: "镇沅彝族哈尼族拉祜族自治县"
	}, {id: 530826, topid: 5308, name: "江城哈尼族彝族自治县"}, {id: 530827, topid: 5308, name: "孟连傣族拉祜族佤族自治县"}, {
		id: 530828,
		topid: 5308,
		name: "澜沧拉祜族自治县"
	}, {id: 530829, topid: 5308, name: "西盟佤族自治县"}, {id: 530901, topid: 5309, name: "市辖区"}, {
		id: 530902,
		topid: 5309,
		name: "临翔区"
	}, {id: 530921, topid: 5309, name: "凤庆县"}, {id: 530922, topid: 5309, name: "云县"}, {
		id: 530923,
		topid: 5309,
		name: "永德县"
	}, {id: 530924, topid: 5309, name: "镇康县"}, {id: 530925, topid: 5309, name: "双江拉祜族佤族布朗族傣族自治县"}, {
		id: 530926,
		topid: 5309,
		name: "耿马傣族佤族自治县"
	}, {id: 530927, topid: 5309, name: "沧源佤族自治县"}, {id: 532301, topid: 5323, name: "楚雄市"}, {
		id: 532322,
		topid: 5323,
		name: "双柏县"
	}, {id: 532323, topid: 5323, name: "牟定县"}, {id: 532324, topid: 5323, name: "南华县"}, {
		id: 532325,
		topid: 5323,
		name: "姚安县"
	}, {id: 532326, topid: 5323, name: "大姚县"}, {id: 532327, topid: 5323, name: "永仁县"}, {
		id: 532328,
		topid: 5323,
		name: "元谋县"
	}, {id: 532329, topid: 5323, name: "武定县"}, {id: 532331, topid: 5323, name: "禄丰县"}, {
		id: 532501,
		topid: 5325,
		name: "个旧市"
	}, {id: 532502, topid: 5325, name: "开远市"}, {id: 532522, topid: 5325, name: "蒙自县"}, {
		id: 532523,
		topid: 5325,
		name: "屏边苗族自治县"
	}, {id: 532524, topid: 5325, name: "建水县"}, {id: 532525, topid: 5325, name: "石屏县"}, {
		id: 532526,
		topid: 5325,
		name: "弥勒县"
	}, {id: 532527, topid: 5325, name: "泸西县"}, {id: 532528, topid: 5325, name: "元阳县"}, {
		id: 532529,
		topid: 5325,
		name: "红河县"
	}, {id: 532530, topid: 5325, name: "金平苗族瑶族傣族自治县"}, {id: 532531, topid: 5325, name: "绿春县"}, {
		id: 532532,
		topid: 5325,
		name: "河口瑶族自治县"
	}, {id: 532621, topid: 5326, name: "文山县"}, {id: 532622, topid: 5326, name: "砚山县"}, {
		id: 532623,
		topid: 5326,
		name: "西畴县"
	}, {id: 532624, topid: 5326, name: "麻栗坡县"}, {id: 532625, topid: 5326, name: "马关县"}, {
		id: 532626,
		topid: 5326,
		name: "丘北县"
	}, {id: 532627, topid: 5326, name: "广南县"}, {id: 532628, topid: 5326, name: "富宁县"}, {
		id: 532801,
		topid: 5328,
		name: "景洪市"
	}, {id: 532822, topid: 5328, name: "勐海县"}, {id: 532823, topid: 5328, name: "勐腊县"}, {
		id: 532901,
		topid: 5329,
		name: "大理市"
	}, {id: 532922, topid: 5329, name: "漾濞彝族自治县"}, {id: 532923, topid: 5329, name: "祥云县"}, {
		id: 532924,
		topid: 5329,
		name: "宾川县"
	}, {id: 532925, topid: 5329, name: "弥渡县"}, {id: 532926, topid: 5329, name: "南涧彝族自治县"}, {
		id: 532927,
		topid: 5329,
		name: "巍山彝族回族自治县"
	}, {id: 532928, topid: 5329, name: "永平县"}, {id: 532929, topid: 5329, name: "云龙县"}, {
		id: 532930,
		topid: 5329,
		name: "洱源县"
	}, {id: 532931, topid: 5329, name: "剑川县"}, {id: 532932, topid: 5329, name: "鹤庆县"}, {
		id: 533102,
		topid: 5331,
		name: "瑞丽市"
	}, {id: 533103, topid: 5331, name: "潞西市"}, {id: 533122, topid: 5331, name: "梁河县"}, {
		id: 533123,
		topid: 5331,
		name: "盈江县"
	}, {id: 533124, topid: 5331, name: "陇川县"}, {id: 533321, topid: 5333, name: "泸水县"}, {
		id: 533323,
		topid: 5333,
		name: "福贡县"
	}, {id: 533324, topid: 5333, name: "贡山独龙族怒族自治县"}, {id: 533325, topid: 5333, name: "兰坪白族普米族自治县"}, {
		id: 533421,
		topid: 5334,
		name: "香格里拉县"
	}, {id: 533422, topid: 5334, name: "德钦县"}, {id: 533423, topid: 5334, name: "维西傈僳族自治县"}, {
		id: 540101,
		topid: 5401,
		name: "市辖区"
	}, {id: 540102, topid: 5401, name: "城关区"}, {id: 540121, topid: 5401, name: "林周县"}, {
		id: 540122,
		topid: 5401,
		name: "当雄县"
	}, {id: 540123, topid: 5401, name: "尼木县"}, {id: 540124, topid: 5401, name: "曲水县"}, {
		id: 540125,
		topid: 5401,
		name: "堆龙德庆县"
	}, {id: 540126, topid: 5401, name: "达孜县"}, {id: 540127, topid: 5401, name: "墨竹工卡县"}, {
		id: 542121,
		topid: 5421,
		name: "昌都县"
	}, {id: 542122, topid: 5421, name: "江达县"}, {id: 542123, topid: 5421, name: "贡觉县"}, {
		id: 542124,
		topid: 5421,
		name: "类乌齐县"
	}, {id: 542125, topid: 5421, name: "丁青县"}, {id: 542126, topid: 5421, name: "察雅县"}, {
		id: 542127,
		topid: 5421,
		name: "八宿县"
	}, {id: 542128, topid: 5421, name: "左贡县"}, {id: 542129, topid: 5421, name: "芒康县"}, {
		id: 542132,
		topid: 5421,
		name: "洛隆县"
	}, {id: 542133, topid: 5421, name: "边坝县"}, {id: 542221, topid: 5422, name: "乃东县"}, {
		id: 542222,
		topid: 5422,
		name: "扎囊县"
	}, {id: 542223, topid: 5422, name: "贡嘎县"}, {id: 542224, topid: 5422, name: "桑日县"}, {
		id: 542225,
		topid: 5422,
		name: "琼结县"
	}, {id: 542226, topid: 5422, name: "曲松县"}, {id: 542227, topid: 5422, name: "措美县"}, {
		id: 542228,
		topid: 5422,
		name: "洛扎县"
	}, {id: 542229, topid: 5422, name: "加查县"}, {id: 542231, topid: 5422, name: "隆子县"}, {
		id: 542232,
		topid: 5422,
		name: "错那县"
	}, {id: 542233, topid: 5422, name: "浪卡子县"}, {id: 542301, topid: 5423, name: "日喀则市"}, {
		id: 542322,
		topid: 5423,
		name: "南木林县"
	}, {id: 542323, topid: 5423, name: "江孜县"}, {id: 542324, topid: 5423, name: "定日县"}, {
		id: 542325,
		topid: 5423,
		name: "萨迦县"
	}, {id: 542326, topid: 5423, name: "拉孜县"}, {id: 542327, topid: 5423, name: "昂仁县"}, {
		id: 542328,
		topid: 5423,
		name: "谢通门县"
	}, {id: 542329, topid: 5423, name: "白朗县"}, {id: 542330, topid: 5423, name: "仁布县"}, {
		id: 542331,
		topid: 5423,
		name: "康马县"
	}, {id: 542332, topid: 5423, name: "定结县"}, {id: 542333, topid: 5423, name: "仲巴县"}, {
		id: 542334,
		topid: 5423,
		name: "亚东县"
	}, {id: 542335, topid: 5423, name: "吉隆县"}, {id: 542336, topid: 5423, name: "聂拉木县"}, {
		id: 542337,
		topid: 5423,
		name: "萨嘎县"
	}, {id: 542338, topid: 5423, name: "岗巴县"}, {id: 542421, topid: 5424, name: "那曲县"}, {
		id: 542422,
		topid: 5424,
		name: "嘉黎县"
	}, {id: 542423, topid: 5424, name: "比如县"}, {id: 542424, topid: 5424, name: "聂荣县"}, {
		id: 542425,
		topid: 5424,
		name: "安多县"
	}, {id: 542426, topid: 5424, name: "申扎县"}, {id: 542427, topid: 5424, name: "索县"}, {
		id: 542428,
		topid: 5424,
		name: "班戈县"
	}, {id: 542429, topid: 5424, name: "巴青县"}, {id: 542430, topid: 5424, name: "尼玛县"}, {
		id: 542521,
		topid: 5425,
		name: "普兰县"
	}, {id: 542522, topid: 5425, name: "札达县"}, {id: 542523, topid: 5425, name: "噶尔县"}, {
		id: 542524,
		topid: 5425,
		name: "日土县"
	}, {id: 542525, topid: 5425, name: "革吉县"}, {id: 542526, topid: 5425, name: "改则县"}, {
		id: 542527,
		topid: 5425,
		name: "措勤县"
	}, {id: 542621, topid: 5426, name: "林芝县"}, {id: 542622, topid: 5426, name: "工布江达县"}, {
		id: 542623,
		topid: 5426,
		name: "米林县"
	}, {id: 542624, topid: 5426, name: "墨脱县"}, {id: 542625, topid: 5426, name: "波密县"}, {
		id: 542626,
		topid: 5426,
		name: "察隅县"
	}, {id: 542627, topid: 5426, name: "朗县"}, {id: 610101, topid: 6101, name: "市辖区"}, {
		id: 610102,
		topid: 6101,
		name: "新城区"
	}, {id: 610103, topid: 6101, name: "碑林区"}, {id: 610104, topid: 6101, name: "莲湖区"}, {
		id: 610111,
		topid: 6101,
		name: "灞桥区"
	}, {id: 610112, topid: 6101, name: "未央区"}, {id: 610113, topid: 6101, name: "雁塔区"}, {
		id: 610114,
		topid: 6101,
		name: "阎良区"
	}, {id: 610115, topid: 6101, name: "临潼区"}, {id: 610116, topid: 6101, name: "长安区"}, {
		id: 610122,
		topid: 6101,
		name: "蓝田县"
	}, {id: 610124, topid: 6101, name: "周至县"}, {id: 610125, topid: 6101, name: "户县"}, {
		id: 610126,
		topid: 6101,
		name: "高陵县"
	}, {id: 610201, topid: 6102, name: "市辖区"}, {id: 610202, topid: 6102, name: "王益区"}, {
		id: 610203,
		topid: 6102,
		name: "印台区"
	}, {id: 610204, topid: 6102, name: "耀州区"}, {id: 610222, topid: 6102, name: "宜君县"}, {
		id: 610301,
		topid: 6103,
		name: "市辖区"
	}, {id: 610302, topid: 6103, name: "渭滨区"}, {id: 610303, topid: 6103, name: "金台区"}, {
		id: 610304,
		topid: 6103,
		name: "陈仓区"
	}, {id: 610322, topid: 6103, name: "凤翔县"}, {id: 610323, topid: 6103, name: "岐山县"}, {
		id: 610324,
		topid: 6103,
		name: "扶风县"
	}, {id: 610326, topid: 6103, name: "眉县"}, {id: 610327, topid: 6103, name: "陇县"}, {
		id: 610328,
		topid: 6103,
		name: "千阳县"
	}, {id: 610329, topid: 6103, name: "麟游县"}, {id: 610330, topid: 6103, name: "凤县"}, {
		id: 610331,
		topid: 6103,
		name: "太白县"
	}, {id: 610401, topid: 6104, name: "市辖区"}, {id: 610402, topid: 6104, name: "秦都区"}, {
		id: 610403,
		topid: 6104,
		name: "杨凌区"
	}, {id: 610404, topid: 6104, name: "渭城区"}, {id: 610422, topid: 6104, name: "三原县"}, {
		id: 610423,
		topid: 6104,
		name: "泾阳县"
	}, {id: 610424, topid: 6104, name: "乾县"}, {id: 610425, topid: 6104, name: "礼泉县"}, {
		id: 610426,
		topid: 6104,
		name: "永寿县"
	}, {id: 610427, topid: 6104, name: "彬县"}, {id: 610428, topid: 6104, name: "长武县"}, {
		id: 610429,
		topid: 6104,
		name: "旬邑县"
	}, {id: 610430, topid: 6104, name: "淳化县"}, {id: 610431, topid: 6104, name: "武功县"}, {
		id: 610481,
		topid: 6104,
		name: "兴平市"
	}, {id: 610501, topid: 6105, name: "市辖区"}, {id: 610502, topid: 6105, name: "临渭区"}, {
		id: 610521,
		topid: 6105,
		name: "华县"
	}, {id: 610522, topid: 6105, name: "潼关县"}, {id: 610523, topid: 6105, name: "大荔县"}, {
		id: 610524,
		topid: 6105,
		name: "合阳县"
	}, {id: 610525, topid: 6105, name: "澄城县"}, {id: 610526, topid: 6105, name: "蒲城县"}, {
		id: 610527,
		topid: 6105,
		name: "白水县"
	}, {id: 610528, topid: 6105, name: "富平县"}, {id: 610581, topid: 6105, name: "韩城市"}, {
		id: 610582,
		topid: 6105,
		name: "华阴市"
	}, {id: 610601, topid: 6106, name: "市辖区"}, {id: 610602, topid: 6106, name: "宝塔区"}, {
		id: 610621,
		topid: 6106,
		name: "延长县"
	}, {id: 610622, topid: 6106, name: "延川县"}, {id: 610623, topid: 6106, name: "子长县"}, {
		id: 610624,
		topid: 6106,
		name: "安塞县"
	}, {id: 610625, topid: 6106, name: "志丹县"}, {id: 610626, topid: 6106, name: "吴起县"}, {
		id: 610627,
		topid: 6106,
		name: "甘泉县"
	}, {id: 610628, topid: 6106, name: "富县"}, {id: 610629, topid: 6106, name: "洛川县"}, {
		id: 610630,
		topid: 6106,
		name: "宜川县"
	}, {id: 610631, topid: 6106, name: "黄龙县"}, {id: 610632, topid: 6106, name: "黄陵县"}, {
		id: 610701,
		topid: 6107,
		name: "市辖区"
	}, {id: 610702, topid: 6107, name: "汉台区"}, {id: 610721, topid: 6107, name: "南郑县"}, {
		id: 610722,
		topid: 6107,
		name: "城固县"
	}, {id: 610723, topid: 6107, name: "洋县"}, {id: 610724, topid: 6107, name: "西乡县"}, {
		id: 610725,
		topid: 6107,
		name: "勉县"
	}, {id: 610726, topid: 6107, name: "宁强县"}, {id: 610727, topid: 6107, name: "略阳县"}, {
		id: 610728,
		topid: 6107,
		name: "镇巴县"
	}, {id: 610729, topid: 6107, name: "留坝县"}, {id: 610730, topid: 6107, name: "佛坪县"}, {
		id: 610801,
		topid: 6108,
		name: "市辖区"
	}, {id: 610802, topid: 6108, name: "榆阳区"}, {id: 610821, topid: 6108, name: "神木县"}, {
		id: 610822,
		topid: 6108,
		name: "府谷县"
	}, {id: 610823, topid: 6108, name: "横山县"}, {id: 610824, topid: 6108, name: "靖边县"}, {
		id: 610825,
		topid: 6108,
		name: "定边县"
	}, {id: 610826, topid: 6108, name: "绥德县"}, {id: 610827, topid: 6108, name: "米脂县"}, {
		id: 610828,
		topid: 6108,
		name: "佳县"
	}, {id: 610829, topid: 6108, name: "吴堡县"}, {id: 610830, topid: 6108, name: "清涧县"}, {
		id: 610831,
		topid: 6108,
		name: "子洲县"
	}, {id: 610901, topid: 6109, name: "市辖区"}, {id: 610902, topid: 6109, name: "汉滨区"}, {
		id: 610921,
		topid: 6109,
		name: "汉阴县"
	}, {id: 610922, topid: 6109, name: "石泉县"}, {id: 610923, topid: 6109, name: "宁陕县"}, {
		id: 610924,
		topid: 6109,
		name: "紫阳县"
	}, {id: 610925, topid: 6109, name: "岚皋县"}, {id: 610926, topid: 6109, name: "平利县"}, {
		id: 610927,
		topid: 6109,
		name: "镇坪县"
	}, {id: 610928, topid: 6109, name: "旬阳县"}, {id: 610929, topid: 6109, name: "白河县"}, {
		id: 611001,
		topid: 6110,
		name: "市辖区"
	}, {id: 611002, topid: 6110, name: "商州区"}, {id: 611021, topid: 6110, name: "洛南县"}, {
		id: 611022,
		topid: 6110,
		name: "丹凤县"
	}, {id: 611023, topid: 6110, name: "商南县"}, {id: 611024, topid: 6110, name: "山阳县"}, {
		id: 611025,
		topid: 6110,
		name: "镇安县"
	}, {id: 611026, topid: 6110, name: "柞水县"}, {id: 620101, topid: 6201, name: "市辖区"}, {
		id: 620102,
		topid: 6201,
		name: "城关区"
	}, {id: 620103, topid: 6201, name: "七里河区"}, {id: 620104, topid: 6201, name: "西固区"}, {
		id: 620105,
		topid: 6201,
		name: "安宁区"
	}, {id: 620111, topid: 6201, name: "红古区"}, {id: 620121, topid: 6201, name: "永登县"}, {
		id: 620122,
		topid: 6201,
		name: "皋兰县"
	}, {id: 620123, topid: 6201, name: "榆中县"}, {id: 620201, topid: 6202, name: "市辖区"}, {
		id: 620301,
		topid: 6203,
		name: "市辖区"
	}, {id: 620302, topid: 6203, name: "金川区"}, {id: 620321, topid: 6203, name: "永昌县"}, {
		id: 620401,
		topid: 6204,
		name: "市辖区"
	}, {id: 620402, topid: 6204, name: "白银区"}, {id: 620403, topid: 6204, name: "平川区"}, {
		id: 620421,
		topid: 6204,
		name: "靖远县"
	}, {id: 620422, topid: 6204, name: "会宁县"}, {id: 620423, topid: 6204, name: "景泰县"}, {
		id: 620501,
		topid: 6205,
		name: "市辖区"
	}, {id: 620502, topid: 6205, name: "秦城区"}, {id: 620503, topid: 6205, name: "北道区"}, {
		id: 620521,
		topid: 6205,
		name: "清水县"
	}, {id: 620522, topid: 6205, name: "秦安县"}, {id: 620523, topid: 6205, name: "甘谷县"}, {
		id: 620524,
		topid: 6205,
		name: "武山县"
	}, {id: 620525, topid: 6205, name: "张家川回族自治县"}, {id: 620601, topid: 6206, name: "市辖区"}, {
		id: 620602,
		topid: 6206,
		name: "凉州区"
	}, {id: 620621, topid: 6206, name: "民勤县"}, {id: 620622, topid: 6206, name: "古浪县"}, {
		id: 620623,
		topid: 6206,
		name: "天祝藏族自治县"
	}, {id: 620701, topid: 6207, name: "市辖区"}, {id: 620702, topid: 6207, name: "甘州区"}, {
		id: 620721,
		topid: 6207,
		name: "肃南裕固族自治县"
	}, {id: 620722, topid: 6207, name: "民乐县"}, {id: 620723, topid: 6207, name: "临泽县"}, {
		id: 620724,
		topid: 6207,
		name: "高台县"
	}, {id: 620725, topid: 6207, name: "山丹县"}, {id: 620801, topid: 6208, name: "市辖区"}, {
		id: 620802,
		topid: 6208,
		name: "崆峒区"
	}, {id: 620821, topid: 6208, name: "泾川县"}, {id: 620822, topid: 6208, name: "灵台县"}, {
		id: 620823,
		topid: 6208,
		name: "崇信县"
	}, {id: 620824, topid: 6208, name: "华亭县"}, {id: 620825, topid: 6208, name: "庄浪县"}, {
		id: 620826,
		topid: 6208,
		name: "静宁县"
	}, {id: 620901, topid: 6209, name: "市辖区"}, {id: 620902, topid: 6209, name: "肃州区"}, {
		id: 620921,
		topid: 6209,
		name: "金塔县"
	}, {id: 620922, topid: 6209, name: "瓜州县*"}, {id: 620923, topid: 6209, name: "肃北蒙古族自治县"}, {
		id: 620924,
		topid: 6209,
		name: "阿克塞哈萨克族自治县"
	}, {id: 620981, topid: 6209, name: "玉门市"}, {id: 620982, topid: 6209, name: "敦煌市"}, {
		id: 621001,
		topid: 6210,
		name: "市辖区"
	}, {id: 621002, topid: 6210, name: "西峰区"}, {id: 621021, topid: 6210, name: "庆城县"}, {
		id: 621022,
		topid: 6210,
		name: "环县"
	}, {id: 621023, topid: 6210, name: "华池县"}, {id: 621024, topid: 6210, name: "合水县"}, {
		id: 621025,
		topid: 6210,
		name: "正宁县"
	}, {id: 621026, topid: 6210, name: "宁县"}, {id: 621027, topid: 6210, name: "镇原县"}, {
		id: 621101,
		topid: 6211,
		name: "市辖区"
	}, {id: 621102, topid: 6211, name: "安定区"}, {id: 621121, topid: 6211, name: "通渭县"}, {
		id: 621122,
		topid: 6211,
		name: "陇西县"
	}, {id: 621123, topid: 6211, name: "渭源县"}, {id: 621124, topid: 6211, name: "临洮县"}, {
		id: 621125,
		topid: 6211,
		name: "漳县"
	}, {id: 621126, topid: 6211, name: "岷县"}, {id: 621201, topid: 6212, name: "市辖区"}, {
		id: 621202,
		topid: 6212,
		name: "武都区"
	}, {id: 621221, topid: 6212, name: "成县"}, {id: 621222, topid: 6212, name: "文县"}, {
		id: 621223,
		topid: 6212,
		name: "宕昌县"
	}, {id: 621224, topid: 6212, name: "康县"}, {id: 621225, topid: 6212, name: "西和县"}, {
		id: 621226,
		topid: 6212,
		name: "礼县"
	}, {id: 621227, topid: 6212, name: "徽县"}, {id: 621228, topid: 6212, name: "两当县"}, {
		id: 622901,
		topid: 6229,
		name: "临夏市"
	}, {id: 622921, topid: 6229, name: "临夏县"}, {id: 622922, topid: 6229, name: "康乐县"}, {
		id: 622923,
		topid: 6229,
		name: "永靖县"
	}, {id: 622924, topid: 6229, name: "广河县"}, {id: 622925, topid: 6229, name: "和政县"}, {
		id: 622926,
		topid: 6229,
		name: "东乡族自治县"
	}, {id: 622927, topid: 6229, name: "积石山保安族东乡族撒拉族自治县"}, {id: 623001, topid: 6230, name: "合作市"}, {
		id: 623021,
		topid: 6230,
		name: "临潭县"
	}, {id: 623022, topid: 6230, name: "卓尼县"}, {id: 623023, topid: 6230, name: "舟曲县"}, {
		id: 623024,
		topid: 6230,
		name: "迭部县"
	}, {id: 623025, topid: 6230, name: "玛曲县"}, {id: 623026, topid: 6230, name: "碌曲县"}, {
		id: 623027,
		topid: 6230,
		name: "夏河县"
	}, {id: 630101, topid: 6301, name: "市辖区"}, {id: 630102, topid: 6301, name: "城东区"}, {
		id: 630103,
		topid: 6301,
		name: "城中区"
	}, {id: 630104, topid: 6301, name: "城西区"}, {id: 630105, topid: 6301, name: "城北区"}, {
		id: 630121,
		topid: 6301,
		name: "大通回族土族自治县"
	}, {id: 630122, topid: 6301, name: "湟中县"}, {id: 630123, topid: 6301, name: "湟源县"}, {
		id: 632121,
		topid: 6321,
		name: "平安县"
	}, {id: 632122, topid: 6321, name: "民和回族土族自治县"}, {id: 632123, topid: 6321, name: "乐都县"}, {
		id: 632126,
		topid: 6321,
		name: "互助土族自治县"
	}, {id: 632127, topid: 6321, name: "化隆回族自治县"}, {id: 632128, topid: 6321, name: "循化撒拉族自治县"}, {
		id: 632221,
		topid: 6322,
		name: "门源回族自治县"
	}, {id: 632222, topid: 6322, name: "祁连县"}, {id: 632223, topid: 6322, name: "海晏县"}, {
		id: 632224,
		topid: 6322,
		name: "刚察县"
	}, {id: 632321, topid: 6323, name: "同仁县"}, {id: 632322, topid: 6323, name: "尖扎县"}, {
		id: 632323,
		topid: 6323,
		name: "泽库县"
	}, {id: 632324, topid: 6323, name: "河南蒙古族自治县"}, {id: 632521, topid: 6325, name: "共和县"}, {
		id: 632522,
		topid: 6325,
		name: "同德县"
	}, {id: 632523, topid: 6325, name: "贵德县"}, {id: 632524, topid: 6325, name: "兴海县"}, {
		id: 632525,
		topid: 6325,
		name: "贵南县"
	}, {id: 632621, topid: 6326, name: "玛沁县"}, {id: 632622, topid: 6326, name: "班玛县"}, {
		id: 632623,
		topid: 6326,
		name: "甘德县"
	}, {id: 632624, topid: 6326, name: "达日县"}, {id: 632625, topid: 6326, name: "久治县"}, {
		id: 632626,
		topid: 6326,
		name: "玛多县"
	}, {id: 632721, topid: 6327, name: "玉树县"}, {id: 632722, topid: 6327, name: "杂多县"}, {
		id: 632723,
		topid: 6327,
		name: "称多县"
	}, {id: 632724, topid: 6327, name: "治多县"}, {id: 632725, topid: 6327, name: "囊谦县"}, {
		id: 632726,
		topid: 6327,
		name: "曲麻莱县"
	}, {id: 632801, topid: 6328, name: "格尔木市"}, {id: 632802, topid: 6328, name: "德令哈市"}, {
		id: 632821,
		topid: 6328,
		name: "乌兰县"
	}, {id: 632822, topid: 6328, name: "都兰县"}, {id: 632823, topid: 6328, name: "天峻县"}, {
		id: 640101,
		topid: 6401,
		name: "市辖区"
	}, {id: 640104, topid: 6401, name: "兴庆区"}, {id: 640105, topid: 6401, name: "西夏区"}, {
		id: 640106,
		topid: 6401,
		name: "金凤区"
	}, {id: 640121, topid: 6401, name: "永宁县"}, {id: 640122, topid: 6401, name: "贺兰县"}, {
		id: 640181,
		topid: 6401,
		name: "灵武市"
	}, {id: 640201, topid: 6402, name: "市辖区"}, {id: 640202, topid: 6402, name: "大武口区"}, {
		id: 640205,
		topid: 6402,
		name: "惠农区"
	}, {id: 640221, topid: 6402, name: "平罗县"}, {id: 640301, topid: 6403, name: "市辖区"}, {
		id: 640302,
		topid: 6403,
		name: "利通区"
	}, {id: 640323, topid: 6403, name: "盐池县"}, {id: 640324, topid: 6403, name: "同心县"}, {
		id: 640381,
		topid: 6403,
		name: "青铜峡市"
	}, {id: 640401, topid: 6404, name: "市辖区"}, {id: 640402, topid: 6404, name: "原州区"}, {
		id: 640422,
		topid: 6404,
		name: "西吉县"
	}, {id: 640423, topid: 6404, name: "隆德县"}, {id: 640424, topid: 6404, name: "泾源县"}, {
		id: 640425,
		topid: 6404,
		name: "彭阳县"
	}, {id: 640501, topid: 6405, name: "市辖区"}, {id: 640502, topid: 6405, name: "沙坡头区"}, {
		id: 640521,
		topid: 6405,
		name: "中宁县"
	}, {id: 640522, topid: 6405, name: "海原县"}, {id: 650101, topid: 6501, name: "市辖区"}, {
		id: 650102,
		topid: 6501,
		name: "天山区"
	}, {id: 650103, topid: 6501, name: "沙依巴克区"}, {id: 650104, topid: 6501, name: "新市区"}, {
		id: 650105,
		topid: 6501,
		name: "水磨沟区"
	}, {id: 650106, topid: 6501, name: "头屯河区"}, {id: 650107, topid: 6501, name: "达坂城区"}, {
		id: 650108,
		topid: 6501,
		name: "东山区"
	}, {id: 650121, topid: 6501, name: "乌鲁木齐县"}, {id: 650201, topid: 6502, name: "市辖区"}, {
		id: 650202,
		topid: 6502,
		name: "独山子区"
	}, {id: 650203, topid: 6502, name: "克拉玛依区"}, {id: 650204, topid: 6502, name: "白碱滩区"}, {
		id: 650205,
		topid: 6502,
		name: "乌尔禾区"
	}, {id: 652101, topid: 6521, name: "吐鲁番市"}, {id: 652122, topid: 6521, name: "鄯善县"}, {
		id: 652123,
		topid: 6521,
		name: "托克逊县"
	}, {id: 652201, topid: 6522, name: "哈密市"}, {id: 652222, topid: 6522, name: "巴里坤哈萨克自治县"}, {
		id: 652223,
		topid: 6522,
		name: "伊吾县"
	}, {id: 652301, topid: 6523, name: "昌吉市"}, {id: 652302, topid: 6523, name: "阜康市"}, {
		id: 652303,
		topid: 6523,
		name: "米泉市"
	}, {id: 652323, topid: 6523, name: "呼图壁县"}, {id: 652324, topid: 6523, name: "玛纳斯县"}, {
		id: 652325,
		topid: 6523,
		name: "奇台县"
	}, {id: 652327, topid: 6523, name: "吉木萨尔县"}, {id: 652328, topid: 6523, name: "木垒哈萨克自治县"}, {
		id: 652701,
		topid: 6527,
		name: "博乐市"
	}, {id: 652722, topid: 6527, name: "精河县"}, {id: 652723, topid: 6527, name: "温泉县"}, {
		id: 652801,
		topid: 6528,
		name: "库尔勒市"
	}, {id: 652822, topid: 6528, name: "轮台县"}, {id: 652823, topid: 6528, name: "尉犁县"}, {
		id: 652824,
		topid: 6528,
		name: "若羌县"
	}, {id: 652825, topid: 6528, name: "且末县"}, {id: 652826, topid: 6528, name: "焉耆回族自治县"}, {
		id: 652827,
		topid: 6528,
		name: "和静县"
	}, {id: 652828, topid: 6528, name: "和硕县"}, {id: 652829, topid: 6528, name: "博湖县"}, {
		id: 652901,
		topid: 6529,
		name: "阿克苏市"
	}, {id: 652922, topid: 6529, name: "温宿县"}, {id: 652923, topid: 6529, name: "库车县"}, {
		id: 652924,
		topid: 6529,
		name: "沙雅县"
	}, {id: 652925, topid: 6529, name: "新和县"}, {id: 652926, topid: 6529, name: "拜城县"}, {
		id: 652927,
		topid: 6529,
		name: "乌什县"
	}, {id: 652928, topid: 6529, name: "阿瓦提县"}, {id: 652929, topid: 6529, name: "柯坪县"}, {
		id: 653001,
		topid: 6530,
		name: "阿图什市"
	}, {id: 653022, topid: 6530, name: "阿克陶县"}, {id: 653023, topid: 6530, name: "阿合奇县"}, {
		id: 653024,
		topid: 6530,
		name: "乌恰县"
	}, {id: 653101, topid: 6531, name: "喀什市"}, {id: 653121, topid: 6531, name: "疏附县"}, {
		id: 653122,
		topid: 6531,
		name: "疏勒县"
	}, {id: 653123, topid: 6531, name: "英吉沙县"}, {id: 653124, topid: 6531, name: "泽普县"}, {
		id: 653125,
		topid: 6531,
		name: "莎车县"
	}, {id: 653126, topid: 6531, name: "叶城县"}, {id: 653127, topid: 6531, name: "麦盖提县"}, {
		id: 653128,
		topid: 6531,
		name: "岳普湖县"
	}, {id: 653129, topid: 6531, name: "伽师县"}, {id: 653130, topid: 6531, name: "巴楚县"}, {
		id: 653131,
		topid: 6531,
		name: "塔什库尔干塔吉克自治县"
	}, {id: 653201, topid: 6532, name: "和田市"}, {id: 653221, topid: 6532, name: "和田县"}, {
		id: 653222,
		topid: 6532,
		name: "墨玉县"
	}, {id: 653223, topid: 6532, name: "皮山县"}, {id: 653224, topid: 6532, name: "洛浦县"}, {
		id: 653225,
		topid: 6532,
		name: "策勒县"
	}, {id: 653226, topid: 6532, name: "于田县"}, {id: 653227, topid: 6532, name: "民丰县"}, {
		id: 654002,
		topid: 6540,
		name: "伊宁市"
	}, {id: 654003, topid: 6540, name: "奎屯市"}, {id: 654021, topid: 6540, name: "伊宁县"}, {
		id: 654022,
		topid: 6540,
		name: "察布查尔锡伯自治县"
	}, {id: 654023, topid: 6540, name: "霍城县"}, {id: 654024, topid: 6540, name: "巩留县"}, {
		id: 654025,
		topid: 6540,
		name: "新源县"
	}, {id: 654026, topid: 6540, name: "昭苏县"}, {id: 654027, topid: 6540, name: "特克斯县"}, {
		id: 654028,
		topid: 6540,
		name: "尼勒克县"
	}, {id: 654201, topid: 6542, name: "塔城市"}, {id: 654202, topid: 6542, name: "乌苏市"}, {
		id: 654221,
		topid: 6542,
		name: "额敏县"
	}, {id: 654223, topid: 6542, name: "沙湾县"}, {id: 654224, topid: 6542, name: "托里县"}, {
		id: 654225,
		topid: 6542,
		name: "裕民县"
	}, {id: 654226, topid: 6542, name: "和布克赛尔蒙古自治县"}, {id: 654301, topid: 6543, name: "阿勒泰市"}, {
		id: 654321,
		topid: 6543,
		name: "布尔津县"
	}, {id: 654322, topid: 6543, name: "富蕴县"}, {id: 654323, topid: 6543, name: "福海县"}, {
		id: 654324,
		topid: 6543,
		name: "哈巴河县"
	}, {id: 654325, topid: 6543, name: "青河县"}, {id: 654326, topid: 6543, name: "吉木乃县"}, {
		id: 659001,
		topid: 6590,
		name: "石河子市"
	}, {id: 659002, topid: 6590, name: "阿拉尔市"}, {id: 659003, topid: 6590, name: "图木舒克市"}, {
		id: 659004,
		topid: 6590,
		name: "五家渠市"
	}];
