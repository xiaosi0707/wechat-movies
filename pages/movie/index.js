Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFilm: {
      title: '正在热映',
      movies: []
    },
    isSoon: {
      title: '即将上映',
      movies: []
    },
    top250: {
      title: '豆瓣top250',
      movies: []
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/in_theaters?start=0&count=3',
      header: {
        'content-type': 'application/text'
      },
      success: function(res) {
        _this.setData({
          'isFilm.movies': res.data.subjects
        })
      },
      fail: function(err) {
        console.log(err)
      }
    }),
      wx.request({
      url: 'http://t.yushu.im/v2/movie/coming_soon?start=0&count=3',
        header: {
          'content-type': 'application/text'
        },
        success: function (res) {
          _this.setData({
            'isSoon.movies': res.data.subjects
          })
        },
        fail: function (err) {
          console.log(err)
        }
      }),
      wx.request({
      url: 'http://t.yushu.im/v2/movie/top250?start=0&count=3',
        header: {
          'content-type': 'application/text'
        },
        success: function (res) {
          _this.setData({
            'top250.movies': res.data.subjects
          })
        },
        fail: function (err) {
          console.log(err)
        }
      })
  }
})