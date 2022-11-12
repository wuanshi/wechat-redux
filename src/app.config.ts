export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/other/index'
  ],
  subPackages: [
    {
      root: 'pages/sub',
      pages: [
        'detail/index'
      ],
    }
  ],
  // "lazyCodeLoading": "requiredComponents"
  lazyCodeLoading: "requiredComponents",
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
