AlertTest.statechart = SC.Statechart.create({

  substatesAreConcurrent: true,

  rootState: SC.State.design({
    initialSubstate: 'EMPTY',

    enterState: function (){
      AlertTest.getPath( 'mainPage.mainPane' ).append();
    },

    showAlert: function () {
      this.gotoState('SHOWINGALERT');
    },

    EMPTY: SC.State.design(), // empty state

    SHOWINGALERT: SC.State.design({

      _pane: null,
      enterState: function () {
        this._pane = SC.AlertPane.warn( {
            message: "Are you sure?",
            description: "Press OK/Cancel to set the label",
            layout: {
                centerX: 0,
                centerY: 0,
                width: 350,
                height: 200
            },
            buttons: [
                {
                    title: "OK",
                    action: 'ok',
                },
                {
                    title: "Cancel",
                    action: 'cancel',
                }
            ]
        } )
      },

      ok: function () {
        console.log('ok pressed');
        this.gotoState('EMPTY');
      },

      cancel: function () {
        console.log('cancel pressed');
        this.gotoState('EMPTY');
      },

      exitState: function () {
        this._pane.remove();
      }

    })
  })
})