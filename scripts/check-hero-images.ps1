Add-Type -AssemblyName System.Drawing

$bmp = [System.Drawing.Bitmap]::FromFile('e:\New folder\towing-map\public\tow-truck-hero.png')
$corner = $bmp.GetPixel(0, 0)
Write-Output "tow-truck-hero: A=$($corner.A) R=$($corner.R) G=$($corner.G) B=$($corner.B)"
$bmp.Dispose()

$bmp2 = [System.Drawing.Bitmap]::FromFile('e:\New folder\towing-map\public\hero-car.jpg')
$corner2 = $bmp2.GetPixel(0, 0)
Write-Output "hero-car: A=$($corner2.A) R=$($corner2.R) G=$($corner2.G) B=$($corner2.B)"
$bmp2.Dispose()

$bmp3 = [System.Drawing.Bitmap]::FromFile('e:\New folder\towing-map\public\alloy-wheel-new.jpg')
$corner3 = $bmp3.GetPixel(0, 0)
Write-Output "alloy-wheel-new: A=$($corner3.A) R=$($corner3.R) G=$($corner3.G) B=$($corner3.B)"
$bmp3.Dispose()
