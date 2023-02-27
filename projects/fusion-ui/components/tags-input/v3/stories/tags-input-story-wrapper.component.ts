import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagsInputComponent} from '@ironsource/fusion-ui/components/tags-input';
import {TagComponentConfigurations} from '@ironsource/fusion-ui/components/tag';

@Component({
    selector: 'fusion-tags-input-wrapper',
    standalone: true,
    imports: [CommonModule, TagsInputComponent],
    template: `<fusion-tags-input
        [inputPlaceholder]="inputPlaceholder"
        [tags]="tags"
        [error]="error"
        [helper]="helper"
        (addNewTag)="onAddNewTag($event)"
        (removeTag)="onRemoveTag($event)"
    ></fusion-tags-input>`
})
export class TagsInputStoryWrapperComponent {
    @Input() inputPlaceholder: string;
    @Input() error: string;
    @Input() helper: string;
    @Input() tags: TagComponentConfigurations[];

    @Output() addNewTag = new EventEmitter<string>();
    @Output() removeTag = new EventEmitter<TagComponentConfigurations>();

    onAddNewTag(tagText) {
        console.log('addNewTag: ', tagText);
        // emulate new tag add

        // check if it removable
        const newTag = {title: tagText};
        // some e-mail validation....
        const isValid = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm.test(tagText);
        if (!isValid) {
            newTag['error'] = 'Invalid e-mail';
            // if it has error will add close button
            newTag['close'] = true;
        }
        // add 'closable if needed'
        if (this.tags[0] && this.tags[0].hasOwnProperty('close')) {
            newTag['close'] = true;
        }
        this.tags.push(newTag);

        this.addNewTag.emit(tagText);
    }

    onRemoveTag(tagToRemove) {
        console.log('removeTag: ', tagToRemove);
        // emulate new tag remove
        this.tags = [...this.tags.filter(item => item !== tagToRemove)];

        this.removeTag.emit(tagToRemove);
    }
}
