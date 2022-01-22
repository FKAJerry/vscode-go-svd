"use strict";

import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "extension.svd",
    function () {
      // Get the active text editor
      const editor = vscode.window.activeTextEditor;

      if (editor) {
        const selection = editor.selection;

        editor.edit((editBuilder) => {
          editBuilder.insert(selection.active, ':=');
        });
      }
    }
  );

  context.subscriptions.push(disposable);
}
