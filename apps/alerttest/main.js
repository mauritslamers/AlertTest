/* global AlertTest */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
AlertTest.main = function main() {
   // don't do this, use the state chart to do this.
  //AlertTest.getPath( 'mainPage.mainPane' ).append();

  // set the state chart to be default responder, then init it
  var sc = AlertTest.statechart;
  SC.RootResponder.responder.set('defaultResponder', sc); // make default responder
  sc.initStatechart();
};


function main() {
    AlertTest.main();
}
