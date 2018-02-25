// pages/movie/list/list.js
var start = 0;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    movies: {
      dataList: [],
      total: 0
    }
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
        console.log(res)
        _this.setData({
          'movies.dataList': res.data.subjects,
          'movies.total': res.data.total
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
    wx.request({
      url: 'http://t.yushu.im/v2/movie/in_theaters?start=' + start + '&count= 10',
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        // 滚动到底部追加数据
        for (var i = 0; i < res.data.subjects.length; i++) {
          _this.data.movies.dataList.push(res.data.subjects[i])
        }
        _this.setData({
          'movies.dataList': _this.data.movies.dataList
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }
})