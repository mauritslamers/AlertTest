/* global AlertTest */

AlertTest.alertController = SC.ObjectController.create( {
    labelValue: "Unset",
    doOK: function () {
        this.set( 'labelValue', 'Okay' );
    },

    doCancel: function () {
        this.set( 'labelValue', 'Cancel' );
    }
} );

