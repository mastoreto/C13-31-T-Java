# Verificar si el script se está ejecutando en PowerShell con privilegios de administrador
$isAdmin = ([System.Security.Principal.WindowsIdentity]::GetCurrent()).Groups -match "S-1-5-32-544"
if (-not $isAdmin) {
  Write-Host "Este script debe ejecutarse en PowerShell con privilegios de administrador."
  Start-Sleep -Seconds 3
  Start-Process powershell.exe -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs
  exit
}

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
# Inicializar lista de paquetes instalados y ausentes
$installedPackages = @()
$missingPackages = @()

# Verificar si Node.js está instalado
$nodeInstalled = (Get-Command node -ErrorAction SilentlyContinue) -ne $null
if (-not $nodeInstalled) {
  Write-Host "Node.js no se encuentra instalado. Descargando..."

  $nodeInstallerPath = "https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi"
  $nodeInstaller = "$env:TEMP\node-v18.17.1-x64.msi"

  # Descargar el instalador de Node.js
  Invoke-WebRequest -Uri $nodeInstallerPath -OutFile $nodeInstaller
  
  Read-Host "Presiona Enter para continuar..."

  Write-Host "Instalando NodeJS"

  # Instalar Node.js
  $installResult = (Start-Process -Wait -FilePath "msiexec.exe" -ArgumentList "/i `"$nodeInstaller`" /qn" -PassThru).ExitCode

  if ($installResult -eq 0) {
    Write-Host "Node.js se instaló correctamente."
    $installedPackages += "Node.js"
  } else {
    Write-Host "Error al instalar Node.js. La instalación se canceló."
    Read-Host "Presiona Enter para continuar..."
    exit
  }

  # Eliminar el instalador descargado
  Remove-Item $nodeInstaller -Force
}

# Verificar si npm está instalado
$npmInstalled = (Get-Command npm -ErrorAction SilentlyContinue) -ne $null
if (-not $npmInstalled) {
  Write-Host "npm no se encuentra instalado. Instalando..."
  Write-Host "Instalando la última versión de npm..."
  # Comando de actualización de npm
  npm install -g npm@latest
  $installedPackages += "npm"
} else {
  $missingPackages += "npm"
}

# Verificar si pnpm está instalado
$pnpmInstalled = (Get-Command pnpm -ErrorAction SilentlyContinue) -ne $null
if (-not $pnpmInstalled) {
  Write-Host "pnpm no se encuentra instalado. Instalando..."
  Write-Host "Instalando pnpm..."
  # Comando de instalación de pnpm
  iwr https://get.pnpm.io/install.ps1 -useb | iex
  $installedPackages += "pnpm"
} else {
  $missingPackages += "pnpm"
}

# Mostrar resultados
if ($installedPackages.Count -gt 0) {
  Write-Host "Paquetes instalados:"
  $installedPackages | ForEach-Object { Write-Host "- $_" }
} else {
  Write-Host "No se instalaron nuevos paquetes."
}

if ($missingPackages.Count -gt 0) {
  Write-Host "Paquetes ausentes que ya estaban instalados:"
  $missingPackages | ForEach-Object { Write-Host "- $_" }
} else {
  Write-Host "Todos los paquetes ausentes fueron instalados."
}

Read-Host "Presiona Enter para continuar..."
