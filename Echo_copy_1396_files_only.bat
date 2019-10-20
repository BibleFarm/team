@echo off
set src_folder=C:\Users\admin20190524\Documents\GitHub\team\YourNameHere
set dst_folder=C:\Users\admin20190524\Documents\GitHub\team\Adrian-EN
for /f "tokens=*" %%i in (Echo_copy_1396_files_only.txt) DO (
xcopy /S/E "%src_folder%\%%i" "%dst_folder%"
)
pause