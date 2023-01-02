import {ButtonComponent} from '@ironsource/fusion-ui/components/button/v3';

it('uses custom text for the button label', () => {
    cy.mount('<fusion-button>Click me!</fusion-button>', {
        declarations: [ButtonComponent]
    });
    cy.get('span').should('contains.text', 'Click me!');
});
