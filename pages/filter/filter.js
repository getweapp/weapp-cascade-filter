Page({
  data: {
    filterdata:{},  //筛选条件数据
    showfilter:false, //是否显示下拉筛选
    showfilterindex:null, //显示哪个筛选类目
    cateindex:0,  //一级分类索引
    cateid:null,  //一级分类id
    subcateindex:0, //二级分类索引
    subcateid:null, //二级分类id
    areaindex:0,  //一级城市索引
    areaid:null,  //一级城市id
    subareaindex:0,  //二级城市索引
    subareaid:null, //二级城市id
    testdata:[], //服务集市列表
    scrolltop:null, //滚动位置
    page: 0  //分页
  },
  onLoad: function () { //加载数据渲染页面
    this.fetchTestData();
    this.fetchFilterData();
    // wx.request({
    //   url: '',
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
  },
  fetchFilterData:function(){ //获取筛选条件
    this.setData({
      filterdata:{
        "cate": [
            {
                "id": 0,
                "title": "全部"
            },
            {
                "id": 27,
                "title": "美食",
                "cate_two": [
                    {
                        "id": "27",
                        "title": "全部"
                    },
                    {
                        "id": 4,
                        "title": "其他美食"
                    },
                    {
                        "id": 5,
                        "title": "蒙餐/新疆菜"
                    },
                    {
                        "id": 6,
                        "title": "咖啡/酒吧"
                    },
                    {
                        "id": 7,
                        "title": "汤/粥/炖菜"
                    },
                    {
                        "id": 8,
                        "title": "东南亚菜"
                    },
                    {
                        "id": 9,
                        "title": "京菜/鲁菜"
                    },
                    {
                        "id": 10,
                        "title": "江浙菜"
                    },
                    {
                        "id": 11,
                        "title": "烧烤烤鱼"
                    },
                    {
                        "id": 12,
                        "title": "东北菜/西北菜"
                    },
                    {
                        "id": 13,
                        "title": "粤菜"
                    },
                    {
                        "id": 14,
                        "title": "川湘菜"
                    },
                    {
                        "id": 15,
                        "title": "台湾菜"
                    },
                    {
                        "id": 16,
                        "title": "日韩料理"
                    },
                    {
                        "id": 17,
                        "title": "海鲜"
                    },
                    {
                        "id": 18,
                        "title": "西餐"
                    },
                    {
                        "id": 19,
                        "title": "自助餐"
                    },
                    {
                        "id": 20,
                        "title": "火锅"
                    },
                    {
                        "id": 21,
                        "title": "综合美食"
                    },
                    {
                        "id": 22,
                        "title": "快餐小吃"
                    },
                    {
                        "id": 23,
                        "title": "大排档"
                    }
                ]
            },
            {
                "id": 24,
                "title": "休闲娱乐",
                "cate_two": [
                    {
                        "id": "24",
                        "title": "全部"
                    },
                    {
                        "id": 25,
                        "title": "美容美甲"
                    },
                    {
                        "id": 28,
                        "title": "服装/运动户外"
                    }
                ]
            }
        ],
        "area": [
            {
                "id": 0,
                "name": "全城"
            },
            {
                "id": 12,
                "name": "黄浦区",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 38,
                        "name": "董家渡"
                    },
                    {
                        "id": 39,
                        "name": "外滩"
                    },
                    {
                        "id": 40,
                        "name": "城隍庙"
                    },
                    {
                        "id": 41,
                        "name": "老西门"
                    },
                    {
                        "id": 42,
                        "name": "南京东路"
                    },
                    {
                        "id": 43,
                        "name": "人民广场"
                    }
                ]
            },
            {
                "id": 20,
                "name": "长宁区",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 44,
                        "name": "北新泾"
                    },
                    {
                        "id": 45,
                        "name": "动物园/虹桥机场"
                    },
                    {
                        "id": 46,
                        "name": "上海影城/新华路"
                    },
                    {
                        "id": 47,
                        "name": "虹桥"
                    },
                    {
                        "id": 48,
                        "name": "古北"
                    },
                    {
                        "id": 49,
                        "name": "天山"
                    },
                    {
                        "id": 50,
                        "name": "中山公园"
                    }
                ]
            },
            {
                "id": 21,
                "name": "静安区",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 34,
                        "name": "同乐坊"
                    },
                    {
                        "id": 35,
                        "name": "曹家渡"
                    },
                    {
                        "id": 36,
                        "name": "南京西路"
                    },
                    {
                        "id": 37,
                        "name": "静安寺"
                    }
                ]
            },
            {
                "id": 22,
                "name": "徐汇区",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 51,
                        "name": "音乐学院"
                    },
                    {
                        "id": 52,
                        "name": "上海南站"
                    },
                    {
                        "id": 53,
                        "name": "万体馆"
                    },
                    {
                        "id": 54,
                        "name": "徐家汇"
                    },
                    {
                        "id": 12307,
                        "name": "漕河泾/田林"
                    },
                    {
                        "id": 12308,
                        "name": "复兴西路/丁香花园"
                    },
                    {
                        "id": 12309,
                        "name": "光启城"
                    },
                    {
                        "id": 12310,
                        "name": "衡山路"
                    },
                    {
                        "id": 12311,
                        "name": "龙华"
                    },
                    {
                        "id": 12312,
                        "name": "肇嘉浜路沿线"
                    }
                ]
            },
            {
                "id": 23,
                "name": "浦东新区",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 55,
                        "name": "金桥"
                    },
                    {
                        "id": 56,
                        "name": "塘桥"
                    },
                    {
                        "id": 57,
                        "name": "源深体育中心"
                    },
                    {
                        "id": 58,
                        "name": "上南地区"
                    },
                    {
                        "id": 59,
                        "name": "世纪公园"
                    },
                    {
                        "id": 60,
                        "name": "陆家嘴"
                    },
                    {
                        "id": 61,
                        "name": "八佰伴"
                    },
                    {
                        "id": 12290,
                        "name": "北蔡"
                    },
                    {
                        "id": 12291,
                        "name": "碧云社区"
                    },
                    {
                        "id": 12292,
                        "name": "曹路"
                    },
                    {
                        "id": 12293,
                        "name": "川沙"
                    },
                    {
                        "id": 12294,
                        "name": "高东/杨园"
                    },
                    {
                        "id": 12295,
                        "name": "高行"
                    },
                    {
                        "id": 12296,
                        "name": "惠南镇"
                    },
                    {
                        "id": 12297,
                        "name": "航头"
                    },
                    {
                        "id": 12298,
                        "name": "金桥商业广场"
                    },
                    {
                        "id": 12299,
                        "name": "金杨地区"
                    },
                    {
                        "id": 12300,
                        "name": "康桥/周浦"
                    },
                    {
                        "id": 12301,
                        "name": "临港新城/泥城"
                    },
                    {
                        "id": 12302,
                        "name": "浦东机场/机场镇"
                    },
                    {
                        "id": 12303,
                        "name": "张江"
                    },
                    {
                        "id": 12304,
                        "name": "三林镇"
                    },
                    {
                        "id": 12305,
                        "name": "外高桥"
                    },
                    {
                        "id": 12306,
                        "name": "新场"
                    }
                ]
            },
            {
                "id": 8202,
                "name": "地铁附近",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 12273,
                        "name": "10号线"
                    },
                    {
                        "id": 12274,
                        "name": "10号线支线"
                    },
                    {
                        "id": 12275,
                        "name": "11号线"
                    },
                    {
                        "id": 12276,
                        "name": "1号线"
                    },
                    {
                        "id": 12277,
                        "name": "2号线"
                    },
                    {
                        "id": 12278,
                        "name": "2号线东延"
                    },
                    {
                        "id": 12279,
                        "name": "3号线"
                    },
                    {
                        "id": 12280,
                        "name": "4号线"
                    },
                    {
                        "id": 12281,
                        "name": "5号线"
                    },
                    {
                        "id": 12282,
                        "name": "6号线"
                    },
                    {
                        "id": 12283,
                        "name": "7号线"
                    },
                    {
                        "id": 12284,
                        "name": "8号线"
                    },
                    {
                        "id": 12285,
                        "name": "9号线"
                    },
                    {
                        "id": 12286,
                        "name": "磁悬浮线"
                    },
                    {
                        "id": 12287,
                        "name": "12号线"
                    },
                    {
                        "id": 12288,
                        "name": "13号线"
                    },
                    {
                        "id": 12289,
                        "name": "16号线"
                    }
                ]
            },
            {
                "id": 8203,
                "name": "闵行区",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 12257,
                        "name": "春申地区"
                    },
                    {
                        "id": 12258,
                        "name": "华漕镇"
                    },
                    {
                        "id": 12259,
                        "name": "虹梅路"
                    },
                    {
                        "id": 12260,
                        "name": "虹桥镇"
                    },
                    {
                        "id": 12261,
                        "name": "交大闵行校区"
                    },
                    {
                        "id": 12262,
                        "name": "龙柏地区"
                    },
                    {
                        "id": 12263,
                        "name": "老闵行"
                    },
                    {
                        "id": 12264,
                        "name": "万源城/东兰路"
                    },
                    {
                        "id": 12265,
                        "name": "闵行开发区"
                    },
                    {
                        "id": 12266,
                        "name": "南方商城"
                    },
                    {
                        "id": 12267,
                        "name": "浦江镇"
                    },
                    {
                        "id": 12268,
                        "name": "七宝"
                    },
                    {
                        "id": 12269,
                        "name": "吴泾镇"
                    },
                    {
                        "id": 12270,
                        "name": "新乐坊"
                    },
                    {
                        "id": 12271,
                        "name": "莘庄"
                    },
                    {
                        "id": 12272,
                        "name": "颛桥/北桥"
                    }
                ]
            },
            {
                "id": 8204,
                "name": "卢湾区",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 12252,
                        "name": "打浦桥"
                    },
                    {
                        "id": 12253,
                        "name": "淮海路"
                    },
                    {
                        "id": 12254,
                        "name": "瑞金宾馆区"
                    },
                    {
                        "id": 12255,
                        "name": "日月光中心广场"
                    },
                    {
                        "id": 12256,
                        "name": "新天地"
                    }
                ]
            },
            {
                "id": 8205,
                "name": "杨浦区",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 12247,
                        "name": "黄兴公园"
                    },
                    {
                        "id": 12248,
                        "name": "控江地区"
                    },
                    {
                        "id": 12249,
                        "name": "平凉路"
                    },
                    {
                        "id": 12250,
                        "name": "五角场/大学区"
                    },
                    {
                        "id": 12251,
                        "name": "中原地区"
                    }
                ]
            },
            {
                "id": 8206,
                "name": "普陀区",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 12238,
                        "name": "百联中环/绿洲中环"
                    },
                    {
                        "id": 12239,
                        "name": "曹杨地区"
                    },
                    {
                        "id": 12240,
                        "name": "梅川路"
                    },
                    {
                        "id": 12241,
                        "name": "武宁地区"
                    },
                    {
                        "id": 12242,
                        "name": "月星环球港"
                    },
                    {
                        "id": 12243,
                        "name": "长风公园/华师大"
                    },
                    {
                        "id": 12244,
                        "name": "真如"
                    },
                    {
                        "id": 12245,
                        "name": "中山北路/甘泉地区"
                    },
                    {
                        "id": 12246,
                        "name": "长寿路"
                    }
                ]
            },
            {
                "id": 8207,
                "name": "虹口区",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 12230,
                        "name": "北外滩"
                    },
                    {
                        "id": 12231,
                        "name": "海宁路/七浦路"
                    },
                    {
                        "id": 12232,
                        "name": "虹口龙之梦"
                    },
                    {
                        "id": 12233,
                        "name": "临平路/和平公园"
                    },
                    {
                        "id": 12234,
                        "name": "凉城/江湾镇"
                    },
                    {
                        "id": 12235,
                        "name": "鲁迅公园"
                    },
                    {
                        "id": 12236,
                        "name": "曲阳地区"
                    },
                    {
                        "id": 12237,
                        "name": "四川北路"
                    }
                ]
            },
            {
                "id": 8208,
                "name": "闸北区",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 12219,
                        "name": "北区汽车站"
                    },
                    {
                        "id": 12220,
                        "name": "大宁国际"
                    },
                    {
                        "id": 12221,
                        "name": "大悦城"
                    },
                    {
                        "id": 12222,
                        "name": "火车站"
                    },
                    {
                        "id": 12223,
                        "name": "彭浦镇"
                    },
                    {
                        "id": 12224,
                        "name": "彭浦新村"
                    },
                    {
                        "id": 12225,
                        "name": "市北工业园/汶水路"
                    },
                    {
                        "id": 12226,
                        "name": "盛源生活广场"
                    },
                    {
                        "id": 12227,
                        "name": "上海大学"
                    },
                    {
                        "id": 12228,
                        "name": "西藏北路/中兴路"
                    },
                    {
                        "id": 12229,
                        "name": "闸北公园"
                    }
                ]
            },
            {
                "id": 8209,
                "name": "宝山区",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 12206,
                        "name": "宝山万达广场"
                    },
                    {
                        "id": 12207,
                        "name": "大华地区"
                    },
                    {
                        "id": 12208,
                        "name": "顾村公园"
                    },
                    {
                        "id": 12209,
                        "name": "共富新村"
                    },
                    {
                        "id": 12210,
                        "name": "绿地风尚广场"
                    },
                    {
                        "id": 12211,
                        "name": "美兰湖"
                    },
                    {
                        "id": 12212,
                        "name": "庙行镇"
                    },
                    {
                        "id": 12213,
                        "name": "上海大学"
                    },
                    {
                        "id": 12214,
                        "name": "淞南/高境"
                    },
                    {
                        "id": 12215,
                        "name": "通河/泗塘"
                    },
                    {
                        "id": 12216,
                        "name": "宝山城区/吴淞"
                    },
                    {
                        "id": 12217,
                        "name": "杨行镇"
                    },
                    {
                        "id": 12218,
                        "name": "月浦镇"
                    }
                ]
            },
            {
                "id": 8210,
                "name": "松江区",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 12186,
                        "name": "车墩"
                    },
                    {
                        "id": 12187,
                        "name": "洞泾"
                    },
                    {
                        "id": 12188,
                        "name": "飞航广场"
                    },
                    {
                        "id": 12189,
                        "name": "江学路"
                    },
                    {
                        "id": 12190,
                        "name": "九亭"
                    },
                    {
                        "id": 12191,
                        "name": "开元地中海"
                    },
                    {
                        "id": 12192,
                        "name": "鹿都国际商业广场"
                    },
                    {
                        "id": 12193,
                        "name": "人民北路"
                    },
                    {
                        "id": 12194,
                        "name": "荣乐中路"
                    },
                    {
                        "id": 12195,
                        "name": "松江万达广场"
                    },
                    {
                        "id": 12196,
                        "name": "佘山"
                    },
                    {
                        "id": 12197,
                        "name": "松东路"
                    },
                    {
                        "id": 12198,
                        "name": "松江大学城"
                    },
                    {
                        "id": 12199,
                        "name": "泰晤士小镇"
                    },
                    {
                        "id": 12200,
                        "name": "新理想广场"
                    },
                    {
                        "id": 12201,
                        "name": "新桥"
                    },
                    {
                        "id": 12202,
                        "name": "新松江路"
                    },
                    {
                        "id": 12203,
                        "name": "叶榭镇"
                    },
                    {
                        "id": 12204,
                        "name": "中山中路"
                    },
                    {
                        "id": 12205,
                        "name": "泗泾镇"
                    }
                ]
            },
            {
                "id": 8211,
                "name": "嘉定区",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 12167,
                        "name": "安亭嘉亭荟"
                    },
                    {
                        "id": 12168,
                        "name": "安亭新源路"
                    },
                    {
                        "id": 12169,
                        "name": "安亭镇"
                    },
                    {
                        "id": 12170,
                        "name": "安亭黄渡镇"
                    },
                    {
                        "id": 12171,
                        "name": "博乐广场/州桥老街"
                    },
                    {
                        "id": 12172,
                        "name": "封浜镇"
                    },
                    {
                        "id": 12173,
                        "name": "丰庄"
                    },
                    {
                        "id": 12174,
                        "name": "华亭镇"
                    },
                    {
                        "id": 12175,
                        "name": "戬浜镇"
                    },
                    {
                        "id": 12176,
                        "name": "嘉定镇"
                    },
                    {
                        "id": 12177,
                        "name": "嘉定西/悠活城"
                    },
                    {
                        "id": 12178,
                        "name": "江桥万达广场"
                    },
                    {
                        "id": 12179,
                        "name": "江桥"
                    },
                    {
                        "id": 12180,
                        "name": "嘉定镇仓场路"
                    },
                    {
                        "id": 12181,
                        "name": "疁城新天地"
                    },
                    {
                        "id": 12182,
                        "name": "罗宾森广场"
                    },
                    {
                        "id": 12183,
                        "name": "马陆镇"
                    },
                    {
                        "id": 12184,
                        "name": "南翔"
                    },
                    {
                        "id": 12185,
                        "name": "外冈镇"
                    }
                ]
            },
            {
                "id": 8212,
                "name": "金山区",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 12152,
                        "name": "百联金山购物中心"
                    },
                    {
                        "id": 12153,
                        "name": "枫泾镇"
                    },
                    {
                        "id": 12154,
                        "name": "金山新城"
                    },
                    {
                        "id": 12155,
                        "name": "金山嘴"
                    },
                    {
                        "id": 12156,
                        "name": "蒙山路"
                    },
                    {
                        "id": 12157,
                        "name": "欧尚商业中心"
                    },
                    {
                        "id": 12158,
                        "name": "石化"
                    },
                    {
                        "id": 12159,
                        "name": "亭林镇"
                    },
                    {
                        "id": 12160,
                        "name": "五福商业广场"
                    },
                    {
                        "id": 12161,
                        "name": "卫清路"
                    },
                    {
                        "id": 12162,
                        "name": "卫零路"
                    },
                    {
                        "id": 12163,
                        "name": "万达广场"
                    },
                    {
                        "id": 12164,
                        "name": "易家商业中心"
                    },
                    {
                        "id": 12165,
                        "name": "朱行镇"
                    },
                    {
                        "id": 12166,
                        "name": "朱泾镇"
                    }
                ]
            },
            {
                "id": 8213,
                "name": "青浦区",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 12145,
                        "name": "重固镇"
                    },
                    {
                        "id": 12146,
                        "name": "华新镇"
                    },
                    {
                        "id": 12147,
                        "name": "家乐福/富绅国际"
                    },
                    {
                        "id": 12148,
                        "name": "青浦城区"
                    },
                    {
                        "id": 12149,
                        "name": "徐泾镇"
                    },
                    {
                        "id": 12150,
                        "name": "朱家角"
                    },
                    {
                        "id": 12151,
                        "name": "赵巷镇"
                    }
                ]
            },
            {
                "id": 8214,
                "name": "奉贤区",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 12130,
                        "name": "宝龙城市广场"
                    },
                    {
                        "id": 12131,
                        "name": "奉城镇"
                    },
                    {
                        "id": 12132,
                        "name": "奉浦"
                    },
                    {
                        "id": 12133,
                        "name": "海湾旅游区"
                    },
                    {
                        "id": 12134,
                        "name": "环城南路"
                    },
                    {
                        "id": 12135,
                        "name": "金汇镇"
                    },
                    {
                        "id": 12136,
                        "name": "南桥百联购物中心"
                    },
                    {
                        "id": 12137,
                        "name": "南桥镇"
                    },
                    {
                        "id": 12138,
                        "name": "南桥新城区"
                    },
                    {
                        "id": 12139,
                        "name": "南桥新都汇"
                    },
                    {
                        "id": 12140,
                        "name": "柘林镇"
                    },
                    {
                        "id": 12141,
                        "name": "通阳路"
                    },
                    {
                        "id": 12142,
                        "name": "西渡镇"
                    },
                    {
                        "id": 12143,
                        "name": "易买得"
                    },
                    {
                        "id": 12144,
                        "name": "庄行镇"
                    }
                ]
            },
            {
                "id": 8215,
                "name": "崇明县",
                "zone": [
                    {
                        "id": 0,
                        "name": "全部"
                    },
                    {
                        "id": 12124,
                        "name": "堡镇"
                    },
                    {
                        "id": 12125,
                        "name": "长兴岛"
                    },
                    {
                        "id": 12126,
                        "name": "陈家镇"
                    },
                    {
                        "id": 12127,
                        "name": "东平森林公园"
                    },
                    {
                        "id": 12128,
                        "name": "南门"
                    },
                    {
                        "id": 12129,
                        "name": "西沙湿地"
                    }
                ]
            }
        ]
      }
    })
  },
  fetchTestData:function(){  //获取城市列表
    let _this = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    const perpage = 15;
    this.setData({
      page:this.data.page+1
    })
    const page = this.data.page;
    const newlist = [];
    for (var i = (page-1)*perpage; i < page*perpage; i++) {
      newlist.push({
        "id":i+1,
        "name":"微信小程序下拉刷新上拉加载"+(i+1)
      })
    }
    setTimeout(()=>{
      _this.setData({
        testdata:_this.data.testdata.concat(newlist)
      })
    },1500)
  },
  setFilterPanel: function(e){ //展开筛选面板
    const d = this.data;
    const i = e.currentTarget.dataset.findex;
    if(d.showfilterindex == i){
      this.setData({
        showfilter: false,
        showfilterindex: null
      })
    }else{    
      this.setData({
        showfilter: true,
        showfilterindex:i,
      })
    }
    console.log('显示第几个筛选类别：'+d.showfilterindex);
  },
  setCateIndex:function(e){ //分类一级索引
    const d= this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      cateindex:dataset.cateindex,
      cateid:dataset.cateid,
      subcateindex: d.cateindex==dataset.cateindex ? d.subcateindex:0
    })
    console.log('商家分类：一级id__'+this.data.cateid+',二级id__'+this.data.subcateid);
  },
  setSubcateIndex:function(e){ //分类二级索引
    const dataset = e.currentTarget.dataset;
    this.setData({
      subcateindex:dataset.subcateindex,
      subcateid:dataset.subcateid,
    })
    console.log('商家分类：一级id__'+this.data.cateid+',二级id__'+this.data.subcateid);
  },
  setAreaIndex:function(e){ //地区一级索引
    const d= this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      areaindex:dataset.areaindex,
      areaid:dataset.areaid,
      subareaindex: d.areaindex==dataset.areaindex ? d.subareaindex:0
    })
    console.log('所在地区：一级id__'+this.data.areaid+',二级id__'+this.data.subareaid);
  },
  setSubareaIndex:function(e){ //地区二级索引
    const dataset = e.currentTarget.dataset;
    this.setData({
      subareaindex:dataset.subareaindex,
      subareaid:dataset.subareaid,
    })
    console.log('所在地区：一级id__'+this.data.areaid+',二级id__'+this.data.subareaid);
  },
  hideFilter: function(){ //关闭筛选面板
    this.setData({
      showfilter: false,
      showfilterindex: null
    })
  },
  scrollHandle:function(e){ //滚动事件
    this.setData({
      scrolltop:e.detail.scrollTop
    })
  },
  goToTop:function(){ //回到顶部
    this.setData({
      scrolltop:0
    })
  },
  scrollLoading:function(){ //滚动加载
    this.fetchTestData();
  },
  onPullDownRefresh:function(){ //下拉刷新
    this.setData({
      page:0,
      testdata:[]
    })
    this.fetchTestData();
    this.fetchFilterData();
    setTimeout(()=>{
      wx.stopPullDownRefresh()
    },1000)
  }
})