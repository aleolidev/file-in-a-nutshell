import * as path from "path";
import * as vscode from "vscode";

import { CommentStyle } from "../interfaces/comments";

export const commentStyles: { [key: string]: CommentStyle } = {
  // Single-line comment formats
  ".js": { start: "// " },
  ".ts": { start: "// " },
  ".jsx": { start: "// " },
  ".tsx": { start: "// " },
  ".py": { start: "# " },
  ".sh": { start: "# " },
  ".rb": { start: "# " },
  ".php": { start: "// " },
  ".go": { start: "// " },
  ".swift": { start: "// " },
  ".json": { start: "// " },
  ".yaml": { start: "# " },
  ".yml": { start: "# " },
  ".ini": { start: "; " },
  ".toml": { start: "# " },
  ".rs": { start: "// " },
  ".pl": { start: "# " },
  ".ps1": { start: "# " },
  ".bat": { start: ":: " },
  ".cmd": { start: ":: " },
  ".make": { start: "# " },
  ".mk": { start: "# " },
  ".dockerfile": { start: "# " },
  ".hs": { start: "-- " },
  ".lua": { start: "-- " },
  ".r": { start: "# " },
  ".jl": { start: "# " },
  ".scala": { start: "// " },
  ".kt": { start: "// " },
  ".sql": { start: "-- " },
  ".erl": { start: "% " },
  ".ex": { start: "# " },
  ".exs": { start: "# " },
  ".clj": { start: ";; " },
  ".cljs": { start: ";; " },
  ".coffee": { start: "# " },
  ".nim": { start: "# " },

  // Block comment formats
  ".css": { start: "/* ", end: " */" },
  ".scss": { start: "/* ", end: " */" },
  ".sass": { start: "/* ", end: " */" },
  ".less": { start: "/* ", end: " */" },
  ".html": { start: "<!-- ", end: " -->" },
  ".htm": { start: "<!-- ", end: " -->" },
  ".xml": { start: "<!-- ", end: " -->" },
  ".c": { start: "/* ", end: " */" },
  ".cpp": { start: "/* ", end: " */" },
  ".h": { start: "/* ", end: " */" },
  ".cs": { start: "/* ", end: " */" },
  ".java": { start: "/* ", end: " */" },
  ".vb": { start: "' " },
  ".md": { start: "<!-- ", end: " -->" },
  ".vue": { start: "<!-- ", end: " -->" },
  ".ejs": { start: "<%# ", end: " %>" },
  ".jsp": { start: "<%-- ", end: " --%>" },
  ".asp": { start: "' " },
  ".aspx": { start: "<%-- ", end: " --%>" },
  ".m": { start: "% " },
  ".tex": { start: "% " },
  ".latex": { start: "% " },
  ".bib": { start: "% " },
  ".ml": { start: "(* ", end: " *)" },
  ".mli": { start: "(* ", end: " *)" },
  ".fs": { start: "(* ", end: " *)" },
  ".fsi": { start: "(* ", end: " *)" },
  ".fsx": { start: "(* ", end: " *)" },
  ".asm": { start: "; " },
  ".s": { start: "; " },
  ".d": { start: "// " },

  // Default comment style
  default: { start: "// " },
};

export function getCommentForFileType(extension: string): CommentStyle {
  return commentStyles[extension.toLowerCase()] || commentStyles["default"];
}

export function commentFilePath(filePath: string): string {
  const fileExtension = path.extname(filePath);
  const { start, end } = getCommentForFileType(fileExtension);
  const relativePath = vscode.workspace.asRelativePath(filePath);

  if (end) {
    return `${start}${relativePath}${end}`;
  }
  return `${start}${relativePath}`;
}
