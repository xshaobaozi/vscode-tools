'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const registerCommand = vscode.commands.registerCommand;
    let disposable = registerCommand('extension.helloGril', () => {
        vscode.window.showErrorMessage('今天开始你就是个可爱的女孩子了哦~11！');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}