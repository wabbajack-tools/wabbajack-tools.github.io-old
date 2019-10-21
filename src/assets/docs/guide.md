## Reminders
* Wabbajack Modlists require a Nexus Premium membership.
* Under no circumstances may you distribute files that have been hidden on the Nexus website or you do not have permission to reupload.
* DO NOT CONTACT GUIDE AUTHORS FOR SUPPORT.
* DO NOT CONTACT MOD AUTHORS FOR SUPPORT OR OLD VERSIONS OF THEIR MODS.

## Installing a ModList
Please check the specific installation instructions for the Modlist you are installing as there may be additional install steps to be completed. A video tutorial for the base installation steps can be found below.

1. Start with a clean installation of your chosen game. This means installed in a Steam library outside of "C:\Program Files". See [this support article](https://support.steampowered.com/kb_article.php?ref=7418-YUBN-8129) for details on how to do this.
* Set any pre-existing installation of MO2 to 'Portable' mode.
2. Create an install folder and a downloads folder for your new Modlist. These should be low level folders i.e. "C:\ModListName" and "C:\ModlistName Download" and not be inside any Windows controlled folder i.e. Documents, Desktop etc.
3. Download Wabbajack from the Wabbajack Discord/Github/website.
4. Run Wabbajack and select “Install a Modlist”
5. In the file explorer that opens, browse to the .modlist file you downloaded and open it.
6. In the lower left quarter of the window, set the “MO2 Profile” field to your chosen installation folder (it will default to where Wabbajack is located) and the “Download Location” field to your new downloads folder. This will default to “downloadlocation”/MO2/downloads.
7. Click Begin to start installation. After a moment your web browser will open and you will be prompted for SSO authorization on the Nexus. Once confirmed, the files will begin downloading before being installed.
8. After installation has completed, copy the contents of the "Game Folder Files" to your game root directory i.e. "\SteamLibrary\steamapps\common\Skyrim"
9. After installation has completed, run Mod Organizer 2.exe, if prompted select Portable and your game type.
10. Follow any remaining steps as utlined in the instructions for your chosen modlist.

Further support can be found in the [Wabbajack Discord](https://discord.gg/zgbrkmA).

## Creating a Modlist
If you love your load order and have resolved all the conflicts, WJ will let you share it. Wabbajack will not magically fix the load order or conflicts for you.

There is a tutorial covering the basics: https://www.youtube.com/watch?v=5Fwr0Chtcuc

More information can be found at the [Wabbajack Github](https://github.com/wabbajack-tools/wabbajack).

1. Download a fresh copy of Mod Organizer 2 from the Nexus. MAKE SURE YOU CHOOSE THE (Archive) VERSION.
2. Make a folder on the root of the same drive that you play your WJ supported game on (Skyrim, Fallout, Oblivion, etc). It is recommended to keep the folder name relatively short i.e. "C:/Mod Organizer 2/"
3. Extract the contents of the "Mod Organizer 2 (Archive)-6194-2-2-1-1564685345.7z" file you downloaded in step 1 to that folder. The exact file name may change when updates occur.
4. Launch Mod Organizer 2, make sure you choose "Portable" mode, then set whatever options you want to have carried over to your WJ installer. It is recommended to maintain a separate profile specifically for your finalized Modlist setup.
5. If you already have a folder full of downloaded mods from previous MO2 setups, goto the MO2 settings and change the “Path” for downloads to look there. Don't forget to also put your MO2 .7z archive there too and to query it in the downloads list. You may have to close and reopen MO2 to get any manually added files you place in your downloads folder to show up for you to query them to get a Nexus “meta” file.
6. Set up your Modlist. Wabbajack will recreate an almost exact copy of how you have it set when your installer is run by a user, including profile specific ini settings, save files, and any utilities you place in the /tools/ folder. For any added tools the original archives ALSO have to be in your chosen Downloads folder, with proper “meta” files. Do not include anything that would violate the Wabbajack usage guidelines or terms of service.
7. Close MO2, Create another folder NOT in the MO2 directory you set up (Something like "C:/Wabbajack/") download and extract the Wabbajack EXE from github there.
8. Launch the Wabbajack EXE, select “Create new Modlist” and point it at your newly set up MO2 profile folder i.e. "C:/Mod Organizer 2/profiles/My Mod List/" and then point it at your downloads folder if it doesn't automatically pick the correct one from parsing your profile. Click "Begin", then wait. It will hash your Modlist and all the vanilla skyrim files.
9. If you've correctly queried all your Nexus mods in MO2 and have manually created .meta files for everything else it will validate those links and build all the needed patches, then create your completed Modlist file. Reference on how to craft the “meta” files is [available here](https://github.com/wabbajack-tools/wabbajack/blob/master/RECIPES.md)
10. You're done.

Further support can be found in the [Wabbajack Discord](https://discord.gg/zgbrkmA).
