# IGR-Token

Source code and documentation of IGR-Token App 

## Get startting

* **To run**
```bash
react-native run-android
```

* **To capture log messages**
```bash
adb logcat ReactNativeJS:d *:S
```

* **To run a debug application**
```bash
cd android && ./gradlew installDebug
```

* **To build a release**

Update **versionCode** and **versionName** in **android/app/build.gradle**

Update **MYAPP_RELEASE_STORE_PASSWORD** and **MYAPP_RELEASE_KEY_PASSWORD** in android/gradle.properties

```bash
cd android && ./gradlew assembleRelease
```

## links úteis

https://ethereum.stackexchange.com/questions/20897/how-to-decode-input-data-from-tx-using-python3

https://github.com/ethereumjs/ethereumjs-abi

https://stackoverflow.com/questions/48004356/get-token-transfer-detail-from-transaction-hash-with-web3js

https://ethereum.stackexchange.com/questions/27481/decoding-contract-output-of-web3-eth-call

https://www.rapidtables.com/convert/number/hex-to-ascii.html

https://www.npmjs.com/package/hex2ascii 