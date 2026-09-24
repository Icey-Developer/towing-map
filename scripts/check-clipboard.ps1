Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

if ([System.Windows.Forms.Clipboard]::ContainsImage()) {
    $img = [System.Windows.Forms.Clipboard]::GetImage()
    $dest = "C:\Users\Admin1\.gemini\antigravity-ide\brain\bdaa681e-4615-4fef-9ef4-3c10c48aaf59\clipboard_img.png"
    $img.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Output "SAVED CLIPBOARD IMAGE to $dest"
} else {
    $txt = [System.Windows.Forms.Clipboard]::GetText()
    Write-Output "Clipboard does not contain image. Text: $txt"
}
