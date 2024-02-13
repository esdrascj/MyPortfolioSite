import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images'

export default class SkillCard extends LightningElement {
    adminImageURL = IMAGES + '/img_avatar.png';
    trainingImageURL = IMAGES + '/img_avatar2.png';
    serviceImageURL = IMAGES + '/img_avatar.png';
}