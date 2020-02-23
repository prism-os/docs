---
id: setup-prism-cli
title: Setup Prism CLI
---

## Get the Prism SDK

1. Download the latest release of Prism CLI from the Github page of the project (https://github.com/prism-os/os/releases) for your system.

2. Make sure you have `git`, `make`, `zip` installed in your system, these should be pre-installed in most systems.

3. Extract the file in the desired location, for example:
```bash
 cd ~/development
 unzip ~/Downloads/prismtool-macos-amd64.zip -d prism
```

4. Add the `prismtool` binary to your path:
```bash
export PATH="$PATH:`pwd`/prism/bin"
```
This command sets your PATH variable for the current terminal window only. To permanently add Prism to your path, see [Update your path](setup-prism-cli.md#update-your-path).

## Update your path

You can update your PATH variable for the current session at the command line, as shown in [Get the Prism SDK](setup-prism-cli.md#get-the-prism-sdk) section. You’ll probably want to update this variable permanently, so you can run `prismtool` commands in any terminal session.

The steps for modifying this variable permanently for all terminal sessions are machine-specific. Typically you add a line to a file that is executed whenever you open a new window. The steps below will cover the most common cases:

1. Determine the directory where you placed the Prism SDK. You need this in Step 3.
2. Open (or create) the rc file for your shell. For example,  
Linux uses the Bash shell by default, so edit `$HOME/.bashrc`.  
MacOS Mojave (and earlier) uses the Bash shell by default, so edit `$HOME/.bashrc`.  
MacOS Catalina uses the Z shell by default, so edit `$HOME/.zshrc`.  
If you are using a different shell, the file path and filename will be different on your machine.
3. Add the following line and change `PATH_TO_PRISM_SDK_DIRECTORY` to be the path where you placed Prism SDK:
```bash
export PATH="$PATH:[PATH_TO_PRISM_SDK_DIRECTORY]/prism/bin"
```
4. Run `source $HOME/.<rc file>` to refresh the current window, or open a new terminal window to automatically source the file.
5. Verify that the `prism/bin` directory is now in your PATH by running:
```bash
echo $PATH
```
Verify that the `prismtool` command is available by running:
```bash
which prismtool
```
