import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { commentFilePath } from "./utils/comments";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.copyFileContent",
    async (uri?: vscode.Uri, selectedUris?: vscode.Uri[]) => {
      let uris: vscode.Uri[] = [];

      if (selectedUris && selectedUris.length > 0) {
        uris = selectedUris;
      } else if (uri) {
        uris = [uri];
      } else {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
          uris = [editor.document.uri];
        } else {
          vscode.window.showErrorMessage("No file selected to copy.");
          return;
        }
      }

      let result = "";

      for (const fileUri of uris) {
        try {
          const fileContent = await getFileContent(fileUri.fsPath);
          const commentedPath = commentFilePath(fileUri.fsPath);
          result += `${commentedPath}\n`;
          result += `${fileContent}\n\n`;
        } catch (error) {
          vscode.window.showErrorMessage(
            `Error reading file: ${fileUri.fsPath}`
          );
          console.error(error);
          return;
        }
      }

      try {
        await vscode.env.clipboard.writeText(result.trim());
        vscode.window.showInformationMessage(
          "File content copied to clipboard!"
        );
      } catch (error) {
        vscode.window.showErrorMessage("Failed to write to clipboard.");
        console.error(error);
      }
    }
  );

  let folderDisposable = vscode.commands.registerCommand(
    "extension.copyFolderContent",
    async (uri?: vscode.Uri) => {
      let targetUri: vscode.Uri | undefined;

      if (uri) {
        targetUri = uri;
      } else {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
          const fileUri = editor.document.uri;
          if (await isDirectory(fileUri.fsPath)) {
            targetUri = fileUri;
          } else {
            vscode.window.showErrorMessage("No folder selected to copy.");
            return;
          }
        } else {
          vscode.window.showErrorMessage("No folder selected to copy.");
          return;
        }
      }

      if (!targetUri) {
        vscode.window.showErrorMessage("No folder selected to copy.");
        return;
      }

      let result = "";
      try {
        await traverseFolder(targetUri.fsPath, async (filePath) => {
          const fileContent = await getFileContent(filePath);
          const commentedPath = commentFilePath(filePath);
          result += `${commentedPath}\n`;
          result += `${fileContent}\n\n`;
        });

        await vscode.env.clipboard.writeText(result.trim());
        vscode.window.showInformationMessage(
          "Folder content copied to clipboard!"
        );
      } catch (error) {
        vscode.window.showErrorMessage("Failed to copy folder content.");
        console.error(error);
      }
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

async function isDirectory(path: string): Promise<boolean> {
  try {
    const stats = await fs.promises.stat(path);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
}

export function deactivate() {}
