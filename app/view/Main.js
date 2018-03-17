/*
 * File: app/view/Main.js
 * Date: Sat Mar 17 2018 13:57:44 GMT+0700 (SE Asia Standard Time)
 *
 * This file was generated by Sencha Architect version 4.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('LoginApp.view.Main', {
    extend: 'Ext.Container',
    alias: 'widget.main',

    requires: [
        'LoginApp.view.MainViewModel',
        'LoginApp.view.NewsDetail',
        'LoginApp.view.hung8',
        'Ext.Container'
    ],

    viewModel: {
        type: 'main'
    },
    activeItem: 1,
    layout: 'card',

    items: [
        {
            xtype: 'newsdetail'
        },
        {
            xtype: 'hung8'
        }
    ]

});