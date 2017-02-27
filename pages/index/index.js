//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    markers_: [],
    start: {
      lat:0,
      lng:0
    },
    terminal: {
      lat:0,
      lng:0
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  test: function() {
    console.log("asadasa");
  },
  setSta: function() {
    var that = this;
    wx.chooseLocation({
      success: function(res){
        console.log(res)
        that.setData({
          start :{
            lat: res.latitude,
            lng: res.longitude
          },
          // 'map.latitude': res.latitude,  
          // 'map.longitude': res.longitude,  
          markers_: [{
            latitude: res.latitude,  
            longitude: res.longitude,  
            name: res.name,  
            desc: res.address  
          }],  
          // 'map.hasMarkers': true//解决方案  
        }),
        console.log(that)
      },
      fail: function() {
        // fail
        console.log("failed");
      },
      complete: function() {
        // complete
        console.log("complete");
      }
    })
  },
  setTer: function() {
    wx.chooseLocation({
      success: function(res){
        that.setData({
          terminal :{
            lat: res.latitude,
            lng: res.longitude
          }
        })
        console.log(this.data)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
