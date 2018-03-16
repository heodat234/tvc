/*
 * File: app/view/hung9.js
 * Date: Thu Mar 15 2018 15:53:04 GMT+0700 (SE Asia Standard Time)
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

Ext.define('adc.view.hung9', {
    extend: 'Ext.Container',
    alias: 'widget.hung9',

    requires: [
        'adc.view.hungViewModel8',
        'Ext.Container',
        'Ext.Label',
        'Ext.field.Password',
        'Ext.Button'
    ],

    viewModel: {
        type: 'hung9'
    },
    cls: 'container-view',
    height: '100%',
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
                    html: '<div class="slide"></div>'
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
            scrollable: true,
            layout: 'center',
            items: [
                {
                    xtype: 'container',
                    height: 122,
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
                            html: '<h4 class="title-xn">ĐẶT LẠI MẬT KHẨU</h4><p class="content-tb">Vui lòng nhập số điện thoại đã đăng ký</p>  '
                        },
                        {
                            xtype: 'passwordfield',
                            cls: 'textField',
                            height: 31,
                            style: '',
                            width: '100%',
                            docked: 'bottom',
                            inline: true,
                            labelAlign: 'bottom',
                            placeholder: 'Số điện thoại đăng ký',
                            triggers: {
                                foo: {
                                    side: 'left',
                                    cls: 'fa-trigger my-phone-trigger',
                                    
                                }
                            }
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
                            cls: 'btn',
                            height: 30,
                            style: 'text-transform: none;color : #000;font-size: 12px;',
                            ui: 'dangnhap',
                            width: 140,
                            margin: '',
                            text: 'Gửi'
                        },
                        {
                            xtype: 'label',
                            defaultListenerScope: true,
                            itemId: 'mylabel1',
                            style: 'text-align:center;font-size:9px;',
                            docked: 'bottom',
                            html: '<a class="link" href="">Đăng nhập với số điện thoại khác</a>',
                            margin: '10%',
                            listeners: {
                                tap: 'onButtonTap'
                            }
                        }
                    ]
                }
            ]
        }
    ],

    onButtonTap: function(button, e, eOpts) {
        alert('Hung dep zai');
    }

});