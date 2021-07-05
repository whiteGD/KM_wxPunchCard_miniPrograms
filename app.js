// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res.code);
      }
    })
    // wx.request({
    //   url: 'http://120.79.207.125:8080/wxPunchCard/api/user/getToken',
    //   method:"GET",
    //   header:{"content-type":"application/json"},
    //   success:function(res){
    //     console.log(res);
    //   }
    // })
  },
  globalData: {
    userInfo: null
  }
})
