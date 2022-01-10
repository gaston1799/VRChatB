
@echo off
title Searching for game files
:startp
set gamePath=c:\
set gameFound=0

FOR %%G IN (c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z) DO (
    echo checking %%G: drive
    if EXIST %%G: if not gameFound==1 (
        cd /d "%%G:\"
        FOR /F "tokens=* USEBACKQ" %%F IN (`dir VRChat /s /b /A:D /A:-H /A:-A /A:-S`) DO (
            cls
            echo Drive:%%G
            echo ...
            echo File:%%F
            echo ...
            SET str=%%F
            echo %%F|find "steamapps" >nul
            echo %%F|find "VRChat" >nul
            echo %%F|find "common" >nul
            if not errorlevel 1 (
                echo is game :true
                @echo on
                set gameFound=1
                set gamePath="%%F"
                echo found game
                @echo off
                goto foundG
            ) ELSE (
                echo is game :false
            )
        )
        if not gameFound==0 ECHO game not found on drive:$$G
    ) ELSE (
        if not gameFound==1 (echo drive %%G not found) 
    )
)
if not gameFound==1 (
    set /p id="Cant find game path please enter the gamepath to vrchat remove quotes"
    goto conT
)
:foundG
if not gameFound==0 (
    echo Game found at %gamePath%
    goto conT
)
:conT
cls
echo "Welcome,"
set id=%gamePath%
cd /d %id%
mkdir mods
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/292/DragFix.dll' -OutFile 'mods/DragFix.dll'" & echo downloaded DragFix.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/291/Mic_Hider.dll' -OutFile 'mods/Mic_Hider.dll'" & echo downloaded Mic_Hider.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/255/NetworkSanity.dll' -OutFile 'mods/NetworkSanity.dll'" & echo downloaded NetworkSanity.dll
powershell -c "Invoke-WebRequest -Uri 'https://github.com/benaclejames/VRCFaceTracking/releases/download/v2.5.1/VRCFaceTracking.dll' -OutFile 'mods/VRCFaceTracking.dll'" & echo downloaded VRCFaceTracking.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/256/CameraAnimation.dll' -OutFile 'mods/CameraAnimation.dll'" & echo downloaded CameraAnimation.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/247/ml_alg.dll' -OutFile 'mods/ml_alg.dll'" & echo downloaded ml_alg.dll
powershell -c "Invoke-WebRequest -Uri 'https://dl.emmvrc.com/downloads/emmVRCLoader.dll' -OutFile 'mods/emmVRCLoader.dll'" & echo downloaded emmVRCLoader.dll
powershell -c "Invoke-WebRequest -Uri 'https://cdn.discordapp.com/attachments/898965007247765604/899010243646865439/ReModCE.Loader.dll' -OutFile 'mods/ReModCE.Loader.dll'" & echo downloaded ReModCE.Loader.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/264/MuteTTS.dll' -OutFile 'mods/MuteTTS.dll'" & echo downloaded MuteTTS.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/231/VRChatUtilityKit.dll' -OutFile 'mods/VRChatUtilityKit.dll'" & echo downloaded VRChatUtilityKit.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/89/AdvancedSafety.dll' -OutFile 'mods/AdvancedSafety.dll'" & echo downloaded AdvancedSafety.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/255/RPCSanity.dll' -OutFile 'mods/RPCSanity.dll'" & echo downloaded RPCSanity.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/214/ml_clv.dll' -OutFile 'mods/ml_clv.dll'" & echo downloaded ml_clv.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/157/ViewPointTweaker.dll' -OutFile 'mods/ViewPointTweaker.dll'" & echo downloaded ViewPointTweaker.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/82/CameraMinus.dll' -OutFile 'mods/CameraMinus.dll'" & echo downloaded CameraMinus.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/52/JoinNotifier.dll' -OutFile 'mods/JoinNotifier.dll'" & echo downloaded JoinNotifier.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/183/ImmersiveTouch.dll' -OutFile 'mods/ImmersiveTouch.dll'" & echo downloaded ImmersiveTouch.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/249/UpdateChecker.dll' -OutFile 'mods/UpdateChecker.dll'" & echo downloaded UpdateChecker.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/121/PlayerRotater.dll' -OutFile 'mods/PlayerRotater.dll'" & echo downloaded PlayerRotater.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/55/UIExpansionKit.dll' -OutFile 'mods/UIExpansionKit.dll'" & echo downloaded UIExpansionKit.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/171/TrueShaderAntiCrash.dll' -OutFile 'mods/TrueShaderAntiCrash.dll'" & echo downloaded TrueShaderAntiCrash.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/239/ScreenshotManager.dll' -OutFile 'mods/ScreenshotManager.dll'" & echo downloaded ScreenshotManager.dll
powershell -c "Invoke-WebRequest -Uri 'https://github.com/9E4ECDDE/MultiplayerDynamicBonesMod/releases/download/1043.2/MultiplayerDynamicBonesMod.dll' -OutFile 'mods/MultiplayerDynamicBonesMod.dll'" & echo downloaded MultiplayerDynamicBonesMod.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/112/DoubleTapRunner.dll' -OutFile 'mods/DoubleTapRunner.dll'" & echo downloaded DoubleTapRunner.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/102/BTKSAGestureMod.dll' -OutFile 'mods/BTKSAGestureMod.dll'" & echo downloaded BTKSAGestureMod.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/221/NoOutlines.dll' -OutFile 'mods/NoOutlines.dll'" & echo downloaded NoOutlines.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/218/PanicButtonRework.dll' -OutFile 'mods/PanicButtonRework.dll'" & echo downloaded PanicButtonRework.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/106/OGTrustRanks.dll' -OutFile 'mods/OGTrustRanks.dll'" & echo downloaded OGTrustRanks.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/42/DesktopCamera.dll' -OutFile 'mods/DesktopCamera.dll'" & echo downloaded DesktopCamera.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/148/CloningBeGone.dll' -OutFile 'mods/CloningBeGone.dll'" & echo downloaded CloningBeGone.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/65/RuntimeGraphicsSettings.dll' -OutFile 'mods/RuntimeGraphicsSettings.dll'" & echo downloaded RuntimeGraphicsSettings.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/62/HWIDPatch.dll' -OutFile 'mods/HWIDPatch.dll'" & echo downloaded HWIDPatch.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/119/BTKSASelfPortrait.dll' -OutFile 'mods/BTKSASelfPortrait.dll'" & echo downloaded BTKSASelfPortrait.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/133/FinalIKSanity.dll' -OutFile 'mods/FinalIKSanity.dll'" & echo downloaded FinalIKSanity.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/56/MirrorResolutionUnlimiter.dll' -OutFile 'mods/MirrorResolutionUnlimiter.dll'" & echo downloaded MirrorResolutionUnlimiter.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/210/SettingsRestart.dll' -OutFile 'mods/SettingsRestart.dll'" & echo downloaded SettingsRestart.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/114/PostProcessing.dll' -OutFile 'mods/PostProcessing.dll'" & echo downloaded PostProcessing.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/77/UniversalGamePriorityMod.dll' -OutFile 'mods/UniversalGamePriorityMod.dll'" & echo downloaded UniversalGamePriorityMod.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/211/TeleportCameraToYou.dll' -OutFile 'mods/TeleportCameraToYou.dll'" & echo downloaded TeleportCameraToYou.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/272/VRCQR.dll' -OutFile 'mods/VRCQR.dll'" & echo downloaded VRCQR.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/278/LocalHeadLightMod.dll' -OutFile 'mods/LocalHeadLightMod.dll'" & echo downloaded LocalHeadLightMod.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/281/CameraFlashMod.dll' -OutFile 'mods/CameraFlashMod.dll'" & echo downloaded CameraFlashMod.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/231/VRChatUtilityKit.dll' -OutFile 'mods/VRChatUtilityKit.dll'" & echo downloaded VRChatUtilityKit.dll

