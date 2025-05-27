param(
   [string]$TagVersion = "v1.4.2",
   [string]$TagMessage = "Release Version 1.4.2",
   [string]$TagTitle = "Version 1.4.2",
   [string]$TagArtifacts = "C:\users\tidal\projects\oceans-titan\app.local.version\src-tauri\target\release\bundle\msi\australia-oceans_1.4.2_x64_en-US.msi"

)

Write-Host("Updating Online Github Repo........ ")
git add .
git commit -m $TagMessage
git push origin app.local.version
Write-Host("Done......")

Write-Host("Creating Github Release")
git tag -a $TagVersion -m '$TagMessage'
git push origin $TagVersion
gh release create $TagVersion --title '$TagTitle' --generate-notes $TagArtifacts