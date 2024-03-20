const SCRIPT_NAME = '养鸡宝';	
const USER_REGEX = /https?:\/\/app-api\.yangjibao\.com\/account/;	
const RIGHTS_REGEX = /https?:\/\/biz\.caiyunapp\.com\/membership_rights/;	
const RESULT = {	
    data: {	
        vip_label: true,	
        is_pay: true,
        vip_expiry_date: 2099-12-31,	
      }	
}	
const RESULT_WT = {	
  vip: {	
    enable: true,	
    svip_expired_at: 3141603754.4403821354,	
  }	
}	
const RIGHTS = { 	
  "result": [	
    { 	
      "name": "\u514d\u5e7f\u544a", 	
      "enabled": true, 	
      "vip_icon": "https://cdn.caiyunapp.com/ad/img/membership_rights/vip-ads-free.png",	
      "vip": true, 	
      "svip": true, 	
      "_id": "5ee5eb091d28d2634a2ee08f", 	
      "svip_icon": "https://cdn.caiyunapp.com/ad/img/membership_rights/svip-ads-free.png" 	
    }, 	
    { 	
      "name": "\u591a\u5730\u5929\u6c14\u63a8\u9001", 	
      "enabled": true, 	
      "vip_icon": "https://cdn.caiyunapp.com/ad/img/membership_rights/vip-custom-push.png", 	
      "vip": true, 	
      "svip": true, 	
      "_id": "5ee5eb091d28d2634a2ee090", 	
      "svip_icon": "https://cdn.caiyunapp.com/ad/img/membership_rights/svip-custom-push.png" 	
    }, 	
    { 	
      "name": "\u964d\u6c34\u63d0\u9192", 	
      "enabled": true, 	
      "vip_icon": "https://cdn.caiyunapp.com/ad/img/membership_rights/vip-rain-notification.png", 	
      "vip": true, 	
      "svip": true, 	
      "_id": "5ee5eb091d28d2634a2ee091", 	
      "svip_icon": "https://cdn.caiyunapp.com/ad/img/membership_rights/svip-rain-notification.png" 	
    }, 	
    { 	
      "name": "\u536b\u661f\u4e91\u56fe", 	
      "enabled": true, 	
      "vip_icon": null, 	
      "vip": false, 	
      "svip": true, 	
      "_id": "5ee5eb091d28d2634a2ee092", 	
      "svip_icon": "https://cdn.caiyunapp.com/ad/img/membership_rights/svip-satellite-clouds.png" 	
    }, 	
    { 	
      "name": "\u4e91\u91cf", 	
      "enabled": true, 	
      "vip_icon": null, 	
      "vip": false, 	
      "svip": true,	
      "_id": "5ee5eb091d28d2634a2ee093", 	
      "svip_icon": "https://cdn.caiyunapp.com/ad/img/membership_rights/svip-cloud-cover.png"	
    }, 	
    { 	
      "name": "\u6c14\u6e29\u9884\u62a5", 	
      "enabled": true, 	
      "vip_icon": null, 	
      "vip": false, 	
      "svip": true, 	
      "_id": "5ee5eb091d28d2634a2ee094", 	
      "svip_icon": "https://cdn.caiyunapp.com/ad/img/membership_rights/svip-tmp-forecast.png"	
    }, 	
    { 	
      "name": "\u9732\u70b9\u6e29\u5ea6\u9884\u62a5", 	
      "enabled": true, 	
      "vip_icon": null, 	
      "vip": false, 	
      "svip": true, 	
      "_id": "5ee5eb091d28d2634a2ee095", 	
      "svip_icon": "https://cdn.caiyunapp.com/ad/img/membership_rights/svip-dew-point-tmp-forecast.png" 	
    }, 	
    { 	
      "name": "\u77ed\u6ce2\u8f90\u5c04\u901a\u91cf", 	
      "enabled": true, 	
      "vip_icon": null, 	
      "vip": false, 	
      "svip": true, 	
      "_id": "5ee5eb091d28d2634a2ee096", 	
      "svip_icon": "https://cdn.caiyunapp.com/ad/img/membership_rights/svip-short-wave-radiation.png" 	
    }, 	
    { 	
      "name": "\u6c14\u538b", 	
      "enabled": true, 	
      "vip_icon": null, 	
      "vip": false, 	
      "svip": true, 	
      "_id": "5ee5eb091d28d2634a2ee097", 	
      "svip_icon": "https://cdn.caiyunapp.com/ad/img/membership_rights/svip-pressure.png" 	
    }, 	
    { 	
      "name": "\u80fd\u89c1\u5ea6", 	
      "enabled": true, 	
      "vip_icon": null, 	
      "vip": false, 	
      "svip": true, 	
      "_id": "5ee5eb091d28d2634a2ee098", 	
      "svip_icon": "https://cdn.caiyunapp.com/ad/img/membership_rights/svip-visibility.png" 	
    }, 	
    { 	
      "name": "\u6e7f\u5ea6\u9884\u62a5", 	
      "enabled": true, 	
      "vip_icon": null, 	
      "vip": false, 	
      "svip": true, 	
      "_id": "5ee5eb091d28d2634a2ee099", 	
      "svip_icon": "https://cdn.caiyunapp.com/ad/img/membership_rights/svip-humidity-forecast.png" 	
    }, 	
    { 	
      "name": "2\u5929\u964d\u96e8\u9884\u62a5\u56fe", 	
      "enabled": true, 	
      "vip_icon": null, 	
      "vip": false, 	
      "svip": true, 	
      "_id": "5ee5eb091d28d2634a2ee09a", 	
      "svip_icon": "https://cdn.caiyunapp.com/ad/img/membership_rights/svip-rain-forecast.png" 	
    }	
  ], 	
  "rc": 0 	
}	
let magicJS = MagicJS(SCRIPT_NAME);	
function Main(){	
  if (magicJS.isResponse){	
    if (USER_REGEX.test(magicJS.request.url)){	
      try{	
        let obj = JSON.parse(magicJS.response.body);	
        Object.assign(obj['result'], RESULT)	
        Object.assign(obj['result']['wt'], RESULT_WT)	
        let body = JSON.stringify(obj);	
        magicJS.done({body});	
      }	
      catch(err){	
        magicJS.log(`解锁SVIP失败，异常信息${err}`);	
        magicJS.done();	
      }	
    }	
    if (RIGHTS_REGEX.test(magicJS.request.url)){	
      let body = JSON.stringify(RIGHTS);	
      magicJS.done({body});	
    }	
  }	
}	
Main();	
function MagicJS(scriptName='MagicJS', logLevel='INFO'){	
  return new class{	
    constructor(){	
      this.scriptName = scriptName;	
      this.logLevel = this.getLogLevels(logLevel.toUpperCase());	
      this.node = {'request': undefined, 'fs': undefined, 'data': {}};	
      if (this.isNode){	
        this.node.fs = require('fs');	
        this.node.request = require('request');	
        try{	
          this.node.fs.accessSync('./magic.json');	
        }	
        catch(err){	
          this.logError(err);	
          this.node.fs.writeFileSync('./magic.json', '{}')	
        }	
        this.node.data = require('./magic.json');	
      }	
      if (this.isJSBox){	
        if (!$file.exists('drive://MagicJS')){	
          $file.mkdir('drive://MagicJS');	
        }	
        if (!$file.exists('drive://MagicJS/magic.json')){	
          $file.write({	
            data: $data({string: '{}'}),	
            path: 'drive://MagicJS/magic.json'	
          })	
        }	
      }	
    }	
    get version() { return 'v2.1.4' };	
    get isSurge() { return typeof $httpClient !== 'undefined' && !this.isLoon };	
    get isQuanX() { return typeof $task !== 'undefined' };	
    get isLoon() { return typeof $loon !== 'undefined' };	
    get isJSBox() { return typeof $drive !== 'undefined'};	
    get isNode() { return typeof module !== 'undefined' && !this.isJSBox };	
    get isRequest() { return (typeof $request !== 'undefined') && (typeof $response === 'undefined')}	
    get isResponse() { return typeof $response !== 'undefined' }	
    get request() { return (typeof $request !== 'undefined') ? $request : undefined }	
    get response() { 	
      if (typeof $response !== 'undefined'){	
        if ($response.hasOwnProperty('status')) $response['statusCode'] = $response['status']	
        if ($response.hasOwnProperty('statusCode')) $response['status'] = $response['statusCode']	
        return $response;	
      }	
      else{	
        return undefined;	
      }	
    }	
    get logLevels(){	
      return {	
        DEBUG: 4,	
        INFO: 3,	
        WARNING: 2,	
        ERROR: 1,	
        CRITICAL: 0	
      };	
    } 	
    getLogLevels(level){	
      try{	
        if (this.isNumber(level)){	
          return level;	
        }	
        else{	
          let levelNum = this.logLevels[level];	
          if (typeof levelNum === 'undefined'){	
            this.logError(`获取MagicJS日志级别错误，已强制设置为DEBUG级别。传入日志级别：${level}。`)	
            return this.logLevels.DEBUG;	
          }	
          else{	
            return levelNum;	
          }	
        }	
      }	
      catch(err){	
        this.logError(`获取MagicJS日志级别错误，已强制设置为DEBUG级别。传入日志级别：${level}，异常信息：${err}。`)	
        return this.logLevels.DEBUG;	
      }	
    }	
    read(key, session=''){	
      let val = '';	
      // 读取原始数据	
      if (this.isSurge || this.isLoon) {	
        val = $persistentStore.read(key);	
      }	
      else if (this.isQuanX) {	
        val = $prefs.valueForKey(key);	
      }	
      else if (this.isNode){	
        val = this.node.data;	
      }	
      else if (this.isJSBox){	
        val = $file.read('drive://MagicJS/magic.json').string;	
      }	
      try {	
        // Node 和 JSBox数据处理	
        if (this.isNode) val = val[key]	
        if (this.isJSBox) val = JSON.parse(val)[key];	
        // 带Session的情况	
        if (!!session){	
          if(typeof val === 'string') val = JSON.parse(val);	
          val = !!val && typeof val === 'object' ? val[session]: null;	
        }	
      } 	
      catch (err){ 	
        this.logError(`raise exception: ${err}`);	
        val = !!session? {} : null;	
        this.del(key);	
      }	
      if (typeof val === 'undefined') val = null;	
      try {if(!!val && typeof val === 'string') val = JSON.parse(val)} catch(err) {}	
      this.logDebug(`read data [${key}]${!!session? `[${session}]`: ''}(${typeof val})\n${JSON.stringify(val)}`);	
      return val;	
    };	
    write(key, val, session=''){	
      let data = !!session ? {} : '';	
      // 读取原先存储的JSON格式数据	
      if (!!session && (this.isSurge || this.isLoon)) {	
        data = $persistentStore.read(key);	
      }	
      else if (!!session && this.isQuanX) {	
        data = $prefs.valueForKey(key);	
      }	
      else if (this.isNode){	
        data = this.node.data;	
      }	
      else if (this.isJSBox){	
        data = JSON.parse($file.read('drive://MagicJS/magic.json').string);	
      }	
      if (!!session){	
        // 有Session，要求所有数据都是Object	
        try {	
          if (typeof data === 'string') data = JSON.parse(data)	
          data = typeof data === 'object' && !!data ? data : {};	
        }	
        catch(err){	
          this.logError(`raise exception: ${err}`);	
          this.del(key); 	
          data = {};	
        };	
        if (this.isJSBox || this.isNode){	
          // 构造数据	
          if (!data.hasOwnProperty(key) || typeof data[key] != 'object'){	
            data[key] = {};	
          }	
          if (!data[key].hasOwnProperty(session)){	
            data[key][session] = null;	
          }	
          // 写入或删除数据	
          if (typeof val === 'undefined'){	
            delete data[key][session];	
          }	
          else{	
            data[key][session] = val;	
          }	
        }	
        else {	
          // 写入或删除数据      	
          if (typeof val === 'undefined'){	
            delete data[session];	
          }	
          else{	
            data[session] = val;	
          }	
        }	
      }	
      // 没有Session时	
      else{	
        if (this.isNode || this.isJSBox){	
          // 删除数据	
          if (typeof val === 'undefined'){	
            delete data[key];	
          }	
          else{	
            data[key] = val;	
          }	
        }        	
        else{    	
          // 删除数据      	
          if (typeof val === 'undefined'){	
            data = null;	
          }	
          else{	
            data = val;	
          }	
        }	
      }	
      // 数据回写	
      if (typeof data === 'object') data = JSON.stringify(data);	
      if (this.isSurge || this.isLoon) {	
        $persistentStore.write(data, key);	
      }	
      else if (this.isQuanX) {	
        $prefs.setValueForKey(data, key);	
      }	
      else if (this.isNode){	
        this.node.fs.writeFileSync('./magic.json', data)	
      }	
      else if (this.isJSBox){	
        $file.write({data: $data({string: data}), path: 'drive://MagicJS/magic.json'});	
      }	
      this.logDebug(`write data [${key}]${!!session? `[${session}]`: ''}(${typeof val})\n${JSON.stringify(val)}`);	
    };	
    del(key, session=''){	
      this.logDebug(`delete key [${key}]${!!session ? `[${session}]`:''}`);	
      this.write(key, undefined, session);	
    }