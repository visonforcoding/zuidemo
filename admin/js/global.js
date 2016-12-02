window._config = {
    pages:[10,20,30,40],
    showDef:30
};

$(function () {
//    $.datetimepicker.setLocale('zh'); //日期选择器插件
    $('.datetimepicker').datetimepicker({lang: 'zh', format: 'Y-m-d H:i:s', timepicker: true,scrollInput: false});
    $('.datepicker').datetimepicker({lang: 'zh', timepicker: false, format: 'Y-m-d'});
    $('.date_timepicker_start').datetimepicker({
        format: 'Y/m/d',
        onShow: function (ct) {
            this.setOptions({
                maxDate: $('.date_timepicker_end').val() ? $('.date_timepicker_end').val() : false
            })
        },
        timepicker: false,
        scrollInput: false,
        lang: 'zh'
    });
    $('.date_timepicker_end').datetimepicker({
        format: 'Y/m/d',
        onShow: function (ct) {
            this.setOptions({
                minDate: $('.date_timepicker_start').val() ? $('.date_timepicker_start').val() : false
            })
        },
        timepicker: false,
        lang: 'zh'
    });
    // 仅选择日期
    //图片选择器
    $('.choiceImg').on('click', function () {
        IMG_OBJ = $(this);
        iframe_index = layer.open({
            type: 2,
            title: '图片管理器',
            shadeClose: true,
            shade: false,
            maxmin: true, //开启最大化最小化按钮
            area: ['960px', '550px'],
            content: '/admin/util/scanImg'
        });
    });
    //图标选择器
    $('.choiceIcon').on('click', function () {
        ICON_OBJ = $(this);
        iframe_index = layer.open({
            type: 2,
            title: '图标选择器',
            shadeClose: true,
            shade: false,
            maxmin: true, //开启最大化最小化按钮
            area: ['960px', '550px'],
            content: '/wpadmin/util/icon'
        });
    });

    //面板的隐藏和显示
    $(".close-panel").on('click', function () {
        $(this).parents('div.panel').find('div.panel-body,div.chart-bar').slideToggle("slow");
    });
    $('[toggle="tooltip"]').tooltip();
});
$.global = {
    simpleTool: [[
            'source', '|', 'undo', 'redo', '|',
            'bold', 'italic', 'underline', 'fontborder', 'strikethrough',
            'pasteplain', '|', 'forecolor', 'backcolor',
            'selectall', 'cleardoc', '|',
            'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
            'indent', '|',
            'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
            'simpleupload', 'insertimage', 'emotion', 'background', '|',
            'horizontal', 'spechars', 'wordimage',
        ]],
};

//图片选择
function  choiceImg(path) {
    layer.msg('图片选取成功', {icon: 6});
    IMG_OBJ.parents('.form-group').find('img').attr('src', path);
    IMG_OBJ.parents('.form-group').find('input').val(path);
    layer.close(iframe_index);
}
//图标选择
function  choiceIcon(path) {
    layer.msg('图标选取成功', {icon: 6});
    //ICON_OBJ.parents('.form-group').find('img').attr('src', path);
    ICON_OBJ.parents('.form-group').find('input').val(path);
    layer.close(iframe_index);
}
//---------------------------------------------------  
// 日期格式化  
// 格式 YYYY/yyyy/YY/yy 表示年份  
// MM/M 月份  
// W/w 星期  
// dd/DD/d/D 日期  
// hh/HH/h/H 时间  
// mm/m 分钟  
// ss/SS/s/S 秒  
//---------------------------------------------------  
Date.prototype.Format = function (formatStr)
{
    var str = formatStr;
    var Week = ['日', '一', '二', '三', '四', '五', '六'];

    str = str.replace(/yyyy|YYYY/, this.getFullYear());
    str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));

    str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? this.getMonth().toString() : '0' + (this.getMonth() + 1));
    str = str.replace(/M/g, (this.getMonth() + 1));

    str = str.replace(/w|W/g, Week[this.getDay()]);

    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
    str = str.replace(/d|D/g, this.getDate());

    str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
    str = str.replace(/h|H/g, this.getHours());
    str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
    str = str.replace(/m/g, this.getMinutes());

    str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
    str = str.replace(/s|S/g, this.getSeconds());

    return str;
};


/**
 * jquery-file-upload 上传插件初始化 消息弹出依赖layer.js
 * @link http://hayageek.com/docs/jquery-upload-file.php#doc
 * @param {type} id 上传触发按钮
 * @param {type} url 
 * @param {type} allowedTypes
 * @returns {undefined}
 */
function initJqupload(id, url, allowedTypes) {
    var uploadObj = $('#' + id).uploadFile({
        url: url,
        returnType: 'json',
        maxFileCount: 1,
        allowedTypes: allowedTypes,
        doneStr: "上传完成",
        dragDrop: false,
        multiple: false,
        showDone: true,
        uploadStr: "上传图片",
        showStatusAfterSuccess: false,
        maxFileCountErrorStr: "不被允许,允许的最大数量为",
        dragDropStr: "<span><b>试试拖动文件上传</b></span>",
        extErrorStr: "类型不允许,允许类型如下:",
        multiDragErrorStr: '这里只能一次上传一张',
        customErrorKeyStr: '上传发生了错误',
        onSuccess: function (files, data, xhr, pd) {
            if (data.status) {
                var dom = $('#' + id), h=dom.attr('h'), w=dom.attr('w');
                dom.prevAll('.img-thumbnail').removeClass('input-img');
                dom.prevAll('.img-thumbnail').find('img').attr('src', data.path);
                dom.prev().val(data.path);
                if(h || w){
                    dom.find('[tag="imgNotice"]').remove();
                    var img = new Image();
                    img.onload = function(){
                        var str = '';
                        if(img.width > w*1.5) str += '实际宽度为'+img.width;
                        if(img.height > h*1.5) str += '实际高度为'+img.height;
                        //if(str) str += ' 超出限制!!';
                        //if(str) dom.prepend('<div tag="imgNotice" style="color:red">'+str+'</div>');
                        if(str){
                            layer.alert('您上传的图片'+str+'已经超出限制，请重新上传',{icon: 5});
                            dom.prev().val('');
                            setTimeout(function(){
                                dom.prevAll('.img-thumbnail').find('img').attr('src', '');
                            },1000)
                        }
                    }
                    img.src = data.path;
                }
            } else {
                uploadObj.reset();
                layer.alert(data.msg);
            }
        },
        onSelect: function (files)
        {
            uploadObj.reset();  //单个图片上传的 委曲求全的办法
        },
        onError: function (files, status, errMsg, pd) {
            console.log(status);
        }
    });
}


