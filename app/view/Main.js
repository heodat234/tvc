/*
 * File: app/view/Main.js
 * Date: Fri Mar 16 2018 12:05:39 GMT+0700 (SE Asia Standard Time)
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

Ext.define('adc.view.Main', {
    extend: 'Ext.Container',
    alias: 'widget.main',

    requires: [
        'adc.view.MainViewModel',
        'adc.view.NewsDetail',
        'adc.view.hung8',
        'adc.view.hung4',
        'adc.view.hung2',
        'Ext.Container'
    ],

    viewModel: {
        type: 'main'
    },
    layout: 'card',

    items: [
        {
            xtype: 'newsdetail'
        },
        {
            xtype: 'hung8',
            layout: 'auto'
        },
        {
            xtype: 'hung4'
        },
        {
            xtype: 'hung2'
        }
    ]

});