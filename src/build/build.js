({
  appDir  : "",
  baseUrl : "../main",
  name    : '../../node_modules/almond/almond',
  include: [
    'jquery.continuousCalendar',
    'jquery.tinyscrollbar-1.66/jquery.tinyscrollbar',
    'dateutils/DateLocale'
  ],
  insertRequire: ['jquery.continuousCalendar'],
  out     : '../../build/jquery.continuousCalendar-latest-min.js',
  urlArgs : undefined,
  paths   : {
    jquery                : '../build/jqueryStub'
  },
  wrap:{
    startFile:'wrapStart.frag',
    endFile:'wrapEnd.frag'
  }
})
