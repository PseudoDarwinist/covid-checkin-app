import { LightningElement } from 'lwc';
const defaultData = {
    Name :'',
    Email :'',
    Mobile :'',
};
export default class App extends LightningElement {

    formData = defaultData;

    handleInputChange(event) {
        const { name, value } = event.target;
        this.formData = { ...this.formData, [name]:value};
        console.log('Form data', this.formData);

    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log('Form submitted');
    }
}
