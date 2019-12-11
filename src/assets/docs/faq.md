# FAQ - Installing a Modlist

#### Q) I’m a mod author who doesn’t want to support Wabbajack users/am concerned that Wabbajack will break my mod and I will be blamed for it

While Wabbajack can perform a large variety of operations on mod files, we recognize that some authors don't want to deal with the support requests that come from some users performing operations on these files. Therefore we worked together with several authors to create a permissions system Wabbajack will follow during installation and creation of a modlist. This permissions file can be found on Github. Feel free to contact us via discord about any questions you may have.

#### Q) Why can't I see any channels in Discord?

Go to the #welcome channel and verify with the :white_check_mark: reaction that you have read and understood the server rules then select your preferred games from the icons shown.

#### Q) Does Wabbajack make my existing installed mods work/exceed 255 mods?

No, the existing tools (xEdit, zMerge) are used to do this and have been used to create the existing Modlists that Wabbajack can download and install for you.

#### Q) If I close the installer, do I have to start again?

Wabbajack will resume from the last completed download. Wabbajack will have to restart the installation process from the beginning, however will not need to redownload files.

#### Q) Why am I getting a message about missing master file `HighResTexturePack01.esp`?

You need to install the official High Res Texture DLC from the Steam store. Your chosen Modlist installer will overwrite the DLC where appropriate.

#### Q) Can I install X mod not included in a Modlist?

We don't offer support for this. It might break things, it might not, it depends if it conflicts with the modlist you're using. Obviously if you know how to properly do conflict resolution in xEdit/CK you can do it though.

#### Q) The installer hangs/stalls on a specific download/extraction every time I run it and the mod in question has not updated

Wabbajack may encounter issues installing to protected folders e.g. `C:\Program Files`. You need to move your steam install outside of these folders. Something like `X:\Steam`; using a short file path is ideal.

#### Q) I get a message `Cannot continue, was unable to download`

Check your available storage space. Select 'Begin' again. Also try changing your MO2 download server. If the error persists, it is likely the mod has been updated and the installer will need to be updated accordingly. Post details in the relevant Modlist channel so the creator(s) can address the issue when they have time. Do not ask for old versions of mods

#### Q) Can I manually download the missing mod from the last question?

WJ expects a specific archive, the new version of a mod may not have the same hash, therefore requiring the installer to be updated.

#### Q) Can someone give me file xyz that is missing?

No. If a mod has been updated and the old file used by your chosen installer is unavailable, it will not be linked or distributed here without prior consent of the mod author. As above, post in the relevant channel so the Modlist can be updated. **As mentioned in server rules, DO NOT ASK THE MOD AUTHOR TO UPLOAD THE OLD VERSION.**

#### Q) What does `The request was aborted: Could not create SSL/TLS secure channel` mean?

You need to enable TLS 1.2 for your OS, see [this support article for more](https://support.microsoft.com/en-us/help/3140245/update-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-wi).  

#### Q) I used to use a dedicated .exe for installing a mod list, why is this now different?

Mod lists themselves are no longer executable code. While distributing exe files was more convenient, it did pose a slight security risk. By switching to a single executable for creation and installation of mod lists we not only provide more peace-of-mind for our users, but also offer certain content control options to mod authors.

#### Q) How do I update my installed modlist?

Wabbajack does not support differential or delta patching at the moment so if you wish to update you need to complete the process manually or delete the contents of your MO2 installation folder and re-run Wabbajack with the updated Modlist file. You can re-use the Downloads folder to ensure Wabbajack only downloads the updated files it needs. If you have an already working installation it is not necessary to update unless you want to.

#### Q) What happened to Prometheus and Yashed/A Modlist based on Yashed? Where have they gone?

> "I've talked with another mod author (of Better Quest Objectives SE) and we had a good chat....I don't really want to continue fighting over YASHed/Prometheus while there's other lists out there who are willing (or just non-hostile) to Wabbajack, like Phoenix/Lexy's. So I'm pulling the YASHed and Prometheus lists. Perhaps I tried to force this issue a bit harder than I should. At any rate, that's where it stands. Let's build something good, and keep the channels here positive." - Halgari

#### Q) I downloaded the installer for Yashed/Prometheus/ before they were taken down but now I have X problem, please help

Due to the circumstances surrounding these installers being taken down we will no longer provide support for them. If you're looking for a new installer that is supported try Lexy's-Guide.

#### Q) Do you have an Ultimate Skyrim Installer?

> “We did at one point, but I lack the time to keep it up to date. If someone wants to pick up that job they can ask me or one of the staff and we can look at adding it again.” - Halgari

## FAQ - Creating a Modlist

#### Q) I want to build a Modlist based on an existing mod guide

It would be a good idea to get approval from the mod guide authors before doing this.

#### Q) I am using a mod that is not hosted on the Nexus, how do I include this in the modlist?

Non-Nexus host mods are controlled by a white-list to prevent piracy. Servers in the list are URL prefixes, which are viewable [here](https://github.com/wabbajack-tools/opt-out-lists/blob/master/ServerWhitelist.yml).

If the mod is on the white-list you must create the “meta” file which is accompanies mods from the Nexus, examples so how to do this are listed [here](https://github.com/wabbajack-tools/wabbajack/blob/master/RECIPES.md)

#### Q) I am unable to get the modlist to build/modify files from 3rd party sites

Wabbajack utilises a maintained white-list for mods on 3rd party sites in order to ensure that it does not become a tool for easy mod piracy. Mods that are officially hosted on 3rd party sites will be eligible to be downloaded by being added to the white-list. Due to this, the Wabbajack developer/moderation team controls the white-list. Wabbajack will never create a Modlist that downloads opt-out files from a 3rd party site.

If someone needs a server added they can either contact a member of the WJ moderator/development team, or submit a Github [Pull Request for that file](https://help.github.com/en/articles/creating-a-pull-request).
Any additions to the white-list that are against the wishes of the author or are illegally distributing mods will be removed. Such actions will result in access to the white-list being revoked.

#### Q) I want to build a Modlist for Tale of Two Wastlelands, how does Wabbajack handle this?

> "As a notice about TTW support: I'm all for modlists that build off of TTW, but please run any alpha/beta installers by me first. I talked with the author of TTW and their patcher works a lot like Wabbajack, in that it patches Bethesda files and makes tweaks to files that neither the Nexus, nor any modder owns. Wabbajack should see these files and refuse to touch them, but I want to make sure that's the case.
>
> So I think the process for TTW is :
>
> 1. User installs FO3 and FNV
> 2. User manually installs TTW
> 3. User runs Wabbajack installer which treats the TTW install as a full Bethesda game"
>
> -Halgari
