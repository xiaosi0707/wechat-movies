// pages/movie/movie-detail/movie-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    var movieId = options.id;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/subject/' + movieId,
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        console.log(res)
        // _this.setData({
        //   'movies.dataList': res.data.subjects,
        //   'movies.total': res.data.total
        // })
        _this.setData({
          movieInfo: res.data
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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