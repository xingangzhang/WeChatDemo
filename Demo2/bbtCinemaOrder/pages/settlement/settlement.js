
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [{

      fid: 'aassafsafdsfsdfsd',
      name: '抱抱堂爆米花',
      price: '18.2',
      count:3,
      totalprice: '0',
      cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg'
    }, {
      fid: 'aassafsafdsfsdfsd',
      name: '下拉肉丝',
      price: '17.1',
      totalprice: '0',
      count: 2,
      cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg'
    }, {
      fid: 'aassafsafdsfsdfsd',
      name: '煲仔记',
      price: '15.0',
      totalprice: '0',
      count: 1,
      cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg'
    }, {
      fid: 'aassafsafdsfsdfsd',
      name: '到家的啊',
      price: '18.3',
      totalprice: '0',
      count: 6,
      cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg'
    }, {
      fid: 'aassafsafdsfsdfsd',
      name: '利是糖',
      price: '18.0',
      totalprice: '0',
      cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg'
    }, {
      fid: 'aassafsafdsfsdfsd',
      name: '抱抱堂爆米花',
      price: '18.0',
      totalprice: '0',
      count: 9,
      cover: 'http://img0.imgtn.bdimg.com/it/u=442360388,43058308&fm=23&gp=0.jpg'
    },],
    totalprice:'',
  },


  eatMeat: function () {

    wx.navigateTo({
      url: '../paysuccess/paysuccess'
    })
  },

  // order: function () {
  //   console.log("oderdd");


  // },

  // onLoad: function () {
  //   this.setData({
  //     logs: (wx.getStorageSync('logs') || []).map(function (log) {
  //       return util.formatTime(new Date(log))
  //     })
  //   })
  // }

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    console.log(options.totalPrice);

     var foodcarArr = getApp().foodcarArr;

    //  this.data.totalprice;
     console.log('load',foodcarArr);

    if((foodcarArr==undefined)||(foodcarArr.length==0)){

    

    }else{
      this.setData({
        goods: foodcarArr,
        totalprice: options.totalPrice,
      });

    }



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("ready");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("show");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})