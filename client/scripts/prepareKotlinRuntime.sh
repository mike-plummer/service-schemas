#!/bin/bash

# Note for Windows users - I'm sorry, but there is no BATCH or POWERSHELL version
# of this script so you'll have to do this manually or re-script.

# Intent of this script is to download the 'kotlin-js-library JAR from a public repo,
# expand, and extract the 'kotlin.js' runtime library for inclusion in our webpage.
# Most of the logic in this script just tries to avoid re-downloading/reextracting if
# the artifacts already exist.

KOTLIN_VERSION=1.1-M04
JAR_FILE=lib/kotlin-js.jar
DESTINATION=lib/kotlin-js
KOTLIN_DOWNLOAD_URL="http://dl.bintray.com/kotlin/kotlin-eap-1.1/org/jetbrains/kotlin/kotlin-js-library/${KOTLIN_VERSION}/kotlin-js-library-1.1-M04.jar"

echo "Executing from `pwd`"

if [ ! -d "$DESTINATION" ]
  then
    if [ ! -f "$JAR_FILE" ]
      then
        mkdir "lib"
        echo "Downloading Kotlin runtime from '${KOTLIN_DOWNLOAD_URL}'"
        wget ${KOTLIN_DOWNLOAD_URL} -O "$JAR_FILE"
        echo "Download complete."
      else
        echo "Kotlin runtime already downloaded"
    fi

    echo "Extracting..."
    unzip "$JAR_FILE" -d "$DESTINATION"
    echo "Kotlin runtime extracted"
  else
    echo "Kotlin runtime already extracted"
fi