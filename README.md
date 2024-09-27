# File in a Nutshell

**Quickly copy files and their contents with formatted paths.**

<div align="center">
  <img src="resources/icon.png" alt="Extension Logo" style="max-height: 256px; width: auto;" />
</div>

## Features

- **Copy File Content with Path:** Easily copy the content of selected files along with their relative paths, formatted with appropriate comment styles based on the file type.
- **Copy Folder Content with Paths:** Recursively copy the content of selected folders and all their subfolders, including file paths and contents.
- **Customizable Keyboard Shortcuts:** Assign your preferred keyboard shortcuts for quick access to copy commands.
- **Supports Multiple File Types:** Automatically applies the correct comment syntax for a wide range of file extensions.

## Installation

1. **Install via VS Code Marketplace:**

   - Open **Visual Studio Code**.
   - Go to the **Extensions** view by clicking on the Extensions icon in the Activity Bar on the side of the window or pressing `Ctrl+Shift+X` (`Cmd+Shift+X` on macOS).
   - Search for "**File in a Nutshell**".
   - Click **Install**.

2. **Install from `.vsix` Package:**
   - Download the `.vsix` file from the [Marketplace](https://marketplace.visualstudio.com/) or your repository.
   - Open **Visual Studio Code**.
   - Press `Ctrl+Shift+P` (`Cmd+Shift+P` on macOS) to open the Command Palette.
   - Type `Extensions: Install from VSIX...` and select it.
   - Browse to the downloaded `.vsix` file and install.

## Usage

### 1. **Using the Context Menu**

- **Copy File(s) Content with Path:**

  - Right-click on one or multiple files in the Explorer.
  - Select **Copy File(s) Content with Path** from the context menu.
  - The formatted paths and file contents are copied to your clipboard.

- **Copy Folder Content with Paths:**
  - Right-click on a folder in the Explorer.
  - Select **Copy Folder Content with Paths** from the context menu.
  - All files within the folder (recursively) along with their paths and contents are copied to your clipboard.

### 2. **Using Keyboard Shortcuts**

- **Copy File Content with Path:**
  - **Windows/Linux:** `Ctrl + Alt + C`
  - **macOS:** `Cmd + Alt + C`
- **Copy Folder Content with Paths:**
  - **Windows/Linux:** `Ctrl + Alt + Shift + C`
  - **macOS:** `Cmd + Alt + Shift + C`

_Note: These are the default shortcuts. You can customize them as described below._

## Configuration

### Customize Keyboard Shortcuts

You can change the default keyboard shortcuts to better fit your workflow.

1. **Open Keyboard Shortcuts:**

   - Press `Ctrl + K Ctrl + S` (`Cmd + K Cmd + S` on macOS).

2. **Search for Commands:**

   - Look for **Copy File(s) Content with Path** and **Copy Folder Content with Paths**.

3. **Change the Keybinding:**
   - Click the pencil icon next to the command you want to change.
   - Press the desired key combination.
   - Press `Enter` to confirm.

### Extension Settings

You can also customize settings related to the extension:

- **Copy File Shortcut:**

  - `fileInANutshell.copyFileShortcut`
  - **Type:** `string`
  - **Default:** `ctrl+alt+c`
  - **Description:** Default keyboard shortcut for copying file content with path.

- **Copy Folder Shortcut:**
  - `fileInANutshell.copyFolderShortcut`
  - **Type:** `string`
  - **Default:** `ctrl+alt+shift+c`
  - **Description:** Default keyboard shortcut for copying folder content with paths.

To modify these settings:

1. **Open Settings:**

   - Press `Ctrl + ,` (`Cmd + ,` on macOS).

2. **Search for the Setting:**

   - Type `fileInANutshell.copyFileShortcut` or `fileInANutshell.copyFolderShortcut`.

3. **Change the Value:**
   - Enter your preferred keyboard shortcut.

## Supported File Types

The extension automatically applies the correct comment syntax based on the file extension. It supports a wide range of file types, including but not limited to:

- **Single-line Comments:**

  - `.js`, `.ts`, `.jsx`, `.tsx`, `.py`, `.sh`, `.rb`, `.php`, `.go`, `.swift`, `.json`, `.yaml`, `.yml`, `.ini`, `.toml`, `.rs`, `.pl`, `.ps1`, `.bat`, `.cmd`, `.make`, `.mk`, `.dockerfile`, `.hs`, `.lua`, `.r`, `.jl`, `.scala`, `.kt`, `.sql`, `.erl`, `.ex`, `.exs`, `.clj`, `.cljs`, `.coffee`, `.nim`

- **Block Comments:**

  - `.css`, `.scss`, `.sass`, `.less`, `.html`, `.htm`, `.xml`, `.c`, `.cpp`, `.h`, `.cs`, `.java`, `.md`, `.vue`, `.ejs`, `.jsp`, `.asp`, `.aspx`, `.m`, `.tex`, `.latex`, `.bib`, `.ml`, `.mli`, `.fs`, `.fsi`, `.fsx`, `.asm`, `.s`, `.d`

- **Default Comment Style:**
  - `//` for unsupported file types.

## Contributing

Contributions are welcome! Whether it's reporting bugs, suggesting features, or submitting pull requests, your help is appreciated.

1. **Fork the Repository:**

   - Click the **Fork** button at the top right of the repository page.

2. **Clone Your Fork:**

   ```bash
   git clone https://github.com/your-username/file-in-a-nutshell.git
   ```

3. **Create a New Branch:**

   ```bash
    git checkout -b feature/awesome-feature
   ```

4. **Make Changes:**

   - Add your changes to the codebase.

5. **Commit Changes:**

   ```bash
   git commit -am 'Add awesome feature'
   ```

6. **Push Changes:**
   ```bash
   git push origin feature/awesome-feature
   ```
7. **Submit a Pull Request:**
   - Go to your fork on GitHub.
   - Click the **New Pull Request** button.
   - Select the base repository and branch.
   - Click **Create Pull Request**.

## Issues and Support

For any issues, bugs, or feature requests, please [create an issue](https://github.com/aleolidev/file-in-a-nutshell/issues) on GitHub.

For additional support or questions, you can contact the maintainer.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- Inspired by the need to quickly copy file paths with their contents for interaction with AI tools.

---

Made with ❤️ by [Aleoli](https://aleoli.dev) | [GitHub](https://github.com/aleolidev)
