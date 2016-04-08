

import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class CreateViewControl extends BaseViewControl {
    templateString: string = require('./createpost.vc.html');

    context: any = {};
}

register.viewControl('createpost-vc', CreateViewControl);