/**
 * jquery-file-upload 上传插件初始化 消息弹出依赖layer.js
 * @link http://hayageek.com/docs/jquery-upload-file.php#doc
 * @param {type} id 上传触发按钮
 * @param {type} url 
 * @param {type} allowedTypes
 * @returns {undefined}
 */
function initJquploadAttach(id, url, allowedTypes) {
    var uploadObj = $('#' + id).uploadFile({
        url: url,
        returnType: 'json',
        maxFileCount: 1,
        allowedTypes: allowedTypes,
        doneStr: "上传完成",
        dragDrop: true,
        multiple: false,
        showDone: true,
        uploadStr: "上传",
        showStatusAfterSuccess: true,
        maxFileCountErrorStr: "不被允许,允许的最大数量为",
        dragDropStr: "<span><b>试试拖动文件上传</b></span>",
        extErrorStr: "类型不允许,允许类型如下:",
        multiDragErrorStr: '这里只能一次上传一张',
        customErrorKeyStr: '上传发生了错误',
        onSuccess: function (files, data, xhr, pd) {
            if (data.status) {
                $('#' + id).prev().val(data.path);
                layer.alert(data.msg);
            } else {
                uploadObj.reset();
                layer.alert(data.msg);
            }
        },
        onSelect: function (files)
        {
            uploadObj.reset();  //单个图片上传的 委曲求全的办法
        },
        onError: function (files, status, errMsg, pd) {
            console.log(status);
        }
    });
    return uploadObj;
}
function initJquploadAttachMulti(id, url, allowedTypes, func) {
    var uploadObj = $('#' + id).uploadFile({
        url: url,
        returnType: 'json',
        allowedTypes: allowedTypes,
        doneStr: "上传完成",
        dragDrop: true,
        multiple: true,
        showDone: true,
        uploadStr: "上传",
        showStatusAfterSuccess: true,
        dragDropStr: "<span><b>试试拖动文件上传</b></span>",
        extErrorStr: "类型不允许,允许类型如下:",
        multiDragErrorStr: '这里只能一次上传一张',
        customErrorKeyStr: '上传发生了错误',
        onSuccess: func,
        onSelect: function (files)
        {
            //uploadObj.reset();  //单个图片上传的 委曲求全的办法
        },
        onError: function (files, status, errMsg, pd) {
            console.log(status);
        }
    });
    return uploadObj;
}

$.global = {
    /**
     * 去掉字符串两端空格
     * @param str
     */
    trim: function (str) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    },
    /**
     * 封装ajax
     * @param {type} obj
     * @returns {undefined}
     */
    ajax: function (obj) {
        var tmp = obj.func;
        if (!obj['url']) {
            obj['url'] = '';
        }
        if (!obj['dataType']) {
            obj['dataType'] = 'json';
        }
        if (!obj['type']) {
            obj['type'] = 'post';
        }
        obj.success = function (json) {
            if (json.code == 200) {
                tmp(json);
            }
            if (json.code == 403) {
                $.util.alert('请先登录');
                setTimeout(function () {
                    window.location.href = json.redirect_url;
                }, 1000);
            }
            if (json.code == 500) {
                var msg = Bollean(json['message']) ? json['message'] : json.msg;
                $.util.alert(msg);
            }
        };
        obj.statusCode = {
            404: function () {
                $.util.alert('请求页面不存在');
            },
            500: function () {
                $.util.alert('服务器出错');
            }
        };
        obj.error = function (XMLHttpRequest, textStatus, errorThrown) {
            $.util.alert('服务器出错');
            console.log(errorThrown);
        };
        $.ajax(obj);
    },
    /**
     * 读取COOKIE
     */
    getCookie: function (name) {
        var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"), val = document.cookie.match(reg);
        return val ? (val[2] ? unescape(val[2]).replace(/(^")|("$)/g, "") : "") : null;
    },
    /**
     * 写入COOKIES
     */
    setCookie: function (name, value, expires, path, domain, secure) {
        var exp = new Date(), expires = arguments[2] || null, path = arguments[3] || "/", domain = arguments[4] || null, secure = arguments[5] || false;
        expires ? exp.setMinutes(exp.getMinutes() + parseInt(expires)) : "";
        document.cookie = name + '=' + escape(value) + (expires ? ';expires=' + exp.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
    },
    queryParam2Json: function (str) {
        var pairs = str.split('&');
        var result = {};
        pairs.forEach(function (pair) {
            pair = pair.split('=');
            var name = pair[0]
            var value = pair[1]
            if (name.length)
                if (result[name] !== undefined) {
                    if (!result[name].push) {
                        result[name] = [result[name]];
                    }
                    result[name].push(value || '');
                } else {
                    result[name] = value || '';
                }
        });
        return(result);
    }
};
