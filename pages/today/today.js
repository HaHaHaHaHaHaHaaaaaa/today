// pages/today/today.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hisdata:[],
    openIndex:Number
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadHis()
  },
  showMore:function(e){
    const index = e.currentTarget.dataset.index
    if(this.data.openIndex===index){
      this.setData({ 'openIndex': null })
    }else{
      this.setData({ 'openIndex': index })
    }
   
    console.log(e.currentTarget.dataset)
  },
  loadHis:function(){
    //  http://apicloud.mob.com/appstore/history/query?key=144103be6efe8&day=1201
    wx.showLoading()
    wx.request({
      url: 'http://apicloud.mob.com/appstore/history/query', //仅为示例，并非真实的接口地址
      data: {
        key: '144103be6efe8',
        day: '1201'
      },
      method:'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:res=> {
        console.log(res.data.result)
        const data = res.data.result
        this.setData({'hisdata':data})
      },
      fail(err){
        console.log(err)
      },complete(){
        wx.hideLoading()
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