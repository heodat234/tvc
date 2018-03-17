/*
 * File: app/view/Payment.js
 * Date: Sat Mar 17 2018 14:04:40 GMT+0700 (SE Asia Standard Time)
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

Ext.define('LoginApp.view.Payment', {
    extend: 'Ext.Container',
    alias: 'widget.payment',

    requires: [
        'LoginApp.view.LoginPanelViewModel9',
        'Ext.Button',
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    viewModel: {
        type: 'payment'
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
                    layout: 'center'
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
            height: '87%',
            margin: '5 5 0 5 ',
            layout: 'card',
            items: [
                {
                    xtype: 'container',
                    scrollable: false,
                    items: [
                        {
                            xtype: 'container',
                            height: '8%',
                            style: 'border-bottom:1px solid #b8cfff;',
                            layout: 'center',
                            items: [
                                {
                                    xtype: 'label',
                                    cls: 'title-container',
                                    height: '10%',
                                    html: 'Thanh Toán',
                                    margin: ''
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: '92%',
                            width: '100%',
                            items: [
                                {
                                    xtype: 'list',
                                    cls: 'tpl-bkoldh2e',
                                    width: '100%',
                                    data: [
                                        {
                                            name: 'A2-667755',
                                            owner: 'Tran van a| nguyen thi b',
                                            fleet: 'T2a',
                                            floor: '8',
                                            type_room: 'p2x',
                                            area_water: '12.5m',
                                            area_wall: '11.4m'
                                        },
                                        {
                                            name: 'A2-668855',
                                            owner: 'Tran van C| nguyen thi D',
                                            fleet: 'T2a',
                                            floor: '8',
                                            type_room: 'p2x',
                                            area_water: '12.5m',
                                            area_wall: '11.4m'
                                        },
                                        {
                                            name: 'A2-667785',
                                            owner: 'Tran van G| nguyen thi F',
                                            fleet: 'T2a',
                                            floor: '8',
                                            type_room: 'p2x',
                                            area_water: '12.5m',
                                            area_wall: '11.4m'
                                        },
                                        
                                    ],
                                    layout: 'vbox',
                                    itemTpl: [
                                        '<div class=\'pay-title\'>Apartment:{name}</div>',
                                        '<div class=\'pay-body\'>',
                                        '    <table class=\'pay-table\'>',
                                        '        <tr>',
                                        '            <td colspan=\'3\'><strong>Chủ sở hữu: </strong>{owner}</td>',
                                        '        </tr>',
                                        '        <tr>',
                                        '            <td><strong>Dãy: </strong>{fleet}</td>',
                                        '            <td><strong>Tầng: </strong>{floor}</td>',
                                        '            <td><strong>Diện tích thông thủy: </strong>{area_water}</td>',
                                        '        </tr>',
                                        '        <tr>',
                                        '            <td colspan=\'2\'><strong>Loại căn hộ: </strong>{type_room}</td>',
                                        '            <td><strong>Diện tích tìm tường: </strong>{area_wall}</td>',
                                        '        </tr>',
                                        '    </table>',
                                        '</div>'
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
                            cls: 'menu-bar-button',
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
                            cls: 'menu-bar-button',
                            height: 40,
                            style: 'border-radius: 50%;',
                            ui: 'tab-panel-menu',
                            width: 40,
                            icon: 'true',
                            iconCls: 'x-fa fa-file-text-o',
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
                            cls: 'menu-bar-button',
                            height: 40,
                            style: 'border-radius: 50%;',
                            ui: 'tab-panel-menu',
                            width: 40,
                            icon: 'true',
                            iconCls: 'x-fa fa-star-o',
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
                            cls: 'menu-bar-button',
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
                            cls: 'menu-bar-button',
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