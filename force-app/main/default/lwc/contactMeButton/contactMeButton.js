import { LightningElement } from 'lwc';
import createLead from '@salesforce/apex/ContactMeController.createLead';

export default class ContactMeButton extends LightningElement {
    
    dialog;
    firstname;
    lastname;
    company;
    email;
    description;
    snackbar;

    renderedCallback(){//metodo que é primeiramente renderizado ao abrir o formulário
        this.dialog = this.template.querySelector('.contact-dialog');//declaração '.contact-dialog' serve para chamar os valores de cada classe na tag do html
        this.firstname = this.template.querySelector('.firstname');
        this.lastname = this.template.querySelector('.lastname');
        this.company = this.template.querySelector('.company');
        this.email = this.template.querySelector('.email');
        this.description = this.template.querySelector('.description');
        this.snackbar = this.template.querySelector('c-snackbar');

    }

    showDialog(){//metodo para mostrar o formulario quando ocorrer o click no botao de contact me
        this.dialog.showModal();
    }

    closeDialog(){//metodo para fechar o formulario ao clicar no botao de close
        this.dialog.close();
    }

    handleSubmit(event){//metodo para criar o registro com os campos do formulario
        event.preventDefault();

        const firstnameValue = this.firstname.value;
        const lastnameValue = this.lastname.value;
        const companyValue = this.company.value;
        const emailValue = this.email.value;
        const descriptionValue = this.description.value;

        createLead({
            firstname: firstnameValue,
            lastname: lastnameValue,
            company: companyValue,
            email: emailValue,
            description: descriptionValue
        }).then(() => {this.snackbar.showSnackBar('Lead criado com sucesso!')});
        this.closeDialog();
        
    }
    
}
