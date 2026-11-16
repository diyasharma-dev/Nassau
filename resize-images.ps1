Add-Type -AssemblyName System.Drawing

function Resize-ImageFile {
    param(
        [string]$filePath,
        [int]$maxDim
    )
    $fullPath = [System.IO.Path]::GetFullPath($filePath)
    $tempPath = $fullPath + ".tmp.jpg"
    $img = [System.Drawing.Image]::FromFile($fullPath)
    $w = $img.Width
    $h = $img.Height
    if ($w -gt $maxDim -or $h -gt $maxDim) {
        if ($w -ge $h) {
            $newW = $maxDim
            $newH = [int]($h * ($maxDim / $w))
        } else {
            $newH = $maxDim
            $newW = [int]($w * ($maxDim / $h))
        }
        $bmp = New-Object System.Drawing.Bitmap $newW, $newH
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.DrawImage($img, 0, 0, $newW, $newH)
        $img.Dispose()
        $g.Dispose()
        
        $bmp.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $bmp.Dispose()
        
        Remove-Item $fullPath -Force
        Move-Item $tempPath $fullPath -Force
        Write-Host "Resized $filePath to ${newW}x${newH}"
    } else {
        $img.Dispose()
        Write-Host "$filePath already within maxDim"
    }
}

$files = @(
    "public/images/great-neck-actual-house.jpg",
    "public/images/manhasset-actual-street.jpg",
    "public/images/massapequa-actual-house.jpg",
    "public/images/locust-valley-actual-house.jpg",
    "public/images/mineola-actual-house.jpg",
    "public/images/sea-cliff-actual-house.jpg",
    "public/images/levittown-weber-house-color.jpg"
)

foreach ($f in $files) {
    Resize-ImageFile -filePath $f -maxDim 1200
    Copy-Item $f ("src/assets/images/" + [System.IO.Path]::GetFileName($f)) -Force
}
