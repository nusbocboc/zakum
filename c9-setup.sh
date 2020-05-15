#!/bin/bash
# Steps to install latest SAM CLI

echo
echo "******************************"
echo "******Install Homebrew********"
echo "******************************"
# Install Homebrew
sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh) </dev/null" 

# Add Homebrew to the PATH
test -d ~/.linuxbrew && eval $(~/.linuxbrew/bin/brew shellenv)
test -d /home/linuxbrew/.linuxbrew && eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)
test -r ~/.bash_profile && echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.bash_profile
echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.profile

echo
echo "******************************"
echo "Uninstall older version of SAM"
echo "******************************"
# Uninstall the older version of SAM Local 
npm uninstall -g aws-sam-local

# Uninstall the older version of SAM CLI 
sudo pip uninstall -y aws-sam-cli

# Remove SAM symlink 
rm -rf $(which sam)

echo
echo "******************************"
echo "Install latest version of SAM "
echo "******************************"
# Install Latest SAM using Homebrew

# Add brew tap
brew tap aws/tap

# Install aws-sam-cli from brew tap
brew install aws-sam-cli

# Verify that SAM is installed
/home/linuxbrew/.linuxbrew/bin/sam

# Check installed SAM version
sam --version

# Symlink sam to path where Cloud9 looks for SAM
ln -sf $(which sam) ~/.c9/bin/sam 

# To make sure Cloud9 SAM is linked to the right SAM CLI version
ls -la ~/.c9/bin/sam

# When there is a new version of AWS SAM CLI, 
# you can run brew upgrade to upgrade to newer version of AWS SAM CLI.
# $ brew upgrade aws-sam-cli

echo
echo "******************************"
sam --version
echo "******************************"