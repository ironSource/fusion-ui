import {Page, expect, test} from '@playwright/test';
import {SELECTORS, LABELS} from './constants';
import {FileCSVUploadInput, Button, StaticText} from '../../elements';
import {BaseComponent} from '../base-component';

export class FileCsvUpload extends BaseComponent {
    readonly fileMessage: StaticText;
    readonly replaceFileButton: Button;
    readonly deleteFileButton: Button;
    readonly fileInput: FileCSVUploadInput;

    constructor(page: Page, selector: string) {
        super(page, selector);
        this.fileInput = new FileCSVUploadInput(page, `${selector}`);
        this.fileMessage = new StaticText(page, `${selector} ${SELECTORS.FILE_MESSAGE}`);
        this.replaceFileButton = new Button(page, `${selector} ${SELECTORS.REPLACE_BUTTON}`);
        this.deleteFileButton = new Button(page, `${selector} ${SELECTORS.DELETE_FILE_BUTTON}`);
    }

    async uploadFile(pathToCSV: string): Promise<void> {
        await test.step(`Upload file from path: ${pathToCSV}`, async () => {
            await this.fileInput.uploadFile(pathToCSV);
            await expect(await this.locator.locator(SELECTORS.FILE_DRAG_DROP_LOADING)).not.toBeVisible();
        });
    }

    async isPending(): Promise<boolean> {
        let isPending: boolean;

        await test.step(`Is pending`, async () => {
            isPending = (await this.locator.locator(SELECTORS.FILE_DRAG_DROP_LOADING).count()) > 0;
        });

        return isPending;
    }

    async isUploadSuccess(): Promise<boolean> {
        let isUploadSuccess: boolean;

        await test.step(`Is upload success`, async () => {
            isUploadSuccess = (await this.fileMessage.getText()) === LABELS.UPLOAD_SUCCESS_MESSAGE;
        });

        return isUploadSuccess;
    }

    async isUploadFailed(): Promise<boolean> {
        let isUploadFailed: boolean;

        await test.step(`Is upload failed`, async () => {
            isUploadFailed = [LABELS.UPLOAD_FAILD_MESSAGE, LABELS.UPLOAD_INVALID_FILE_FORMAT_MESSAGE].includes(
                await this.fileMessage.getText()
            );
        });

        return isUploadFailed;
    }

    async getFileUploadMessage(): Promise<string> {
        let fileUploadMessage: string;

        await test.step(`Get file upload message`, async () => {
            fileUploadMessage = await this.fileMessage.getText();
        });
        return fileUploadMessage;
    }

    async deleteFile(): Promise<void> {
        await test.step(`Delete file`, async () => {
            await this.deleteFileButton.click();
        });
    }
}
