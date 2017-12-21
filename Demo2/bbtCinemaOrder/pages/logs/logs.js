//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },

  eatMeat: function () {

      wx.redirectTo({
      url: '../index/index'
    })
  },
  order: function () {
    console.log("oderdd");


  },

  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
