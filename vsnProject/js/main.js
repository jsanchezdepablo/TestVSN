require.config({
    baseUrl: 'js',
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        jquery_ui: '../bower_components/jquery-ui/jquery-ui',
        createDialog: 'moduleDialog'
    },
    shim: {
        jquery_ui: {
            exports: "$",
            deps: ['jquery']
        },
    }

});


require(["moduleDialog"], function (createDialog) {
    createDialog.start();


    /* $('.new_element').bind("click", function () {
        createDialog.open();
    });
 */
});