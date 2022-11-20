@echo off
setlocal enableextensions

set SFDX_BINPATH=%~dp0\sfdx.cmd
if exist "%LOCALAPPDATA%\sfdx\client\bin\sfdx.cmd" (
  "%LOCALAPPDATA%\sfdx\client\bin\sfdx.cmd" %*
) else (
  "%~dp0\..\client\bin\node.exe" "%~dp0\..\client\bin\run" %*
)
