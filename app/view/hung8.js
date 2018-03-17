/*
 * File: app/view/hung8.js
 * Date: Sat Mar 17 2018 13:45:53 GMT+0700 (SE Asia Standard Time)
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

Ext.define('LoginApp.view.hung8', {
    extend: 'Ext.Container',
    alias: 'widget.hung8',

    requires: [
        'LoginApp.view.hungViewModel7',
        'Ext.Label',
        'Ext.field.Password',
        'Ext.Button',
        'Ext.menu.Menu',
        'Ext.menu.Item'
    ],

    viewModel: {
        type: 'hung8'
    },
    style: '\'background-image:url("images/Nam 1.png"); background-size:cover;',
    displayed: false,
    html: '',
    layout: 'fit',
    masked: false,

    items: [
        {
            xtype: 'container',
            margin: '15 0 0 0',
            items: [
                {
                    xtype: 'container',
                    height: 95,
                    style: 'tex-align:center;',
                    width: '',
                    docked: 'top',
                    margin: '0 50% 0 50%',
                    autoSize: false,
                    layout: 'center',
                    items: [
                        {
                            xtype: 'label',
                            height: 34,
                            style: 'text-align:center;',
                            docked: 'top',
                            html: '<p class="content-tb">XIN CHÀO, LEONARD DO</br>093 747 3880</p> '
                        },
                        {
                            xtype: 'passwordfield',
                            cls: 'textField',
                            height: 32,
                            style: '',
                            width: '100%',
                            docked: 'bottom',
                            inline: true,
                            placeholder: 'Nhập mật khẩu/Vân tay',
                            textAlign: 'center'
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
                            style: 'border-radius:20px;',
                            ui: 'dangnhap',
                            width: 140,
                            margin: '',
                            arrow: false,
                            text: 'Đăng nhập',
                            menu: {
                                xtype: 'menu',
                                width: 120,
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        text: 'Menu Item'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        text: 'Menu Item'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        text: 'Menu Item'
                                    }
                                ]
                            }
                        },
                        {
                            xtype: 'label',
                            defaultListenerScope: true,
                            itemId: 'mylabel',
                            style: 'text-align:center;font-size:9px;',
                            docked: 'bottom',
                            html: '<a class="link" href="">Đăng nhập với số tài khoản khác</a>',
                            margin: '',
                            listeners: {
                                tap: 'onButtonTap'
                            }
                        },
                        {
                            xtype: 'label',
                            defaultListenerScope: true,
                            itemId: 'mylabel1',
                            style: 'text-align:center;font-size:9px;',
                            docked: 'bottom',
                            html: '<a class="link" href="">Quên mật khẩu</a>',
                            margin: '10%',
                            listeners: {
                                tap: 'onButtonTap'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            height: 100,
            style: 'background: url(images/logo.png);background-repeat: no-repeat;background-position: center;background-size:cover;background-size: 80%',
            docked: 'top',
            margin: '70 70 0 70'
        }
    ],

    onButtonTap: function(button, e, eOpts) {
        alert('Hung dep zai');
    },

    onButtonTap: function(button, e, eOpts) {
        alert('Hung dep zai');
    }

});