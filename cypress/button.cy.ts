import {ButtonComponent} from '../projects/fusion-ui/components/button/v3/button.component';

it('uses custom text for the button label', () => {
    cy.mount('<app-button>Click me!</app-button>', {
        declarations: [ButtonComponent]
    });
    cy.get('button').should('contains.text', 'Click me!');
});
