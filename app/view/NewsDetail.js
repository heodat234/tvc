/*
 * File: app/view/NewsDetail.js
 * Date: Fri Mar 16 2018 12:42:20 GMT+0700 (SE Asia Standard Time)
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

Ext.define('adc.view.NewsDetail', {
    extend: 'Ext.Container',
    alias: 'widget.newsdetail',

    requires: [
        'Ext.Button',
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'Ext.Label',
        'Ext.carousel.Carousel',
        'Ext.Img'
    ],

    height: '100%',
    padding: '',
    layout: 'vbox',

    items: [
        {
            xtype: 'container',
            height: '10%',
            width: '100%',
            centered: true,
            docked: 'top',
            layout: 'fit',
            items: [
                {
                    xtype: 'container',
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
                                    height: 30,
                                    ui: 'user-menu-button',
                                    width: 30,
                                    icon: 'true',
                                    iconCls: 'x-fa fa-arrow-left',
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
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'container',
                            width: '40%'
                        },
                        {
                            xtype: 'container',
                            width: '60%',
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
                                                text: 'Menu Item'
                                            },
                                            {
                                                xtype: 'menuitem',
                                                text: 'Menu Item'
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            height: '85%',
            layout: 'card',
            items: [
                {
                    xtype: 'container',
                    scrollable: 'vertical',
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
                                    html: 'Tin tức 1',
                                    margin: ''
                                },
                                {
                                    xtype: 'container',
                                    docked: 'top'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: '42%',
                            style: 'background-color:pink;',
                            items: [
                                {
                                    xtype: 'carousel',
                                    height: '100%',
                                    items: [
                                        {
                                            xtype: 'image',
                                            height: '100%',
                                            style: 'background-size:cover;',
                                            width: '100%',
                                            src: 'https://i2.wp.com/betterafter50.com/wp-content/uploads/2013/04/Running-For-My-Life.jpg'
                                        },
                                        {
                                            xtype: 'image',
                                            height: '100%',
                                            style: 'background-size:cover;',
                                            width: '100%',
                                            src: 'https://i.ytimg.com/vi/-PsSfuAm-ws/maxresdefault.jpg'
                                        },
                                        {
                                            xtype: 'image',
                                            height: '100%',
                                            style: 'background-size:cover;',
                                            width: '100%',
                                            src: 'http://2.bp.blogspot.com/_0enrTo1IEnQ/S97l9i73r7I/AAAAAAAAAmM/5Qfwk6xbAOY/S1600-R/I.jpg'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: '50%',
                            items: [
                                {
                                    xtype: 'container',
                                    height: '12%',
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'label',
                                            cls: 'title-news',
                                            docked: 'top',
                                            html: 'tin tức 3',
                                            margin: '0 5 '
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    height: '10%',
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'label',
                                            cls: 'detail-time-info',
                                            style: 'margin-top: 0;',
                                            docked: 'bottom',
                                            html: 'Đăng bởi a | 1-1-2018',
                                            margin: '0 5'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    height: '',
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'label',
                                            cls: 'news-content',
                                            style: 'margin-top: 0;',
                                            docked: 'bottom',
                                            html: 'content of news content of newscontent of newscontent of newscontent of newscontent of newscontent of newscontent content of newscontent of newscontent of newscontent of newscontent of newscontent of newscontent of newscontent of newscontent of newscontent of necontent of newscontent of newscontent of newscontent of newscontent of newscontent of newscontent of newswsof news',
                                            margin: '0 5'
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
            height: '15%',
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
                            height: 50,
                            style: 'border-radius: 50%;',
                            ui: 'tab-panel-menu',
                            width: 50,
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
                            height: 50,
                            style: 'border-radius: 50%;',
                            ui: 'tab-panel-menu',
                            width: 50,
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
                            height: 50,
                            style: 'border-radius: 50%;',
                            ui: 'tab-panel-menu',
                            width: 50,
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
                            height: 50,
                            style: 'border-radius: 50%;',
                            ui: 'tab-panel-menu',
                            width: 50,
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
                            height: 50,
                            style: 'border-radius: 50%;',
                            ui: 'tab-panel-menu',
                            width: 50,
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