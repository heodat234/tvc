/*
 * File: app/view/GiftDetail.js
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

Ext.define('LoginApp.view.GiftDetail', {
    extend: 'Ext.Container',
    alias: 'widget.giftdetail',

    requires: [
        'LoginApp.view.LoginPanelViewModel8',
        'Ext.Button',
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'Ext.Label'
    ],

    viewModel: {
        type: 'giftdetail'
    },
    height: '100%',
    padding: '',
    layout: 'vbox',

    items: [
        {
            xtype: 'container',
            height: '8%',
            width: '100%',
            centered: true,
            docked: 'top',
            layout: 'fit',
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'container',
                            width: '50%',
                            layout: 'center',
                            items: [
                                {
                                    xtype: 'button',
                                    height: 30,
                                    style: 'border-radius: 50%;',
                                    ui: 'user-menu-button',
                                    width: 30,
                                    icon: 'true',
                                    iconCls: 'x-fa fa-long-arrow-left',
                                    text: ''
                                }
                            ]
                        },
                        {
                            xtype: 'container'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    style: 'background: url(images/logo.png);background-repeat: no-repeat;background-position: center;background-size:cover;background-size: 80%',
                    width: 450,
                    html: '',
                    layout: 'center'
                },
                {
                    xtype: 'container',
                    width: '50%',
                    layout: 'center',
                    items: [
                        {
                            xtype: 'button',
                            height: 40,
                            style: 'border-radius: 50%;',
                            ui: 'user-menu-button',
                            width: 40,
                            arrow: false,
                            icon: 'true',
                            iconCls: 'x-fa fa-user-circle',
                            text: '',
                            menu: {
                                xtype: 'menu',
                                width: 120,
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        icon: 'true',
                                        iconCls: 'x-fa fa-user',
                                        text: 'Tài khoản'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        icon: 'true',
                                        iconCls: 'x-fa fa-qrcode',
                                        text: 'QR Code'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        icon: 'true',
                                        iconCls: 'x-fa fa-question-circle-o',
                                        text: 'Hỗ trợ'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        icon: 'true',
                                        iconCls: 'x-fa fa-cog',
                                        text: 'Cài đặt'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        icon: 'true',
                                        iconCls: 'x-fa fa-headphones',
                                        text: 'Liên hệ'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        icon: 'true',
                                        iconCls: 'x-fa fa-sign-out',
                                        text: 'Đăng xuất'
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            height: '88%',
            margin: '0 5',
            layout: 'card',
            items: [
                {
                    xtype: 'container',
                    scrollable: false,
                    items: [
                        {
                            xtype: 'container',
                            height: '8%',
                            layout: 'center',
                            items: [
                                {
                                    xtype: 'label',
                                    cls: 'title-container',
                                    height: '10%',
                                    html: 'Giảm giá 20% tại Le Meridian',
                                    margin: ''
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: '92%',
                            items: [
                                {
                                    xtype: 'container',
                                    height: '35%',
                                    layout: 'float',
                                    items: [
                                        {
                                            xtype: 'container',
                                            height: '80%',
                                            style: 'background-color:pink;',
                                            width: '100%'
                                        },
                                        {
                                            xtype: 'container',
                                            height: 75,
                                            width: '100%',
                                            margin: '-45% 0 0 0',
                                            zIndex: 10,
                                            layout: 'center',
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    height: '100%',
                                                    style: 'border-radius:50%;background-color:red;',
                                                    width: 75,
                                                    zIndex: 99,
                                                    layout: 'center',
                                                    items: [
                                                        {
                                                            xtype: 'label',
                                                            html: 'CGV'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    height: '65%',
                                    style: 'background-color:cyan;',
                                    items: [
                                        {
                                            xtype: 'label',
                                            html: 'html text'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            height: '12%',
            style: 'background-color: #2a8daf;',
            layout: 'fit',
            items: [
                {
                    xtype: 'container',
                    height: '100%',
                    width: '50%',
                    layout: 'center',
                    items: [
                        {
                            xtype: 'button',
                            height: 40,
                            style: 'border-radius: 50%;',
                            ui: 'tab-panel-menu',
                            width: 40,
                            icon: 'true',
                            iconCls: 'x-fa fa-home',
                            text: ''
                        },
                        {
                            xtype: 'label',
                            cls: 'tab-panel-menu',
                            html: 'Trang chủ'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    height: '100%',
                    width: '50%',
                    layout: 'center',
                    items: [
                        {
                            xtype: 'button',
                            height: 40,
                            style: 'border-radius: 50%;',
                            ui: 'tab-panel-menu',
                            width: 40,
                            icon: 'true',
                            iconCls: 'x-fa fa-file',
                            text: ''
                        },
                        {
                            xtype: 'label',
                            cls: 'tab-panel-menu',
                            html: 'Tin tức'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    height: '100%',
                    width: '50%',
                    layout: 'center',
                    items: [
                        {
                            xtype: 'button',
                            height: 40,
                            style: 'border-radius: 50%;',
                            ui: 'tab-panel-menu',
                            width: 40,
                            icon: 'true',
                            iconCls: 'x-fa fa-star',
                            text: ''
                        },
                        {
                            xtype: 'label',
                            cls: 'tab-panel-menu',
                            html: 'Sự kiện'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    height: '100%',
                    width: '50%',
                    layout: 'center',
                    items: [
                        {
                            xtype: 'button',
                            height: 40,
                            style: 'border-radius: 50%;',
                            ui: 'tab-panel-menu',
                            width: 40,
                            icon: 'true',
                            iconCls: 'x-fa fa-gift',
                            text: ''
                        },
                        {
                            xtype: 'label',
                            cls: 'tab-panel-menu',
                            html: 'Đặc quyền'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    height: '100%',
                    width: '50%',
                    layout: 'center',
                    items: [
                        {
                            xtype: 'button',
                            height: 40,
                            style: 'border-radius: 50%;',
                            ui: 'tab-panel-menu',
                            width: 40,
                            icon: 'true',
                            iconCls: 'x-fa fa-credit-card',
                            text: ''
                        },
                        {
                            xtype: 'label',
                            cls: 'tab-panel-menu',
                            html: 'Thanh toán'
                        }
                    ]
                }
            ]
        }
    ]

});