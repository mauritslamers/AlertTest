// ==========================================================================
// Project:   JicoWs - mainPage
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/* global AlertTest */

// This page describes the main user interface for your application.
AlertTest.mainPage = SC.Page.design( {
    labelValue: "Unpressed",
    // The main pane is made visible on screen as soon as your app is loaded.
    // Add childViews to this pane for views to display immediately on page
    // load.
    mainPane: SC.MainPane.design( {
        childViews: [ 'toolbarView', 'mainView', 'statusbarView' ],

        // The toolbar
        toolbarView: SC.ToolbarView.design( {
            childViews: [ 'alertButton' ],

            alertButton: SC.ButtonView.design( {
                action: function () {
                    SC.AlertPane.warn( {
                        message: "Are you sure?",
                        description: "Press OK/Cancel to set the label",
                        layout: {
                            centerX: 0,
                            centerY: 0,
                            width: 350
                        },
                        buttons: [
                            {
                                title: "OK",
                                action: 'doOK',
                                target: AlertTest.alertController
                            },
                            {
                                title: "Cancel",
                                action: 'doCancel',
                                target: AlertTest.alertController
                            }
                        ]
                    } );
                },
                layout: {
                    centerX: 0,
                    centerY: 0,
                    width: 80,
                    height: 24
                },
                title: 'Push me'
            } )
        } ),

        mainView: SC.View.design( {
            layout: {
                top: 32,
                bottom: 20
            },
            childViews: [ 'alertLabel' ],
            alertLabel: SC.LabelView.design( {
                layout: {
                    left: 20,
                    centerY: 50,
                    width: 200,
                    height: 20
                },
                valueBinding: 'AlertTest.alertController.labelValue'
            } )
        } ),

        statusbarView: SC.ToolbarView.design( {
            anchorLocation: SC.ANCHOR_BOTTOM,
            size: 20
        } )
    } )

} );
