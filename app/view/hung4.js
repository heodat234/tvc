/*
 * File: app/view/hung4.js
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

Ext.define('LoginApp.view.hung4', {
    extend: 'Ext.Container',
    alias: 'widget.hung4',

    requires: [
        'LoginApp.view.hungViewModel3',
        'Ext.Container',
        'Ext.Label',
        'Ext.field.Text',
        'Ext.Button'
    ],

    viewModel: {
        type: 'hung4'
    },
    style: '\'background-image:url("images/Nam 1.png"); background-size:cover;',
    displayed: false,
    html: '',
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
            layout: 'center',
            items: [
                {
                    xtype: 'container',
                    height: 194,
                    style: 'tex-align:center;',
                    width: '',
                    docked: 'top',
                    margin: '40% 50% 0 50%',
                    autoSize: false,
                    layout: 'center',
                    items: [
                        {
                            xtype: 'textfield',
                            border: false,
                            cls: [
                                'text_dangky',
                                'textField'
                            ],
                            height: 30,
                            name: '',
                            style: '',
                            toFrontOnShow: false,
                            width: '100%',
                            docked: 'bottom',
                            html: '',
                            margin: '',
                            scrollable: false,
                            inline: true,
                            label: '',
                            labelAlign: 'bottom',
                            required: true,
                            inputType: 'password',
                            clearable: false,
                            placeholder: 'Email',
                            triggers: {
                                foo: {
                                    side: 'left',
                                    cls: 'fa-trigger my-mail-trigger',
                                    
                                }
                            }
                        },
                        {
                            xtype: 'textfield',
                            border: false,
                            cls: [
                                'text_dangky',
                                'textField'
                            ],
                            height: 30,
                            name: '',
                            style: '',
                            toFrontOnShow: false,
                            width: '100%',
                            docked: 'bottom',
                            html: '',
                            margin: '',
                            scrollable: false,
                            inline: true,
                            label: '',
                            labelAlign: 'bottom',
                            required: true,
                            inputType: 'password',
                            clearable: false,
                            placeholder: 'Họ và tên',
                            triggers: {
                                foo: {
                                    side: 'left',
                                    cls: 'fa-trigger my-user-trigger',
                                    
                                }
                            }
                        },
                        {
                            xtype: 'textfield',
                            border: false,
                            cls: [
                                'text_dangky',
                                'textField'
                            ],
                            height: 30,
                            name: '',
                            style: '',
                            toFrontOnShow: false,
                            width: '100%',
                            docked: 'bottom',
                            html: '',
                            margin: '',
                            scrollable: false,
                            inline: true,
                            label: '',
                            labelAlign: 'bottom',
                            required: true,
                            inputType: 'password',
                            clearable: false,
                            placeholder: 'Số điện thoại',
                            triggers: {
                                foo: {
                                    side: 'left',
                                    cls: 'fa-trigger my-phone-trigger',
                                    
                                }
                            }
                        },
                        {
                            xtype: 'label',
                            height: 38,
                            style: 'text-align:center;',
                            docked: 'top',
                            html: '<h4 class="title-xn">ĐĂNG KÝ TÀI KHOẢN</h4>  '
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
                            text: 'Đăng ký'
                        },
                        {
                            xtype: 'label',
                            defaultListenerScope: true,
                            itemId: 'mylabel',
                            style: 'text-align:center;font-size:9px;',
                            docked: 'bottom',
                            html: '<span>Đã có tài khoản? <a class="link-dn" href="">ĐĂNG NHẬP</a></span>',
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