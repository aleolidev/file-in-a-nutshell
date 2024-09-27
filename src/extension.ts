import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { commentFilePath } from "./utils/comments";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.copyFileContent",
    async (uri: vscode.Uri, selectedUris: vscode.Uri[]) => {
      const uris = selectedUris || [uri];
      let result = "";

      for (const fileUri of uris) {
        const fileContent = await getFileContent(fileUri.fsPath);
        const commentedPath = commentFilePath(fileUri.fsPath);
        result += `${commentedPath}\n`;
        result += `${fileContent}\n\n`;
      }

      await vscode.env.clipboard.writeText(result.trim());
      vscode.window.showInformationMessage("File content copied to clipboard!");
    }
  );

  let folderDisposable = vscode.commands.registerCommand(
    "extension.copyFolderContent",
    async (uri: vscode.Uri) => {
      let result = "";
      await traverseFolder(uri.fsPath, async (filePath) => {
        const fileContent = await getFileContent(filePath);
        const commentedPath = commentFilePath(filePath);
        result += `${commentedPath}\n`;
        result += `${fileContent}\n\n`;
      });

      await vscode.env.clipboard.writeText(result.trim());
      vscode.window.showInformationMessage(
        "Folder content copied to clipboard!"
      );
    }
  );

  context.subscriptions.push(disposable, folderDisposable);
}

async function getFileContent(filePath: string): Promise<string> {
  return fs.promises.readFile(filePath, "utf8");
}

async function traverseFolder(
  folderPath: string,
  fileCallback: (filePath: string) => Promise<void>
) {
  const entries = await fs.promises.readdir(folderPath, {
    withFileTypes: true,
  });
  for (const entry of entries) {
    const fullPath = path.join(folderPath, entry.name);
    if (entry.isDirectory()) {
      await traverseFolder(fullPath, fileCallback);
    } else {
      await fileCallback(fullPath);
    }
  }
}

export function deactivate() {}
