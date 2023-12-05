#!/usr/bin/env bash

# Function to install dependencies based on lock file existence
install_dependencies() {
  if [ -f "yarn.lock" ]; then
    # Check if Yarn is installed
    if ! command -v yarn &>/dev/null; then
        echo "Yarn is not installed. Installing Yarn..."
        npm install -g yarn
    fi
    echo "yarn.lock found. Running yarn install..."
    yarn install
  else
    echo "yarn.lock not found. Running npm install..."
    npm install
  fi
}

echo "Waiting for 5 seconds before starting..."
sleep 5

# Attempt to install dependencies after ensuring Yarn is available
install_dependencies