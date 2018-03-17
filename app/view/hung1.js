/*
 * File: app/view/hung1.js
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

Ext.define('LoginApp.view.hung1', {
    extend: 'Ext.Container',
    alias: 'widget.hung1',

    requires: [
        'LoginApp.view.hungViewModel1',
        'Ext.Container',
        'Ext.field.Text',
        'Ext.Label',
        'Ext.Button'
    ],

    viewModel: {
        type: 'hung1'
    },
    style: '\'background-image:url("images/Nam 1.png"); background-size:cover;',
    displayed: false,
    html: '',
    layout: 'fit',
    masked: false,

    items: [
        {
            xtype: 'container',
            layout: 'center',
            items: [
                {
                    xtype: 'container',
                    height: 201,
                    style: 'tex-align:center;',
                    width: '',
                    docked: 'top',
                    margin: '60% 50% 0 50%',
                    autoSize: false,
                    layout: 'center',
                    items: [
                        {
                            xtype: 'textfield',
                            border: false,
                            cls: 'textField',
                            height: 30,
                            name: '',
                            style: '',
                            toFrontOnShow: false,
                            width: '100%',
                            docked: 'bottom',
                            html: '',
                            margin: '',
                            scrollable: false,
                            weight: 30,
                            inline: true,
                            label: '',
                            labelAlign: 'bottom',
                            required: true,
                            clearable: false,
                            placeholder: 'Nhập mã xác thực',
                            triggers: {
                                foo: {
                                    side: 'left',
                                    cls: 'fa-trigger my-key-trigger',
                                    
                                }
                            }
                        },
                        {
                            xtype: 'label',
                            style: 'text-align:center;',
                            docked: 'top',
                            html: '<h4 class="title-xn">XÁC NHẬN TÀI KHOẢN</h4><p class="content-tb">Chúng tôi đã gửi một mã xác thực vào số điện thoại của bạn. Vui lòng nhập mã xác thực vào ô dưới đây để đăng nhập vào hệ thống.</p>  '
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
                            height: 30,
                            style: 'border-radius:20px;',
                            ui: 'dangnhap',
                            userCls: 'btn',
                            width: 140,
                            margin: '',
                            text: 'Đăng nhập'
                        },
                        {
                            xtype: 'label',
                            defaultListenerScope: true,
                            itemId: 'mylabel',
                            style: 'text-align:center;font-size:9px;',
                            docked: 'bottom',
                            html: '<span>Chưa nhận được mã xác thực? <b>GỬI LẠI</b></span>',
                            margin: '20%',
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