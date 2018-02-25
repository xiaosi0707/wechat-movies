// pages/movie/list/list.js
var start = 0;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    movies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 动态设置title
    wx.setNavigationBarTitle({
      title: options.title
    })
    var _this = this;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/in_theaters?start=0&count=10',
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        _this.setData({
          'movies': res.data.subjects
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  onScrollLower: function () {
    var _this = this;
    start+=10;
    console.log(start);
    wx.request({
      url: 'http://t.yushu.im/v2/movie/in_theaters?start=' + start + '&count= 10',
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        for (var i = 0; i < res.data.subjects.length; i++) {
          _this.data.movies.push(res.data.subjects[i])
        }
        _this.setData({
          'movies': _this.data.movies
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }
})