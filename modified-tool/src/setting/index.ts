import * as vscode from 'vscode';

interface handleMessage {
    command: string,
    type: string,
    handle: Function
};

export const infoMessage: handleMessage = {
    command: '',
    type: 'showInformationMessage',
    handle(str: string) {
        vscode.window.showErrorMessage(str);
    }
};

export const warnMessage: handleMessage = {
    command: '',
    type: 'showWarningMessage',
    handle(str: string) {
        vscode.window.showErrorMessage(str);
    }
};

export const errorMessage: handleMessage = {
    command: '',
    type: 'showErrorMessage',
    handle(str: string) {
        vscode.window.showErrorMessage(str);
    }
}

