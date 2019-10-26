# Installing a Modlist

Wabbajack is in constant development and changes very frequently. It is entirely possible that by the time you read this line, another update is published. To stay up-to-date check our [Discord](https://discord.gg/zgbrkmA).

Every Modlist has unique steps required for a working installation. You should always follow the guide that comes with the Modlist.

1. Steam Setup:
   * The game must be located outside `C:\Program Files`. See [this](https://support.steampowered.com/kb_article.php?ref=7418-YUBN-8129) Steam Support article on moving the game.
   * Use a clean installation of your chosen game
2. Create an install folder and a downloads folder for the Modlist. Those folders must not be inside special folders like `Documents`, `Downloads`, `Desktop`, etc. The best location is in the root directory like `C:\Wabbajack` and `C:\Wabbajack\downloads`.
3. Download the specified Wabbajack version in the guide of the Modlist you are installing. This is often the [latest](https://github.com/wabbajack-tools/wabbajack/releases) GitHub release.
4. Place `Wabbajack.exe` and the downloaded Modlist inside the folder installation folder created in step 2.
5. Run `Wabbajack.exe` and select `Install a Modlist`. Select the downloaded Modlist and open it.
6. You can now change the installation and download folder if you do not like the default location. Do note that those can not be modified after starting the installation.
7. Click `Begin` to start the installation. Your standard browser will open and prompt for SSO authorization on the Nexus. The mods will start downloading after confirmation.
8. Downloading and installing all mods can take anything from 10 minutes to multiple hours depending on the amount mods and CPU threads available. It's best to just let Wabbajack run, get a coffee, watch some YouTube and wait.
9. After Wabbajack is done:
   * Check to log and confirm that Wabbajack run successful.
   * Copy the contents of the `Game Folder Files` to your game root directory.
   * Run `Mod Organizer 2.exe` and select **PORTABLE** when prompted.
   * Follow the remaining steps of the selected Modlist.
