/*
 * File: app/view/hung10.js
 * Date: Thu Mar 15 2018 15:29:52 GMT+0700 (SE Asia Standard Time)
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

Ext.define('adc.view.hung10', {
    extend: 'Ext.Container',
    alias: 'widget.hung10',

    requires: [
        'adc.view.hungViewModel9',
        'Ext.Container',
        'Ext.Label',
        'Ext.Button'
    ],

    viewModel: {
        type: 'hung10'
    },
    style: '\'background-image:url("Nam 1.png"); background-size:cover;',
    displayed: false,
    html: '',
    layout: 'vbox',
    masked: false,

    items: [
        {
            xtype: 'container',
            width: '',
            docked: 'top',
            hideOnMaskTap: true,
            html: '',
            margin: '40% 50% 0 50%',
            zIndex: 10,
            layout: 'center',
            items: [
                {
                    xtype: 'label',
                    docked: 'left',
                    html: '<div class="slide-check"></div>',
                    zIndex: 10
                },
                {
                    xtype: 'label',
                    docked: 'right',
                    html: '<div class="slide"></div>'
                },
                {
                    xtype: 'label',
                    html: '<div class="slide-check"></div>'
                }
            ]
        },
        {
            xtype: 'container',
            height: '',
            docked: 'top',
            html: '<div class="slide-duong"></div>',
            margin: '-18 50 0 50'
        },
        {
            xtype: 'container',
            layout: 'center',
            items: [
                {
                    xtype: 'container',
                    height: 106,
                    style: 'tex-align:center;',
                    width: '',
                    docked: 'top',
                    margin: '40% 50% 0 50%',
                    autoSize: false,
                    layout: 'center',
                    items: [
                        {
                            xtype: 'label',
                            height: 38,
                            style: 'text-align:center;',
                            docked: 'top',
                            html: '<h4 class="title-xn">XÁC NHẬN TÀI KHOẢN</h4><p class="content-tb">Số điện thoại bạn đã nhập không tồn tại trong hệ thống, vui lòng thử lại hoặc liên hệ với chúng tôi </p>  '
                        }
                    ]
                },
                {
                    xtype: 'container',
                    docked: 'top',
                    margin: '20%',
                    scrollable: false,
                    layout: 'center',
                    items: [
                        {
                            xtype: 'button',
                            toggleHandler: function(button, pressed) {
                                this.up('main').setActiveItem(1);
                            },
                            cls: 'btn',
                            height: 30,
                            style: 'border-radius:20px;',
                            ui: 'dangnhap',
                            width: 140,
                            margin: '',
                            text: 'Trở lại'
                        },
                        {
                            xtype: 'container',
                            docked: 'bottom',
                            margin: '20 70 0 70',
                            items: [
                                {
                                    xtype: 'label',
                                    defaultListenerScope: true,
                                    itemId: 'mylabel1',
                                    style: 'text-align:center;font-size:9px;',
                                    width: 67,
                                    docked: 'left',
                                    html: '<a class="link" href="">Đăng ký</a>',
                                    margin: '',
                                    listeners: {
                                        tap: 'onButtonTap'
                                    }
                                },
                                {
                                    xtype: 'label',
                                    defaultListenerScope: true,
                                    itemId: 'mylabel2',
                                    style: 'text-align:center;font-size:9px;',
                                    width: 67,
                                    docked: 'right',
                                    html: '<a class="link" href="">Liên hệ</a>',
                                    margin: '',
                                    listeners: {
                                        tap: 'onButtonTap'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],

    onButtonTap: function(button, e, eOpts) {
        alert('Hung dep zai');
    },

    onButtonTap: function(button, e, eOpts) {
        alert('Hung dep zai');
    }

});