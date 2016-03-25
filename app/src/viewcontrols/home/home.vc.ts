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
