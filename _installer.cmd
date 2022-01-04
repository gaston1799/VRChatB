
    @echo off
    title Searching for game files
    :startp
    set gamePath=c:\
    set gameFound=0
    set %_pose%=0
    FOR %%G IN (c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z) DO (
        echo checking %%G: drive
        if EXIST %%G: if not gameFound==1 (
            cd /d "%%G:\"
            FOR /F "tokens=* USEBACKQ" %%F IN (`dir VRChat /s /b /A:D /A:-H /A:-A /A:-S`) DO (
                cls
                echo file:%%F
                echo ...
                IF %_pose%==3 (
                    set %_pose%=0
                    echo [\]
                )
                IF %_pose%==2 (
                    set %_pose%=3
                    
                    echo [/]
                )
                IF %_pose%==1 (
                    set %_pose%=2
                    
                    echo [|]
                )
                IF %_pose%==0 (
                    set %_pose%=1
                    
                    echo [-]
                )
                SET str=%%F
                echo test entry:%%F
                echo %%F|find "steamapps" >nul
                echo %%F|find "VRChat" >nul
                echo %%F|find "common" >nul
                if not errorlevel 1 (
                    @echo on
                    set gameFound=1
                    set gamePath="%%F"
                    echo found game
                    @echo off
                    goto foundG
                ) ELSE (
                    echo Path is not dir
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
    