// have to create a new "services" page, called "post" to get blog posts from server
// also create a new repository called "post"

import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        
    };


    create(): void {
        this.navigator.navigate('createpost-vc', {
            parameters: {
                createPost: this.context.name
            }
        });
    }
}

register.viewControl('home-vc', HomeViewControl);
