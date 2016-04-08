import {async, Utils} from 'platypus';

export default class BaseService {
	protected static _inject: any = {
        http: async.Http,
        Promise: async.IPromise,
        utils: Utils
    };

	protected http: async.Http;
	protected Promise: async.IPromise;
	protected utils: Utils;
    
    //this is how platypus gets things fron their platform to bring to you

    host: string = 'http://ocalhost:4000/api'; //this is the ONE place where your host is designated
    // that way, if you have to change it, you don't have to change it in a million places. Pages
    //will refer to this host when designating urls in a 
    // url: this.host + "/posts" (where /posts is the page you're referring to)
    //
}
