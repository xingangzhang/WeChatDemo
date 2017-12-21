//index.js
//获取应用实例
var app = getApp();
app.foodcarArr;
Page({
  data: {
    //右侧食品item列表
    foodArrItem: [],
    orderFoods: [
      {
        fooditem:
        [{
          fid: 'asd',
          name: '抱抱堂爆米花',
          price: '18.2',
          totalprice: '0',
          cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg',
          // count:0,
        }, {
          fid: 'asdf',
          name: '下拉肉丝',
          price: '17.1',
          totalprice: '0',
          cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg',
          // count: 0,
        }, {
          fid: 'asdfg',
          name: '煲仔记',
          price: '15.0',
          totalprice: '0',
          cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg',
          // count: 0,
        }, {
          fid: 'asdfgh',
          name: '到家的啊',
          price: '18.3',
          totalprice: '0',
          cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg',
          // count: 0,
        }, {
          fid: 'asdfghj',
          name: '利是糖',
          price: '18.0',
          totalprice: '0',
          cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg',
          // count: 0,
        }
        ],
        foodtype: '第一类食品',
      },

      {

        fooditem: [
          {
            fid: 'aassafsafdsfsdfsd',
            name: '爆米花',
            price: '18.0',
            totalprice: '0',
            cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg',
            // count: 0,
          }, {
            fid: 'asd',
            name: '抱抱堂爆米花',
            price: '18.2',
            totalprice: '0',
            cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg',
            // count: 0,
          }, {
            fid: 'aass2233',
            name: '爆米花2',
            price: '18.9',
            totalprice: '0',
            cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg',
            // count: 0,
          }, {
            fid: 'asdfg',
            name: '煲仔记',
            price: '15.0',
            totalprice: '0',
            cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg',
            // count: 0,
          }, {
            fid: 'aassddfff',
            name: '爆米花3',
            price: '18.0',
            totalprice: '0',
            cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg',
            // count: 0,
          }, {
            fid: 'aaaddd',
            name: '打的费花',
            price: '11.7',
            totalprice: '0',
            cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg',
            // count: 0,
          }, {
            fid: 'a1b2',
            name: '大米花sd',
            price: '12.6',
            totalprice: '0',
            cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg',
            // count: 0,
          },
        ],
        foodtype: '第二类食品',

      }
    ],

    orderlist: [{
      foodnum: 203,
      ordertime: '2017-11-23  12:43:21',
      status: 0,
    },
    {
      foodnum: 203,
      ordertime: '2017-11-23  12:43:21',
      status: 2,
    },
    {
      foodnum: 203,
      ordertime: '2017-11-23  12:43:21',
      status: 1,
    },
    {
      foodnum: 203,
      ordertime: '2017-11-23  12:43:21',
      status: 0,
    },
    {
      foodnum: 203,
      ordertime: '2017-11-23  12:43:21',
      status: 2,
    },
    ],
    foodcarArr: [],
    foodcarArrPrice: [],

    bool: true,
    title: '第一类食品',
    /* 右侧scroll内容 */
    clientHeight: 100,

    foodcarHeight: 0,

    leftIndex: 0,
    totalPrice: '0.00',
    totalCount: 0,
  },

  onLoad: function (options) {


    wx.showShareMenu({
      withShareTicket: true
    });


    var arrfood = this.data.orderFoods;
    var arritem = arrfood[0].fooditem;
    this.setData({

      foodArrItem: arritem,
    });

    console.log(options);
    if (options.index == 1) {

      this.setData({
        bool: false,
      });

      wx.setNavigationBarTitle({
        title: '订单记录'
      });

    } else {
      // var arrfood = this.data.orderFoods;
      // var arritem = arrfood[0].fooditem;
      this.setData({
        bool: true,
        // foodArrItem: arritem,
      });
    };

    console.log('onLoad')

    //不能在函数中直接应用this否则会报错
    var that = this;
    var newHeight;
    wx.getSystemInfo({
      success: function (res) {
        newHeight = res.windowHeight - 120,
          console.log('12313', newHeight),
          that.setData({
            clientHeight: newHeight,
          });
      }
    });

  },

  type_item_tap(e) {
    console.log(e.currentTarget.dataset)

    var titleNew = e.currentTarget.dataset.item;
    var itemIndex = e.currentTarget.dataset.index;
    console.log(e.currentTarget.dataset.index);
    var arrfood = this.data.orderFoods;
    var arrnow = arrfood[itemIndex].fooditem;
    var foodcar = this.data.foodcarArr;

    for (var i = 0; i < foodcar.length; i++) {

      for (var j = 0; j < arrnow.length; j++) {
        var obj = foodcar[i];
        var itemObj = arrnow[j];
        // console.log('皆大欢喜', obj.fid,itemObj.fid);

        if (obj.fid == itemObj.fid) {
          arrnow[j].count = foodcar[i].count;
          arrnow[j].totalprice = foodcar[i].totalprice;
        }

      }

    }

    // console.log(arrnow);
    this.setData({
      title: titleNew,
      leftIndex: e.currentTarget.dataset.index,
      foodArrItem: arrnow,
    });



  },
  food_add(e) {
    var idx = e.currentTarget.dataset.idx;
    var OrderFoods = this.data.orderFoods;
    var leftIndex = this.data.leftIndex;
    var newOrderFoods = this.data.foodArrItem;
    var newfoodcarArr = this.data.foodcarArr;


    newOrderFoods[idx].count = (newOrderFoods[idx].count ? newOrderFoods[idx].count : 0) + 1;

    newOrderFoods[idx].totalprice = parseFloat(newOrderFoods[idx].totalprice) + parseFloat(newOrderFoods[idx].price);
    newOrderFoods[idx].totalprice = newOrderFoods[idx].totalprice.toFixed(2);

    // console.log(newOrderFoods[idx].totalprice);


    if (newfoodcarArr.length == 0) {
      newfoodcarArr.push(newOrderFoods[idx]);

    } else {

      var num = 0;
      for (var i = 0; i < newfoodcarArr.length; i++) {
        var obj = newfoodcarArr[i];
        if (obj.fid == newOrderFoods[idx].fid) {
          newfoodcarArr[i].count = newOrderFoods[idx].count;
          newfoodcarArr[i].totalprice = newOrderFoods[idx].totalprice;
          break;
        }
        num++;
      }
      if (num == newfoodcarArr.length) {
        newfoodcarArr.push(newOrderFoods[idx]);
      }
    }

    // newfoodcarArr[idx] = newOrderFoods[idx];
    //计算价格
    var price = parseFloat(this.data.totalPrice) + parseFloat(newOrderFoods[idx].price);
    price = price.toFixed(2);

    var count = this.data.totalCount + 1;


    this.setData({

      foodArrItem: newOrderFoods,
      foodcarArr: newfoodcarArr,
      totalPrice: price,
      totalCount: count,
    });

  },

  food_minus(e) {
    var idx = e.currentTarget.dataset.idx;
    var OrderFoods = this.data.orderFoods;
    var leftIndex = this.data.leftIndex;
    var newOrderFoods = this.data.foodArrItem;

    if (newOrderFoods[idx].count > 0) {
      newOrderFoods[idx].count = (newOrderFoods[idx].count && newOrderFoods[idx].count >= 0 ? newOrderFoods[idx].count : 0) - 1;

      var newfoodcarArr = this.data.foodcarArr;

      //计算价格
      var price = parseFloat(this.data.totalPrice) - parseFloat(newOrderFoods[idx].price);
      price = price.toFixed(2);
      //计算购物车单类总价  
      newOrderFoods[idx].totalprice = parseFloat(newOrderFoods[idx].totalprice) - parseFloat(newOrderFoods[idx].price);
      newOrderFoods[idx].totalprice = newOrderFoods[idx].totalprice.toFixed(2);

      var count = this.data.totalCount - 1;

      //计算购物车
      var newfoodcarArr = this.data.foodcarArr;

      if (newfoodcarArr.length == 0) {

      } else {

        for (var i = 0; i < newfoodcarArr.length; i++) {
          var obj = newfoodcarArr[i];
          if (obj.fid == newOrderFoods[idx].fid) {
            newfoodcarArr[i].count = newOrderFoods[idx].count;
            newfoodcarArr[i].totalprice = newOrderFoods[idx].totalprice;
            break;
          }
        }

      }

      this.setData({
        foodcarArr: newfoodcarArr,
        totalPrice: price,
        totalCount: count,
      })

    } else {

    }

    this.setData({
      foodArrItem: newOrderFoods
    })
    // console.log(e.currentTarget.dataset)

  },

  food_car_add(e) {

    var idx = e.currentTarget.dataset.idx;
    var leftIndex = this.data.leftIndex;

    var newfoodcarArr = this.data.foodcarArr;

    // console.log("dsd", newOrderFoods);

    newfoodcarArr[idx].count = (newfoodcarArr[idx].count ? newfoodcarArr[idx].count : 0) + 1;

    // console.log('++');
    // //计算汇总价格
    var price = parseFloat(this.data.totalPrice) + parseFloat(newfoodcarArr[idx].price);
    price = price.toFixed(2);

    // //计算购物车单类总价  
    newfoodcarArr[idx].totalprice = parseFloat(newfoodcarArr[idx].totalprice) + parseFloat(newfoodcarArr[idx].price);
    newfoodcarArr[idx].totalprice = newfoodcarArr[idx].totalprice.toFixed(2);

    var count = this.data.totalCount + 1;

    var newfoodArrItem = this.data.foodArrItem;

    for (var i = 0; i < newfoodArrItem.length; i++) {
      var obj = newfoodArrItem[i];
      if (obj.fid == newfoodcarArr[idx].fid) {
        newfoodArrItem[i].count = newfoodcarArr[idx].count;
        newfoodArrItem[i].totalprice = newfoodcarArr[idx].totalprice;
        break;
      }
    }
    this.setData({
      foodcarArr: newfoodcarArr,
      totalPrice: price,
      totalCount: count,
      foodArrItem: newfoodArrItem,

    })

  },
  food_car_minus(e) {

    console.log('--');
    var idx = e.currentTarget.dataset.idx;
    var leftIndex = this.data.leftIndex;
    var newfoodcarArr = this.data.foodcarArr;

    newfoodcarArr[idx].count = (newfoodcarArr[idx].count ? newfoodcarArr[idx].count : 0) - 1;

    // console.log('--', newfoodcarArr[idx].count);
    // //计算汇总价格
    var price = parseFloat(this.data.totalPrice) - parseFloat(newfoodcarArr[idx].price);
    price = price.toFixed(2);

    // //计算购物车单类总价  
    newfoodcarArr[idx].totalprice = parseFloat(newfoodcarArr[idx].totalprice) - parseFloat(newfoodcarArr[idx].price);
    newfoodcarArr[idx].totalprice = newfoodcarArr[idx].totalprice.toFixed(2);

    var count = this.data.totalCount - 1;

    var newfoodArrItem = this.data.foodArrItem;

    for (var i = 0; i < newfoodArrItem.length; i++) {
      var obj = newfoodArrItem[i];
      if (obj.fid == newfoodcarArr[idx].fid) {
        newfoodArrItem[i].count = newfoodcarArr[idx].count;
        newfoodArrItem[i].totalprice = newfoodcarArr[idx].totalprice;

      }
    }
    
    this.setData({
      foodcarArr: newfoodcarArr,
      totalPrice: price,
      totalCount: count,
      foodArrItem: newfoodArrItem,

    })



  },
  //顶部 点餐 订单点击事件
  header_click(e) {
    console.log(e.currentTarget.dataset)
    if (e.currentTarget.dataset.idx == '1') {
      wx.setNavigationBarTitle({
        title: '订单记录'
      });

    } else {
      wx.setNavigationBarTitle({
        title: '点餐'
      });

    }
    this.setData({
      bool: (e.currentTarget.dataset.idx == '0')
    })
  },

  finished_click(e) {
    // console.log('123123');


    if (this.data.totalCount == 0) {

      wx.showModal({
        content: "请选择商品后再下单哦~",
        confirmText: "确定",
        cancelText: "取消"
      })

      return;
    };

    app.foodcarArr = this.data.foodcarArr;
    wx.navigateTo({

      url: '../settlement/settlement?totalPrice=' + this.data.totalPrice
      // url: '../settlement/settlement?foodcarArr=' + JSON.stringify(this.data.foodcarArr)
      // url: '../settlement/settlement?foodcarArr=' + this.data.foodcarArr
    })

  },
  order_detail(e) {

    console.log("adad", e.currentTarget.dataset.item);
    var obj = e.currentTarget.dataset.item;

    var index = obj.status;
    if (index == 0) {
      wx.navigateTo({
        url: '../settlement/settlement'
      });

    } else {
      wx.navigateTo({
        url: '../orderdetail/orderdetail'
      });
    }


  },


  showModal: function (e) {

  console.log('123123',this.data.foodcarArr);
    if (this.data.totalCount == 0) {
      return;
    }


    var nowHeight = this.data.foodcarHeight;


    var nowCount = this.data.foodcarArr.length;
    var arr = this.data.foodcarArr;
    for (var i = 0; i < this.data.foodcarArr.length; i++) {
      var obj = arr[i];

      if ((obj == null) || (obj == undefined)||(obj.count==0)) {
        nowCount = nowCount - 1;
      }
    }
    nowHeight = nowCount * 88;


    this.setData({
      foodcarHeight: nowHeight,
    });

    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    });



    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true

    })

    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)

  },

  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },

})



