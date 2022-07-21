export interface FileDragAndDropState {
    name: string;
    state?: 'success' | 'error' | 'selected';
    message?: string;
}