:A
cls
echo.
echo Question?...
echo.
set /p menu="Do you want to restart your game? (Y/N): "
if %menu%==Y goto Yes
if %menu%==y goto Yes
if %menu%==N goto No
if %menu%==n goto No
cls
echo.
echo Mmm try again...
echo.
set /p pause="Press any key to continue!... "
goto A

:Yes
cls
taskkill /F /IM "vrchat.exe" /T
title stopping vrchat.exe
killall VRChat.exe
echo.
echo Okay, Starting game...
echo.
set /p menu="Do want to start your game in vr mode? (Y/N): "
if %menu%==Y goto Yess
if %menu%==y goto Yess
if %menu%==N goto Nos
if %menu%==n goto Nos
:No
cls
echo.
echo Okay, let's exit...
echo.
start /b "" cmd /c del "%~f0"&exit /b
:Yess
taskkill /F /IM "vrchat.exe" /T
title stopping vrchat.exe
killall VRChat.exe
echo.
echo Okay, Starting game...
echo.
start vrchat://launch
start /b "" cmd /c del "%~f0"&exit /b
:Nos
taskkill /F /IM "vrchat.exe" /T
title stopping vrchat.exe
killall VRChat.exe
echo.
echo Okay, Starting game...
echo.

start vrchat://launch --no-vr
start /b "" cmd /c del "%~f0"&exit /b
