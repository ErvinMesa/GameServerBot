cd ../../../"Steam Library"/steamapps/common/"Valheim dedicated server"
@echo off
set SteamAppId=892970
echo "Starting server PRESS CTRL-C to exit"
valheim_server -nographics -batchmode -name "Ethot Revival" -port 2456 -world "JuiceWRLD" -password "ethot"