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
    },
    classify: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    start = 0;
    // 动态设置title
    wx.setNavigationBarTitle({
      title: options.title
    })
    var _this = this;
    if (options.title === '正在热映') {
      this.data.classify = 'in_theaters';
      wx.request({
        url: 'http://t.yushu.im/v2/movie/in_theaters?start=0&count=10',
        header: {
          'content-type': 'application/text'
        },
        success: function (res) {
          _this.setData({
            'movies.dataList': res.data.subjects,
            'movies.total': res.data.total
          })
        },
        fail: function (err) {
          console.log(err)
        }
      })
    }
    else if (options.title === '即将上映') {
      this.data.classify = 'coming_soon';
      wx.request({
        url: 'http://t.yushu.im/v2/movie/coming_soon?start=0&count=10',
        header: {
          'content-type': 'application/text'
        },
        success: function (res) {
          _this.setData({
            'movies.dataList': res.data.subjects,
            'movies.total': res.data.total
          })
        },
        fail: function (err) {
          console.log(err)
        }
      })
    }
    else if (options.title === '豆瓣top250') {
      this.data.classify = 'top250';
      wx.request({
        url: 'http://t.yushu.im/v2/movie/top250?start=0&count=10',
        header: {
          'content-type': 'application/text'
        },
        success: function (res) {
          _this.setData({
            'movies.dataList': res.data.subjects,
            'movies.total': res.data.total
          })
        },
        fail: function (err) {
          console.log(err)
        }
      })
    }
  },
  onScrollLower: function () {
    console.log(this.data)
    var _this = this;
    start+=10;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/'+ this.data.classify +'?start=' + start + '&count= 10',
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